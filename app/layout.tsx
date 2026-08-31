import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yohaku-forest-stay.dora-ai-main.chatgpt.site"),
  title: "YOHAKU | 1日3組だけの森の宿",
  description: "何もしない、をしに行こう。長野・八ヶ岳の森に佇む、1日3組限定のプライベートフォレストステイ。",
  openGraph: {
    title: "YOHAKU | 何もしない、をしに行こう。",
    description: "長野・八ヶ岳の森に佇む、1日3組限定のプライベートフォレストステイ。",
    type: "website",
    images: [
      {
        url: "https://yohaku-forest-stay.dora-ai-main.chatgpt.site/og.png",
        width: 1733,
        height: 907,
        alt: "YOHAKU — 何もしない、をしに行こう。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YOHAKU | 何もしない、をしに行こう。",
    description: "長野・八ヶ岳の森に佇む、1日3組限定のプライベートフォレストステイ。",
    images: ["https://yohaku-forest-stay.dora-ai-main.chatgpt.site/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
