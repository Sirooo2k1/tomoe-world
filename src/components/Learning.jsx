import React from 'react'
import learningHeroImage from '../Images/img_08.png'

const Learning = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={learningHeroImage}
          alt={t('共笑® 学びとあんしんサポート', '共笑® Learning and Peace of Mind Support')}
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
              {t('共笑®学びと安心サポート', '共笑® Learning and Peace of Mind Support')}
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
            {t('共笑®︎ 学びとあんしんサポート', '共笑®︎ Learning and Peace of Mind Support')}
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
            <span className="text-gray-500 text-2xl md:text-3xl font-light">「</span>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              {t(
                '教育にプロの安心を。安全に仏教の慈悲を。',
                'Professional peace of mind in education. Buddhist compassion in safety.'
              )}
            </p>
            <span className="text-gray-500 text-2xl md:text-3xl font-light">」</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto px-4 mb-12 md:mb-16">
          <div className="space-y-8 md:space-y-10">
            {/* Quote Section */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mb-6">
                {t(
                  '本気で「共に笑える社会」を実装するプロ集団。',
                  'A professional group seriously implementing a "society where we can laugh together."'
                )}
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-relaxed">
                {t(
                  '「曖昧な安心ではなく、根拠のある安全を届けたい」',
                  '"We want to deliver safety based on evidence, not vague peace of mind"'
                )}
              </p>
            </div>

            {/* Description Paragraph */}
            <div className="bg-[#FAF8F0] border-2 border-[#F5F1E8] rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                {language === 'ja' ? (
                  <>
                    Office KANDYは、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>「教育の実務」「知の理論」「安全の守護」</span>を統合したスペシャリストチームです。机上の空論ではない、現場に即したオーダーメイドの解決策を、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #059669 0%, #0ea5e9 50%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>対面（拠点・訪問）・オンライン・全国出張</span>で迅速に提供します。
                  </>
                ) : (
                  'Office KANDY is a specialist team that integrates "educational practice," "theory of knowledge," and "safety protection." We quickly provide on-site, customized solutions, not empty theories, through face-to-face (base/visit), online, and nationwide dispatch services.'
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
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = '/ask'
                      }}
                      className="font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-colors duration-300 cursor-pointer"
                    >共笑®︎ホーム</a>」は、単なる施設ではありません。ここは、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎カフェ</span>であり、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎寺子屋</span>であり、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎カウンセリングルーム</span>を兼ねた、会員様のためのサンクチュアリです。
                  </>
                ) : (
                  '"共笑®︎ Home" is not just a facility. This is a sanctuary for members that combines 共笑®︎ Cafe, 共笑®︎ Terakoya, and 共笑®︎ Counseling Room.'
                )}
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {language === 'ja' ? (
                  <>
                    ご利用者様のプライバシーと安全を完全確保するため、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>所在地は現在非公開</span>。厳格な予約制をとっております。ご縁をいただいた方にのみ開かれる「特別な秘密基地」で、心安らぐ時間をご提供します。
                  </>
                ) : (
                  'To fully ensure the privacy and safety of our users, the location is currently undisclosed. We operate under a strict reservation system. We provide peaceful time in this "special secret base" that opens only to those with whom we have a connection.'
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
              <span>{t('共笑®︎（ともえ）ブランドのソリューション', '共笑®︎ (Tomoe) Brand Solutions')}</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t(
                '既成の枠組みに捉われない、私たちの専門性と登録商標の誇りを込めた「実益重視」の役務一覧です。',
                'A list of services focused on practical benefits, incorporating our expertise and pride in our registered trademark, unbound by conventional frameworks.'
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
                  {t('次世代の知性と個性を育む', 'Nurturing Next Generation Intelligence and Individuality')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎知能開発シッター', '共笑®︎ Intelligence Development Sitter')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '保育のプロが監修。落語や法話のエッセンスを取り入れ、多角的な視点と豊かな情緒を養う唯一無二の教育シッティングです。',
                      'Supervised by childcare professionals. Incorporating the essence of rakugo and Buddhist sermons, this is a unique educational sitting that nurtures multifaceted perspectives and rich emotions.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎寺子屋', '共笑®︎ Terakoya')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '社会学の知見をベースに、学校では教えない「多様性を生き抜く地頭」と「しなやかな精神」を教授します。',
                      'Based on sociological insights, we teach "intellectual ability to navigate diversity" and "resilient spirit" that schools do not teach.'
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
                  {t('暮らしと尊厳を支える', 'Supporting Life and Dignity')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #059669 0%, #0ea5e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎ライフ・コンシェルジュ', '共笑®︎ Life Concierge')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '30年のキャリアを持つケアマネジャーが、ご家族のQOL（生活の質）を最大化。家事から高度なケアプランまで対応します。',
                      'A care manager with 30 years of experience maximizes your family\'s QOL (quality of life). We handle everything from housework to advanced care plans.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('行政・法的手続き伴走サポート', 'Administrative & Legal Procedure Support')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '政策実務を知り尽くしたプロが、複雑な手続きをストレートかつ最短ルートで解決に導きます。',
                      'Professionals who know policy practice thoroughly guide complex procedures to resolution in a straightforward and shortest route.'
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
                  {t('徹底した安全管理とリスクヘッジ', 'Thorough Safety Management and Risk Hedging')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎セーフティ・監査', '共笑®︎ Safety Audit')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '園やオフィスにおける潜在的リスクを徹底排除。救急法のプロによるマニュアル構築と、現場実務の最適化を支援します。',
                      'Thoroughly eliminate potential risks in facilities and offices. We support manual construction by emergency response professionals and optimization of on-site practices.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎セキュリティ・ガード', '共笑®︎ Security Guard')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '単なる見守りではありません。入浴・外出時の身体保護から不審者対策まで、命を守る実務を完遂します。',
                      'Not just watching. We complete practical work to protect lives, from physical protection during bathing and going out to suspicious person countermeasures.'
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
                  {t('精神の調和と進むべき道', 'Spiritual Harmony and the Path Forward')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎カウンセリング', '共笑®︎ Counseling')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '僧侶による深い内省と、社会学的な構造分析。あなたの悩みを個人的な問題から「社会の中の自分」へと昇華させ、前向きな決断を後押しします。',
                      'Deep introspection by a monk and sociological structural analysis. We elevate your concerns from personal problems to "yourself in society" and support positive decisions.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Runners Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12 md:mb-16">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-baseline justify-center gap-3">
              <span className="text-4xl md:text-5xl flex-shrink-0">🤝</span>
              <span>{t('各分野のトップランナーが伴走します', 'Top Runners in Each Field Will Accompany You')}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Crew Member 1 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-blue-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('ちえ（実践とケアの最高責任者）', 'Chie (Chief of Practice & Care)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '保育士・ケアマネジャー等、福祉教育の多角的資格を保持。30年の現場経験に基づき、忖度のない本質的な解決策を提案します。',
                  'Holds multiple qualifications in welfare education such as childcare worker and care manager. Based on 30 years of field experience, proposes essential solutions without flattery.'
                )}
              </p>
            </div>

            {/* Crew Member 2 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-pink-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('にしゃんた（理論と精神の求道者）', 'Nishanta (Seeker of Theory & Spirit)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '社会学博士・浄土真宗僧侶・元国会議員政策担当秘書。知の理論と笑いの力で、困難を可能性へと転換させる稀代の戦略家です。',
                  'Doctor of Sociology, Jodo Shinshu Buddhist monk, former policy secretary to Diet members. A rare strategist who transforms difficulties into possibilities through the theory of knowledge and the power of laughter.'
                )}
              </p>
            </div>

            {/* Crew Member 3 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-orange-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('さとし（安全と守護のスペシャリスト）', 'Satoshi (Safety & Protection Specialist)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '救急法・水上安全の専門家。机上ではなく現場で「命」を守り抜く実務を遂行する、チームの強力なセーフティネットです。',
                  'Expert in emergency response and water safety. A powerful safety net for the team who performs practical work to protect "lives" on-site, not on paper.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Steps to Start Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12 md:mb-16">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl md:text-5xl">🔥</span>
              <span>{t('スタートまでの確実なステップ', 'Reliable Steps to Start')}</span>
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
                      'フォームまたは公式LINEよりご連絡ください。誠意を持って即応します。',
                      'Please contact us via form or official LINE. We will respond immediately with sincerity.'
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
                      {t('専門家による初回ヒアリング', 'Initial Hearing by Specialists')}
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
                      {t('カスタマイズプラン策定', 'Custom Plan Development')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      'あなた（御社）にとっての最適解を、明確な見積と共に提示します。',
                      'We present the optimal solution for you (your company) along with a clear estimate.'
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
                      '内容に完全にご納得いただいた後、正式な会員登録・契約となります。',
                      'After you are completely satisfied with the content, we proceed with formal membership registration and contract.'
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
                      {t('価値の提供スタート', 'Value Delivery Start')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      '私たちが全力で、あなたの「共笑®︎」を加速させます。',
                      'We will do our best to accelerate your "共笑®︎".'
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
                      '本物の知恵と安心を、その手に。',
                      'Genuine wisdom and peace of mind in your hands.'
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
                      '私たちは「価格」ではなく「提供価値の深さ」で選ばれるチームです。',
                      'We are a team chosen for the "depth of value provided" rather than "price."'
                    )}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {t(
                      '家族の未来、組織の安全に、一切の妥協は許しません。',
                      'We allow no compromise whatsoever in the future of families and the safety of organizations.'
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
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = '/ask'
                    }}
                    className="text-xl md:text-2xl font-bold text-gray-800 underline decoration-2 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-colors duration-300 cursor-pointer"
                  >
                    {t('お問い合わせ・ご相談はこちら', 'Inquiry & Consultation Here')}
                  </a>
                </div>
                <p className="text-sm md:text-base text-gray-600 italic">
                  {t(
                    '※会員制につき、お問い合わせ後の審査を設けております。予めご了承ください。',
                    '*Due to our membership system, we have a review process after inquiries. Please understand in advance.'
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

export default Learning
