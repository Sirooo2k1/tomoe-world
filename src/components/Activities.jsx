import React from 'react'
import mirrorLakeImage from '../Images/img_02.png'
import activitiesImage from '../Images/img2_2.png'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const Activities = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={mirrorLakeImage}
          alt={t('共笑®︎活動', '共笑®︎ Activities')}
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
              {t('共笑®︎活動', '共笑®︎ Activities')}
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
      <article className="p-8 md:p-12">
        {/* Ở đây sẽ thêm nội dung chi tiết cho 共笑®︎活動 */}
        <section className="text-gray-700 leading-relaxed text-base md:text-lg space-y-4">
          <p className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎活動｜笑顔と共感で未来を創る取り組み', '共笑®︎ Activities | Creating the Future with Smiles & Empathy')}
          </p>
          <p>
            {t(
              '共笑®︎活動は、「共に笑い（共笑®︎）、共に楽しみ（共楽）、共に学び（共学）、共に育ち（共育）、共に生き・活かされ（共活）、共に未来を創る（共創）」を理念に掲げ、多様性を楽しみながら人と人とのつながりを深め、共に成長するためのさまざまな取り組みを展開しています。',
              '共笑®︎ Activities, guided by the principles of laughing together (共笑®︎), enjoying together (共楽), learning together (共学), growing together (共育), living and being enlivened together (共活), and creating the future together (共創), develops various initiatives to deepen connections between people and grow together while enjoying diversity.'
            )}
          </p>
        </section>
        <div className="mt-8 rounded-[32px] shadow-lg overflow-hidden aspect-[16/9] bg-[#F5F1E8] border-4 border-[#F5F1E8]">
          <img
            src={activitiesImage}
            alt={t('共笑®︎活動', '共笑®︎ Activities')}
            className="w-full h-full object-cover block scale-105 transform-gpu"
          />
        </div>
        <section className="mt-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <p className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎活動の主な取り組み', 'Main 共笑®︎ Activities')}
          </p>
          
          {/* 共笑®︎ホーム（ベース）Section */}
          <div className="mb-6 space-y-4">
            <p className="text-xl font-bold text-headings">
              {t('共笑®︎ホーム（ベース）', '共笑®︎ Home (Base)')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t(
                '「共笑®︎ホーム」は、Office KANDYが運営する完全予約制・会員制の多機能型拠点です。ここは、カフェであり、学び舎であり、スタジオであり、相談室。そして企業の戦略基地でもあります。',
                '"共笑®︎ Home" is a fully reserved, membership-based multifunctional base operated by Office KANDY. It is a cafe, a learning space, a studio, a consultation room, and also a strategic base for companies.'
              )}
          </p>
            <div className="flex justify-start pt-2">
              <a
                href="/homebase"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/homebase'
                  window.scrollTo({ top: 0, behavior: 'auto' })
                }}
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('JUMP', 'JUMP')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-xl font-bold text-headings">
                {t('共笑®︎講演会', '共笑®︎ Lectures')}
              </p>
              <p>
                {t(
                  '多様性や共感、共生をテーマに、笑顔とともに心に響くメッセージを届けます。企業、教育機関、自治体など、さまざまな場で開催されています。',
                  'We deliver messages that resonate with the heart, along with smiles, on themes of diversity, empathy, and coexistence. These are held at companies, educational institutions, municipalities, and various other venues.'
                )}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-headings">
                {t('共笑®︎塾', '共笑®︎ Jyuku')}
              </p>
              <p>
                {t(
                  '学びを通じて多様性を受け入れ、共感力を育む場です。ワークショップやプロジェクト型学習を通じて、地域や職場で実践できるスキルと意識を高めます。',
                  'It is a place to accept diversity and nurture empathy through learning. Through workshops and project-based learning, we enhance skills and awareness that can be practiced in communities and workplaces.'
                )}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-headings">
                {t('共笑®︎SHOP', '共笑®︎ SHOP')}
              </p>
              <p>
                {t(
                  '多様性を楽しむ商品やサービスを通じて、笑顔と共感を広げる場です。人と人をつなぐ新たな価値観や体験を提供します。',
                  'It is a place to spread smiles and empathy through products and services that celebrate diversity. We provide new values and experiences that connect people.'
                )}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-headings">
                {t('共笑®︎祭', '共笑®︎ Festival')}
              </p>
              <p>
                {t(
                  '地域や世代を超えた交流を楽しむイベントです。音楽やアート、文化体験を通じて、笑顔と共感の輪を広げます。',
                  'It is an event to enjoy exchanges that transcend regions and generations. Through music, art, and cultural experiences, we spread the circle of smiles and empathy.'
                )}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-headings">
                {t('共笑®︎ボランティア　｜　共笑®︎献血キャンペーン', '共笑®︎ Volunteer ｜ 共笑®︎ Blood Donation Campaign')}
              </p>
              <p>
                {t(
                  '社会貢献活動として、ボランティア活動や献血キャンペーンを積極的に推進しています。地域社会への貢献を通じて、共笑®︎の理念を実践しています。',
                  'As social contribution activities, we actively promote volunteer activities and blood donation campaigns. Through contributions to local communities, we practice the philosophy of 共笑®︎.'
                )}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-headings">
                {t('共笑®︎基金', '共笑®︎ Fund')}
              </p>
              <p>
                {t(
                  '共笑®︎の理念を支える活動を応援するための基金です。多様性や共生を推進するプロジェクトや教育活動を支援しています。',
                  'It is a fund to support activities that uphold the 共笑®︎ philosophy. We support projects and educational activities that promote diversity and coexistence.'
                )}
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-8 max-w-2xl mx-auto" />
          <div className="space-y-3">
            <p className="text-xl font-bold text-headings">
              {t('共笑®︎活動が目指す未来', 'The Future 共笑®︎ Activities Aim For')}
            </p>
            <p>
              {t(
                '共笑®︎活動は、一人ひとりが笑顔でつながり、多様性を活かした社会を共に創ることを目指しています。講演や学びの場から日々の暮らしに至るまで、笑顔と共感が広がる世界を実現するための一歩をサポートします。',
                '共笑®︎ Activities aim to create a society together where each person connects with smiles and leverages diversity. We support steps toward realizing a world where smiles and empathy spread from lectures and learning spaces to daily life.'
              )}
            </p>
            <p>
              {t(
                '共笑®︎活動を通じて、笑顔がつながる新たな未来を一緒に創りませんか？詳しい情報やご参加については、お気軽にお問い合わせください。',
                'Would you like to create a new future together where smiles connect through 共笑®︎ Activities? For detailed information or to participate, please feel free to contact us.'
              )}
            </p>
            <div className="flex justify-center pt-6">
              <img
                src={logoTomoe02}
                alt="tomoe logo"
                className="w-28 h-28 object-contain"
              />
            </div>
            <p className="text-sm text-headings text-center">
              {t('※ 当ウェブサイトの文言および写真の無断使用は固く禁じております。', 'Unauthorized use of text or photos on this site is strictly prohibited.')}
            </p>
            <p className="text-sm text-headings text-center mt-2">
              {t('※ 共笑®︎は、Office KANDY, Inc.の登録商標です。無断での利用はお断りします。', '共笑®︎ is a registered trademark of Office KANDY, Inc. Unauthorized use is not permitted.')}
            </p>
          </div>
        </section>
      </article>
      </div>
    </>
  )
}

export default Activities

