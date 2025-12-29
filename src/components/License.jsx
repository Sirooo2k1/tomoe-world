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
          alt={t('共笑®︎ ブランド・パートナーシップ制度', '共笑®︎ Brand & Partnership Program')}
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
              {t('共笑®︎ ブランド・パートナーシップ制度', '共笑®︎ Brand & Partnership Program')}
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
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <p className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎ ブランド・パートナーシップ制度', '共笑®︎ Brand & Partnership Program')}
          </p>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-headings text-center italic">
              {t(
                '〜「共笑」の価値を、あなたのビジネスや活動の力に〜',
                '~Turning the value of "共笑" into the power of your business and activities~'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '私たちOffice KANDYは、弊社の登録商標である「共笑®︎（ともえ）」という言葉に、多様性を認め合い、共に未来を創造するという強い意志を込めています。この理念は、私たちだけで独占するものではなく、同じ志を持つパートナーと共に社会へ広げていくべき「共有財産（アセット）」であると考えます。',
                'At Office KANDY, we have imbued our registered trademark "共笑®︎ (tomoe)" with a strong will to recognize diversity and create the future together. We believe this philosophy is not something we should monopolize, but rather a "shared asset" that should be spread throughout society together with partners who share the same aspirations.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                'そこで、理念に深く共感いただき、共に社会的価値を生み出せる企業・団体・自治体の皆様へ、登録商標「共笑®︎」および関連ロゴをご活用いただける「ライセンス・パートナーシップ制度」を開始しました。',
                'Therefore, we have launched a "License & Partnership Program" that allows companies, organizations, and local governments that deeply resonate with this philosophy and can create social value together to utilize the registered trademark "共笑®︎" and related logos.'
              )}
            </p>
          </div>
          <div className="flex justify-center pt-6">
            <img
              src={logoTomoe02}
              alt="tomoe logo"
              className="w-36 h-36 object-contain"
            />
          </div>
          <section className="mt-8 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('パートナーシップで実現できること', 'What Can Be Achieved Through Partnership')}
            </p>
            <p className="text-lg md:text-xl text-headings">
              {t(
                '次のような幅広いシーンで公式にブランドをご利用いただけます。',
                'You can officially use the brand in a wide range of scenarios such as the following:'
              )}
            </p>
            <div className="space-y-6 mt-6">
              <div>
                <p className="text-xl md:text-2xl font-semibold text-headings mb-2">
                  {t('1. 教育・研修・イベント', '1. Education, Training & Events')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    {t(
                      '「共笑®︎」を冠したセミナーやワークショップの開催',
                      'Holding seminars and workshops under the "共笑®︎" name'
                    )}
                  </li>
                  <li>
                    {t(
                      '地域イベントやチャリティ活動のタイトルとしての利用',
                      'Use as a title for local events and charity activities'
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-semibold text-headings mb-2">
                  {t('2. 施設・店舗運営・福祉サービス', '2. Facilities, Store Operations & Welfare Services')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    {t(
                      'カフェ、レストラン、コミュニティスペース等の名称（例：「共笑カフェ」）',
                      'Names for cafes, restaurants, community spaces, etc. (e.g., "共笑カフェ")'
                    )}
                  </li>
                  <li>
                    {t(
                      '介護施設、福祉施設、保育サービス等での名称利用',
                      'Use of names in nursing facilities, welfare facilities, childcare services, etc.'
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-semibold text-headings mb-2">
                  {t('3. ビジネス・広報活動', '3. Business & Public Relations Activities')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    {t(
                      'CSR活動（企業の社会的責任）のプロジェクト名として',
                      'As a project name for CSR activities (Corporate Social Responsibility)'
                    )}
                  </li>
                  <li>
                    {t(
                      '多様性推進キャンペーンや広告企画でのキーワード利用',
                      'Use as a keyword in diversity promotion campaigns and advertising projects'
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-12 space-y-6">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings text-center">
              {t('導入のメリット', 'Benefits of Introduction')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Benefit 1 */}
              <div className="bg-[#FAF8F0] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#F5F1E8]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-sm">
                      <svg className="w-7 h-7 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-headings mb-3">
                      {t('ブランディング強化', 'Enhanced Branding')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        '社会的意義のあるブランドとして、ステークホルダーからの信頼獲得に繋がります。',
                        'As a brand with social significance, it helps gain trust from stakeholders.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-[#FAF8F0] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#F5F1E8]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-sm">
                      <svg className="w-7 h-7 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-headings mb-3">
                      {t('リスク管理', 'Risk Management')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        '正式なライセンス契約を結ぶことで、商標権侵害のリスクなく、安心して広報活動が行えます。',
                        'By entering into a formal license agreement, you can conduct public relations activities with peace of mind, without the risk of trademark infringement.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-[#FAF8F0] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#F5F1E8]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-sm">
                      <svg className="w-7 h-7 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-headings mb-3">
                      {t('共創ネットワーク', 'Co-creation Network')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        'にしゃんた及びOffice KANDYとの連携により、新たなコラボレーションの可能性が生まれます。',
                        'Through collaboration with Nishanta and Office KANDY, new possibilities for collaboration emerge.'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-12 space-y-6">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings text-center">
              {t('ご利用の流れ', 'Usage Process')}
            </p>
            <div className="mt-8 space-y-6">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start gap-6 bg-[#FAF8F0] rounded-xl p-6 shadow-sm border-l-4 border-[#F5F1E8]">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                    <span className="text-2xl font-bold text-[#8B7355]">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-headings mb-2">
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
              <div className="flex flex-col md:flex-row items-start gap-6 bg-[#FAF8F0] rounded-xl p-6 shadow-sm border-l-4 border-[#F5F1E8]">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                    <span className="text-2xl font-bold text-[#8B7355]">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-headings mb-2">
                    {t('審査・ヒアリング', 'Review & Hearing')}
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
              <div className="flex flex-col md:flex-row items-start gap-6 bg-[#FAF8F0] rounded-xl p-6 shadow-sm border-l-4 border-[#F5F1E8]">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                    <span className="text-2xl font-bold text-[#8B7355]">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-headings mb-2">
                    {t('ご契約', 'Contract')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(
                      'ライセンス料や利用条件について取り決めを行います。',
                      'We will establish the license fee and terms of use.'
                    )}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start gap-6 bg-[#FAF8F0] rounded-xl p-6 shadow-sm border-l-4 border-[#F5F1E8]">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-md">
                    <span className="text-2xl font-bold text-[#8B7355]">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-headings mb-2">
                    {t('利用開始', 'Start of Use')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(
                      '商標登録データの提供・プレスリリース。公式パートナーとしての活動スタート。',
                      'Provision of trademark registration data and press release. Start of activities as an official partner.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action message */}
            <div className="mt-10 bg-[#FAF8F0] rounded-2xl p-8 shadow-md border-2 border-[#F5F1E8]">
              <p className="text-xl md:text-2xl font-bold text-center mb-4 text-headings">
                {t('「無断利用」ではなく「正規の連携」を。', '"Official Partnership" rather than "Unauthorized Use".')}
              </p>
              <p className="text-lg md:text-xl text-center leading-relaxed text-gray-700">
                {t(
                  '「共笑®︎」の旗印のもと、御社と共に新しい未来を創れることを楽しみにしています。',
                  'We look forward to creating a new future together with your company under the banner of "共笑®︎".'
                )}
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://tomoeworld.vercel.app/#ask"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-black font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
                style={{
                  background: 'linear-gradient(90deg, #fef3c7, #e9d5ff)',
                  minWidth: '250px',
                  justifyContent: 'center'
                }}
              >
                {t('商標利用・パートナーシップについて問い合わせる', 'Inquire About Trademark Use & Partnership')}
              </a>
            </div>
          </section>
          <p className="text-sm text-headings text-center">
            {t('※ 当ウェブサイトの文言および写真の無断使用は固く禁じております。', 'Unauthorized use of text or photos on this site is strictly prohibited.')}
          </p>
          <p className="text-sm text-headings text-center mt-2">
            {t('※ 共笑®︎は、Office KANDY, Inc.の登録商標です。本ページ記載の正規の手続きを経ない無断での利用はお断りします。', '※ 共笑®︎ is a registered trademark of Office KANDY, Inc. Unauthorized use without following the official procedures described on this page is not permitted.')}
          </p>
        </article>
      </div>
    </>
  )
}

export default License

