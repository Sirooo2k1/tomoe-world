import React from 'react'
import organizationHeroImage from '../Images/img_05.png'

const Organization = ({ language = 'ja', onNavigate }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  
  const handleContactClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('ask')
    } else {
      window.location.href = '/ask'
    }
  }
  
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={organizationHeroImage}
          alt={t('共笑® みんなの活躍・組織サポート', '共笑® Everyone\'s Activity / Organization Support')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h2 
              className="text-5xl md:text-7xl font-display font-bold mb-4 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-1"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 25%, #fef3c7 50%, #e9d5ff 75%, #ffffff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255,255,255,0.5), 0 4px 8px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                animation: 'gradientShift 3s ease infinite',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundPosition = '100% 50%'
                e.target.style.filter = 'drop-shadow(0 0 20px rgba(255,255,255,0.8)) drop-shadow(0 0 40px rgba(147, 197, 253, 0.6))'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundPosition = '0% 50%'
                e.target.style.filter = 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
              }}
            >
              {t('共笑® みんなの活躍・組織サポート', '共笑® Everyone\'s Activity / Organization Support')}
            </h2>
          </div>
        </div>
        <style>{`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
        {/* Title and Subtitle Section */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8 text-gray-800">
            {t('共笑®︎ みんなの活躍・組織サポート', '共笑®︎ Everyone\'s Activity / Organization Support')}
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
            <span className="text-gray-500 text-2xl md:text-3xl font-light">「</span>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              {t(
                '「違い」を「価値」に変える、新しい時代の経営戦略',
                'Turning "Differences" into "Value": A New Era Management Strategy'
              )}
            </p>
            <span className="text-gray-500 text-2xl md:text-3xl font-light">」</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto px-4 mb-12 md:mb-16">
          <div className="space-y-8 md:space-y-10">
            {/* First Quote */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
                {t(
                  'ダイバーシティを、組織の「最強の武器」へ。',
                  'Turn diversity into the organization\'s "strongest weapon."'
                )}
              </p>
            </div>

            {/* Second Quote */}
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-relaxed">
                {t(
                  '「多様な人財が、本気で力を発揮できる組織を作りたい」',
                  '"We want to create an organization where diverse talent can truly demonstrate their power"'
                )}
              </p>
            </div>

            {/* Description Paragraph */}
            <div className="bg-[#FAF8F0] border-2 border-[#F5F1E8] rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                {language === 'ja' ? (
                  <>
                    Office KANDYは、<span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>社会学博士、組織運営のプロ、次世代グローバル視点のアドバイザー</span>が集結した戦略的チームです。DEI（多様性・公平性・包摂）を単なるスローガンで終わらせず、経営の利益に変える実務を、<span className="font-bold" style={{ background: 'linear-gradient(135deg, #059669 0%, #0ea5e9 50%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>対面（拠点・出張）はもちろん、オンラインでも全国・世界中へ</span>100点満点の誠意を持って提供します。
                  </>
                ) : (
                  'Office KANDY is a strategic team of sociology doctors, organizational management professionals, and next-generation global perspective advisors. We provide practical work that transforms DEI (Diversity, Equity, Inclusion) from mere slogans into management profits, with full sincerity through face-to-face (base/dispatch) as well as online services nationwide and worldwide.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Base Location Section */}
        <div className="max-w-4xl mx-auto px-4 mb-12 md:mb-16">
          <div className="bg-[#FAF8F0] border-2 border-[#F5F1E8] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-md">
            <div className="mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <span className="text-3xl md:text-4xl">🏠</span>
                <span>{t('拠点：共笑®︎ホーム（ベース）', 'Base: 共笑®︎ Home (Base)')}</span>
              </h3>
            </div>

            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {language === 'ja' ? (
                  <>
                    「<a
                      href="/ask"
                      onClick={handleContactClick}
                      className="font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-colors duration-300 cursor-pointer"
                    >共笑®︎ホーム</a>」は、Office KANDYが運営する<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>会員制・完全予約制</span>の多機能ビジネスハブです。ここは、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎ワークスペース</span>であり、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎オフサイト・ミーティング会場</span>を兼ね備えた、創造的な発想のための特別な空間です。
                  </>
                ) : (
                  <>
                    「<a
                      href="/ask"
                      onClick={handleContactClick}
                      className="font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-colors duration-300 cursor-pointer"
                    >共笑®︎ Home</a>」 is a membership-based, fully reservation-only multifunctional business hub operated by Office KANDY. This is a special space for creative thinking that combines 共笑®︎ Workspace and 共笑®︎ Offsite Meeting Venue.
                  </>
                )}
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {language === 'ja' ? (
                  <>
                    機密保持とプライバシー確保のため、<span className="font-bold" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>所在地は現在非公開</span>。厳格な会員制をとっております。対面はもちろん、ここを配信拠点としたオンライン研修も可能です。「戦略的秘密基地」としてご活用ください。
                  </>
                ) : (
                  'To ensure confidentiality and privacy, the location is currently undisclosed. We operate under a strict membership system. Face-to-face meetings are of course possible, and online training using this as a distribution base is also available. Please use it as a "strategic secret base."'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="max-w-7xl mx-auto px-1 md:px-2 mb-12 md:mb-16">
          {/* Title Section */}
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl md:text-5xl">🌟</span>
              <span>{t('共笑®︎（ともえ）組織・ビジネスソリューション', '共笑®︎ (Tomoe) Organization & Business Solutions')}</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t(
                '組織の課題を本質的に解決し、選ばれ続ける企業ブランドを構築するための専門実務を提供します。※すべてのメニューでオンライン対応可能です。',
                'We provide specialized practical services to fundamentally solve organizational challenges and build a corporate brand that continues to be chosen. *All menus are available online.'
              )}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-stretch">
            {/* Service Group 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl font-bold text-gray-300 flex-shrink-0 w-6 md:w-8 text-center">1</span>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 pt-1 text-left flex-1">
                  {t('経営戦略・ブランディング', 'Management Strategy & Branding')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎ダイバーシティ・コンサルティング', '共笑®︎ Diversity Consulting')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '社会学・経済学の知見に基づき、DEIを経営の根幹に実装。組織診断から戦略立案まで徹底伴走します。',
                      'Based on insights from sociology and economics, we implement DEI at the core of management. We thoroughly accompany you from organizational diagnosis to strategy formulation.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎コーポレート・ブランディング', '共笑®︎ Corporate Branding')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '登録商標を活用し、多様性を尊重する先進企業としての社会的信用を構築します。',
                      'We utilize registered trademarks to build social credibility as an advanced company that respects diversity.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Group 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl font-bold text-gray-300 flex-shrink-0 w-6 md:w-8 text-center">2</span>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 pt-1 text-left flex-1">
                  {t('人財育成・社員研修', 'Talent Development & Employee Training')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #059669 0%, #0ea5e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎ダイバーシティ研修', '共笑®︎ Diversity Training')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '理論と笑いを融合させた唯一無二の講演。社員一人ひとりの意識を変革し、心理的安全性を高めます。',
                      'A unique lecture that combines theory and laughter. Transforms the awareness of each employee and enhances psychological safety.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('ダイバーシティ能力検定®︎ 導入', 'Diversity Ability Certification® Introduction')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '社員の多様性対応力を可視化。組織全体のレベルアップを公式ライセンスで証明します。',
                      'Visualizes employees\' diversity response capabilities. Proves organizational-wide level-up with official licenses.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Group 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl font-bold text-gray-300 flex-shrink-0 w-6 md:w-8 text-center">3</span>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 pt-1 text-left flex-1">
                  {t('次世代分析・マーケティング', 'Next Generation Analysis & Marketing')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎Z世代・インサイト分析', '共笑®︎ Gen Z Insight Analysis')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '次世代を担う若手の価値観を分析。採用戦略や商品開発に、リアルな若手・グローバル視点を取り入れます。',
                      'Analyzes the values of young people who will lead the next generation. Incorporates real youth and global perspectives into recruitment strategies and product development.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎グローバル・マーケティング', '共笑®︎ Global Marketing')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '海外トレンドと多文化共生の視点を掛け合わせ、新しい市場へのアプローチを支援します。',
                      'Combines overseas trends with multicultural coexistence perspectives to support approaches to new markets.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Group 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl font-bold text-gray-300 flex-shrink-0 w-6 md:w-8 text-center">4</span>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 pt-1 text-left flex-1">
                  {t('組織文化・チーム構築', 'Organizational Culture & Team Building')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎インクルーシブ・リクルーティング', '共笑®︎ Inclusive Recruiting')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '属性に関わらず、優秀な人財が集まり定着するプロセスの構築を実務として代行します。',
                      'We handle as practical work the construction of processes where excellent talent gathers and settles regardless of attributes.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎オフサイト・プログラム', '共笑®︎ Offsite Program')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '拠点を活用し、部署の垣根を超えた一体感を醸成する特別なチームビルディングを提供します。',
                      'We provide special team building that utilizes our base to foster unity beyond departmental boundaries.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Crew Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12 md:mb-16">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-baseline justify-center gap-3">
              <span className="text-4xl md:text-5xl flex-shrink-0">🤝</span>
              <span>{t('組織の変革を加速させる専属クルー', 'Dedicated Crew to Accelerate Organizational Transformation')}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Crew Member 1 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-blue-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('にしゃんた（社会学博士・ダイバーシティ戦略家）', 'Nishanta (Doctor of Sociology & Diversity Strategist)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '大学教授としての理論と、政策実務の経験を融合。笑いと納得を伴う講演・コンサルティングで、組織の「OS」を最新版へとアップデートします。',
                  'Combines university professor theory with policy practice experience. Through lectures and consulting that bring laughter and understanding, we update the organization\'s "OS" to the latest version.'
                )}
              </p>
            </div>

            {/* Crew Member 2 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-pink-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('ちえ（組織マネジメント・HR実務家）', 'Chie (Organizational Management & HR Practitioner)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '法人代表および教育・福祉現場のリーダーとして培った「人を動かす実務」のプロ。現場感覚を重視した、忖度のない組織改善を支援します。',
                  'A professional in "practical work that moves people" cultivated as a corporate representative and leader in education and welfare fields. Supports organizational improvement without flattery, emphasizing on-site sensibility.'
                )}
              </p>
            </div>

            {/* Crew Member 3 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-orange-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('次世代・グローバルインサイト・アドバイザリーチーム', 'Next Generation & Global Insight Advisory Team')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '海外留学・国際経験を持つ若手世代のアドバイザーチーム。Z世代の本音と国際基準の感性を組織に注入し、マーケティングや採用のミスマッチを未来志向で防ぎます。',
                  'An advisory team of young generations with overseas study and international experience. Injects Gen Z\'s honest opinions and international standard sensibilities into organizations, preventing mismatches in marketing and recruitment with a future-oriented approach.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Steps to Start Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12 md:mb-16">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl md:text-5xl">🚀</span>
              <span>{t('実装までの確実なステップ', 'Reliable Steps to Implementation')}</span>
            </h3>
          </div>

          <div className="bg-[#FAF8F0] rounded-2xl p-6 md:p-8 shadow-md border-2 border-[#F5F1E8]">
            <div className="space-y-5 md:space-y-6">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-blue-500">
                <div className="flex-shrink-0 md:self-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                    <span className="text-lg font-bold text-blue-600">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1.5 md:mb-2">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('お問い合わせ', 'Inquiry')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      'フォームまたはLINEよりご連絡ください。法人担当者が即応します。',
                      'Please contact us via form or LINE. Our corporate representative will respond immediately.'
                    )}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-green-500">
                <div className="flex-shrink-0 md:self-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shadow-md">
                    <span className="text-lg font-bold text-green-600">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1.5 md:mb-2">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #059669 0%, #0ea5e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('プレ・ヒアリング', 'Pre-Hearing')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      'オンラインまたは対面にて、課題の核心をプロが深く伺います。',
                      'Online or face-to-face, professionals deeply listen to the core of your challenges.'
                    )}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-purple-500">
                <div className="flex-shrink-0 md:self-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shadow-md">
                    <span className="text-lg font-bold text-purple-600">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1.5 md:mb-2">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('カスタマイズ・プラン策定', 'Custom Plan Development')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      '貴社のフェーズに合わせた最適解と、明確なお見積りを提示します。',
                      'We present the optimal solution tailored to your company\'s phase along with a clear estimate.'
                    )}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-pink-500">
                <div className="flex-shrink-0 md:self-start">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shadow-md">
                    <span className="text-lg font-bold text-pink-600">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1.5 md:mb-2">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('パートナーシップ締結', 'Partnership Agreement')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      '内容にご納得いただいた後、正式な契約・導入となります。',
                      'After you are satisfied with the content, we proceed with formal contract and introduction.'
                    )}
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-cyan-500">
                <div className="flex-shrink-0 md:self-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center shadow-md">
                    <span className="text-lg font-bold text-cyan-600">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1.5 md:mb-2">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('プロジェクト始動', 'Project Launch')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      '組織が「共笑®︎」へと変わる変革のプロセスが始まります。',
                      'The transformation process begins as the organization changes to "共笑®︎".'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy & CTA Section */}
        <div className="max-w-4xl mx-auto px-4 mb-0">
          <div className="space-y-6 md:space-y-8">
            {/* Philosophy Text - Slogan Design */}
            <div className="relative bg-gradient-to-br from-[#FAF8F0] via-white to-[#F5F1E8] border-2 border-[#E5E7EB] rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl">
              {/* Decorative Elements */}
              <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-gray-300 rounded-tl-2xl opacity-30"></div>
              <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-gray-300 rounded-br-2xl opacity-30"></div>
              
              <div className="relative text-center space-y-6 md:space-y-8">
                {/* Main Slogan */}
                <div className="relative pb-1">
                  <p 
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-normal"
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 25%, #ec4899 50%, #f59e0b 75%, #10b981 100%)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                      animation: 'gradientShift 4s ease infinite',
                      lineHeight: '1.3',
                      paddingBottom: '0.25rem',
                    }}
                  >
                    {t(
                      '「違い」を組織の最強の武器に変えませんか。',
                      'Why not turn "differences" into the organization\'s strongest weapon?'
                    )}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
                </div>

                {/* Sub Slogan */}
                <div className="space-y-3">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                    {t(
                      '私たちは表面的なアドバイスではなく、経営にインパクトを与える「実務」を提供します。',
                      'We provide "practical work" that impacts management, not superficial advice.'
                    )}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {t(
                      '次世代に選ばれる強い組織作り、対面・オンライン問わず今こそ始めましょう。',
                      'Let\'s start building a strong organization chosen by the next generation, whether face-to-face or online.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl md:text-4xl">👉</span>
                  <a
                    href="/ask"
                    onClick={handleContactClick}
                    className="text-xl md:text-2xl font-bold text-gray-800 underline decoration-2 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-colors duration-300 cursor-pointer"
                  >
                    {t('法人向け資料請求・ご相談はこちら', 'Corporate Material Request & Consultation Here')}
                  </a>
                </div>
                <p className="text-sm md:text-base text-gray-600 italic">
                  {t(
                    '※完全会員制・審査制。組織の守秘義務を最優先にサポートいたします。',
                    '*Full membership system with review. We prioritize supporting organizational confidentiality obligations.'
                  )}
                </p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="text-center space-y-2 pt-2 pb-0 border-t border-gray-200">
              <p className="text-sm md:text-base text-gray-600">
                {t(
                  '登録商標：共笑®︎ / ダイバーシティ能力検定®︎',
                  'Registered Trademark: 共笑®︎ / ダイバーシティ能力検定®︎'
                )}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                {t(
                  '運営主体：オフィス・キャンディ（Office KANDY, Inc.）',
                  'Operating Entity: Office KANDY, Inc.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Organization
