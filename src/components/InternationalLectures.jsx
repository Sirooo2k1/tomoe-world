import React from 'react'
import lecturesHeroImage from '../Images/img_04.png'
import nishantaImage04 from '../Images/nishanta_img04.jpg'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const InternationalLectures = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={lecturesHeroImage}
          alt={t('多文化共生・国際理解の講演講師', 'Multicultural & International Understanding Lecturer')}
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
              {t('多文化共生・国際理解の講演講師', 'Multicultural & International Understanding Lecturer')}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-headings -mt-12">
            {t('多文化共生・国際理解の講演講師', 'Multicultural & International Understanding Lecturer')}
          </h1>
          <p className="indent-4 md:indent-6">
            {t(
              '　にしゃんたは、共笑®︎の創案者で、社会学者・大学教授・マルチタレントとして、日本各地の学校・企業・自治体で多文化共生や国際理解をテーマに講演活動を行っている専門家です。「共笑®︎」の理念をベースに、違いを楽しみ、活かす視点を届けます。',
              '　Nishanta is the creator of 共笑®︎ and a specialist who conducts lecture activities at schools, companies, and municipalities throughout Japan on themes of multicultural coexistence and international understanding as a sociologist, university professor, and multi-talent. Based on the philosophy of "共笑®︎," we deliver perspectives on enjoying and leveraging differences.'
            )}
          </p>
          <div className="mt-6 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
            <img
              src={nishantaImage04}
              alt={t('多文化共生・国際理解の講演講師', 'Multicultural & International Understanding Lecturer')}
              className="w-full h-full object-contain block"
            />
          </div>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('多文化共生・国際理解｜共笑®︎の理念で"ちがい"を力に変える学び', 'Multicultural & International Understanding | Turning "Differences" into Strength with 共笑®︎')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　世の中で起きている「良いこと」も「よくないこと」も、根本には"ちがい"との関わりがあります。過去や現在の課題だけでなく、将来に起こりうる出来事も、"ちがい"との関わり方を見つめ直すことで予測し、より良い方向に変えていくことができます。',
                '　Both the "good things" and "not-so-good things" happening in the world fundamentally stem from our relationship with "differences." Not only past and present challenges, but also future events can be predicted by reexamining how we relate to "differences," and we can change them in better directions.'
              )}
            </p>
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '　<a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">にしゃんた</a>の講演では、「<a href="https://tomoeworld.com/ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎</a>（共に笑う）」の理念を軸に、"ちがい"を楽しみ、学び、成長の糧とする視点をお伝えします。<a href="https://nishan.jp/education/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">国際理解</a>や<a href="https://nishan.jp/message/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">多文化共生</a>の大切さを実感し、日常や職場、地域で実践できる知識とスキルを得られる内容です。',
                '　In his talks, <a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">Nishanta</a> uses the <a href="https://tomoeworld.com/ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎</a> idea of "laughing together" to show how to enjoy, learn from, and grow with differences. You\'ll feel the importance of <a href="https://nishan.jp/education/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">international understanding</a> and <a href="https://nishan.jp/message/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">multicultural coexistence</a>, and gain knowledge and skills you can use at home, work, and in your community.'
              )
            }} />
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('"ちがい"との共生を考えるために', 'How to Live with “Differences”')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '"共生"とは単に「共に生きる」ことではありません。"ちがい"との共生を自然に任せてしまうと、数の論理や力関係によって不均衡が生じ、戦争や環境問題、社会の分断など、あらゆる問題を引き起こします。理想的な共生を実現するには、"ちがい"を尊重し、積極的に活かす姿勢が必要です。',
                '"Coexistence" is not simply "living together." If we leave coexistence with "differences" to nature, imbalances arise from the logic of numbers and power relationships, causing all kinds of problems such as wars, environmental issues, and social division. To realize ideal coexistence, an attitude of respecting "differences" and actively leveraging them is necessary.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　講演では、「共楽（共に楽しむ）」「共学（共に学ぶ）」「共育（共に育つ）」「共活（共に活き活かされる）」「共創（共に未来を創る）」「共笑®︎（共に笑う）」の考え方を通じて、"ちがい"を力に変える方法を解説します。この視点は、個人の成長から組織や社会の発展、さらには国家レベルの平和と持続可能性を追求するための唯一無二の方法です。',
                '　In the lecture, I explain methods for turning "differences" into strength through the ways of thinking of "共楽 (enjoying together)," "共学 (learning together)," "共育 (growing together)," "共活 (living and being enlivened together)," "共創 (creating the future together)," and "共笑®︎ (laughing together)." This perspective is the one and only method for pursuing peace and sustainability from personal growth to organizational and social development, and even at the national level.'
              )}
            </p>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('講演のテーマと特徴', 'Lecture Themes & Highlights')}
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('国際理解の重要性：違いを超えてつながる世界', 'Why International Understanding Matters: connecting beyond differences')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 世界の歴史や文化の多様性から学ぶ「違い」と「共感」の力', '• Learning from global histories/cultures: the power of difference and empathy')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• グローバル社会に必要な共生の視点', '• Coexistence perspectives essential in a global society')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('多文化共生の実践：地域から始める共生社会づくり', 'Practicing Multicultural Coexistence: building from the community up')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 日常生活や地域社会での多文化共生の実践例', '• Practical cases of multicultural coexistence in daily life and community')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 異文化理解を深めるコミュニケーションのポイント', '• Communication tips to deepen cross-cultural understanding')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('共笑®︎の力：違いを楽しみ、未来を創るためのヒント', 'The Power of 共笑®︎: enjoying differences to create the future')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• "ちがい"が新しい価値を生む理由', '• Why “differences” generate new value')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 共笑®︎を活かした多文化共生の具体策', '• Practical ways to use 共笑®︎ for multicultural coexistence')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('SDGsと多文化共生：持続可能な未来を目指して', 'SDGs & Multicultural Coexistence: toward a sustainable future')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 国際社会が直面する課題と"ちがい"の活用', '• Global challenges and leveraging “differences”')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• SDGs達成に向けた多文化共生の役割', '• The role of multicultural coexistence in achieving the SDGs')}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-xl md:text-2xl font-display font-semibold text-headings">
              {t('今までの他の主な講演講演テーマ', 'Other Main Lecture Topics')}
            </p>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-2">
              <ul className="list-none space-y-1">
                <li>
                  {t('✧ 共笑®︎で育む多文化共生 〜違いを力に変える講演〜', '✧ Multicultural coexistence with TOMOE — turning differences into strength')}
                </li>
                <li>
                  {t('✧ 外国人とともに働く・暮らすための国際理解入門', '✧ Intro to international understanding for living/working with foreigners')}
                </li>
                <li>
                  {t('✧ 地域から始めるダイバーシティ社会づくり', '✧ Building a diverse society starting from the community')}
                </li>
                <li>
                  {t('✧ 教育現場の異文化対応と共育のヒント', '✧ Tips for cross-cultural response and co-learning in education settings')}
                </li>
                <li>
                  {t('✧ SDGs時代の共生社会と日本の役割', '✧ Coexistence society in the SDGs era and Japan’s role')}
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('講演の効果と対象', 'Lecture Effects & Audience')}
            </p>
            <ul className="list-none space-y-1 mt-2 pl-4">
              <li className="indent-4 md:indent-6">
                {t('• 個人 : "ちがい"を尊重する視点を身につけ、日常生活で実践できるヒントを得る', '• Individuals: gain a mindset that respects differences and practical tips for daily life')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 組織 : 多様性を活かしたチームづくりや国際ビジネスの促進に役立つ', '• Organizations: support team building that leverages diversity and international business')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 地域・学校 : 多文化共生を実現するコミュニティづくりや教育現場での活用', '• Communities/Schools: build communities and education settings that realize multicultural coexistence')}
              </li>
            </ul>
            <p className="indent-4 md:indent-6 mt-4">
              <span className="font-semibold">{t('対象', 'Audience')}</span>
              {t(
                ' : 企業や自治体の研修、地域コミュニティのイベント、学校の国際理解教育など、幅広い場面で対応可能です。',
                ' : Wide range—corporate/municipal trainings, community events, and international understanding programs in schools.'
              )}
            </p>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('未来を創る"ちがい"との関わり方', 'Engaging “Differences” to Create the Future')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '"ちがい"を恐れず、むしろその中に潜む可能性を見つけ、活かすことがこれからの時代に求められています。「共笑®︎」では、違いを発見し、それを楽しみ、成長の糧とすることで、より良い未来を創ることを提唱します。',
                'We are being asked to find and use the possibilities hidden within "differences," not fear them. 共笑®︎ advocates discovering differences, enjoying them, and making them nourishment for growth to create a better future.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　にしゃんたの講演では、国際理解や多文化共生の実現に向けた実践的なアプローチをお伝えし、一人ひとりが行動を起こせるようサポートします。',
                'In Nishanta’s lectures, he shares practical approaches to realizing international understanding and multicultural coexistence, empowering each person to take action.'
              )}
            </p>
          </section>
          <div className="mt-8 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('国際理解・多文化共生の講演をご検討の方へ', 'Considering a Talk on International Understanding & Multicultural Coexistence?')}
            </p>
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '「違いを楽しみ、未来を創る」講演を通じて、笑顔と共感に満ちたつながりを広げませんか？講演依頼や詳細なご相談は、<a href="https://tomoeworld.com/ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎事務局</a>までお気軽にお問い合わせください。共に学び、共に未来を築きましょう！',
                'Would you like to spread connections full of smiles and empathy through a talk on "enjoying differences to create the future"? For lecture requests or detailed consultations, please feel free to contact the <a href="https://tomoeworld.com/ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎ office</a>. Let\'s learn together and build the future together!'
              )
            }} />
          </div>
          <div className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('参加者の声（一部抜粋）', 'Voices from Participants (Selected)')}
            </p>
            <div className="space-y-4">
              <div className="relative bg-gray-50 border-l-4 border-headings pl-6 py-4">
                <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed text-center">
                  {t('「笑いながら深く学べる時間でした。子どもにも聴かせたいです」', '"I learned deeply while laughing. I want my kids to hear this."')}
                </p>
                <p className="text-sm text-gray-600 mt-3 text-center">{t('- 教育関係者', '- Educator')}</p>
              </div>
              <div className="relative bg-gray-50 border-l-4 border-headings pl-6 py-4">
                <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed text-center">
                  {t('「職場の外国人スタッフとの距離が縮まりました」', '"I feel closer to our foreign staff now."')}
                </p>
                <p className="text-sm text-gray-600 mt-3 text-center">{t('- 企業管理職', '- Corporate Manager')}</p>
              </div>
              <div className="relative bg-gray-50 border-l-4 border-headings pl-6 py-4">
                <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed text-center">
                  {t('「地域の中で"ちがい"を前向きに受け入れるきっかけになりました」', '"It helped our community embrace differences positively."')}
                </p>
                <p className="text-sm text-gray-600 mt-3 text-center">{t('- 自治体担当者', '- Municipal Staff')}</p>
              </div>
            </div>
          </div>
          <section className="mt-10 space-y-3">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('よくあるご質問（FAQ）', 'FAQ')}
            </p>
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '✧Q：オンライン講演は可能ですか？<br />A：Zoomなどを活用したオンライン講演も可能です。国内外どこでも対応いたします。',
                '✧Q: Are online lectures possible?<br />A: Yes. We offer online lectures using Zoom and similar tools, anywhere in the world.'
              )
            }} />
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '✧Q：子ども向けや教育現場にも対応できますか？<br />A：はい。小中学校から大学まで、年齢や理解度に応じて内容をカスタマイズ可能です。',
                '✧Q: Can you accommodate children and educational settings?<br />A: Yes. We customize content for elementary through university, adapting to age and comprehension level.'
              )
            }} />
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '✧Q：講演料の目安は？<br />A：ご相談も承ります。ご依頼やお問い合わせは<a href="https://tomoeworld.com/ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">「共笑®︎事務局」</a>まで',
                '✧Q: What are typical lecture fees?<br />A: We welcome inquiries. For requests or questions, please contact the <a href="https://tomoeworld.com/ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎ office</a>.'
              )
            }} />
          </section>
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
        </article>
      </div>
    </>
  )
}

export default InternationalLectures
