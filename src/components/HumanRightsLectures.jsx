import React from 'react'
import lecturesHeroImage from '../Images/img_08.png'
import nishantaImage03 from '../Images/nishanta_img03.jpg'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const HumanRightsLectures = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={lecturesHeroImage}
          alt={t('人権と平和の講演講師', 'Human Rights & Peace Lecturer')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
              {t('人権と平和の講演講師', 'Human Rights & Peace Lecturer')}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-headings -mt-12">
            {t('人権と平和の講演講師', 'Human Rights & Peace Lecturer')}
          </h1>
          <p className="indent-4 md:indent-6">
            {t(
              '　にしゃんたは、共笑®︎の創案者であり、大学教授・社会学者・マルチタレントとして、人権と平和をテーマに全国各地で講演活動を行っている専門家です。人権を「身近な日常の問題」として、わかりやすく、時にユーモアも交えながら伝えます。学校・自治体・企業・地域イベントなどでの講演実績も豊富。共感を呼び、行動へとつながる講演をお届けします。',
              '　Nishanta is the creator of 共笑®︎ and a specialist who conducts lecture activities throughout the country on themes of human rights and peace as a university professor, sociologist, and multi-talent. He conveys human rights as "familiar everyday issues" in an easy-to-understand way, sometimes incorporating humor. He has extensive lecture achievements at schools, municipalities, companies, and community events. We deliver lectures that inspire empathy and lead to action.'
            )}
          </p>
          <div className="mt-6 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
            <img
              src={nishantaImage03}
              alt={t('人権と平和の講演講師', 'Human Rights & Peace Lecturer')}
              className="w-full h-full object-contain block"
            />
          </div>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('人権の進化を考える｜"共笑®︎"が築く持続可能な未来', 'Evolving Human Rights | A Sustainable Future Built by 共笑®︎')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　21世紀は「人権の世紀」と呼ばれます。それは、人権が平和で持続可能な社会を築くための重要な柱であり、"共笑®︎"の理念を考える上でも欠かせない要素だからです。1948年の「世界人権宣言」の採択から70年以上が経過し、人権は進化し、新たな定義を求められる時代を迎えています。',
                '　The 21st century is called "the century of human rights." This is because human rights are an important pillar for building a peaceful and sustainable society, and are an essential element when considering the philosophy of "共笑®︎." More than 70 years have passed since the adoption of the Universal Declaration of Human Rights in 1948, and human rights are evolving and entering an era where new definitions are being sought.'
              )}
            </p>
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '　<a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">にしゃんた</a>の講演では、「<a href="https://nishan.jp/activity/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">人権</a>」というテーマを、日常や地域、職場で実践可能な形に落とし込みながらお話します。人権は「他者のため」だけではなく、「自分自身のため」にもあるという視点を通じて、誰もがその価値を実感できる内容をお届けします。',
                '　In <a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">Nishanta</a>\'s talks, he frames <a href="https://nishan.jp/activity/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">human rights</a> in ways you can practice daily, locally, and at work. Through the lens that human rights exist not only "for others" but "for yourself," everyone can feel their value.'
              )
            }} />
          </section>
          <section className="mt-10 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('人権の進化と"共笑®︎"の理念', 'Evolving Human Rights & the 共笑®︎ Philosophy')}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　人権啓発活動は長年、他者のための取り組みと捉えられることが多く、個々人が自分自身の人権に目を向ける機会は限られていました。しかし、人権は「他者のため」だけでなく、「自己の権利」として尊重されるべきものです。これにより、自分自身の存在や多様性を尊重しながら、他者への尊重も育まれます。この「三方よし」の視点が、人権の進化において重要です。',
                '　Human rights awareness activities have long been viewed as initiatives for others, and opportunities for individuals to turn their attention to their own human rights have been limited. However, human rights should be respected not only \'for others\' but also as \'rights of the self.\' This fosters respect for one\'s own existence and diversity while also nurturing respect for others. This perspective of \'three-way good\' is important in the evolution of human rights.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t('"共笑®︎"の理念を通じて、以下のようなメッセージを伝えます：', 'Through 共笑®︎, we share these messages:')}
            </p>
            <ul className="list-none space-y-2 pl-6 md:pl-8">
              <li className="indent-4 md:indent-6">
                {t('• 自らが持たない"ちがい"を知ること', '• Knowing the “differences” we don’t possess')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 違いを尊重することで得られる柔軟性や豊かさ', '• The flexibility and richness gained by respecting differences')}
              </li>
              <li className="indent-4 md:indent-6">
                {t('• 自分も他者も幸せにする「三方よし」の実現', '• Achieving “three-way good” that benefits oneself and others')}
              </li>
            </ul>
            <p className="text-2xl md:text-3xl font-display font-bold text-headings mt-8">
              {t('人権と平和を考えるための講演テーマ', 'Lecture Themes on Human Rights & Peace')}
            </p>
            <p className="text-xl md:text-2xl font-display font-semibold text-headings mt-4">
              {t('今までの主な講演テーマ', 'Main Lecture Topics')}
            </p>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-2">
              <ul className="list-none space-y-1">
                <li>
                  {t('✧ 「違いを力に変える」人権講演～共笑®︎の実践～', '✧ Human rights lecture: "Turning differences into strength" — 共笑®︎ in practice')}
                </li>
                <li>
                  {t('✧ 職場の人権・多様性とハラスメント防止', '✧ Workplace human rights, diversity, and harassment prevention')}
                </li>
                <li>
                  {t('✧ "わたし"から始まる人権意識の育て方', '✧ Growing human-rights awareness starting from “myself”')}
                </li>
                <li>
                  {t('✧ 子どもたちと考えるいのちと人権の大切さ', '✧ Thinking with children about the value of life and human rights')}
                </li>
                <li>
                  {t('✧ SDGsから学ぶ人権と持続可能な社会づくり', '✧ Learning from SDGs: human rights and building a sustainable society')}
                </li>
              </ul>
            </div>
            <p className="indent-4 md:indent-6 mt-6 text-black font-bold">
              {t(
                '　にしゃんたの講演では、人権と平和を結びつける具体的な視点や実践方法を提案します。以下は主なテーマの一例です：',
                '　Nishanta’s talks offer concrete perspectives and practices linking human rights and peace. Examples:'
              )}
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('新しい時代の人権の定義', 'Defining Human Rights for a New Era')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 人権を「自己の権利」として捉え直す', '• Reframing human rights as “one’s own rights”')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• "共笑®︎"の理念で「持続可能な人権」を考える', '• Thinking about "sustainable human rights" through 共笑®︎')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('共生を超える"共笑®︎"', 'Beyond Coexistence: 共笑®︎')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 単なる共生ではなく、共に笑い（共笑®︎）、共に未来を創る（共創）ための視点', '• Not just coexistence, but perspectives for laughing together (共笑®︎) and co-creating the future (共創)')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 多様性を活かす具体的なアプローチ', '• Concrete approaches to leverage diversity')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('平和と人権：歴史から学ぶ未来', 'Peace & Human Rights: learning from history for the future')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 「世界人権宣言」の意義と現代における課題', '• The meaning of the Universal Declaration and today’s challenges')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 平和と人権が支える社会の持続可能性', '• How peace and human rights support social sustainability')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('SDGsと人権の関連性', 'SDGs & Human Rights: connections')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• SDGs達成に向けた人権意識の重要性', '• The importance of human-rights awareness for SDG achievement')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 地域や企業が果たす役割', '• Roles for communities and companies')}
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-display font-bold text-headings mt-8">
              {t('講演の対象と効果', 'Audience & Outcomes')}
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('講演実績（例）', 'Sample Engagements')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 自治体職員向けの人権週間記念講演（自治体向け）', '• Human Rights Week memorial lectures for municipal staff')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 小学校、中学校、高高や大学における人権と命の大切さを学ぶ授業（教育機関）', '• Classes on human rights and the value of life at elementary, junior high, high schools, and universities')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 多数の企業のダイバーシティ＆人権研修（企業向け）', '• Diversity & human-rights training at many companies')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 自治体主催の人権啓発フェスティバルなどの基調講演（市民向けイベント）', '• Keynote talks at municipal human-rights awareness festivals and public events')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('対象', 'Audience')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 企業: 多様性や人権をテーマにした社員研修やリーダー育成', '• Companies: employee training and leadership development on diversity and human rights')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 教育機関: 学生や教職員向けの人権教育', '• Schools: human-rights education for students and staff')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 自治体・地域コミュニティ: 平和で持続可能な地域づくりの一環として', '• Municipalities/communities: as part of building peaceful, sustainable communities')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 一般市民: 自分の生活や行動に活かせる人権と平和の知識を得たい方々', '• General public: those seeking knowledge on human rights and peace they can use in life')}
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-semibold text-headings">
                  {t('効果', 'Outcomes')}
                </p>
                <ul className="list-none space-y-1 mt-2 pl-4">
                  <li className="indent-4 md:indent-6">
                    {t('• 人権の価値を「他者のため」から「自分のため」にも捉え直す視点が得られる', '• Gain a perspective that reframes human rights from “for others” to “for oneself” too')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 職場や地域での関係性が向上し、多様性を活かす力を養える', '• Improve relationships at work and in the community, and develop the power to leverage diversity')}
                  </li>
                  <li className="indent-4 md:indent-6">
                    {t('• 平和な社会を実現するための具体的な行動のヒントが得られる', '• Get concrete action hints for realizing a peaceful society')}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                {t('人権と平和の講演をご検討の方へ', 'Considering a Human Rights & Peace Lecture?')}
              </p>
              <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                __html: t(
                  '「違いを力に変え、未来を創る」──その第一歩として、<a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">人権と平和をテーマにした講演</a>をぜひご活用ください。"共笑®︎"の理念に基づいた実践的な視点で、職場や地域、教育現場に笑顔と共感の輪を広げます。',
                  '"Turning differences into strength to create the future"—as a first step, please consider a <a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">lecture on human rights and peace</a>. With practical perspectives grounded in 共笑®︎, we spread smiles and empathy at work, in communities, and in education.'
                )
              }} />
              <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                __html: t(
                  '　私たちが抱える"ちがい"を、課題ではなく新たな価値創造の原動力として捉え直すことで、より平和で持続可能な社会を築くことができます。講演依頼やご相談は、<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">"共笑®︎"事務局</a>までお気軽にご連絡ください。一緒に、違いを活かし、未来を共に創る取り組みを始めましょう！',
                  '　By reframing the "differences" we carry not as problems but as drivers of new value, we can build a more peaceful, sustainable society. For lecture requests or consultations, please feel free to contact the <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">"共笑®︎" office</a>. Let\'s start initiatives together to leverage differences and create the future together!'
                )
              }} />
            </div>
            <section className="mt-10 space-y-3">
              <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                {t('よくあるご質問', 'FAQ')}
              </p>
              <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                __html: t(
                  '✧Q. 講演はオンラインでも対応していますか？<br />A. はい。Zoom等を活用したオンライン講演にも柔軟に対応しています。',
                  '✧Q. Are online lectures available?<br />A. Yes. We flexibly accommodate online lectures using Zoom and similar platforms.'
                )
              }} />
              <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                __html: t(
                  '✧Q. 小学校・中学校など、子ども向けにも対応できますか？<br />A. 年齢に合わせたわかりやすい内容にカスタマイズ可能です。',
                  '✧Q. Can you accommodate elementary and junior high school children?<br />A. Yes. We customize content to be age-appropriate and easy to understand.'
                )
              }} />
              <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                __html: t(
                  '✧Q. 講演料の目安はありますか？<br />A. 規模や予算に応じてご相談を承っております。<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">講演依頼・お問い合わせ</a>は事務局まで',
                  '✧Q. What are typical lecture fees?<br />A. We welcome inquiries based on scale and budget. For <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">requests or inquiries</a>, contact the office.'
                )
              }} />
            </section>
            <div className="mt-6">
              <p className="text-sm text-gray-600">
                {t(
                  '【検索用キーワード】 人権講演／人権教育講師／人権週間 講師／多様性と人権／企業の人権研修／学校の人権講座／にしゃんた 人権／人権と平和／差別を考える講演／外国人の人権／人権啓発／職場の人権研修／憲法週間／人権尊重の社会',
                  '[Keywords] Human rights lectures / Human rights education speaker / Human Rights Week speaker / Diversity & human rights / Corporate human-rights training / School human-rights programs / Nishanta human rights / Human rights & peace / Lectures on discrimination / Foreigners\' human rights / Human-rights awareness / Workplace human-rights training / Constitution Week / Society respecting human rights'
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
          </section>
        </article>
      </div>
    </>
  )
}

export default HumanRightsLectures
