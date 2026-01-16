import React, { useState } from 'react'
import healthSupportImage from '../images_blog/pixta.jpg'

const OrganizationSupportPost = ({ language = 'ja', onNavigate }) => {
  const [enlargedImage, setEnlargedImage] = useState(null)
  const t = (ja, en) => (language === 'en' ? en : ja)

  const postContent = {
    title: t('共笑®︎ みんなの活躍・組織サポート', '共笑®︎ Everyone\'s Activity / Organization Support'),
    subtitle: t('〜「違い」を「価値」に変える、新しい時代の経営戦略〜', '〜Turning "Differences" into "Value": Management Strategy for a New Era〜'),
    date: '2026.01.04',
    category: t('💚 健康・サポート', '💚 Health & Support')
  }

  const introSection = {
    title: t('ダイバーシティを、組織の「利益」へ。', 'Turning Diversity into Organizational "Profit"'),
    content: t(
      '「多様な人財が、最大限の力を発揮できる組織を作りたい」\n\nOffice KANDYは、社会学博士、組織運営のプロ、次世代・グローバル視点の専門家が集結した戦略的チームです。\nDEI（多様性・公平性・包摂）を単なるスローガンで終わらせず、経営の力に変える実務を、対面（拠点・出張）・オンラインで100点満点の誠意を持って提供します。',
      '"We want to create an organization where diverse human resources can demonstrate their maximum potential"\n\nOffice KANDY is a strategic team that brings together a sociology Ph.D., organizational management professionals, and experts with next-generation and global perspectives.\nWe provide practical services that transform DEI (Diversity, Equity, Inclusion) from mere slogans into management power, with 100% sincerity, both in-person (at our base or on-site) and online.'
    )
  }

  const homebaseSection = {
    title: t('🏠 拠点：共笑®︎ホーム（ベース）', '🏠 Base: 共笑®︎ Home (Base)'),
    content: t(
      '「共笑®︎ホーム」は、Office KANDYが運営する会員制・完全予約制の多機能ビジネスハブです。\nここは、共笑®︎ワークスペースであり、共笑®︎オフサイト・ミーティング会場を兼ね備えた、創造的な発想のための特別な空間です。\n機密保持とプライバシー確保のため、所在地は現在非公開。厳格な会員制をとっております。日常のオフィスを離れ、組織の未来を本気で語り合う「戦略的秘密基地」としてご活用ください。',
      '"共笑®︎ Home" is a multi-functional business hub operated by Office KANDY, with a membership system and full reservation system.\nThis is 共笑®︎ Workspace and also serves as a 共笑®︎ Offsite Meeting venue, a special space for creative thinking.\nFor confidentiality and privacy protection, the location is currently undisclosed. We maintain a strict membership system. Please use it as a "strategic secret base" to seriously discuss your organization\'s future away from your daily office.'
    )
  }

  const solutions = [
    {
      number: '1',
      title: t('経営戦略・ブランディング', 'Management Strategy & Branding'),
      items: [
        {
          icon: '💼',
          title: t('共笑®︎ダイバーシティ・コンサルティング', '共笑®︎ Diversity Consulting'),
          content: t('社会学・経済学の知見に基づき、DEIを経営の根幹に実装。組織診断から戦略立案まで伴走します。', 'Based on insights from sociology and economics, we implement DEI at the core of management. We accompany you from organizational diagnosis to strategy development.')
        },
        {
          icon: '🎯',
          title: t('共笑®︎コーポレート・ブランディング', '共笑®︎ Corporate Branding'),
          content: t('登録商標を活用し、多様性を尊重する先進企業としての社会的信用を構築します。', 'We utilize registered trademarks to build social credibility as an advanced company that respects diversity.')
        }
      ]
    },
    {
      number: '2',
      title: t('人財育成・社員研修', 'Human Resource Development & Employee Training'),
      items: [
        {
          icon: '📚',
          title: t('共笑®︎ダイバーシティ研修', '共笑®︎ Diversity Training'),
          content: t('理論と笑いを融合させた講演・ワークショップ。社員一人ひとりの意識を変革し、心理的安全性を高めます。', 'Lectures and workshops that combine theory and laughter. We transform each employee\'s awareness and enhance psychological safety.')
        },
        {
          icon: '🏆',
          title: t('共笑®︎検定｜ダイバーシティ能力検定®︎ 導入', '共笑®︎ Certification | Introduction of Diversity Competency Certification®'),
          content: t('社員の多様性対応力を可視化。組織全体のレベルアップを公式ライセンスで証明します。', 'We visualize employees\' diversity response capabilities. We prove organizational-wide level-up with official licenses.')
        }
      ]
    },
    {
      number: '3',
      title: t('次世代分析・マーケティング', 'Next-Generation Analysis & Marketing'),
      items: [
        {
          icon: '🔍',
          title: t('共笑®︎Z世代・インサイト分析', '共笑®︎ Gen Z Insight Analysis'),
          content: t('次世代を担う若手の価値観を分析。採用戦略や商品開発に、リアルな若手・グローバル視点を取り入れます。', 'We analyze the values of young people who will bear the next generation. We incorporate real youth and global perspectives into recruitment strategies and product development.')
        },
        {
          icon: '🌍',
          title: t('共笑®︎グローバル・マーケティング', '共笑®︎ Global Marketing'),
          content: t('海外トレンドと多文化共生の視点を掛け合わせ、新しい市場へのアプローチを支援します。', 'We combine overseas trends with multicultural coexistence perspectives to support approaches to new markets.')
        }
      ]
    },
    {
      number: '4',
      title: t('組織文化・チーム構築', 'Organizational Culture & Team Building'),
      items: [
        {
          icon: '🤝',
          title: t('共笑®︎インクルーシブ・リクルーティング', '共笑®︎ Inclusive Recruiting'),
          content: t('国籍や属性に関わらず、優秀な人財が集まり定着する「採用・育成プロセス」の構築を実務として代行します。', 'We practically handle the construction of "recruitment and development processes" where excellent human resources gather and settle regardless of nationality or attributes.')
        },
        {
          icon: '🎪',
          title: t('共笑®︎オフサイト・レクリエーション', '共笑®︎ Offsite Recreation'),
          content: t('拠点を活用し、部署の垣根を超えた一体感を醸成する特別なプログラムを提供します。', 'We utilize our base to provide special programs that foster unity beyond departmental boundaries.')
        }
      ]
    }
  ]

  const crew = [
    {
      name: t('にしゃんた', 'Nishanta'),
      role: t('（社会学博士・ダイバーシティ戦略家）', '(Ph.D. in Sociology, Diversity Strategist)'),
      description: t('大学教授としての理論と、政策実務の経験を融合。笑いと納得を伴う講演・コンサルティングで、組織の「OS」をアップデートします。', 'Combines university professor theory with policy practice experience. Updates organizational "OS" through lectures and consulting that combine laughter and understanding.')
    },
    {
      name: t('ちえ', 'Chie'),
      role: t('（組織マネジメント・HR実務家）', '(Organizational Management & HR Practitioner)'),
      description: t('所属事務所の代表および福祉現場のリーダーとして培った「人を動かす実務」のプロ。現場感覚を重視した組織運営を支援します。', 'A professional in hands-on people management, cultivated as the head of an affiliated office and leader in welfare settings. Supports organizational operations emphasizing on-site sensibility.')
    },
    {
      name: t('共笑', 'Tomoe'),
      role: t('（Z世代・グローバル・インサイト）', '(Gen Z & Global Insight)'),
      description: t('オーストラリア・カナダでの留学経験を持つ次世代の担い手。若手視点と国際基準の感性で、組織に新しい風を吹き込みます。', 'A next-generation bearer with study abroad experience in Australia and Canada. Brings fresh air to organizations with youth perspectives and international standard sensibilities.')
    }
  ]

  const steps = [
    { number: '1', title: t('お問い合わせ', 'Inquiry'), content: t('フォームまたはLINEよりご連絡ください。法人担当者が即応します。', 'Please contact us via form or LINE. Corporate staff will respond immediately.') },
    { number: '2', title: t('プレ・ヒアリング', 'Initial Consultation'), content: t('オンラインまたは対面にて、組織の課題やビジョンをプロが深く伺います。', 'Professionals will deeply listen to your organization\'s challenges and vision online or in-person.') },
    { number: '3', title: t('カスタマイズ・プログラム策定', 'Customized Program Development'), content: t('貴社のフェーズに合わせた最適解と、明確なお見積りを提示します。', 'We present optimal solutions tailored to your company\'s phase and clear estimates.') },
    { number: '4', title: t('パートナーシップ締結', 'Partnership Agreement'), content: t('内容にご納得いただいた後、正式な契約・導入となります。', 'After your satisfaction with the content, we proceed with formal contract and introduction.') },
    { number: '5', title: t('プロジェクト始動', 'Project Launch'), content: t('組織が「共笑®︎」へと変わる変革のプロセスが始まります。', 'The transformation process begins as your organization becomes "共笑®︎".') }
  ]

  const closingMessage = t(
    '「違い」を組織の最強の武器に変えませんか。\n私たちは表面的なアドバイスではなく、経営にインパクトを与える「実務」を提供します。次世代に選ばれる強い組織作り、今こそ始めましょう。',
    'Why not turn "differences" into your organization\'s strongest weapon?\nWe provide not superficial advice, but "practical work" that impacts management. Let\'s start building a strong organization chosen by the next generation now.'
  )

  const hashtags = [
    { tag: t('#共笑®︎', '#共笑®'), color: 'text-emerald-500' },
    { tag: t('#共笑®︎ホーム', '#共笑®Home'), color: 'text-sky-400' }
  ]

  return (
    <div className="min-h-screen bg-[#FAF8F0]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V4h4V2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-xs font-medium shadow-md">
                  {postContent.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {postContent.date}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-emerald-900 mb-2">
                {postContent.title}
              </h1>
              <h2 className="text-lg md:text-xl font-display font-medium text-teal-800 mb-4">
                {postContent.subtitle}
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 p-2">
                <div className="rounded-md overflow-hidden shadow-inner">
                  <img
                    src={healthSupportImage}
                    alt={postContent.title}
                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setEnlargedImage(healthSupportImage)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Intro Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-emerald-400">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl md:text-4xl flex-shrink-0">💚</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-emerald-900 mb-4">
                  {introSection.title}
                </h2>
                <div className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {introSection.content}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Homebase Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-teal-400">
            <h2 className="text-xl md:text-2xl font-display font-bold text-teal-900 mb-4">
              {homebaseSection.title}
            </h2>
            <div className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {homebaseSection.content}
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-green-400">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl">🌟</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-emerald-900">
                {t('共笑®︎（ともえ）みんなの活躍・組織ソリューション', '共笑®︎ (Tomoe) Everyone\'s Activity / Organizational Solutions')}
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-8">
              {t('組織の課題を本質的に解決し、社会から選ばれ続ける企業ブランドを構築するための専門実務を提供します。', 'We provide specialized practical services to fundamentally solve organizational challenges and build corporate brands that continue to be chosen by society.')}
            </p>
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl">
                      {solution.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-emerald-900">
                      {solution.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solution.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-lg p-5 border border-emerald-100">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{item.icon}</span>
                          <h4 className="text-lg md:text-xl font-display font-semibold text-emerald-900">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crew Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-teal-400">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl">🤝</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-teal-900">
                {t('あなたの組織を加速させる専属クルー', 'Dedicated Crew to Accelerate Your Organization')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {crew.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-teal-100">
                  <h3 className="text-lg md:text-xl font-display font-bold text-teal-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-teal-700 mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-emerald-400">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl">👉</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-emerald-900">
                {t('実装までの確実なステップ', 'Reliable Steps to Implementation')}
              </h2>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm border border-emerald-100">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-emerald-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-emerald-200">
            <div className="text-center mb-6">
              <span className="text-4xl md:text-5xl mb-4 inline-block">💚</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-emerald-900 mb-4">
                {t('「違い」を組織の最強の武器に変えませんか', 'Why Not Turn "Differences" into Your Organization\'s Strongest Weapon?')}
              </h2>
            </div>
            <div className="text-gray-800 leading-relaxed text-base md:text-lg whitespace-pre-line text-center mb-6">
              {closingMessage}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                {t('法人向け資料請求・ご相談はこちら', 'Corporate Material Requests & Inquiries Here')}
              </p>
              <p className="text-xs text-gray-500">
                {t('※完全会員制・審査制。組織の守秘義務を最優先にサポートいたします。', '※Full membership system with screening. We prioritize supporting organizational confidentiality.')}
              </p>
            </div>
          </div>
        </div>

        {/* Trademark & Hashtags */}
        <div className="mb-8">
          <div className="text-center text-sm text-gray-600 mb-4">
            <p className="mb-2">
              {t('登録商標：共笑®︎ / ダイバーシティ能力検定®︎', 'Registered Trademarks: 共笑®︎ / Diversity Competency Certification®')}
            </p>
            <p>
              {t('運営主体：オフィス・キャンディ（Office KANDY, Inc.）', 'Operating Entity: Office KANDY, Inc.')}
            </p>
          </div>
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
            className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 font-semibold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg border border-emerald-200 transition-all group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default OrganizationSupportPost
