import React from 'react'
import Hero from './Hero'

const Landing = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      <Hero language={language} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <article className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-headings mb-6">
                {t('共笑®︎', '共笑®︎')}
              </h1>
              <p className="text-2xl md:text-3xl font-display font-semibold mb-8 leading-relaxed" style={{
                background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {t(
                  '共楽Joy 共学Learn 共育Grow 共活Empower 共創Create',
                  '共楽Joy 共学Learn 共育Grow 共活Empower 共創Create'
                )}
              </p>
              <p className="text-xl md:text-2xl italic mb-12" style={{
                color: '#8B7355'
              }}>
                {t(
                  'ただ、共に生きるのではない。響き合い、高め合う。一歩先の共生へ。',
                  'It\'s not just about living together. It\'s about resonating with one another and mutually elevating each other. Moving one step further toward coexistence.'
                )}
              </p>
            </div>

            <div className="text-gray-700 leading-relaxed text-base md:text-lg space-y-6 max-w-4xl mx-auto">
              <p className="indent-4 md:indent-6">
                {t(
                  '私たちは、この『共笑®︎（tomoe）』社会の実現を目指しています。これは、にしゃんた博士が提唱する「単に共に生きる（共生）だけではなく、その質を高め合うことが重要である」という哲学に基づいたものです。私たちはこの価値観を共有するメンバーとネットワークを築き、より良い社会づくりに取り組んでいます。',
                  'We are working to realize a 共笑®︎ (tomoe) society. This vision is grounded in the philosophy proposed by Dr. Nishanta: that it\'s not enough to simply coexist—we must mutually elevate the quality of our shared life. We build networks with members who share these values and work together to build a better society.'
                )}
              </p>
              <p className="indent-4 md:indent-6">
                {t(
                  '私たちの活動領域は、講演会や研修、講師派遣の枠を超え、大きく広がっています。『共笑®︎』は、教育、ビジネス、飲食、イベント、農業、福祉、冠婚葬祭など、生活に関わる幅広い分野で商標登録された信頼のブランドです。この基盤のもと、タレントマネジメントやショップ・塾の運営、暮らしを支える事業など多岐にわたる活動を展開しています。',
                  'Our activities extend well beyond the scope of lectures, training sessions, and speaker dispatch. 共笑®︎ is a trusted brand registered across a wide range of life-related fields, including education, business, food and beverage, events, agriculture, welfare, and ceremonial occasions. Building on this foundation, we engage in diverse activities including talent management, shop and school operations, and businesses that support daily life.'
                )}
              </p>
              <p className="indent-4 md:indent-6">
                {t(
                  'さらに、事業収益の一部は「共笑®︎基金」へ還元し、国内外でのボランティア活動を積極的に推進。「共に笑う」未来のために、私たちは皆さんと共に歩み続けます。',
                  'Furthermore, a portion of our business revenue is returned to the 共笑®︎ Fund, and we actively promote volunteer activities both domestically and internationally. For a future where we can laugh together, we continue to walk forward together with everyone.'
                )}
              </p>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block bg-[#FAF8F0] rounded-2xl p-8 shadow-md border-2 border-[#F5F1E8] max-w-2xl">
                <p className="text-2xl md:text-3xl font-display font-bold text-headings mb-4">
                  {t('PARTNERSHIP', 'PARTNERSHIP')}
                </p>
                <p className="text-xl md:text-2xl text-headings">
                  {t(
                    '共笑®︎ライセンス・パートナーシップ ― 登録商標の正規提供と連携事業',
                    '共笑®︎ License & Partnership ― Official Trademark Licensing & Collaboration'
                  )}
                </p>
                <div className="mt-6">
                  <a
                    href="https://tomoeworld.vercel.app/#license"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-black font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
                    style={{
                      background: 'linear-gradient(90deg, #fef3c7, #e9d5ff)',
                      minWidth: '250px',
                      justifyContent: 'center'
                    }}
                  >
                    {t('詳しく見る', 'Learn More')}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default Landing

