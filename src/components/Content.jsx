import React from 'react'
import nishantomodiverImage from '../Images/nishantomodiver.png'
import nishantaImage from '../Images/nishanta_img.png'
import logowebImage from '../img_logomxh/logoweb.png'

const Content = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <div id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 pb-16">
      <article className="p-8 md:p-12">
        <header className="mb-8">
          {/* Section: 共笑®︎とは */}
          <section className="mt-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-headings mb-6">
              {t('共笑®︎とは', 'What is TOMOE?')}
            </h2>
            <div className="text-gray-700 leading-relaxed text-base md:text-lg space-y-4">
              <p>
                {t(
                  '　私たちは多様性に満ちた世界で生きています。その中で「共生」という概念は重要な道標となりますが、単に共に生きるだけでは不十分です。実際には、すでに共に生きている私たちがさらにその質を高めることが求められています。',
                  '　We live in a world full of diversity. Within this, the concept of "coexistence" serves as an important guidepost, but simply living together is not sufficient. In reality, we who are already living together are being asked to further enhance the quality of that life.'
                )}
              </p>
              <p>
                {t(
                  '　具体的には、共に楽しむ「共楽」、共に学ぶ「共学」、共に育つ「共育」、共に生き活かされる「共活」、共に未来を創造する「共創」そして共に笑う\'共笑®︎\'ことが重要です。単なる共生では、多様な違いを無視しがちであり、その結果、差別や同化、分離といった問題が生じてしまいます。',
                  '　Specifically, it is important to enjoy together (共楽), learn together (共学), grow together (共育), live and be enlivened together (共活), create the future together (共創), and laugh together (共笑®︎). In mere coexistence, we tend to ignore diverse differences, and as a result, problems such as discrimination, assimilation, and separation arise.'
                )}
              </p>
              <p>
                {t(
                  '　持続可能で平和な社会を築くためには、 \'共笑®︎\' の考え方が必要です。これは、自己、家族、友人、地域、企業、国家といったあらゆるレベルでの幸せと発展に寄与するものです。',
                  '　To build a sustainable and peaceful society, the way of thinking embodied in "共笑®︎" is necessary. This contributes to happiness and development at all levels—individual, family, friends, community, business, and nation.'
                )}
              </p>
            </div>
          </section>
          
          {/* Section: 創案者 */}
          <section className="mt-8 mb-8">
            <p className="text-xl md:text-2xl font-display font-bold text-headings mb-4">
              {t('"共笑®︎"創案者 にしゃんた博士', '"共笑®︎" Founder Dr. Nishanta')}
            </p>
            <p className="text-sm text-gray-600 mt-6">
              {t('※ 当ウェブサイトの文言および写真の無断使用は固く禁じております。', 'Unauthorized use of text or photos on this site is strictly prohibited.')}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {t('※ 共笑®︎は、Office KANDY, Inc.の登録商標です。無断での利用はお断りします。', '共笑®︎ is a registered trademark of Office KANDY, Inc. Unauthorized use is not permitted.')}
            </p>
          </section>
          
          {/* Section: Logo nishantomodiver */}
          <section className="mt-8 mb-8">
            <h1 className="mb-6">
              <img
                src={nishantomodiverImage}
                alt={t('共楽・共学・共育・共笑®︎｜共に楽しみ、学び、育ち、共に笑おう', '共楽・共学・共育・共笑®︎ | Let\'s enjoy, learn, grow, and laugh together')}
                className="w-full h-auto max-w-full"
              />
            </h1>
          </section>
          
          {/* Section: にしゃんた博士の紹介 */}
          <section className="mt-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                <img
                  src={nishantaImage}
                  alt={t('にしゃんた', 'Nishanta')}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1 text-gray-700 leading-relaxed text-base md:text-lg">
                <p className="mb-4">
                  {t(
                    '　英連邦自治領セイロン出身。1987年、17歳でボーイスカウト集いに初来日。一年後、父が家を担保に借りた7万円と片道切符で再来日し、留学開始。日本語能力試験1級合格。新聞奨学生として大学生活を送り、空手四段や公認指導員・審判員資格を取得。弁論大会で多数優勝し、「スピコン荒らし」とあだ名される。',
                    '　Born in the former Dominion of Ceylon. First visited Japan at the age of 17 for a Boy Scout gathering in 1987. Returned a year later with a one-way ticket and ¥70,000 that his father borrowed against their home, and began studying in Japan. Passed the Japanese Language Proficiency Test Level 1. Lived as a newspaper scholarship student during university, earned 4th-dan karate and certified instructor and referee qualifications. Won many speech contests, earning the nickname "the speech contest raider."'
                  )}
                </p>
                <p className="mb-4">
                  {t(
                    '　立命館大学経営学部を学部総代で卒業。名城大学大学院や龍谷大学大学院で学び、経済学や商学修士号と経済学博士号を取得。日本国籍を取得。タレントとして映画『地球のヘソ』主演、落語家としても注目され、テレビ番組で人気に。',
                    '　Graduated as class valedictorian from Ritsumeikan University\'s College of Business Administration. Studied at Meijo University and Ryukoku University graduate schools, earning master\'s degrees in Economics and Commerce and a Ph.D. in Economics. Acquired Japanese nationality. Starred in the film "The Navel of the Earth" as a talent, gained attention as a rakugo performer, and became popular on television programs.'
                  )}
                </p>
                <p>
                  {t(
                    '　大学教授、タレント、随筆家、講演家、僧侶、空手家など多様な顔を持ち"ミスター・ダイバーシティ"とも称される人物である。現在は羽衣国際大学教授を務める傍ら、テレビ・ラジオ出演、出版、ウェブニュース執筆など多方面で活躍。「ダイバーシティ」「国際理解・国際交流」「多文化共生」「人権・平和」「SDGs」などをテーマに講演や研修を行い高評を得ている。ボランティア活動として、教え子たちと日本赤十字社のと連携しイベントを毎年開催。',
                    '　A person with diverse roles—university professor, TV personality, essayist, lecturer, monk, and karateka—he is also known as "Mr. Diversity." Currently serving as a professor at Hagoromo University of International Studies, he is active in various fields including television and radio appearances, publishing, and writing for web news. His lectures and training sessions on themes such as "diversity," "international understanding and exchange," "multicultural coexistence," "human rights and peace," and "SDGs" are highly regarded. As volunteer activities, he collaborates with his students and the Japanese Red Cross Society to hold events every year.'
                  )}
                </p>
              </div>
            </div>
          </section>
          
          {/* Button: にしゃんたOfficial Web */}
          <div className="mt-8 mb-8 flex justify-center">
            <a
              href="https://nishan.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #833ab4)',
                minWidth: '200px'
              }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white p-1.5 flex items-center justify-center overflow-hidden">
                <img
                  src={logowebImage}
                  alt="Logo"
                  className="w-full h-full object-contain"
                  style={{ transform: 'scale(1.7)' }}
                />
              </div>
              <span className="text-white font-semibold text-base">
                {t('にしゃんたOfficial Web', 'Nishanta Official Web')}
              </span>
            </a>
          </div>
        </header>
      </article>
    </div>
  )
}

export default Content

