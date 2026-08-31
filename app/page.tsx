export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="メインナビゲーション">
          <a className="brand" href="#top" aria-label="YOHAKU ホーム">YOHAKU</a>
          <div className="nav-links">
            <a href="#stay">滞在について</a>
            <a href="#access">アクセス</a>
          </div>
          <a className="nav-cta" href="#reserve">空室をみる</a>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">PRIVATE FOREST STAY · NAGANO</p>
          <h1>何もしない、を<br />しに行こう。</h1>
          <p className="lead">
            1日3組だけの森の宿。音をほどき、時間を忘れ、<br className="desktop-break" />
            自分のリズムを取り戻す二日間。
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#reserve">
              滞在を予約する <span aria-hidden="true">↗</span>
            </a>
            <span className="availability">9月の週末、残り2室</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="sun" />
          <div className="mountain mountain-back" />
          <div className="mountain mountain-front" />
          <div className="cabin"><span className="cabin-window" /></div>
          <div className="mist mist-one" />
          <div className="mist mist-two" />
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>36.2° N</span><span>138.1° E</span>
        </div>
      </section>

      <section className="signal-bar" aria-label="YOHAKUの特徴">
        <p><span>01</span> 東京から120分</p>
        <p><span>02</span> 1日3組限定</p>
        <p><span>03</span> 食事とサウナ込み</p>
        <p><span>04</span> 標高1,280m</p>
      </section>

      <section className="manifesto section-pad" id="stay">
        <p className="section-label">THE IDEA</p>
        <div className="manifesto-grid">
          <h2>余白は、<br />いちばん贅沢な<br />予定です。</h2>
          <div className="manifesto-copy">
            <p>
              通知も、時計も、街のざわめきも。森の入口でいったん預けてください。
              YOHAKUにあるのは、湧き水の風呂、薪の香り、旬をいただく小さな食卓だけ。
            </p>
            <p>
              予定を埋めないための宿だから、過ごし方は決めていません。
              眠くなったら眠る。歩きたくなったら歩く。それだけで十分です。
            </p>
            <a className="text-link" href="#rhythm">過ごし方を見る <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="forest-window" aria-hidden="true">
          <div className="forest-sky" />
          <div className="forest-sun" />
          <div className="tree tree-a" /><div className="tree tree-b" />
          <div className="tree tree-c" /><div className="tree tree-d" />
          <p>Listen to<br />the quiet.</p>
        </div>
      </section>

      <section className="rhythm section-pad" id="rhythm">
        <div className="section-head">
          <div>
            <p className="section-label light">YOUR RHYTHM</p>
            <h2>森に、まかせる。</h2>
          </div>
          <p>決まっているのは、夕食の時間だけ。<br />あとは今日の自分に聞いてみる。</p>
        </div>

        <div className="rhythm-cards">
          <article className="rhythm-card card-morning">
            <span className="card-number">01</span>
            <div className="card-orbit" aria-hidden="true"><span /></div>
            <div className="card-copy">
              <p>06:42</p><h3>朝霧のなかを歩く</h3>
              <span>案内のない、1.8kmの森の道。</span>
            </div>
          </article>
          <article className="rhythm-card card-noon">
            <span className="card-number">02</span>
            <div className="card-heat" aria-hidden="true"><i /><i /><i /></div>
            <div className="card-copy">
              <p>15:20</p><h3>薪サウナで深呼吸</h3>
              <span>森の水風呂と、静かな外気浴。</span>
            </div>
          </article>
          <article className="rhythm-card card-night">
            <span className="card-number">03</span>
            <div className="card-moon" aria-hidden="true" />
            <div className="card-copy">
              <p>22:08</p><h3>星を見ながら眠る</h3>
              <span>照明を落とすと、天窓が夜になる。</span>
            </div>
          </article>
        </div>
      </section>

      <section className="room section-pad">
        <div className="room-visual" aria-hidden="true">
          <div className="room-wall" />
          <div className="room-window"><span className="outside-sun" /><i /><i /></div>
          <div className="room-bed"><span /></div>
          <div className="room-lamp" />
          <p>ROOM 01<br />KASUMI</p>
        </div>
        <div className="room-copy">
          <p className="section-label">THE CABIN</p>
          <h2>眠るためだけの、<br />小さな別荘。</h2>
          <p>
            45㎡の一棟貸し。大きな窓、深い浴槽、音の出ない冷蔵庫。
            木と麻と土、触れて気持ちいい素材だけでつくりました。
          </p>
          <dl className="room-facts">
            <div><dt>定員</dt><dd>2名</dd></div>
            <div><dt>広さ</dt><dd>45㎡</dd></div>
            <div><dt>食事</dt><dd>夕朝食</dd></div>
            <div><dt>料金</dt><dd>¥38,000〜 / 人</dd></div>
          </dl>
          <a className="outline-button" href="#reserve">部屋と料金を見る <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="voice section-pad">
        <p className="quote-mark" aria-hidden="true">“</p>
        <blockquote>
          帰りの車で、久しぶりに<br />「また明日が楽しみ」と思えた。
        </blockquote>
        <div className="voice-meta">
          <span>GUEST NOTE 028</span>
          <span>東京 · 34歳</span>
        </div>
      </section>

      <section className="access section-pad" id="access">
        <div className="access-copy">
          <p className="section-label">FIND US</p>
          <h2>遠すぎない、<br />ちゃんと森の中。</h2>
          <p>
            長野県南佐久郡、八ヶ岳の東麓。東京駅から新幹線と送迎で約2時間。
            佐久平駅までお迎えにあがります。
          </p>
          <div className="access-route">
            <span>東京</span><i /><span>佐久平</span><i /><span>YOHAKU</span>
          </div>
        </div>
        <div className="map-art" aria-label="東京からYOHAKUまでの概略地図">
          <div className="map-line" /><span className="map-dot dot-tokyo" /><span className="map-dot dot-yohaku" />
          <p className="map-tokyo">TOKYO</p><p className="map-yohaku">YOHAKU<br /><small>36.2° N / 138.1° E</small></p>
        </div>
      </section>

      <section className="reserve section-pad" id="reserve">
        <p className="section-label light">RESERVATION</p>
        <div className="reserve-grid">
          <h2>次の週末、<br />余白にしよう。</h2>
          <div className="reserve-action">
            <p>空室カレンダーは毎週月曜、朝8時に更新します。</p>
            <a className="button-light" href="mailto:stay@yohaku.example?subject=YOHAKU%E5%AE%BF%E6%B3%8A%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87">
              空室を確認する <span aria-hidden="true">↗</span>
            </a>
            <small>9月の週末：残り2室　/　10月：予約受付中</small>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">YOHAKU</a>
        <p>PRIVATE FOREST STAY · NAGANO</p>
        <div><a href="#stay">滞在について</a><a href="#access">アクセス</a><a href="mailto:stay@yohaku.example">お問い合わせ</a></div>
        <small>© 2026 YOHAKU — SAMPLE LANDING PAGE</small>
      </footer>
    </main>
  );
}
