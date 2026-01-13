import React from 'react'
import fundHeroImage from '../Images/img_01.png'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const License = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={fundHeroImage}
          alt={t('共笑®︎ライセンス連携事業', '共笑®︎ License Partnership Business')}
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
              {t('共笑®︎ライセンス連携事業', '共笑®︎ License Partnership Business')}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <article className="p-6 md:p-10 text-gray-700 leading-relaxed text-base md:text-lg">
          <div className="bg-[#FAF8F0] rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border-2 border-[#F5F1E8] mb-10 md:mb-12">
            <p className="text-2xl md:text-3xl font-display font-bold mb-4 text-center" style={{
              color: '#FF6B35',
              background: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t('共笑®︎ ブランド・パートナーシップ制度', '共笑®︎ Brand & Partnership Program')}
            </p>
            <p className="text-xl md:text-2xl text-headings text-center italic mb-4">
              {t(
                '〜「共笑」の価値を、あなたのビジネスや活動の力に〜',
                '~Turning the value of "共笑" into the power of your business and activities~'
              )}
            </p>
            <div className="flex justify-center mb-4">
              <img
                src={logoTomoe02}
                alt="tomoe logo"
                className="w-36 h-36 object-contain"
              />
            </div>
            <div className="mt-4">
              <p className="text-base md:text-lg leading-relaxed text-center">
                {t(
                  <>私たちOffice KANDYは、登録商標である<strong>「共笑®︎（ともえ）」</strong>を、単なる名称ではなく「多様性を認め合い、共に笑い合える未来を創る」という社会的OSであると考えています。この理念は私たちが独占するものではなく、志を同じくするパートナーと共に広げていくべき<strong>「共有財産（ソーシャル・アセット）」</strong>です。本制度は、確かなブランド力と法的な保護のもと、共に社会的価値を爆上げするためのライセンス・パートナーシップです。</>,
                  <>We, Office KANDY, consider the registered trademark <strong>"共笑®︎ (tomoe)"</strong> not just a name, but a social OS that "recognizes diversity and creates a future where everyone can laugh together." This philosophy is not something we monopolize, but a <strong>"shared asset (social asset)"</strong> that should be expanded with partners who share the same aspirations. This system is a license partnership to explosively increase social value together, under strong brand power and legal protection.</>
                )}
              </p>
            </div>
          </div>
          <section className="mt-12 md:mt-16">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings text-left mb-6 md:mb-8">
              {t('🤝 パートナーシップで実現できること', '🤝 What Can Be Achieved Through Partnership')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
              {/* Box 1 - Orange Theme */}
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-orange-500">
                <p className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b-2 border-orange-500" style={{ color: '#EA580C' }}>
                  {t('1. 教育・研修・イベント', '1. Education, Training & Events')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>
                    {t(
                      '「共笑®︎」を冠したセミナーやワークショップの公式開催。',
                      'Official hosting of seminars and workshops under the "共笑®︎" name.'
                    )}
                  </li>
                  <li>
                    {t(
                      '地域イベントやチャリティ活動のタイトル利用。',
                      'Use as a title for local events and charity activities.'
                    )}
                  </li>
                  <li>
                    {t(
                      'ダイバーシティ推進のシンボルとしての活用。',
                      'Use as a symbol for diversity promotion.'
                    )}
                  </li>
                </ul>
              </div>
              
              {/* Box 2 - Green Theme */}
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
                <p className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b-2 border-green-500" style={{ color: '#16A34A' }}>
                  {t('2. 施設・店舗・福祉', '2. Facilities, Stores & Welfare')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>
                    {t(
                      '「共笑®︎カフェ」「共笑®︎キッチン」等の店舗名。',
                      'Store names such as "共笑®︎ Cafe" and "共笑®︎ Kitchen".'
                    )}
                  </li>
                  <li>
                    {t(
                      '介護施設・保育サービス等での名称利用。',
                      'Use of names in nursing facilities, childcare services, etc.'
                    )}
                  </li>
                  <li>
                    {t(
                      '空間プロデュースにおけるブランド冠称。',
                      'Brand naming in space production.'
                    )}
                  </li>
                </ul>
              </div>
              
              {/* Box 3 - Blue Theme */}
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
                <p className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b-2 border-blue-500" style={{ color: '#2563EB' }}>
                  {t('3. ビジネス・広報戦略', '3. Business & Public Relations Strategy')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>
                    {t(
                      'CSR活動、SDGsプロジェクトの名称利用。',
                      'Use as a name for CSR activities and SDGs projects.'
                    )}
                  </li>
                  <li>
                    {t(
                      '企業広報における「共笑®︎」ロゴの使用。',
                      'Use of the "共笑®︎" logo in corporate public relations.'
                    )}
                  </li>
                  <li>
                    {t(
                      'DEI（多様性・公平性・包括性）推進キャンペーンのキーワード利用。',
                      'Use as a keyword in DEI (Diversity, Equity, Inclusion) promotion campaigns.'
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-12 md:mt-16">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings text-center mb-6 md:mb-8">
              {t('✨ 導入のメリット：タイパとリスクヘッジの最適解', '✨ Benefits of Introduction: Optimal Solution for Time Efficiency and Risk Hedging')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Benefit 1 */}
              <div className="bg-[#FAF8F0] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#F5F1E8]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-headings mb-3">
                    {t('🚀 ブランディング強化', '🚀 Enhanced Branding')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(
                      '「共笑®︎」が持つ社会的信用を自社の活動に付与。ステークホルダーからの信頼を劇的に向上させます。',
                      'The social credibility of "共笑®︎" is added to your company\'s activities. Dramatically improves trust from stakeholders.'
                    )}
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-[#FAF8F0] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#F5F1E8]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-headings mb-3">
                    {t('🛡 法的リスクの完全回避', '🛡 Complete Legal Risk Avoidance')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(
                      '正式なライセンス契約により、商標権侵害のリスクをゼロに。安心してアクセル全開で広報活動が行えます。',
                      'Through a formal license agreement, trademark infringement risk is reduced to zero. You can conduct public relations activities with full confidence.'
                    )}
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-[#FAF8F0] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#F5F1E8]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-headings mb-3">
                    {t('🌐 共創ネットワーク', '🌐 Co-creation Network')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(
                      'にしゃんた及びOffice KANDYとの優先的連携が可能。新たなビジネスチャンスが爆誕します。',
                      'Priority collaboration with Nishanta and Office KANDY is possible. New business opportunities emerge explosively.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-12 md:mt-16">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings text-center mb-6 md:mb-8">
              {t('ご利用の流れ', 'Usage Process')}
            </p>
            <div className="bg-[#FAF8F0] rounded-2xl p-6 md:p-8 shadow-md border-2 border-[#F5F1E8]">
              <div className="space-y-5 md:space-y-6">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-[#F5F1E8]">
                  <div className="flex-shrink-0 md:self-start">
                    <div className="w-10 h-10 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                      <span className="text-lg font-bold text-[#8B7355]">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-headings mb-1.5 md:mb-2">
                      {t('お問い合わせ', 'Inquiry')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        '利用目的、規模、期間などをフォームよりご連絡ください。',
                        'Please contact us via the form with your purpose of use, scale, duration, etc.'
                      )}
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-[#F5F1E8]">
                  <div className="flex-shrink-0 md:self-start">
                    <div className="w-10 h-10 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                      <span className="text-lg font-bold text-[#8B7355]">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-headings mb-1.5 md:mb-2">
                      {t('ヒアリング・審査', 'Hearing & Review')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        '弊社の理念（共笑・共楽・共学・共育・共活・共創）との整合性を確認させていただきます。',
                        'We will confirm alignment with our philosophy (共笑・共楽・共学・共育・共活・共創).'
                      )}
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-[#F5F1E8]">
                  <div className="flex-shrink-0 md:self-start">
                    <div className="w-10 h-10 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                      <span className="text-lg font-bold text-[#8B7355]">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-headings mb-1.5 md:mb-2">
                      {t('ご契約', 'Contract')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        'ライセンス料、および「ブランドの質」を維持するための利用ガイドラインを締結します。',
                        'We will establish the license fee and usage guidelines to maintain "brand quality".'
                      )}
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-5 shadow-sm border-l-4 border-[#F5F1E8]">
                  <div className="flex-shrink-0 md:self-start">
                    <div className="w-10 h-10 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                      <span className="text-lg font-bold text-[#8B7355]">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-headings mb-1.5 md:mb-2">
                      {t('利用開始', 'Start of Use')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        'ロゴデータの提供・公式パートナーとしての告知開始。新しい未来への第一歩です。',
                        'Provision of logo data and announcement as an official partner. The first step toward a new future.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to action message */}
              <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t-2 border-[#F5F1E8]">
                <p className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4 text-headings">
                  {t('「無断利用」ではなく「正規の連携」を。', '"Official Partnership" rather than "Unauthorized Use".')}
                </p>
                <p className="text-lg md:text-xl text-center leading-relaxed text-gray-700 mb-5 md:mb-6">
                  {t(
                    '「共笑®︎」の旗印のもと、御社と共に社会的価値を共創できることを楽しみにしています。',
                    'We look forward to co-creating social value together with your company under the banner of "共笑®︎".'
                  )}
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://tomoeworld.com/ask"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-black font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
                    style={{
                      background: 'linear-gradient(90deg, #fef3c7, #e9d5ff)',
                      minWidth: '250px',
                      justifyContent: 'center'
                    }}
                  >
                    {t('商標利用・パートナーシップについて相談する', 'Consult About Trademark Use & Partnership')}
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-10 md:mt-12 flex justify-center">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl md:rounded-lg p-4 md:p-5 max-w-2xl w-full">
              <div className="text-center mb-3">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-lg md:text-xl">⚠️</span>
                  <h3 className="text-sm md:text-base font-display font-bold text-red-800 leading-tight">
                    {t('【重要】登録商標「共笑®︎」の使用に関する注意書き', '【Important】Notice Regarding Use of Registered Trademark "共笑®︎"')}
                  </h3>
                </div>
              </div>
              <div className="text-left mt-3">
                <p className="text-sm md:text-base font-semibold text-gray-800 mb-1.5">
                  {t('注意書き：商標権について', 'Notice: Regarding Trademark Rights')}
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {t(
                    '「共笑®︎」は、Office KANDYの登録商標です。 当社の許可なく、本商標を無断で使用（複製、転用、販売等）することは、商標法違反にあたりますので、お控えください。',
                    '"共笑®︎" is a registered trademark of Office KANDY. Unauthorized use of this trademark (reproduction, transfer, sale, etc.) without our permission constitutes a violation of trademark law, so please refrain from doing so.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default License

