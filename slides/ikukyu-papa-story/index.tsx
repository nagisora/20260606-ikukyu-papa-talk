import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

import illusBabyTimeline from './assets/illus-baby-timeline.svg';
import illusCheer from './assets/illus-cheer.svg';
import illusFamily from './assets/illus-family.svg';
import illusHeavenHell from './assets/illus-heaven-hell.svg';
import illusPapaWork from './assets/illus-papa-work.svg';
import illusRest from './assets/illus-rest.svg';
import doodleHeart from './assets/doodle-heart.svg';
import doodleStar from './assets/doodle-star.svg';
import qrNote from './assets/qr-note.png';
import qrSlide from './assets/qr-slide.png';

export const notes: (string | undefined)[] = [
  '- 私が変なこと言っていたら、経験者の方はツッコミをお願いします！',
  `今日はこんな感じのことをお伝えできればと思っています。

- 幸せなこと：存在が可愛い、純粋な笑顔、成長に感動する、「子どもいらない」と言っていたパパも今ではデレデレ
- 大変なこと：夫婦で育休を取って、何事もなく上手くいったという話はほとんど聞いたことがない`,
  undefined,
  `何話したらパパさんたちが楽しいのかと考えて、子どもが産まれてからの出来事を話すのが面白そうと思いました。
プレパパさんはこれからの事を事前に知り、パパさんは「こうだったなあ」としみじみしていただければと思います

- 通院中は、順調か、障害はないか、などとても不安だった。検査は悩んだが、健康に産まれることを祈るのみだった
- 出産は立ち会った。予定日の3日前の夜11:00頃に嫁が「きたかも」と言い、内心「はいはい」と思いながら産院に行ったら「開き始めている」とのことで、行ってよかった
  - 無痛分娩、吸引、6時間くらいで朝7時頃に産まれた
  - 産まれた我が子は「エイリアンみたい。愛せるのか心配」と思ったが、数日後のシャンプー後の姿は可愛かった。身だしなみ大事
- パパも産後入院できる産院（吹上マタニティクリニック）だったので、産後3日目くらいからはパパママベビーで過ごした
  - ママは産院で1人だととても心細いので、なるべく行ってあげてください
- 生後1〜2ヶ月は、おむつ、抱っこ、授乳の繰り返し
  - ママが昼当番、パパが夜当番で、夜中じゅうベビーの相手をしていた
  - 夜中はママを寝かせたくてミルクにしたが、おっぱいが安定せず、民間のおっぱいマッサージに何度も通った
  - なごやMommy Careを最初から知っていればよかった。最初から使ったほうが良いと思う`,
  `- 3ヶ月くらいになるとベビーの世話に慣れて余裕が出るが、パートナーとの衝突が増えた
  - 二人とも疲れていて、「相手がやってくれているからいいや」と自分の娯楽をしていると、別の方がイライラして爆発する
  - 3日に1度くらいケンカをする時期があり、「これはやばい」と保健センターに相談し、3者面談をしてもらった
    - クイックルワイパーの新品で普段掃除しないような所を掃除して、「汚いからここもやって」と言われ「自分でやって」と返したら喧嘩
  - 子育て拠点に行くようになり、午前担当・午後担当で分けたら、2ヶ月に1度くらいのケンカになった
- パパが取る仕事は軽く口頭で話す
  - ベビーは何だかんだママに任せがち。掃除、洗濯、オムツ替え、抱っこ、食事作り、買い物、洗い物など、パパが先に取れるものを取る
- 他のパパの話を聞いても、子どもより嫁さんとの関係がやばい、険悪すぎて1ヶ月で復帰した、などは普通にあるので安心して`,
  `- イライラ・体が動かないときは、まず疲れと睡眠不足を疑う
- 子育て拠点、保健センター、エンジェルケア、一時預かり、なごやMommy Careなど、使えるものは全部使う
- 悩みが小さいうちに他者を頼る。後からだと体力もお金も削られる`,
  `- 会社により大小はあるが、育休は収入・昇進に影響があると思う
- 私の場合は昇給見送り。ただ、復帰後に重宝され、見送られた昇給分をアップしてもらえた
- 1〜6ヶ月くらいで育休を取得するのが良いと思う。1年はキャリアに響きやすい
- 育休に入る前に会社に貢献し、上司やチームメンバーに「待っているからね」と送り出してもらえるポジションを作ることが大切`,
];


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
      style={{ position: 'absolute', bottom: 92, left: 200, opacity: 0.75, transform: 'rotate(-6deg)', zIndex: 1 }}
    />
  </>
);

const QrRow = ({ style }: { style?: CSSProperties }) => (
  <div style={{ display: 'flex', gap: 550, alignItems: 'flex-start', ...style }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <img
        src={qrNote}
        alt="子育てnote"
        draggable={false}
        style={{ width: 180, height: 180, display: 'block', borderRadius: 8 }}
      />
      <p style={{ fontSize: 28, color: muted, margin: 0, fontWeight: 600 }}>
        子育て体験note
        <br />
        （なぎそら）
      </p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <img
        src={qrSlide}
        alt="本日の資料"
        draggable={false}
        style={{ width: 180, height: 180, display: 'block', borderRadius: 8 }}
      />
      <p style={{ fontSize: 28, color: muted, margin: 0, fontWeight: 600 }}>本日の資料</p>
    </div>
  </div>
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

const bulletListStyle: CSSProperties = {
  fontSize: 'var(--osd-size-body)',
  lineHeight: 1.55,
  margin: 0,
  paddingLeft: 52,
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
};

const BulletList = ({ children }: { children: ReactNode }) => (
  <ul style={{ ...bulletListStyle, margin: '48px 0 0' }}>{children}</ul>
);

const DividedBulletList = ({ top, bottom }: { top: ReactNode; bottom: ReactNode }) => (
  <div
    style={{
      margin: '48px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
    }}
  >
    <ul style={bulletListStyle}>{top}</ul>
    <div
      style={{
        background: surface,
        borderRadius: 'var(--osd-radius)',
        padding: '28px 32px',
        border: `2px solid ${accentSoft}`,
        boxShadow: '0 8px 28px rgba(44, 36, 25, 0.05)',
      }}
    >
      <ul style={{ ...bulletListStyle, paddingLeft: 40 }}>{bottom}</ul>
    </div>
  </div>
);

const ContentPage = ({
  eyebrow,
  title,
  list,
  listTop,
  listBottom,
  illustration,
  illuWidth = 300,
}: {
  eyebrow?: string;
  title: string;
  list?: ReactNode;
  listTop?: ReactNode;
  listBottom?: ReactNode;
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
        {listTop != null && listBottom != null ? (
          <DividedBulletList top={listTop} bottom={listBottom} />
        ) : (
          <BulletList>{list}</BulletList>
        )}
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 8 }}>
        <div style={{ alignSelf: 'stretch' }}>
          <p style={{ fontSize: 36, color: muted, margin: '0 0 16px', lineHeight: 1.5, textAlign: 'left' }}>
            開始までしばらくお待ちください
          </p>
          <p style={{ fontSize: 32, color: muted, margin: '0 0 36px', lineHeight: 1.55, textAlign: 'left' }}>
            良かったら私が書き溜めた「子育て体験note」などご覧ください
          </p>
        </div>
        <QrRow style={{ transform: 'translateX(-80px)' }} />
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
          これだけ伝えたいこと
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
          でも、天国みたいに幸せ。
        </blockquote>
        <BulletList>
          <li>子どもがいるのは本当に幸せ。だから頑張るしかない</li>
          <li>ものすごく大変な日も、たくさんある</li>
          <li>辛いときは、たいてい「疲れ」か「睡眠不足」だけ</li>
          <li>
            <span style={{ fontSize: 56, fontWeight: 800 }}>休もう</span>
            。使える支援は全部使って休もう
          </li>
        </BulletList>
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
    eyebrow="あなたは誰？"
    title="わが家のプロフィール"
    illustration={illusFamily}
    illuWidth={280}
    list={
      <>
        <li>ゆわちゃんパパ、たまきじゅんや、なぎそら。ずっと御器所</li>
        <li>
          40歳、アルバイト（プログラマー ）、幼稚園の事務員を2年
        </li>
        <li>妻 29歳・フルタイム（福祉系）／ 娘 1歳1ヶ月（5月産まれ）</li>
        <li>パパ・ママの2人で、育休をそれぞれ1年取得</li>
        <li>
          パパが子育て拠点に通いまくっていたので声をかけられ、
          <br />
          後輩パパのためになればとお話させて頂くことに
        </li>
      </>
    }
  />
);

const StoryThroughTwoMonths: Page = () => (
  <ContentPage
    eyebrow="うちの話・前半"
    title="通院から生後2ヶ月まで"
    illustration={illusBabyTimeline}
    illuWidth={290}
    listTop={
      <>
        <li>通院〜出産 — 健康に産まれるか不安、無痛分娩で8hで産まれた</li>
        <li>産後入院 — ママは1人で心細い、できるだけ一緒に</li>
        <li>生後1〜2ヶ月 — オムツ交換と抱っこの無限ループ、昼と夜で分担</li>
      </>
    }
    listBottom={
      <>
        <li>分からないことだらけで全て手探り、とくかく必死にやった</li>
        <li>おっぱいトラブル(T_T)、なごやMommy Careがいいかも！</li>
      </>
    }
  />
);

const CoupleAtThreeMonths: Page = () => (
  <ContentPage
    eyebrow="うちの話・後半"
    title="3ヶ月頃：夫婦間トラブルが頻発"
    illustration={illusFamily}
    illuWidth={260}
    listTop={
      <>
        <li>ベビーの世話に慣れてきて、パートナーの動きが気になる</li>
        <li>自分のペースが崩される、相手に任せっきりにする、などで衝突</li>
        <li>我が家は、3日に1度のペースで喧嘩していた／(^o^)＼</li>
        <li>これじゃヤバイと保健センターで相談。3者面談してもらう</li>
      </>
    }
    listBottom={
      <li>子育て拠点へ行って気分転換。ほぼ毎日通った<br />ママが午前、パパが午後と子育て担当を分けた</li>
    }
  />
);

const RestAndSupport: Page = () => (
  <ContentPage
    eyebrow="対策"
    title="休む。子育て拠点のススメ"
    illustration={illusRest}
    illuWidth={280}
    list={
      <>
        <li>
          イライラ・しんどさの正体は、だいたい
          <span style={{ fontWeight: 800 }}>疲れと睡眠不足</span>
        </li>
        <li>公的支援：子育て拠点、一時預かり、のびサポ、誰でも通園、<br />　保健センター、 なごやMommy Care、定住促進住宅</li>
        <li>オススメは「子育て拠点」。〜7ヶ月：恵方の家、8ヶ月〜：こころと</li>
        <li>休むことに罪悪感を持たない、悩みは小さいうちに早めに相談する</li>
      </>
    }
  />
);

const LeaveAndCareer: Page = () => (
  <ContentPage
    eyebrow="キャリアと育休"
    title="育休で人生の大切な時間を過ごす"
    illustration={illusPapaWork}
    illuWidth={270}
    list={
      <>
        <li>
          収入・昇進の不安はある。
          <span style={{ fontWeight: 800 }}>少しでもベビーと過ごして</span>
        </li>
        <li>1年はキャリアに響きやすい。オススメは1〜6ヶ月かな？</li>
        <li>キャリアも本当に大事。金銭面の安心は子育ての安心に繋がる</li>
        <li>育休前に職場に貢献し、「待ってるね」と好意的に送り出してもらえるように</li>
      </>
    }
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
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      padding: pad,
      paddingBottom: 100,
    }}
  >
    <AlbumFrame />
    <DoodleDecor />
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        大変だけど幸せすぎるので、<br />皆で頑張りましょう！
      </h2>
    </div>
    <div style={aboveDecor}>
      <QrRow style={{ justifyContent: 'center' }} />
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
  StoryThroughTwoMonths,
  CoupleAtThreeMonths,
  RestAndSupport,
  LeaveAndCareer,
  Closing,
] satisfies Page[];
