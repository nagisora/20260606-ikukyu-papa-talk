import type { CSSProperties } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { ImagePlaceholder, useSlidePageNumber } from '@open-slide/core';

import illusBabyTimeline from './assets/illus-baby-timeline.svg';
import illusCheer from './assets/illus-cheer.svg';
import illusFamily from './assets/illus-family.svg';
import illusHeavenHell from './assets/illus-heaven-hell.svg';
import illusPapaWork from './assets/illus-papa-work.svg';
import illusRest from './assets/illus-rest.svg';
import illusSns from './assets/illus-sns.svg';
import doodleHeart from './assets/doodle-heart.svg';
import doodleStar from './assets/doodle-star.svg';
import qrNote from './assets/qr-note.png';

export const design: DesignSystem = {
  palette: {
    bg: '#f7f2ea',
    text: '#2c2419',
    accent: '#c97b63',
  },
  fonts: {
    display: '"Hiragino Maru Gothic ProN", "Hiragino Sans", "Yu Gothic UI", system-ui, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Segoe UI", sans-serif',
  },
  typeScale: { hero: 156, body: 38 },
  radius: 20,
};

const muted = '#7a6f62';
const surface = '#efe8dc';
const accentSoft = '#e8b4a2';

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative' as const,
};

const pad = 100;

const aboveDecor = { position: 'relative' as const, zIndex: 2 };

const Illu = ({
  src,
  width,
  style,
}: {
  src: string;
  width: number;
  style?: CSSProperties;
}) => (
  <img
    src={src}
    alt=""
    draggable={false}
    style={{ width, height: 'auto', display: 'block', userSelect: 'none', ...style }}
  />
);

const DoodleDecor = () => (
  <>
    <Illu
      src={doodleHeart}
      width={44}
      style={{ position: 'absolute', top: 100, right: 200, opacity: 0.85, transform: 'rotate(-12deg)', zIndex: 1 }}
    />
    <Illu
      src={doodleStar}
      width={40}
      style={{ position: 'absolute', top: 180, right: 120, opacity: 0.9, transform: 'rotate(8deg)', zIndex: 1 }}
    />
    <Illu
      src={doodleHeart}
      width={32}
      style={{ position: 'absolute', bottom: 140, left: 90, opacity: 0.7, transform: 'rotate(18deg)', zIndex: 1 }}
    />
    <Illu
      src={doodleStar}
      width={36}
      style={{ position: 'absolute', bottom: 200, left: 200, opacity: 0.75, transform: 'rotate(-6deg)', zIndex: 1 }}
    />
  </>
);

const PageFooter = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        right: pad,
        bottom: 56,
        fontSize: 24,
        color: muted,
        letterSpacing: '0.08em',
        zIndex: 3,
      }}
    >
      {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  );
};

const AlbumFrame = () => (
  <div
    style={{
      position: 'absolute',
      inset: 48,
      borderRadius: 'var(--osd-radius)',
      border: `2px solid ${accentSoft}`,
      pointerEvents: 'none',
      opacity: 0.45,
    }}
  />
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul
    style={{
      fontSize: 'var(--osd-size-body)',
      lineHeight: 1.55,
      margin: '48px 0 0',
      paddingLeft: 52,
    }}
  >
    {items.map((item) => (
      <li key={item} style={{ marginBottom: 28 }}>
        {item}
      </li>
    ))}
  </ul>
);

const ContentPage = ({
  eyebrow,
  title,
  items,
  illustration,
  illuWidth = 300,
}: {
  eyebrow?: string;
  title: string;
  items: string[];
  illustration?: string;
  illuWidth?: number;
}) => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)' }}>
    <AlbumFrame />
    <DoodleDecor />
    <div
      style={{
        padding: pad,
        height: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: illustration ? '1fr auto' : '1fr',
        gap: 32,
        alignItems: 'center',
        ...aboveDecor,
      }}
    >
      <div>
        {eyebrow ? (
          <div
            style={{
              fontSize: 26,
              color: 'var(--osd-accent)',
              letterSpacing: '0.12em',
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 80,
            fontWeight: 800,
            margin: eyebrow ? '20px 0 0' : 0,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
        <BulletList items={items} />
      </div>
      {illustration ? (
        <div
          style={{
            background: surface,
            borderRadius: 'var(--osd-radius)',
            padding: 28,
            border: `2px solid ${accentSoft}`,
            boxShadow: '0 12px 40px rgba(44, 36, 25, 0.06)',
          }}
        >
          <Illu src={illustration} width={illuWidth} />
        </div>
      ) : null}
    </div>
    <PageFooter />
  </div>
);

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'center',
      padding: `0 ${pad}px`,
      gap: 24,
    }}
  >
    <AlbumFrame />
    <DoodleDecor />
    <div style={aboveDecor}>
      <div
        style={{
          width: 120,
          height: 8,
          borderRadius: 4,
          background: 'var(--osd-accent)',
          opacity: 0.7,
          marginBottom: 28,
        }}
      />
      <h1
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: '140px', fontWeight: 800, margin: '28px 0 36px', lineHeight: 1.08 }}
      >
        育休を取得した
        <br />
        パパの話
      </h1>
      <p style={{ fontSize: 36, color: muted, margin: '0 0 36px', lineHeight: 1.5 }}>
        開始までしばらくお待ちください
      </p>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <ImagePlaceholder hint="本日の資料 QRコード" width={180} height={180} />
          <p style={{ fontSize: 28, color: muted, margin: 0, fontWeight: 600 }}>本日の資料</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <img
            src={qrNote}
            alt="子育てnote"
            draggable={false}
            style={{ width: 180, height: 180, display: 'block', borderRadius: 8 }}
          />
          <p style={{ fontSize: 28, color: muted, margin: 0, fontWeight: 600 }}>子育てnote</p>
        </div>
      </div>
    </div>
    <div
      style={{
        background: surface,
        borderRadius: 'var(--osd-radius)',
        padding: 36,
        border: `2px solid ${accentSoft}`,
        marginRight: 40,
        ...aboveDecor,
      }}
    >
      <Illu src={illusFamily} width={380} />
    </div>
    <PageFooter />
  </div>
);

const Opening: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)' }}>
    <AlbumFrame />
    <DoodleDecor />
    <div
      style={{
        padding: pad,
        height: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 40,
        alignItems: 'center',
        ...aboveDecor,
      }}
    >
      <div>
        <p
          style={{
            fontSize: 26,
            color: 'var(--osd-accent)',
            letterSpacing: '0.1em',
            margin: 0,
            fontWeight: 600,
          }}
        >
          まず伝えたいこと
        </p>
        <blockquote
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.25,
            margin: '32px 0 0',
            padding: 0,
            border: 'none',
          }}
        >
          子育ては、ものすごーく大変。
          <br />
          でも天国のように幸せ。
        </blockquote>
        <BulletList
          items={[
            '子どもがいるのは本当に幸せ。だから頑張るしかない',
            'ものすごく大変な日も、たくさんある',
            '辛いときは、たいてい「疲れ」か「睡眠不足」だけ',
            '休もう。使える支援は全部使って休もう',
          ]}
        />
      </div>
      <div
        style={{
          background: surface,
          borderRadius: 'var(--osd-radius)',
          padding: 32,
          border: `2px solid ${accentSoft}`,
        }}
      >
        <Illu src={illusHeavenHell} width={280} />
      </div>
    </div>
    <PageFooter />
  </div>
);

const SelfIntro: Page = () => (
  <ContentPage
    eyebrow="自己紹介"
    title="わが家のプロフィール"
    illustration={illusFamily}
    illuWidth={280}
    items={[
      '玉置純也（たまきじゅんや）— 40歳、アルバイト（アプリ開発）',
      '妻 29歳・フルタイム（福祉系）／ 娘 1歳1ヶ月（5月産まれ）',
      'パパ・ママの2人で、育休をそれぞれ1年取得',
      '詳しい資料は note に公開中 — 自由に見てください',
    ]}
  />
);

const ChildcareTimeline: Page = () => (
  <ContentPage
    eyebrow="具体的な子育て"
    title="時期ごとのリアル"
    illustration={illusBabyTimeline}
    illuWidth={290}
    items={[
      '通院・出産・入院 — 最初の山場',
      '生後1〜2ヶ月 — まだ手探り、体力も削られる',
      '3ヶ月ごろ — 大事件（ここが一番きつい）',
      'それ以降 — まあ安定。慣れとルーティンが効いてくる',
    ]}
  />
);

const PaternityReality: Page = () => (
  <ContentPage
    eyebrow="男性が育休を取ると"
    title="現実として直面すること"
    illustration={illusPapaWork}
    illuWidth={270}
    items={[
      '収入・キャリア — 減る・止まる不安は本物',
      '子どもの対応・家事 — できるようになるまで時間がかかる',
      'ママと険悪になる — 睡眠不足と役割のすれ違いで起きやすい',
      'キラキラだけの話ではない。対策を考える前提で話す',
    ]}
  />
);

const SnsReality: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)' }}>
    <AlbumFrame />
    <DoodleDecor />
    <div
      style={{
        padding: pad,
        height: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
        ...aboveDecor,
      }}
    >
      <div>
        <p style={{ fontSize: 26, color: 'var(--osd-accent)', letterSpacing: '0.1em', margin: 0 }}>
          SNSと現実
        </p>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 72,
            fontWeight: 800,
            margin: '20px 0 0',
            lineHeight: 1.15,
          }}
        >
          キラキラだけ
          <br />
          じゃない
        </h2>
        <p style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.55, marginTop: 40 }}>
          SNSでは幸せそうな子育てがよく見える。でも大変なことも、本当にたくさんある。
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'center' }}>
        <div
          style={{
            background: surface,
            borderRadius: 'var(--osd-radius)',
            padding: 24,
            border: `2px solid ${accentSoft}`,
          }}
        >
          <Illu src={illusSns} width={240} />
        </div>
        <div
          style={{
            background: surface,
            borderRadius: 'var(--osd-radius)',
            padding: 36,
            fontSize: 32,
            lineHeight: 1.55,
            color: muted,
            border: `1px solid ${accentSoft}`,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <p style={{ margin: 0, color: 'var(--osd-text)', fontWeight: 600, fontSize: 34 }}>
            見えない側
          </p>
          <ul style={{ margin: '24px 0 0', paddingLeft: 36 }}>
            <li>夜泣き・授乳・病院</li>
            <li>夫婦のすれ違い</li>
            <li>「ちゃんとできてる？」の不安</li>
            <li>誰にも言えない疲れ</li>
          </ul>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);

const RestAndSupport: Page = () => (
  <ContentPage
    eyebrow="対策"
    title="休むことがいちばんの対策"
    illustration={illusRest}
    illuWidth={280}
    items={[
      'イライラ・体が動かないときは、まず疲れと睡眠不足を疑う',
      'パートナーへの当たりも、休めばだいぶ和らぐ',
      '子育て拠点・エンジェルケア・一時預かり・保健センター',
      '使えるものは全部使う。休むことに罪悪感を持たない',
    ]}
  />
);

const Closing: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: pad,
    }}
  >
    <AlbumFrame />
    <DoodleDecor />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...aboveDecor,
      }}
    >
    <div
      style={{
        background: surface,
        borderRadius: 'var(--osd-radius)',
        padding: 28,
        border: `2px solid ${accentSoft}`,
        marginBottom: 28,
      }}
    >
      <Illu src={illusCheer} width={240} />
    </div>
    <p style={{ fontSize: 26, color: 'var(--osd-accent)', letterSpacing: '0.12em', margin: 0 }}>
      おわりに
    </p>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 800,
        margin: '24px 0 24px',
        lineHeight: 1.2,
      }}
    >
      大変だけど、
      <br />
      一緒に頑張りましょう
    </h2>
    <p style={{ fontSize: 36, color: muted, margin: 0, lineHeight: 1.55 }}>
      質問・感想・自分の話も、ぜひ聞かせてください
    </p>
    <p
      style={{
        marginTop: 40,
        fontSize: 30,
        color: muted,
        padding: '20px 40px',
        background: surface,
        borderRadius: 'var(--osd-radius)',
      }}
    >
      資料・詳細 → note
    </p>
    </div>
    <PageFooter />
  </div>
);

export const meta: SlideMeta = {
  title: '育休パパの体験談',
  createdAt: '2026-05-21T12:02:22.113Z',
};

export default [
  Cover,
  Opening,
  SelfIntro,
  ChildcareTimeline,
  PaternityReality,
  SnsReality,
  RestAndSupport,
  Closing,
] satisfies Page[];
