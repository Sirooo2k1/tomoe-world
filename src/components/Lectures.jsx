import React from 'react'
import lecturesHeroImage from '../Images/img_07.png'
import nishantaImage from '../Images/nishanta_img.jpg'
import nishantaImgPng from '../Images/nishanta_img.png'
import nishantaExtraImage from '../Images/img_nishanta01-2048x975.png'
import nishantaExtraImage2 from '../Images/img_nishanta_02-2048x1365.jpg'
import nishantaExtraImage3 from '../Images/img_nishanta_03-2048x1324.jpg'
import nishantaExtraImage4 from '../Images/img_nishanta_04-1024x683-1.jpg'
import nishantaExtraImage5 from '../Images/img_nishanta_05-2048x1536.jpg'
import nishantomodiverImage from '../Images/nishantomodiver.png'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const Lectures = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={lecturesHeroImage}
          alt={t('共笑®︎講演', '共笑®︎ Lectures')}
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
              {t('共笑®︎講演', '共笑®︎ Lectures')}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <p className="text-center text-headings text-xl md:text-3xl font-semibold">
          {t(
            '共笑®︎講演会 | ダイバーシティ、国際理解、多文化共生、人権、SDGs etc.',
            '共笑®︎ Lectures | Diversity, International Understanding, Multicultural Coexistence, Human Rights, SDGs etc.'
          )}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-headings mb-4">
            {t('講演講師紹介・講師派遣', 'Speaker Profile & Requests')}
          </h2>
          <p className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎講演', '共笑®︎ Lectures')}
          </p>
          <div className="space-y-4">
            <p className="indent-4 md:indent-6">
              {t(
                '　「共笑®︎（ともえ）」とは、共に笑い、共に育ち、共に活きることを意味する、にしゃんた独自の造語です。この講演では、違いを排除するのではなく、違いを力に変えるための視点と実践を、ユーモアと実体験を交えてお届けします。',
                '　"共笑®︎ (Tomoe)" is a term coined by Nishanta meaning to laugh together, grow together, and live fully together. In these lectures, we deliver perspectives and practices for turning differences into strength—not excluding them—blending humor with real experiences.'
              )}
            </p>
            <p className="indent-4 md:indent-6">
              {t(
                '　にしゃんた博士は、定期的に共笑®︎講演会や共笑®︎研修会を全国各地で開催しています。また、企業・自治体・教育機関などからの講演依頼も多数受けており、講師としての派遣も積極的に対応しています。',
                '　Dr. Nishanta regularly holds 共笑®︎ lectures and 共笑®︎ training sessions throughout the country. He also receives many lecture requests from companies, municipalities, educational institutions, and others, and actively responds to requests for speaker dispatch.'
              )}
            </p>
            <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
              __html: t(
                '　共笑®︎講演会では、<a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">ダイバーシティ</a>、<a href="https://nishan.jp/education/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">国際理解</a>、<a href="https://nishan.jp/message/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">多文化共生</a>、<a href="https://nishan.jp/activity/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">人権・平和</a>、<a href="https://nishan.jp/schedule03/sdgs-speaker-2/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">SDGs</a>、<a href="https://nishan.jp/schedule03/fuku-2/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">仏教的智慧</a>など現代社会を読み解くためのテーマを多角的に取り上げます。そして、共笑®︎理論の必要性や、それを妨げている現代的課題へのアプローチ、さらには実践に向けた具体的な方法論について、ユーモアと体験談を交えて、楽しくわかりやすくお伝えします。参加者一人ひとりが、自分の立場や環境から「共に笑う」あり方を見つめ直し、行動のきっかけを得られる一そんな実践的で心に残る講演会です。',
                '　At 共笑®︎ lectures, we take up themes from multiple angles to understand modern society, such as <a href="https://nishan.jp/profile/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">diversity</a>, <a href="https://nishan.jp/education/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">international understanding</a>, <a href="https://nishan.jp/message/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">multicultural coexistence</a>, <a href="https://nishan.jp/activity/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">human rights and peace</a>, <a href="https://nishan.jp/schedule03/sdgs-speaker-2/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">SDGs</a>, and <a href="https://nishan.jp/schedule03/fuku-2/" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">Buddhist wisdom</a>. We explain the necessity of the 共笑®︎ theory, approaches to modern challenges that hinder it, and concrete methodologies for practice, blending humor and personal experiences in an enjoyable and easy-to-understand way. It is a practical and memorable lecture where each participant can reflect on how to "laugh together" from their own position and environment, and gain motivation to take action.'
              )
            }} />
            <div className="mt-16 mb-16 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-4 border-[#F5F1E8] max-h-[520px] md:max-h-[560px]">
              <img
                src={nishantaImage}
                alt={t('講演講師 にしゃんた', 'Lecturer Nishanta')}
                className="w-full h-full object-contain block scale-105 transform-gpu"
              />
            </div>
            <section className="mt-24 space-y-4">
                <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                  {t('なぜ、にしゃんたなのか', 'Why Dr. Nishanta?')}
                </p>
              <p className="indent-4 md:indent-6">
                  {t(
                    '　共笑®︎（ともえ）の創案者であり、社会学者・大学教授・マルチタレント・そして落語家としても活躍するにしゃんたは、多面的な視点から「ちがいを力に変える」社会づくりを提唱しています。',
                    '　Nishanta, who is the creator of 共笑®︎ (Tomoe) and active as a sociologist, university professor, multi-talent, and rakugo performer, advocates for building a society that "turns differences into strength" from multifaceted perspectives.'
                  )}
              </p>
              <p className="indent-4 md:indent-6">
                  {t(
                    '　スリランカ生まれ、17歳で単身来日。わずか1年で日本語を習得し、日本で経済学博士号を取得。得度している。40年近く日本社会と関わり続ける中で、自らが体験してきた異文化理解・人権課題・共生のリアルな現場から、「共に笑い、共に育ち、共に生きる」という"共笑®︎"の哲学が生まれました。',
                    '　Born in Sri Lanka, he came to Japan alone at the age of 17. He mastered Japanese in just one year and earned a Ph.D. in Economics in Japan. He is ordained. Through nearly 40 years of continued engagement with Japanese society, from the real scenes of intercultural understanding, human rights issues, and coexistence that he himself experienced, the philosophy of "共笑®︎"—"laughing together, growing together, and living together"—was born.'
                  )}
              </p>
              <p className="indent-4 md:indent-6">
                  {t(
                    '　その語り口は、ユーモアと温かさ、そして深い洞察に満ちており、ただ聞くだけの講演ではなく、共感し、行動を促す"気づきの場"となっています。',
                    '　His storytelling is filled with humor, warmth, and deep insight, creating not just a lecture to listen to, but a "place of awareness" that fosters empathy and encourages action.'
                  )}
              </p>
              <div className="bg-[#FAF8F0] rounded-xl md:rounded-2xl p-5 md:p-6 shadow-md border-2 border-[#F5F1E8] mb-6">
              <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-display font-bold text-headings">
                    {t('主な登壇実績', 'Selected Engagements')}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {t('文化庁「日本語教育研究会」', 'Agency for Cultural Affairs "Japanese Language Education Study Group"')}
                    </li>
                    <li>
                      {t('全国の教育委員会主催「人権を考える市民講座」など', 'Citizen lectures on human rights hosted by boards of education nationwide')}
                    </li>
                    <li>
                      {t('電力系労組・交通系労組・自治体系労組のSDGs研修', 'SDGs training for electric, transport, and municipal labor unions')}
                    </li>
                    <li>
                      {t('大手企業の「安全大会」や「D&I実践研修」', 'Safety conventions and D&I practical trainings at major companies')}
                    </li>
                    <li>
                      {t('小中高・大学・PTA向け講演 など', 'Talks for elementary, junior high, high schools, universities, and PTAs')}
                    </li>
                    <li>
                      {t('近畿同朋運動推進協議会 記念講演', 'Memorial lecture for the Kinki Dobo Movement Promotion Council')}
                    </li>
                  </ul>
              </div>
              </div>
              <div className="bg-[#FAF8F0] rounded-xl md:rounded-2xl p-5 md:p-6 shadow-md border-2 border-[#F5F1E8] mb-6">
              <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-display font-bold text-headings">
                    {t('対象者と場面', 'Audiences & Settings')}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t('教育機関（児童・生徒・教員・PTA）', 'Schools (students, teachers, PTAs)')}</li>
                    <li>{t('企業（管理職・一般社員向けD&I/SDGs研修）', 'Companies (D&I/SDGs training for managers and staff)')}</li>
                    <li>{t('労働組合（政策提案学習会・安全衛生活動）', 'Labor unions (policy study sessions, safety & health activities)')}</li>
                    <li>{t('自治体（人権週間、国際理解週間）', 'Municipalities (human-rights week, international-understanding week)')}</li>
                    <li>{t('地域NPO、市民フォーラム、宗教系の集い など', 'Local NPOs, citizen forums, faith-based gatherings, etc.')}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8]">
                <img
                  src={nishantaExtraImage}
                  alt={t('講演イメージ', 'Lecture Image')}
                  className="w-full h-full object-cover block"
                />
              </div>
                <section className="mt-10 space-y-4">
                  <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                    {t('ダイバーシティ講演講師', 'Diversity Lecture Speaker')}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                      '　どんな場所でも、大小にかかわらず、重要な課題の一つは、存在する"ちがい"同士が正しく関わり合うことです。これは、ダイバーシティ＆インクルージョン（多様性と包摂）、国際理解・多文化共生、平和・人権、そしてSDGsなどの理念に通じます。',
                      '　In any place, regardless of size, one of the important challenges is for existing "differences" to relate to each other correctly. This connects to the principles of Diversity & Inclusion (diversity and inclusion), international understanding and multicultural coexistence, peace and human rights, and SDGs, among others.'
                    )}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                      '　私たちは一人ひとりが唯一無二の存在です。生まれた瞬間から今に至るまで、さまざまな経験が積み重なり、顔が違うように皆異なる人間です。また、私たちを取り巻く自然環境や人工環境も常に変化しています。つまり、私たちの周りには常に"ちがい"が存在しているのです。そんな多様性の中で、私たちはこれまでも、そしてこれからも生き続けていくのです。',
                      '　Each of us is a unique and irreplaceable existence. From the moment we are born until now, various experiences accumulate, and like our different faces, we are all different people. Also, the natural and artificial environments surrounding us are constantly changing. In other words, "differences" always exist around us. Within such diversity, we have continued to live and will continue to live.'
                    )}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                      '　これまで見過ごしてきた"ちがい"に目を向け、それを大切にしながら生きる時代が到来しています。"セレンディピティ"という言葉は偶然の幸運を意味しますが、この概念を"ちがい"に対しても適用し、違いを発見することが新たな幸運をもたらすと考えられます。これからの時代は、"ちがい"を積極的に活かしながら生きていくことが求められています。',
                      '　An era has arrived where we turn our attention to the "differences" we have overlooked until now and live while cherishing them. The word "serendipity" means a fortunate coincidence, but by applying this concept to "differences" as well, discovering differences is thought to bring new fortune. In the era ahead, we are being asked to live while actively leveraging "differences."'
                    )}
                  </p>
                <div className="flex justify-center">
                  <a
                    href="#div"
                    className="inline-flex items-center gap-0.5 px-1.5 py-2 rounded-full bg-[#F5F1E8] text-headings font-semibold text-sm md:text-base whitespace-nowrap hover:bg-[#e6d5b8]"
                  >
                    <span>{t('続きを読む ➞', 'Read more ➞')}</span>
                  </a>
                </div>
                <div className="mt-8 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
                  <img
                    src={nishantaExtraImage2}
                    alt={t('講演イメージ', 'Lecture Image')}
                    className="w-full h-full object-contain block"
                  />
                </div>
                <section className="mt-10 space-y-4">
                  <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                    {t('国際理解・多文化共生の講演講師', 'International Understanding & Multicultural Coexistence')}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                      '　世の中で起きている「良いこと」と「よくないこと」は、"ちがい"との関わりに起因しています。過去や現状だけでなく、将来についても"ちがい"との関わりを考えることで予測できます。',
                      '　The "good things" and "not-so-good things" happening in the world stem from how we relate to "differences." By thinking about our relationship with "differences," we can predict not only the past and present but also the future.'
                    )}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                      '　"共生"という言葉がありますが、私たちは"ちがい"と共生していることにもっと意識的であるべきです。ただ共に生きるだけでは不十分で、"ちがい"との共生を自然に任せると、数の論理や力学により、良い結果には繋がりません。例えば、世界で起きている戦争、環境問題、営業不振、夫婦喧嘩など、全ての社会悪は、"ちがい"との関わりを自然に任せた結果です。',
                      '　There is the word "coexistence," but we should be more conscious of the fact that we are coexisting with "differences." Simply living together is not sufficient, and if we leave coexistence with "differences" to nature, the logic of numbers and dynamics will not lead to good results. For example, all social evils such as wars occurring in the world, environmental problems, business downturns, and marital quarrels are the result of leaving our relationship with "differences" to nature.'
                    )}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                      '　理想的な共生を追求することが重要です。"ちがい"同士が共に楽しみ（共楽）、共に学び（共学）、共に成長し（共育）、共に活き活かされ（共活）、共に笑う（共笑®︎）ことが必要です。"共笑®︎"（ともえ）は私の造語ですが、この概念の追求こそが、一人ひとりはもちろん、組織、社会、国家などあらゆる空間において永遠の平和、持続可能性、発展を求めるための唯一無二の方法であると言えます。',
                      '　It is important to pursue ideal coexistence. It is necessary for "differences" to enjoy together (共楽), learn together (共学), grow together (共育), live and be enlivened together (共活), and laugh together (共笑®︎). "共笑®︎" (Tomoe) is a term I coined, and I believe that pursuing this concept is the one and only way to seek eternal peace, sustainability, and development in all spaces—individuals, of course, as well as organizations, societies, and nations.'
                    )}
                  </p>
                <div className="flex justify-center">
                  <a
                    href="#intl"
                    className="inline-flex items-center gap-0.5 px-1.5 py-2 rounded-full bg-[#F5F1E8] text-headings font-semibold text-sm md:text-base whitespace-nowrap hover:bg-[#e6d5b8]"
                  >
                    <span>{t('続きを読む ➞', 'Read more ➞')}</span>
                  </a>
                </div>
                <div className="mt-8 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
                  <img
                    src={nishantaExtraImage3}
                    alt={t('講演イメージ', 'Lecture Image')}
                    className="w-full h-full object-contain block"
                  />
                </div>
                <section className="mt-10 space-y-4">
                  <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                    {t('SDGs・サステナビリティの講演講師', 'SDGs & Sustainability Lecturer')}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                        '　世の中で起きている"良いこと"と"よくないこと"は、"ちがい"との関わりによって説明できます。過去や現状に加えて、将来も"ちがい"との関わりを元に予測することが可能です。',
                        '　The "good things" and "not-so-good things" happening in the world can be explained by our relationship with "differences." In addition to the past and present, it is also possible to predict the future based on our relationship with "differences."'
                    )}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                        '　"共生"という言葉がありますが、私たちは否応なく"ちがい"と共生していることに気づく必要があります。ただ単に共に生きるだけでは不十分です。"ちがい"との共生を自然の成り行きに任せると、数の論理などの力学により、望ましい結果が得られないことが多いのです。実際、世界で起きている戦争、環境問題、営業不振、夫婦喧嘩といったすべての社会問題は、"ちがい"との関わりを自然に任せた結果といえます。',
                        '　There is the word "coexistence," but we need to realize that we inevitably coexist with "differences." Simply living together is not sufficient. If we leave coexistence with "differences" to the natural course of events, the dynamics such as the logic of numbers often prevent us from obtaining desirable results. In fact, all social problems such as wars occurring in the world, environmental issues, business downturns, and marital quarrels can be said to be the result of leaving our relationship with "differences" to nature.'
                    )}
                  </p>
                  <p className="indent-4 md:indent-6">
                    {t(
                        '　理想的な共生を目指すことが重要です。"ちがい"同士が共に楽しみ（共楽）、共に学び（共学）、共に成長し（共育）、共に活かされ（共活）、共に笑う（共笑®︎）ことが必要です。私が考案した"共笑®︎"（ともえ）という概念は、一人ひとり、そしてどんな組織や社会、国家においても、永続的な平和、持続可能性、発展を追求するための唯一無二の方法であると信じています。',
                        '　It is important to aim for ideal coexistence. It is necessary for "differences" to enjoy together (共楽), learn together (共学), grow together (共育), live and be enlivened together (共活), and laugh together (共笑®︎). I believe that the concept of "共笑®︎" (Tomoe) that I devised is the one and only method for each individual, and for any organization, society, or nation, to pursue lasting peace, sustainability, and development.'
                    )}
                  </p>
                <div className="flex justify-center">
                  <a
                    href="#sdgs"
                    className="inline-flex items-center gap-0.5 px-1.5 py-2 rounded-full bg-[#F5F1E8] text-headings font-semibold text-sm md:text-base whitespace-nowrap hover:bg-[#e6d5b8]"
                  >
                    <span>{t('続きを読む ➞', 'Read more ➞')}</span>
                  </a>
                </div>
                  <div className="mt-8 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
                    <img
                      src={nishantaExtraImage4}
                      alt={t('講演イメージ', 'Lecture Image')}
                      className="w-full h-full object-contain block"
                    />
                  </div>
                  <section className="mt-10 space-y-4">
                    <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                      {t('人権と平和の講演講師', 'Human Rights & Peace Lecturer')}
                    </p>
                    <p className="indent-4 md:indent-6">
                      {t(
                        '　21世紀は「人権の世紀」と称されますが、これは"共笑"を考える上で人権が重要な柱となるからです。1948年に採択された「世界人権宣言」から70年が経ち、人権も進化する時期に差し掛かっていると考えられます。',
                        '　The 21st century is called "the century of human rights," and this is because human rights are an important pillar when considering "共笑." Seventy years have passed since the adoption of the Universal Declaration of Human Rights in 1948, and it is thought that human rights are reaching a period where they must evolve.'
                      )}
                    </p>
                    <p className="indent-4 md:indent-6">
                      {t(
                        '　これまで、多くの人々にとって人権は他者のためのものであり、自分には直接関係がないと感じられてきました。例えば、私の人権講演会に参加する方々は、外国人のために何か役立ちたいという尊い思いがあるかもしれませんが、自身の利益を考えることはあまりありませんでした。このような考えが、人権の取り組みに対して社会の多数派の関心を低下させていると推測されます。',
                        '　Until now, for many people, human rights have been felt to be something for others and not directly related to themselves. For example, those who participate in my human rights lectures may have noble thoughts of wanting to help foreigners in some way, but they rarely think about their own benefit. It is speculated that such thinking has lowered the interest of the majority of society in human rights initiatives.'
                      )}
                    </p>
                    <p className="indent-4 md:indent-6">
                      {t(
                        '　世界的にも、日本ほど丁寧に人権啓発に取り組む国はありません。基本的人権を軸に据えた活動を継続する一方で、人権は他者だけでなく自分自身のためにもあるという発想を取り入れることが重要です。',
                        '　Globally, there is no country that approaches human rights awareness as carefully as Japan. While continuing activities centered on fundamental human rights, it is important to incorporate the idea that human rights exist not only for others but also for oneself.'
                      )}
                    </p>
                    <p className="indent-4 md:indent-6">
                      {t(
                        '　自らが持たない"ちがい"を知り、それを尊重することで、強く、優しく、柔軟に、美しく、豊かになるための「自己の権利」が、新たな時代の人権の定義となります。その結果、人権は手前よし、相手よし、世間よしの「三方よし」を実現し、真の意味で持続可能な"共笑な人権"へと進化するのです。',
                        '　The "rights of the self" to become strong, gentle, flexible, beautiful, and rich by knowing and respecting the "differences" one does not possess becomes the definition of human rights for the new era. As a result, human rights achieve "three-way good" (good for oneself, good for others, good for society) and evolve into truly sustainable "共笑 human rights."'
                      )}
                    </p>
                  </section>
                  <div className="flex justify-center">
                    <a
                      href="#hr"
                      className="inline-flex items-center gap-0.5 px-1.5 py-2 rounded-full bg-[#F5F1E8] text-headings font-semibold text-sm md:text-base whitespace-nowrap hover:bg-[#e6d5b8]"
                    >
                      <span>{t('続きを読む ➞', 'Read more ➞')}</span>
                    </a>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-headings mt-4 text-center">
                    {t('人権と平和に関する講義', 'Lectures on Human Rights & Peace')}
                  </h2>
                  <div className="mt-6 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-2 border-[#F5F1E8] max-h-[520px] md:max-h-[600px]">
                    <img
                      src={nishantaExtraImage5}
                      alt={t('人権と平和', 'Human Rights & Peace')}
                      className="w-full h-full object-contain block"
                    />
                  </div>
                  <section className="mt-10 space-y-3">
                    <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                      {t('よくあるご質問（FAQ）', 'FAQ')}
                    </p>
                    <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                      __html: t(
                        '✧Q： 講演の時間は？<br />A： 通常60分〜90分ですが、ご希望に応じて調整可能です。',
                        '✧Q: What is the lecture duration?<br />A: Usually 60–90 minutes, but adjustable to your needs.'
                      )
                    }} />
                    <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                      __html: t(
                        '✧Q： オンライン講演も可能ですか？<br />A： はい。Zoomなどの環境で対応可能です。',
                        '✧Q: Are online lectures possible?<br />A: Yes. We can accommodate Zoom and similar platforms.'
                      )
                    }} />
                    <p className="indent-4 md:indent-6" dangerouslySetInnerHTML={{
                      __html: t(
                        '✧Q： 対象が高校生・大学生でも対応できますか？<br />A： はい。年齢や専門性に応じて柔軟に調整します。無分別をモットーしており、どのような対象でも対応可能です。',
                        '✧Q: Can you accommodate high school and university students?<br />A: Yes. We flexibly adjust to age and expertise. Making it our motto to be inclusive, we can accommodate any type of audience.'
                      )
                    }} />
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
                  <div className="mt-8 text-sm text-gray-700 leading-relaxed space-y-2">
                    <p className="text-base md:text-lg font-semibold text-headings">{t('4件のコメント', '4 Comments')}</p>
                    <p>
                      {t('ピンバック: ', 'Pingback: ')}<a href="https://nishan.jp/schedule03/div/" target="_blank" rel="noopener noreferrer" className="underline text-headings hover:text-[#c59a53]">{t('ダイバーシティ講演会のトップ講師｜にしゃんたが語る多文化共生とインクルージョンの未来 | 講師依頼受付中', 'Top Diversity Lecture Speaker | Nishanta on the Future of Multicultural Coexistence & Inclusion | Accepting Speaker Requests')}</a>
                    </p>
                    <p>
                      {t('ピンバック: ', 'Pingback: ')}<a href="https://nishan.jp/schedule03/" target="_blank" rel="noopener noreferrer" className="underline text-headings hover:text-[#c59a53]">{t('人権講演講師・仏教講演｜多文化共生とダイバーシティ｜近畿同朋運動創立7記念大会｜SDGsにも通じるメッセージ', 'Human Rights & Buddhist Lecture Speaker | Multicultural Coexistence & Diversity | Kinki Dobo Movement 7th Anniversary | Message Connecting to SDGs')}</a>
                    </p>
                    <p>
                      {t('ピンバック: ', 'Pingback: ')}<a href="https://nishan.jp/schedule03/lecture-jinken/" target="_blank" rel="noopener noreferrer" className="underline text-headings hover:text-[#c59a53]">{t('人権講演会｜共に生きる社会を目指して～外国人の人権を考える～｜講師 にしゃんた（羽衣国際大学教授）', 'Human Rights Lecture | Aiming for a Society Living Together ~ Considering Foreigners\' Human Rights ~ | Speaker Nishanta (Hagoromo International University Professor)')}</a>
                    </p>
                    <p>
                      {t('ピンバック: ', 'Pingback: ')}<a href="https://nishan.jp/schedule03/human-speach/" target="_blank" rel="noopener noreferrer" className="underline text-headings hover:text-[#c59a53]">{t('人権講演講師｜ちがいを楽しみ、力にかえるダイバーシティスピーカー にしゃんた', 'Human Rights Lecture Speaker | Diversity Speaker Nishanta Who Enjoys Differences and Turns Them into Strength')}</a>
                    </p>
                    <p className="text-base text-headings">{t('※コメントは受け付けていません。', '※ Comments are not accepted.')}</p>
                  </div>
                  </section>
                </section>
              </section>
              </section>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}

export default Lectures

