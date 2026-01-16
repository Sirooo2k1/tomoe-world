import React, { useState } from 'react'
import nishantaLectureImage from '../Images/img_nishanta_03-2048x1324.jpg'

const HumanRightsPost = ({ language = 'ja', onNavigate }) => {
  const [enlargedImage, setEnlargedImage] = useState(null)
  const t = (ja, en) => (language === 'en' ? en : ja)

  const postContent = {
    title: t('人権と平和の講演講師', 'Human Rights & Peace Lecturer'),
    subtitle: t('人権講演講師', 'Human Rights Lecturer'),
    date: '2024.11.22',
    category: t('🕊️ 人権・平和', '🕊️ Human Rights & Peace')
  }

  const mainTitle = t(
    '人権の進化とダイバーシティ＆インクルージョンの実現｜"共笑®︎"が築く持続可能な未来',
    'The Evolution of Human Rights and Realizing Diversity & Inclusion | A Sustainable Future Built by "共笑®︎"'
  )

  const sections = [
    {
      title: t('21世紀は「人権の世紀」', 'The 21st Century: "The Century of Human Rights"'),
      content: t(
        '21世紀は「人権の世紀」と呼ばれます。それは、人権が平和で持続可能な社会を築くための重要な柱であり、"共笑®︎"の理念を考える上でも欠かせない要素だからです。1948年の「世界人権宣言」の採択から70年以上が経過し、人権は進化し、新たな定義を求められる時代を迎えています。',
        'The 21st century is called "the century of human rights." This is because human rights are an important pillar for building a peaceful and sustainable society, and an essential element when considering the philosophy of "共笑®︎." More than 70 years have passed since the adoption of the "Universal Declaration of Human Rights" in 1948, and we are now in an era where human rights have evolved and are seeking new definitions.'
      ),
      icon: '🕊️'
    },
    {
      title: t('実践的な人権の視点', 'A Practical Perspective on Human Rights'),
      content: t(
        '私の講演では、「人権」というテーマを、日常や地域、職場で実践可能な形に落とし込みながらお話します。人権は「他者のため」だけではなく、「自分自身のため」にもあるという視点を通じて、誰もがその価値を実感できる内容をお届けします。',
        'In my lectures, I discuss the theme of "human rights" in a way that can be practically applied in daily life, local communities, and workplaces. Through the perspective that human rights are not only "for others" but also "for oneself," I deliver content that allows everyone to truly understand their value.'
      ),
      icon: '💡'
    },
    {
      title: t('人権の進化と"共笑®︎"の理念', 'The Evolution of Human Rights and the Philosophy of "共笑®︎"'),
      content: t(
        '人権啓発活動は長年、他者のための取り組みと捉えられることが多く、個々人が自分自身の人権に目を向ける機会は限られていました。しかし、人権は「他者のため」だけでなく、「自己の権利」として尊重されるべきものです。これにより、自分自身の存在や多様性を尊重しながら、他者への尊重も育まれます。この「三方よし」の視点が、人権の進化において重要です。',
        'For many years, human rights awareness activities have often been viewed as efforts for others, and opportunities for individuals to focus on their own human rights have been limited. However, human rights should be respected not only "for others" but also as "one\'s own rights." This allows us to respect our own existence and diversity while also fostering respect for others. This "three-way benefit" perspective is important in the evolution of human rights.'
      ),
      icon: '🌱'
    },
    {
      title: t('"共笑®︎"の理念を通じたメッセージ', 'Messages Through the Philosophy of "共笑®︎"'),
      content: t(
        '"共笑®︎"の理念を通じて、以下のようなメッセージを伝えます：\n\n• 自らが持たない"ちがい"を知ること\n• 違いを尊重することで得られる柔軟性や豊かさ\n• 自分も他者も幸せにする「三方よし」の実現',
        'Through the philosophy of "共笑®︎," I convey the following messages:\n\n• Understanding the "differences" we ourselves do not have\n• The flexibility and richness gained by respecting differences\n• Realizing "three-way benefit" that makes both oneself and others happy'
      ),
      icon: '✨'
    }
  ]

  const lectureThemes = [
    {
      number: '1',
      title: t('新しい時代の人権の定義', 'New Definitions of Human Rights in a New Era'),
      points: [
        t('人権を「自己の権利」として捉え直す', 'Reconceiving human rights as "one\'s own rights"'),
        t('"共笑®︎"の理念で「持続可能な人権」を考える', 'Considering "sustainable human rights" through the philosophy of "共笑®︎"')
      ]
    },
    {
      number: '2',
      title: t('共生を超える"共笑®︎"', 'Beyond Coexistence: "共笑®︎"'),
      points: [
        t('単なる共生ではなく、共に笑い、共に未来を創るための視点', 'A perspective not just for coexistence, but for laughing together and creating the future together'),
        t('多様性を活かす具体的なアプローチ', 'Concrete approaches to leveraging diversity')
      ]
    },
    {
      number: '3',
      title: t('平和と人権：歴史から学ぶ未来', 'Peace and Human Rights: Learning the Future from History'),
      points: [
        t('「世界人権宣言」の意義と現代における課題', 'The significance of the "Universal Declaration of Human Rights" and contemporary challenges'),
        t('平和と人権が支える社会の持続可能性', 'The sustainability of a society supported by peace and human rights')
      ]
    },
    {
      number: '4',
      title: t('SDGsと人権の関連性', 'The Relationship Between SDGs and Human Rights'),
      points: [
        t('SDGs達成に向けた人権意識の重要性', 'The importance of human rights awareness in achieving the SDGs'),
        t('地域や企業が果たす役割', 'The role of local communities and companies')
      ]
    }
  ]

  const targetAudience = [
    { icon: '🏢', text: t('企業: 多様性や人権をテーマにした社員研修やリーダー育成', 'Companies: Employee training and leadership development on diversity and human rights') },
    { icon: '🎓', text: t('教育機関: 学生や教職員向けの人権教育', 'Educational institutions: Human rights education for students and faculty') },
    { icon: '🏛️', text: t('自治体・地域コミュニティ: 平和で持続可能な地域づくりの一環として', 'Local governments and communities: As part of building peaceful and sustainable communities') },
    { icon: '👥', text: t('一般市民: 自分の生活や行動に活かせる人権と平和の知識を得たい方々', 'General public: Those who want to gain knowledge of human rights and peace applicable to their lives and actions') }
  ]

  const effects = [
    t('人権の価値を「他者のため」から「自分のため」にも捉え直す視点が得られる', 'Gaining a perspective to reconceive the value of human rights from "for others" to "for oneself"'),
    t('職場や地域での関係性が向上し、多様性を活かす力を養える', 'Improving relationships in workplaces and communities, and developing the ability to leverage diversity'),
    t('平和な社会を実現するための具体的な行動のヒントが得られる', 'Gaining hints for concrete actions to realize a peaceful society')
  ]

  const closingMessage = t(
    '「違いを力に変え、未来を創る」─その第一歩として、人権と平和をテーマにした講演をぜひご活用ください。"共笑®︎"の理念に基づいた実践的な視点で、職場や地域、教育現場に笑顔と共感の輪を広げます。\n\n私たちが抱える"ちがい"を、課題ではなく新たな価値創造の原動力として捉え直すことで、より平和で持続可能な社会を築くことができます。講演依頼やご相談は、"共笑®︎"事務局までお気軽にご連絡ください。一緒に、違いを活かし、未来を共に創る取り組みを始めましょう！',
    '"Turning differences into strength and creating the future"─As a first step, please make use of lectures on the theme of human rights and peace. Based on the practical perspective of the "共笑®︎" philosophy, we spread circles of smiles and empathy in workplaces, communities, and educational settings.\n\nBy reconceiving the "differences" we have not as challenges but as driving forces for new value creation, we can build a more peaceful and sustainable society. For lecture requests or inquiries, please feel free to contact the "共笑®︎" office. Let\'s start working together to leverage differences and create the future together!'
  )

  const hashtags = [
    { tag: t('#にしゃんた', '#Nishanta'), color: 'text-blue-600' },
    { tag: t('#ボランティア', '#Volunteer'), color: 'text-indigo-600' },
    { tag: t('#共生社会', '#CoexistenceSociety'), color: 'text-cyan-600' },
    { tag: t('#共笑', '#共笑'), color: 'text-blue-700' },
    { tag: t('#大阪駅', '#OsakaStation'), color: 'text-indigo-700' },
    { tag: t('#献血', '#BloodDonation'), color: 'text-red-600' },
    { tag: t('#社会貢献', '#SocialContribution'), color: 'text-emerald-600' },
    { tag: t('#羽衣国際大学', '#HagoromoInternationalUniversity'), color: 'text-purple-600' }
  ]

  return (
    <div className="min-h-screen bg-[#FAF8F0]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V4h4V2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full text-xs font-medium shadow-md">
                  {postContent.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {postContent.date}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-blue-900 mb-2">
                {postContent.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-display font-semibold text-indigo-800 mb-4">
                {postContent.subtitle}
              </h2>
              <h3 className="text-lg md:text-xl font-display font-medium text-gray-700 leading-relaxed">
                {mainTitle}
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-300/80 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-2">
                <div className="rounded-md overflow-hidden shadow-inner">
                  <img
                    src={nishantaLectureImage}
                    alt={postContent.title}
                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setEnlargedImage(nishantaLectureImage)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            <div className={`bg-gradient-to-br ${
              index % 2 === 0 
                ? 'from-blue-50 to-indigo-50' 
                : 'from-indigo-50 to-cyan-50'
            } rounded-2xl shadow-lg p-8 md:p-10 border-l-4 ${
              index % 2 === 0 ? 'border-blue-500' : 'border-indigo-500'
            }`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl md:text-4xl flex-shrink-0">{section.icon}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-blue-900">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line ml-12 md:ml-16">
                {section.content}
              </div>
            </div>
          </div>
        ))}

        {/* Lecture Themes Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl">📚</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-blue-900">
                {t('人権と平和を考えるための講演テーマ', 'Lecture Themes for Considering Human Rights and Peace')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lectureThemes.map((theme, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                      {theme.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-blue-900">
                      {theme.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 ml-13">
                    {theme.points.map((point, pIndex) => (
                      <li key={pIndex} className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience & Effects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Target Audience */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-indigo-500">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl">🎯</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-indigo-900">
                {t('講演の対象', 'Target Audience')}
              </h2>
            </div>
            <div className="space-y-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Effects */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-cyan-500">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl">✨</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-cyan-900">
                {t('効果', 'Effects')}
              </h2>
            </div>
            <div className="space-y-4">
              {effects.map((effect, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <span className="text-blue-600 text-xl flex-shrink-0 mt-1">✓</span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{effect}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-blue-300">
            <div className="text-center mb-6">
              <span className="text-4xl md:text-5xl mb-4 inline-block">🕊️</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-blue-900 mb-4">
                {t('人権と平和の講演をご検討の方へ', 'For Those Considering Human Rights and Peace Lectures')}
              </h2>
            </div>
            <div className="text-gray-800 leading-relaxed text-base md:text-lg whitespace-pre-line text-center">
              {closingMessage}
            </div>
          </div>
        </div>

        {/* Hashtags */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {hashtags.map((hashtag, index) => (
              <span
                key={index}
                className={`${hashtag.color} font-semibold text-sm md:text-base hover:underline cursor-pointer transition-colors`}
              >
                {hashtag.tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('blog')
                // Set hash to scroll to Activities & Articles section
                setTimeout(() => {
                  window.location.hash = '#activities-articles'
                }, 100)
              }
            }}
            className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 font-semibold bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg border border-blue-200 transition-all group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('ブログに戻る', 'Back to Blog')}
          </button>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={enlargedImage}
            alt={postContent.title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default HumanRightsPost
