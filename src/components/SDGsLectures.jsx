import React from 'react'
import lecturesHeroImage from '../Images/cropped_01.png'
import nishantaImage04 from '../Images/nishanta_img04.jpg'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const SDGsLectures = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={lecturesHeroImage}
          alt={t('SDGs・サステナビリティの講演講師', 'SDGs & Sustainability Lecturer')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
              {t('SDGs・サステナビリティの講演講師', 'SDGs & Sustainability Lecturer')}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-headings -mt-12">
            {t('SDGs・サステナビリティの講演講師', 'SDGs & Sustainability Lecturer')}
          </h1>
          <div className="mt-6 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
            <img
              src={nishantaImage04}
              alt={t('SDGs・サステナビリティの講演講師', 'SDGs & Sustainability Lecturer')}
              className="w-full h-full object-contain block"
            />
          </div>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('サステナビリティとSDGsを学ぶ講演｜"共笑®︎"で築く持続可能な未来', 'Learning Sustainability & SDGs | Building a Sustainable Future with 共笑®︎')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '現代社会で起きている"良いこと"も"よくないこと"も、その多くは"ちがい"との関わり方によって説明できます。環境問題、貧困、戦争といったグローバルな課題も、日常生活での小さな問題も、"ちがい"をどのように扱うかが鍵です。そしてこれこそが、SDGs（持続可能な開発目標）やサステナビリティを考える上で重要な視点となります。',
                'Many of the \'good things\' and \'not-so-good things\' happening in modern society can be explained by how we relate to \'differences.\' Whether it\'s global challenges such as environmental problems, poverty, and war, or small problems in daily life, how we handle \'differences\' is the key. And this is precisely an important perspective when considering SDGs (Sustainable Development Goals) and sustainability.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　にしゃんたの講演では、"共笑®︎"の理念を通じて、"ちがい"を力に変える方法を具体的にお伝えします。個人、組織、地域社会がSDGs達成に向けてどのように取り組めるのか、実践的でわかりやすい内容をお届けします。',
                '　In Nishanta\'s lectures, we specifically convey methods for turning \'differences\' into strength through the philosophy of \'共笑®︎.\' We deliver practical and easy-to-understand content on how individuals, organizations, and local communities can work toward achieving the SDGs.'
              )}
            </p>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('なぜ、にしゃんたのSDGs講演なのか', 'Why Nishanta for SDGs?')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                'にしゃんたは、"共笑®︎"の創案者であり、社会学者・経済学博士・大学教授・マルチタレントとして、多文化共生とSDGsの実践をテーマに国内外で活躍する講師です。17歳でスリランカから来日し、多様性を「生きる力」として体現してきた歩みは、持続可能な未来を考えるうえで説得力ある実例です。',
                'Nishanta is the creator of "共笑®︎" and a lecturer active both domestically and internationally on themes of multicultural coexistence and SDGs practice as a sociologist, Doctor of Economics, university professor, and multi-talent. Coming to Japan from Sri Lanka at the age of 17, his journey of embodying diversity as "the power to live" is a convincing example when considering a sustainable future.'
              )}
            </p>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('SDGs・サステナビリティと"共笑®︎"の理念', 'SDGs & Sustainability with the 共笑®︎ Philosophy')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '"共生"という言葉はよく耳にしますが、単に共に生きるだけでは不十分です。"ちがい"との共生を自然の成り行きに任せると、数の論理や力関係が働き、望ましくない結果を招くことが少なくありません。戦争や環境破壊、社会の分断など、世界が直面する課題の多くがその例です。',
                'The word "coexistence" is often heard, but simply living together is not sufficient. If we leave coexistence with "differences" to the natural course of events, the logic of numbers and power relationships come into play, often leading to undesirable results. Many of the challenges facing the world, such as wars, environmental destruction, and social division, are examples of this.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　理想的な共生を実現するには、"ちがい"を尊重し、積極的に活かす姿勢が必要です。これが、"共笑®︎"の理念であり、その具体的な考え方は次のとおりです：',
                'To realize ideal coexistence, an attitude of respecting "differences" and actively leveraging them is necessary. This is the philosophy of "共笑®︎," and its specific ways of thinking are as follows:'
              )}
            </p>
            <ul className="list-none space-y-2 pl-6 md:pl-8">
              <li className="indent-4 md:indent-6">
                {t('• 共楽（共に楽しむ）：違いを楽しむことで新たな可能性を見出す', '• 共楽 (enjoy together): find new possibilities by enjoying differences')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 共学（共に学ぶ）：違いから学び、成長する', '• 共学 (learn together): learn from differences and grow')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 共育（共に育つ）：違いを共有し、共に成長する', '• 共育 (grow together): share differences and grow together')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 共活（共に活かされる）：違いを社会や環境に活かす', '• 共活 (enliven together): apply differences to society and environment')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 共創（共に創る）：多様性を活かし、新しい未来を共に築く', '• 共創 (co-create): use diversity to build a new future together')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 共笑®︎（共に笑う）：違いを受け入れ、笑顔を通じてつながりを深める。', '• 共笑®︎ (laugh together): embrace differences and deepen bonds through smiles.')}
              </li>
            </ul>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('講演テーマの一例', 'Sample Lecture Themes')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                'にしゃんたの講演では、"共笑®︎"を基盤としたSDGsやサステナビリティへのアプローチを以下のテーマでお伝えします。',
                'In Nishanta\'s lectures, we share SDGs and sustainability approaches grounded in 共笑®︎ through the themes below.'
              )}
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('SDGsを支える"ちがい"の力', 'The Power of “Differences” Supporting the SDGs')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• SDGsの17目標における"ちがい"の活用', '• Using differences across the 17 SDG goals')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 多様性を活かして目標達成を加速させる方法', '• How diversity accelerates goal achievement')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('環境問題と共生：持続可能な未来を考える', 'Environment & Coexistence: toward a sustainable future')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 環境問題が示す"ちがい"との関わり方の失敗例', '• Environmental issues as examples of failed relationships with differences')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• "共笑®︎"を用いた地域や企業の環境改善事例', '• Community/company cases using 共笑®︎ for environmental improvement')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('社会課題とSDGs：違いを活かした課題解決', 'Social Issues & SDGs: solving with differences')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 貧困や格差の背景にある"ちがい"との関わり方', '• How we engage differences behind poverty and inequality')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• SDGs達成に向けた具体的な行動指針', '• Concrete action guidance toward SDG achievement')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('持続可能な組織づくり：企業の役割', 'Building Sustainable Organizations: the role of business')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 多様性を尊重した経営戦略とSDGs', '• Management strategies respecting diversity and the SDGs')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 社員一人ひとりが持続可能性に貢献する方法', '• How each employee contributes to sustainability')}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('講演の効果と対象', 'Lecture Outcomes & Audience')}
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('対象', 'Audience')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 企業: SDGs達成を目指したCSR（企業の社会的責任）活動や社員研修', '• Companies: CSR/employee training toward SDG achievement')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 自治体・地域コミュニティ: 持続可能な地域づくりや市民啓発活動', '• Municipalities/communities: sustainable community building and public awareness')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 教育機関: 学生や教職員がSDGsやサステナビリティを深く理解する機会', '• Schools: chances for students/staff to understand SDGs and sustainability deeply')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 一般市民: 環境や社会課題への具体的な取り組み方を学びたい方々', '• General public: those who want concrete ways to tackle environmental/social issues')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('効果', 'Outcomes')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• SDGsやサステナビリティを"共笑®︎"の視点から具体的に理解できる', '• Understand SDGs and sustainability concretely through the 共笑®︎ lens')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 企業や地域が多様性を活かして持続可能性を追求する力を得られる', '• Gain the ability to leverage diversity for sustainability in companies/communities')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 職場や地域社会での行動や価値観を変える実践的なヒントが得られる', '• Practical tips to shift actions and values at work and in the community')}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="mt-8 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('SDGs・サステナビリティ講演をご検討の方へ', 'Considering an SDGs & Sustainability Talk?')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '「違いを力に変え、未来を創る」──SDGs達成への取り組みを強化し、職場や地域に笑顔と共感を広げる講演をぜひご検討ください。"共笑®︎"の理念に基づいた具体的な提案で、あなたの組織や地域が持続可能な社会の構築に貢献できるようサポートします。',
                '"Turning differences into strength to create the future"—please consider a lecture that strengthens SDG efforts and spreads smiles and empathy at work and in the community. With concrete proposals grounded in 共笑®︎, we support your organization or community in contributing to building a sustainable society.'
              )}
            </p>
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '　講演内容の詳細やご相談は、<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">"共笑®︎"事務局</a>までお気軽にお問い合わせください。一緒に、多様性を活かし、未来を共に創る取り組みを始めましょう！',
                '　For details about lecture content or consultations, please feel free to contact the <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">"共笑®︎" office</a>. Let\'s start initiatives together to leverage diversity and create the future together!'
              )
            }} />
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              {t(
                '【検索用キーワード】 SDGs講演／サステナビリティ講師／多文化共生講師／国際理解講師／環境問題／ダイバーシティ／企業研修／ESG／エシカル／にしゃんた／持続可能な社会／グローバル人材育成／気候変動／ジェンダー平等／教育SDGs／CSR講師／SDGs17目標／地域創生／SDGs実践',
                '[Keywords] SDGs lectures / Sustainability speaker / Multicultural coexistence / International understanding / Environment / Diversity / Corporate training / ESG / Ethical / Nishanta / Sustainable society / Global talent development / Climate change / Gender equality / Education SDGs / CSR speaker / SDGs 17 goals / Regional revitalization / SDGs in practice'
              )}
            </p>
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
        </article>
      </div>
    </>
  )
}

export default SDGsLectures
