import React from 'react'
import healthHeroImage from '../Images/cropped-04.png'
import fit1Image from '../Images/fit-1.png'

const Health = ({ language = 'ja', onNavigate }) => {
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
          src={healthHeroImage}
          alt={t('共笑® からだ・健康・きれい相談室', '共笑® Body, Health, Beauty Consultation Room')}
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
              {t('共笑® からだ・健康・きれい相談室', '共笑® Body, Health, Beauty Consultation Room')}
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
        <div className="mb-8">
          <img
            src={fit1Image}
            alt={t('共笑® からだ・健康・きれい相談室', '共笑® Body, Health, Beauty Consultation Room')}
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Title and Subtitle Section */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8 text-gray-800">
            {t('共笑®︎ からだ・健康・きれい相談室', '共笑®︎ Body, Health, Beauty Consultation Room')}
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
            <span className="text-gray-500 text-2xl md:text-3xl font-light">「</span>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              {t(
                '身体構造の科学と武道の精神で、一生モノの自分へ',
                'Through the science of body structure and the spirit of martial arts, to a lifelong self'
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
                  '「なんとなく健康」を卒業し、確実な変化を。',
                  '"Graduate from vague health" and achieve certain change.'
                )}
              </p>
            </div>

            {/* Second Quote */}
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-relaxed">
                {t(
                  '「自分史上、最高のパフォーマンスを常に発揮したい」',
                  '"I want to always perform at my best in my personal history"'
                )}
              </p>
            </div>

            {/* Description Paragraph */}
            <div className="bg-[#FAF8F0] border-2 border-[#F5F1E8] rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                {language === 'ja' ? (
                  <>
                    Office KANDYは、<span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>身体構造を知り尽くしたプロ、武道の達人、美容・栄養の専門家</span>による超実践的チームです。医学的根拠のある身体操作と内面からのアプローチを融合させ、<span className="font-bold" style={{ background: 'linear-gradient(135deg, #059669 0%, #0ea5e9 50%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>対面（拠点・訪問）・オンライン・全国出張</span>であなたの「理想」を100点満点の誠意で叶えます。
                  </>
                ) : (
                  'Office KANDY is a highly practical team of professionals who know body structure thoroughly, martial arts masters, and beauty and nutrition specialists. We combine medically-based body manipulation with an inner approach, and with full sincerity, we fulfill your "ideal" through face-to-face (base/visit), online, and nationwide dispatch services.'
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
                    >共笑®︎ホーム</a>」は、Office KANDYが運営する<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>会員制・完全予約制</span>のコンディショニング拠点です。ここは、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎カフェ</span>であり、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎スタジオ</span>であり、<span className="font-bold inline-block" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 1 }}>共笑®︎ビューティーサロン</span>を兼ね備えた、身体調整のための特別な空間です。
                  </>
                ) : (
                  <>
                    「<a
                      href="/ask"
                      onClick={handleContactClick}
                      className="font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-colors duration-300 cursor-pointer"
                    >共笑®︎ Home</a>」 is a membership-based, fully reservation-only conditioning base operated by Office KANDY. This is a special space for body conditioning that combines 共笑®︎ Cafe, 共笑®︎ Studio, and 共笑®︎ Beauty Salon.
                  </>
                )}
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {language === 'ja' ? (
                  <>
                    ご利用者様のプライバシーと安全を完全確保するため、<span className="font-bold" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>所在地は現在非公開</span>。厳格な会員制をとっております。ご縁をいただいた方にのみ開かれる「身体の聖域」で、自分を磨き上げる時間をご提供します。
                  </>
                ) : (
                  'To fully ensure the privacy and safety of our users, the location is currently undisclosed. We operate under a strict membership system. We provide time to refine yourself in this "sanctuary of the body" that opens only to those with whom we have a connection.'
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
              <span className="text-4xl md:text-5xl"></span>
              <span>{t('共笑®︎（ともえ）身体・健康・美のソリューション', '共笑®︎ (Tomoe) Body, Health, Beauty Solutions')}</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t(
                '世の中にある一般的なサービスを、私たちの専門スキルと登録商標の誇りをもって、劇的な実利を生む価値へと昇華させました。',
                'We have elevated common services in the world into values that generate dramatic practical benefits, with our professional skills and the pride of our registered trademark.'
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
                  {t('運動・トレーニング', 'Exercise & Training')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎パーソナルジム', '共笑®︎ Personal Gym')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '身体構造を専門的に学び抜いたプロが、筋肉や骨の構造から分析。最短ルートで「動ける体」を構築します。',
                      'Professionals who have thoroughly studied body structure analyze from the structure of muscles and bones. We build a "movable body" in the shortest route.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎武道フィットネス', '共笑®︎ Martial Arts Fitness')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '武道高段者が指導。護身技術を学びながら、体幹と折れない心を養います。',
                      'High-ranking martial arts practitioners provide instruction. While learning self-defense techniques, you develop core strength and an unbreakable spirit.'
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
                  {t('メンテナンスと回復', 'Maintenance & Recovery')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #059669 0%, #0ea5e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎メディカル整体', '共笑®︎ Medical Seitai')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '身体構造のメカニズムを最適化する実務。痛みの原因を論理的に特定し、身体をリカバリーします。',
                      'Practical work that optimizes the mechanism of body structure. We logically identify the cause of pain and recover the body.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎マインドフル・ストレッチ', '共笑®︎ Mindful Stretch')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '呼吸法と身体操作を融合。脳の疲れと体の強張りを同時に解放します。',
                      'Combines breathing techniques and body manipulation. Simultaneously releases mental fatigue and physical tension.'
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
                  {t('美容と栄養サポート', 'Beauty & Nutrition Support')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎ビューティ・カウンセリング', '共笑®︎ Beauty Counseling')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '公認アドバイザーが、魅力を最大化する外見戦略を提案。対面・オンラインで「きれい」を支えます。',
                      'Certified advisors propose appearance strategies to maximize attractiveness. We support "beauty" through face-to-face and online services.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎アスリート栄養サポート', '共笑®︎ Athlete Nutrition Support')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      'スポーツ栄養学に基づいた食事指導。理論に基づいた一生モノの食習慣を構築します。',
                      'Dietary guidance based on sports nutrition science. We build lifelong eating habits based on theory.'
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
                  {t('介助・安心サポート', 'Assistance & Peace of Mind Support')}
                </h4>
              </div>
              <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎プレミアム入浴介助', '共笑®︎ Premium Bathing Assistance')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '救急法のプロと身体操作のプロがペアで同行。安全に湯に浸かる喜びを提供します。',
                      'Emergency response professionals and body manipulation professionals pair up to accompany. We provide the joy of safely soaking in hot water.'
                    )}
                  </p>
                </div>
                <div className="flex-grow">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-1.5">
                    <span className="font-bold" style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {t('共笑®︎おでかけガード', '共笑®︎ Outing Guard')}
                    </span>
                  </h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t(
                      '外出が不安な方へ。安全のプロが現場で守り抜き、自由な移動をサポートします。',
                      'For those who are anxious about going out. Safety professionals protect on-site and support free movement.'
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
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl md:text-5xl">🤝</span>
              <span>{t('あなたのポテンシャルを引き出す専属クルー', 'Dedicated Crew to Unlock Your Potential')}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Crew Member 1 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-blue-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('じん（身体構造・運動の実務家）', 'Jin (Body Structure & Exercise Practitioner)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '散打全国2位の実績と専門的な身体知見。論理的なアプローチで、あなたの身体ポテンシャルを最大限に引き出します。',
                  'Achieved 2nd place nationally in Sanda with specialized body knowledge. Through a logical approach, we maximize your physical potential.'
                )}
              </p>
            </div>

            {/* Crew Member 2 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-pink-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('あかね・しろう（美と栄養のプロフェッショナル）', 'Akane・Shiro (Beauty & Nutrition Professionals)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '美容の助言者とアスリート栄養学の担い手。外面と内面の両方から、揺るぎない「輝き」と「強さ」を構築します。',
                  'Beauty advisors and sports nutrition specialists. We build unwavering "radiance" and "strength" from both external and internal aspects.'
                )}
              </p>
            </div>

            {/* Crew Member 3 */}
            <div className="bg-white border border-gray-200 border-t-4 border-t-orange-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                <span className="font-bold" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('にしゃんた・さとし（精神と守護のプロ）', 'Nishanta・Satoshi (Spirit & Protection Professionals)')}
                </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t(
                  '武道家の精神と救急・安全の実務能力。あなたのチャレンジを、精神面と安全面の両端から鉄壁にバックアップします。',
                  'Martial artist spirit and emergency/safety practical skills. We provide ironclad backup for your challenges from both mental and safety aspects.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Steps to Start Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12 md:mb-16">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 md:mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl md:text-5xl">🎯</span>
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
                      'フォームまたはLINEよりご連絡ください。専門スタッフが即応します。',
                      'Please contact us via form or LINE. Our specialist staff will respond immediately.'
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
                      {t('パーソナル・カウンセリング', 'Personal Counseling')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      'オンラインまたは対面にて。目標や現在のお悩みをプロが分析します。',
                      'Online or face-to-face. Professionals analyze your goals and current concerns.'
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
                      {t('オーダーメイドプラン策定', 'Custom Plan Development')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      'あなただけのカスタマイズメニューと、明確なお見積りを提示します。',
                      'We present a customized menu just for you and a clear estimate.'
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
                      '内容にご納得いただいた後、正式な会員登録・ご契約となります。',
                      'After you are satisfied with the content, we proceed with formal membership registration and contract.'
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
                      {t('サービス開始', 'Service Start')}
                    </span>
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {t(
                      '理想の自分を更新し続ける日々が始まります。',
                      'The days of continuously updating your ideal self begin.'
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
                      '身体は、人生というビジネスを支える最大の資本です。',
                      'The body is the greatest capital that supports the business of life.'
                    )}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
                </div>

                {/* Sub Slogan */}
                <div className="space-y-3">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                    {t(
                      '私たちは「流行」ではなく「本質」を追求するチームです。',
                      'We are a team that pursues "essence" rather than "trends."'
                    )}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {t(
                      '妥協のないメンテナンスで、人生のクオリティを劇的に変えてみませんか。',
                      'Why not dramatically change the quality of your life with uncompromising maintenance?'
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
                    {t('体験予約・お問い合わせはこちら', 'Experience Reservation & Inquiry Here')}
                  </a>
                </div>
                <p className="text-sm md:text-base text-gray-600 italic">
                  {t(
                    '※完全会員制につき、初回相談後の審査がございます。予めご了承ください。',
                    '*Due to our full membership system, there will be a review after the initial consultation. Please understand in advance.'
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

export default Health
