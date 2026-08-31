import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://yohaku-forest-stay.dora-ai-main.chatgpt.site/", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete YOHAKU landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ja"/i);
  assert.match(html, /<title>YOHAKU \| 1日3組だけの森の宿<\/title>/i);
  assert.match(html, /何もしない、を/);
  assert.match(html, /余白は、/);
  assert.match(html, /森に、まかせる。/);
  assert.match(html, /次の週末、/);
  assert.match(html, /id="reserve"/);
  assert.match(html, /mailto:stay@yohaku\.example/);
});

test("includes finished social metadata and removes starter artifacts", async () => {
  const response = await render();
  const html = await response.text();
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  assert.match(html, /property="og:image"[^>]*content="https:\/\/yohaku-forest-stay\.dora-ai-main\.chatgpt\.site\/og\.png"/i);
  assert.match(html, /name="twitter:card"[^>]*content="summary_large_image"/i);
  assert.match(layout, /YOHAKU \| 何もしない、をしに行こう。/);
  assert.match(packageJson, /"name": "yohaku-forest-stay"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
});

test("ships a self-contained GitHub Pages entry point", async () => {
  const index = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(index, /<html lang="ja">/i);
  assert.match(index, /<link rel="stylesheet" href="\.\/app\/globals\.css">/i);
  assert.match(index, /https:\/\/adachitoon\.github\.io\/my-first-lp\//i);
  assert.match(index, /id="stay"/);
  assert.match(index, /id="access"/);
  assert.match(index, /id="reserve"/);
  assert.doesNotMatch(index, /className=|<\w+\s*\/>/);
  assert.doesNotMatch(css, /@import\s+["']tailwindcss["']/);
});
