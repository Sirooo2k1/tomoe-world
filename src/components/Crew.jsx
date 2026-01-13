import React from 'react'
import crewHeroImage from '../Images/cropped-03.png'
import crewBannerImage from '../Images/tomoe-crew-1-1024x638.png'

const Crew = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={crewHeroImage}
          alt={t('共笑®︎クルー', '共笑®︎ Crew')}
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
              {t('共笑®︎クルー', '共笑®︎ Crew')}
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
            src={crewBannerImage}
            alt={t('共笑®︎クルー', '共笑®︎ Crew')}
            className="w-full h-auto object-cover block"
          />
          <div className="text-center mt-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 text-headings leading-tight">
              {t(
                <>
                  TOMOE®︎<br />
                  PROFESSIONAL<br />
                  CREW
                </>,
                <>
                  TOMOE®︎<br />
                  PROFESSIONAL<br />
                  CREW
                </>
              )}
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 mt-4">
              {t('登録商標「共笑®︎」実装実務家集団', 'Registered Trademark "共笑®︎" Implementation Practitioners Group')}
            </p>
          </div>
        </div>
        <article className="p-6 md:p-10 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-headings mb-6">
            {t('共笑®︎ CONCEPT', '共笑®︎ CONCEPT')}
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            {t(
              '私たちは多様性に満ちた世界で生きています。その中で「共生」という概念は重要な道標となりますが、単に共に生きるだけでは不十分です。実際には、すでに共に生きている私たちがさらにその質を高めることが求められています。',
              'We live in a world full of diversity. In this context, the concept of "共生" (coexistence) serves as an important guidepost, but simply living together is not enough. In reality, we who are already living together are required to further enhance the quality of that coexistence.'
            )}
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            {t(
              '具体的には、共に楽しむ「共楽」、共に学ぶ「共学」、共に育つ「共育」、共に生き活かされる「共活」、共に未来を創造する「共創」そして共に笑う「共笑®︎」ことが重要です。単なる共生では、多様な違いを無視しがちであり、その結果、差別や同化、分離といった問題が生じてしまいます。',
              'Specifically, it is important to enjoy together ("共楽"), learn together ("共学"), grow together ("共育"), live and be empowered together ("共活"), create the future together ("共創"), and laugh together ("共笑®︎"). In mere coexistence, we tend to ignore diverse differences, which results in problems such as discrimination, assimilation, and separation.'
            )}
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            {t(
              '持続可能で平和な社会を築くためには、「共笑®︎」の考え方が必要です。これは、自己、家族、友人、地域、企業、国家といったあらゆるレベルでの幸せと発展に寄与するものです。',
              'To build a sustainable and peaceful society, the concept of "共笑®︎" is necessary. This contributes to happiness and development at all levels: self, family, friends, community, business, and nation.'
            )}
          </p>
          <div className="mt-8 md:mt-10 text-center">
            <div className="inline-block">
              <hr className="border-t-2 border-black mb-6 w-full" />
              <p className="text-xl md:text-2xl font-semibold text-black">
                {t('「共笑®︎」創案者 にしゃんた博士', '"共笑®︎" Originator Dr. Nishanta')}
              </p>
            </div>
          </div>
        </article>

        {/* CREW SPECS Section */}
        <section className="mt-6 md:mt-8">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-headings text-center mb-8 md:mb-12">
            {t('CREW SPECS', 'CREW SPECS')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch" style={{ gridAutoRows: '1fr' }}>
            {/* おがわ ちえ */}
            <div className="bg-[#FAF8F0] rounded-xl p-5 md:p-6 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="mb-3">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-headings mb-2">
                  {t('おがわ ちえ', 'Ogawa Chie')}
                </h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 border-2 border-orange-300">
                  <p className="text-lg md:text-xl font-semibold" style={{ color: '#EA580C' }}>
                    {t('代表', 'Representative')}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: '#EA580C' }}>
                {t('Office Kandy, Inc. 代表 / 介護福祉士 / 保育士 / ケアマネジャー / 認知症介護指導者', 'Representative, Office Kandy, Inc. / Certified Care Worker / Childcare Worker / Care Manager / Dementia Care Instructor')}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                {t('「共笑®︎」の生みの親であり実務最高責任者。30年の現場経験から多様な人々が心から笑い合える役務を構築。忖度のないストレートな視点で、現場に必要な「本質的なケア」と「組織運営」を実装します。', '"共笑®︎" creator and highest practical responsibility officer. Building services where diverse people can laugh from the heart, based on 30 years of field experience. Implementing "essential care" and "organizational management" needed in the field with a straightforward perspective without flattery.')}
              </p>
            </div>

            {/* にしゃんた */}
            <div className="bg-[#FAF8F0] rounded-xl p-5 md:p-6 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="mb-3">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-headings mb-2">
                  {t('にしゃんた', 'Nishanta')}
                </h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border-2 border-blue-300">
                  <p className="text-lg md:text-xl font-semibold" style={{ color: '#2563EB' }}>
                    {t('提唱者', 'Advocate')}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: '#2563EB' }}>
                {t('社会学者 / 経済学博士 / 国会議員政策担当秘書 / 空手指導員 / 僧侶 / 落語家', 'Sociologist / Ph.D. in Economics / Parliamentary Policy Secretary / Karate Instructor / Buddhist Priest / Rakugo Performer')}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                {t('多文化共生の理論的支柱。学問的「知」、武道の「軸」、落語の「笑い」を融合。社会構造をマクロ・ミクロ両面から分析し、組織や個人のOSを「共笑®︎」仕様へとアップデートする戦略家です。', 'Theoretical pillar of multicultural coexistence. Fusing academic "knowledge," martial arts "axis," and rakugo "laughter." A strategist who analyzes social structures from both macro and micro perspectives, updating organizations and individuals\' OS to "共笑®︎" specifications.')}
              </p>
            </div>

            {/* さとし */}
            <div className="bg-[#FAF8F0] rounded-xl p-5 md:p-6 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="mb-3">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-headings mb-2">
                  {t('さとし', 'Satoshi')}
                </h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 border-2 border-green-300">
                  <p className="text-lg md:text-xl font-semibold" style={{ color: '#16A34A' }}>
                    {t('安全', 'Safety')}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: '#16A34A' }}>
                {t('救急法指導員 / 水上安全法指導員 / 幼児安全法指導員', 'First Aid Instructor / Water Safety Instructor / Child Safety Instructor')}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                {t('共笑®︎の場における「絶対的な安全」を担保する要。救急・安全実務のプロとして、教育現場や福祉施設におけるリスクを徹底排除。すべての人に「命の安心」を提供します。', 'The key to ensuring "absolute safety" in 共笑®︎ spaces. As a professional in emergency and safety practices, thoroughly eliminating risks in educational and welfare facilities. Providing "peace of mind for life" to everyone.')}
              </p>
            </div>

            {/* あかね */}
            <div className="bg-[#FAF8F0] rounded-xl p-5 md:p-6 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="mb-3">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-headings mb-2">
                  {t('あかね', 'Akane')}
                </h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 border-2 border-pink-300">
                  <p className="text-lg md:text-xl font-semibold" style={{ color: '#DB2777' }}>
                    {t('美容', 'Beauty')}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: '#DB2777' }}>
                {t('aaa crc公認ビューティーアドバイザー', 'AAA CRC Certified Beauty Advisor')}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                {t('外見を整えることは、尊厳を守ること。美容の専門知見に基づき、その人らしい「輝き」を引き出します。内面と外面の調和を図り、社会と関わるための「共笑®︎ビューティー」を実践します。', 'Maintaining appearance is protecting dignity. Drawing out each person\'s unique "radiance" based on beauty expertise. Achieving harmony between inner and outer beauty, practicing "共笑®︎ Beauty" for engaging with society.')}
              </p>
            </div>

            {/* じん */}
            <div className="bg-[#FAF8F0] rounded-xl p-5 md:p-6 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col md:col-span-2 md:max-w-[calc(50%-1rem)]">
              <div className="mb-3">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-headings mb-2">
                  {t('じん', 'Jin')}
                </h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 border-2 border-purple-300">
                  <p className="text-lg md:text-xl font-semibold" style={{ color: '#9333EA' }}>
                    {t('身体', 'Body')}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: '#9333EA' }}>
                {t('身体構造専門家 / 散打全国2位 / 運動マッサージ・太極拳専門', 'Body Structure Specialist / National Sanda 2nd Place / Exercise Massage & Tai Chi Specialist')}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                {t('解剖学・運動力学に基づいた身体調整のプロ。アスリートの実績と医学的知見を掛け合わせ、「生涯、自分の足で笑って動ける身体」を再構築。機能回復から向上まで実務として完遂します。', 'A professional in body adjustment based on anatomy and exercise mechanics. Combining athletic achievements with medical knowledge, reconstructing "a body that can laugh and move on one\'s own feet for life." Completing everything from functional recovery to improvement as practical work.')}
              </p>
            </div>
          </div>
        </section>

        {/* TRADEMARK STRATEGY Section */}
        <section className="mt-12 md:mt-16">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-headings text-center mb-6 md:mb-8">
            {t('TRADEMARK STRATEGY', 'TRADEMARK STRATEGY')}
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch" style={{ gridAutoRows: '1fr' }}>
              {/* 経営・広告 */}
              <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 opacity-10 rounded-bl-full"></div>
                <div className="relative flex flex-col flex-grow">
                  <div className="text-5xl md:text-6xl font-display font-bold text-gray-200 mb-1.5">35</div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2" style={{ color: '#EA580C' }}>
                    {t('経営・広告', 'Management & Advertising')}
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                    {t('組織変革、ダイバーシティ経営のコンサルティング、および「共笑®︎」ブランドを用いた事業支援。', 'Organizational transformation, diversity management consulting, and business support using the "共笑®︎" brand.')}
                  </p>
                </div>
              </div>

              {/* 教育・文化 */}
              <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 rounded-bl-full"></div>
                <div className="relative flex flex-col flex-grow">
                  <div className="text-5xl md:text-6xl font-display font-bold text-gray-200 mb-1.5">41</div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2" style={{ color: '#2563EB' }}>
                    {t('教育・文化', 'Education & Culture')}
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                    {t('ダイバーシティ能力検定®︎の運営、寺子屋、武道指導、落語、各種セミナーの実装。', 'Operation of Diversity Ability Certification®︎, terakoya (traditional schools), martial arts instruction, rakugo, and implementation of various seminars.')}
                  </p>
                </div>
              </div>

              {/* 飲食・宿泊 */}
              <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 opacity-10 rounded-bl-full"></div>
                <div className="relative flex flex-col flex-grow">
                  <div className="text-5xl md:text-6xl font-display font-bold text-gray-200 mb-1.5">43</div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2" style={{ color: '#16A34A' }}>
                    {t('飲食・宿泊', 'Food & Lodging')}
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                    {t('共笑®︎カフェ、宿泊、および保育・シッターサービス（預かり）の実務提供。', 'Practical provision of 共笑®︎ Cafe, lodging, and childcare/sitter services (daycare).')}
                  </p>
                </div>
              </div>

              {/* 医療・美容・健康 */}
              <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 opacity-10 rounded-bl-full"></div>
                <div className="relative flex flex-col flex-grow">
                  <div className="text-5xl md:text-6xl font-display font-bold text-gray-200 mb-1.5">44</div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2" style={{ color: '#DB2777' }}>
                    {t('医療・美容・健康', 'Medical, Beauty & Health')}
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                    {t('整体、マッサージ、身体構造の調整、および専門的ビューティーカウンセリング。', 'Seitai (body alignment), massage, body structure adjustment, and professional beauty counseling.')}
                  </p>
                </div>
              </div>

              {/* 個人的・社会的役務（守護・伴走） */}
              <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-[#F5F1E8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 opacity-10 rounded-bl-full"></div>
                <div className="relative flex flex-col flex-grow">
                  <div className="text-5xl md:text-6xl font-display font-bold text-gray-200 mb-1.5">45</div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2" style={{ color: '#9333EA' }}>
                    {t('個人的・社会的役務（守護・伴走）', 'Personal & Social Services (Guardian & Support)')}
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                    {t('身辺警護、家事代行、法的手続きの伴走、個人的カウンセリング等、個人の尊厳と権利を守るためのトータルサポート。', 'Personal security, housekeeping services, legal procedure support, personal counseling, and total support to protect individual dignity and rights.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 md:mt-16 mb-4 md:mb-6">
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-3xl md:text-4xl font-display font-bold text-headings mb-6 md:mb-8 leading-relaxed">
              {t(
                'このクルーと共に、新しい未来を創りませんか。',
                'Would you like to create a new future together with this crew?'
              )}
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed">
              {t(
                '私たちは教えるだけでなく、自ら現場で動く「実務集団」です。100点満点の結果を追求します。',
                'We are not just teachers, but a "practical group" that works in the field ourselves. We pursue perfect results.'
              )}
            </p>
            <div className="mb-10 md:mb-12">
              <a
                href="https://tomoeworld.com/ask"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #fef3c7, #e9d5ff)',
                  minWidth: '250px',
                  justifyContent: 'center'
                }}
              >
                {t('GET IN TOUCH', 'GET IN TOUCH')}
              </a>
            </div>
            <div className="border-t-2 border-[#E6D5B8] pt-6 md:pt-8">
              <p className="text-sm md:text-base text-gray-600 mb-2">
                {t('© Office KANDY, Inc.', '© Office KANDY, Inc.')}
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                {t('TRADEMARKED: 共笑®︎ / ダイバーシティ能力検定®︎', 'TRADEMARKED: 共笑®︎ / ダイバーシティ能力検定®︎')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Crew
