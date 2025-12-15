import React from 'react'
import nishantomodiverImage from '../Images/nishantomodiver.png'
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
          alt={t('共笑®︎活動', 'TOMOE Activities')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
              {t('共笑®︎活動', 'TOMOE Activities')}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="p-8 md:p-12">
        <header className="mb-8">
          <h1 className="mb-6">
            <img
              src={nishantomodiverImage}
              alt={t('共楽・共学・共育・共笑®︎｜共に楽しみ、学び、育ち、共に笑おう', '共楽・共学・共育・共笑®︎ | Let\'s enjoy, learn, grow, and laugh together')}
              className="w-full h-auto max-w-full"
            />
          </h1>
        </header>

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
            alt={t('共笑®︎活動', 'TOMOE Activities')}
            className="w-full h-full object-cover block scale-105 transform-gpu"
          />
        </div>
        <section className="mt-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <p className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎活動の主な取り組み', 'Main 共笑®︎ Activities')}
          </p>
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
                {t('共笑®︎祭', 'TOMOE Festival')}
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

