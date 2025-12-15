import React from 'react'
import lecturesHeroImage from '../Images/img_09.png'
import nishantaImage02 from '../Images/nishanta_img02.jpg'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const DiversityLectures = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={lecturesHeroImage}
          alt={t('ダイバーシティ講演講師', 'Diversity Lecture Speaker')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
              {t('ダイバーシティ講演講師', 'Diversity Lecture Speaker')}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-headings text-center -mt-12">
            {t('ダイバーシティ講演講師', 'Diversity Lecture Speaker')}
          </h1>
          <div className="mt-6 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
            <img
              src={nishantaImage02}
              alt={t('ダイバーシティ講演講師', 'Diversity Lecture Speaker')}
              className="w-full h-full object-contain block"
            />
          </div>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('ダイバーシティ＆インクルージョン｜共笑®︎の理念でつなぐ多様性と未来', 'Diversity & Inclusion | Connecting Diversity and the Future with 共笑®︎')}
            </p>
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '　私たちが生きる社会には、大小さまざまな"ちがい"が存在します。これらの"ちがい"を理解し、正しく関わり合うことは、ダイバーシティ＆インクルージョン、<a href="https://nishan.jp/message/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">多文化共生</a>、<a href="https://nishan.jp/activity/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">人権・平和</a>、<a href="https://nishan.jp/education/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">SDGs</a>といった重要なテーマの根幹にあります。',
                '　Our society holds many kinds of differences. Understanding and engaging them well is foundational to Diversity & Inclusion, <a href="https://nishan.jp/message/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">multicultural coexistence</a>, <a href="https://nishan.jp/activity/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">human rights & peace</a>, and <a href="https://nishan.jp/education/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">SDGs</a>.'
              )
            }} />
            <p className="indent-4 md:indent-6">
              {t(
                '　私の講演では、これらの課題を「共笑®︎（共に笑い）」の理念を通じて、より分かりやすく、共感しやすい形でお伝えします。「共笑®︎」には、「共に楽しむ（共楽）」「共に学ぶ（共学）」「共に育つ（共育）」「共に生きる（共活）」「共に未来を創る（共創）」という思いが込められています。この理念をもとに、違いを受け入れ、楽しみ、力に変える視点を学ぶ場を提供します。',
                '　In my lectures, I convey these challenges through the philosophy of "共笑®︎ (laughing together)" in a more understandable and empathetic way. "共笑®︎" contains the thoughts of "enjoying together (共楽)," "learning together (共学)," "growing together (共育)," "living together (共活)," and "creating the future together (共創)." Based on this philosophy, I provide a place to learn perspectives on accepting differences, enjoying them, and turning them into strength.'
              )}
            </p>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('ダイバーシティと「共笑®︎」の融合', 'Diversity and 共笑®︎ Together')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　私たちは一人ひとりが唯一無二の存在であり、それぞれの背景や経験が違うため、顔が異なるようにすべてが異なります。そして、この"ちがい"こそが、多様性の豊かさを生み出す源泉です。しかし、違いが生む摩擦を乗り越え、多様性を活かすためには、共感や笑顔が必要です。',
                '　Each of us is a unique and irreplaceable existence, and because our backgrounds and experiences differ, everything differs just as our faces do. And it is precisely these "differences" that are the source of the richness of diversity. However, to overcome the friction that differences create and leverage diversity, empathy and smiles are necessary.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　「共笑®︎」では、違いを恐れるのではなく、それを楽しみ、未来を創るための糧としていくことを提唱します。講演では、日常や職場、学校、地域社会でこの考え方をどのように活かすことができるのか、具体的な事例や体験を交えながらお話します。',
                '　"共笑®︎" advocates not fearing differences, but enjoying them and making them nourishment for creating the future. In the lecture, I talk about how this way of thinking can be utilized in daily life, workplaces, schools, and local communities, incorporating concrete examples and experiences.'
              )}
            </p>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-display font-bold text-headings">
                {t('講演テーマの一例', 'Sample Lecture Topics')}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  {t('違いを楽しむ力：多様性を力に変えるために必要なこと', 'Enjoying Differences: what it takes to turn diversity into strength')}
                </li>
                <li>
                  {t('共笑®︎の実践：笑顔と共感で多文化共生を実現する方法', 'Practicing 共笑®︎: using smiles and empathy for multicultural coexistence')}
                </li>
                <li>
                  {t('SDGsとダイバーシティ：違いが未来を創る仕組み', 'SDGs and Diversity: how differences shape the future')}
                </li>
                <li>
                  {t('平和と人権を考える：共感を育む笑顔の力', 'Peace and Human Rights: the power of smiles to foster empathy')}
                </li>
                <li>
                  {t('どのテーマも、違いを活かすための具体的なヒントを提供し、実践につながる内容です。', 'Each topic offers concrete tips to leverage differences and put ideas into practice.')}
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-display font-bold text-headings">
                {t('対象と効果', 'Audience & Outcomes')}
              </p>
              <p className="indent-4 md:indent-6">
                {t(
                  '　講演の対象は、企業や自治体、教育機関、地域コミュニティなど幅広く対応可能です。参加者は、「違い」に対するポジティブな視点を養い、職場や地域での人間関係をより良いものにする力を身につけることができます。',
                  '　The lecture targets a wide range of audiences including companies, municipalities, educational institutions, and local communities. Participants can develop a positive perspective on "differences" and gain the power to improve human relationships in workplaces and communities.'
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  {t('企業: ダイバーシティ推進やチームビルディングに役立つ内容', 'Companies: useful for D&I promotion and team building')}
                </li>
                <li>
                  {t('教育機関: 生徒や教職員が多文化共生を理解し、実践するための視点', 'Schools: perspectives for students and staff to practice multicultural coexistence')}
                </li>
                <li>
                  {t('自治体・地域: 多様性を尊重した地域づくりの一歩', 'Municipalities/communities: a step toward diversity-respecting community building')}
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-display font-bold text-headings">
                {t('「ちがい」を幸運に変える未来', 'A Future Where Differences Become Fortune')}
              </p>
              <p className="indent-4 md:indent-6">
                {t(
                  '　これからの時代は、違いを認めるだけでなく、それを活かしながら新たな価値を生み出すことが求められます。偶然の幸運を意味する"セレンディピティ"のように、違いを見つけることが新たなチャンスをもたらします。',
                  '　In the era ahead, we are being asked not only to recognize differences but to create new value while leveraging them. Like "serendipity," which means a fortunate coincidence, discovering differences brings new opportunities.'
                )}
              </p>
              <p className="indent-4 md:indent-6">
                {t(
                  '　私の講演では、違いを発見し、それを新しい可能性や幸運につなげる視点をお伝えします。多様性を楽しみ、共に笑いながら未来を創る「共笑®︎」の実践的な方法を共有し、一人ひとりが未来を彩る力を養えるようサポートします。',
                  '　In my lectures, I convey perspectives on discovering differences and connecting them to new possibilities and fortune. I share practical methods of 共笑®︎ to enjoy diversity and create the future while laughing together, supporting each person to develop the power to color the future.'
                )}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-display font-bold text-headings">
                {t('ダイバーシティ講演をご検討の方へ', 'Considering a Diversity Lecture?')}
              </p>
              <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                __html: t(
                  '　「違いを力に変え、未来を創る」講演で、職場や地域に笑顔と共感の輪を広げませんか？講演依頼やお問い合わせは、<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎事務局</a>までお気軽にご連絡ください。一緒に、違いを活かす未来を目指しましょう！',
                  '　Would you like to spread the circle of smiles and empathy in workplaces and communities with a lecture on "turning differences into strength to create the future"? For lecture requests or inquiries, please feel free to contact the <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎ office</a>. Let\'s aim together for a future that leverages differences!'
                )
              }} />
            </div>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-display font-bold text-headings">
                {t('講師プロフィール｜にしゃんた', 'Speaker Profile | Nishanta')}
              </p>
              <p className="indent-4 md:indent-6">
                {t(
                  '　スリランカ生まれ、日本在住歴40年。社会学博士・大学教授として、全国で年間100件を超える講演活動を展開中。テーマはダイバーシティ、多文化共生、人権、国際理解、SDGsなど多岐にわたり、「共笑®︎」を軸に、笑って学ぶ実践型の講演が好評。',
                  '　Born in Sri Lanka, with 40 years of residence in Japan. As a Doctor of Sociology and university professor, he is currently conducting over 100 lecture activities annually throughout the country. Themes range widely including diversity, multicultural coexistence, human rights, international understanding, and SDGs, and his practical lectures centered on "共笑®︎" that combine learning with laughter are well-received.'
                )}
              </p>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-2">
                <ul className="list-none space-y-1">
                  <li>{t('✧ 全国の多数の都道府県市町村で基調講演', '✧ Keynote speeches in numerous prefectures, cities, towns, and villages nationwide')}</li>
                  <li>{t('✧ JICAなど多数の国際機関国に登壇', '✧ Speaking engagements at many international organizations including JICA')}</li>
                  <li>{t('✧ 日本全国の小中高・大学・自治体で講演多数', '✧ Numerous lectures at elementary, junior high, and high schools, universities, and municipalities throughout Japan')}</li>
                </ul>
              </div>
            </div>
            <section className="mt-10 space-y-6">
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-display font-bold text-headings">{t('参加者の声', 'Voices from Participants')}</p>
                <div className="relative bg-gray-50 border-l-4 border-headings pl-6 py-4">
                  <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed text-center">
                    {t('「笑って泣いて、でもしっかり学べた90分。違いを前向きに捉えるヒントがたくさんありました」', '"I laughed and cried, but learned solidly in 90 minutes. There were many hints for viewing differences positively."')}
                  </p>
                  <p className="text-sm text-gray-600 mt-3 text-center">{t('- 教育委員会 職員', '- Education Board Staff')}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                  {t('よくあるご質問', 'FAQ')}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">
                    {t('Q. 講演時間や料金の目安は？', 'Q. What are typical lecture duration and fees?')}
                  </p>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{
                    __html: t(
                      '要相談。<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">事務局</a>にお問い合わせください。',
                      'Please inquire with the <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">office</a>.'
                    )
                  }} />
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <a
                  href="https://tomoeworld.vercel.app/#ask"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
                  style={{
                    background: 'linear-gradient(90deg, #00d4ff, #833ab4)',
                    minWidth: '250px',
                    justifyContent: 'center'
                  }}
                >
                  {t('講演依頼・お問い合わせ', 'Lecture Request & Inquiry')}
                </a>
              </div>
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
            </section>
          </section>
        </article>
      </div>
    </>
  )
}

export default DiversityLectures
