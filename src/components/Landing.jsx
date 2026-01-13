import React from 'react'
import Hero from './Hero'
import tomoemainImage from '../Images/tomoemain-2048x1115.jpg'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const Landing = ({ language = 'ja', onNavigate }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  
  const handleLinkClick = (e, pageId) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(pageId)
    } else {
      window.location.href = `/${pageId}`
    }
  }
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
              
              {/* New Brand Concept Section */}
              <div className="mb-8 space-y-4">
                <div className="inline-block mx-auto px-6 py-4 rounded-xl bg-[#FAF8F0] border-2 border-[#F5F1E8] shadow-md">
                  <p className="text-xl md:text-2xl font-display font-semibold leading-relaxed" style={{
                    background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {t(
                      'Tomoe®︎ Diversity is Power.　違いを、笑いに。未来を、共笑®︎に。',
                      'Tomoe®︎ Diversity is Power. Turn differences into laughter. Transform the future into 共笑®.'
                    )}
                  </p>
                </div>
                
                <div className="flex flex-col items-start gap-2 mt-12 text-left">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-display font-bold" style={{
                      background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1'
                    }}>
                      01
                    </span>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-headings">
                        {t('コンセプト / Brand Concept', 'Brand Concept')}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-base md:text-lg font-display font-medium mt-1" style={{ color: '#c59a53' }}>
                    {t(
                      '01 Brand Concept　5つのエンジン　The Core Mantra',
                      '01 Brand Concept　5 Engines　The Core Mantra'
                    )}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-10">
                <p className="text-3xl md:text-4xl font-display font-semibold mb-8 leading-relaxed" style={{
                  background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {t(
                    '共楽 Joy | 共学 Learn | 共育 Grow | 共活 Empower | 共創 Create',
                    '共楽 Joy | 共学 Learn | 共育 Grow | 共活 Empower | 共創 Create'
                  )}
                </p>
                <div className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8 text-left">
                  <p className="leading-7 md:leading-8" style={{ lineHeight: '1.8' }}>
                    {t(
                      'これらは、私たちが「共笑®︎」を実現するための5つのエンジン。楽しむことから始まり、共に学び、育ち、それぞれの力を分かち合い、そして新しい価値を共に創り出す。この循環が、社会をより豊かに、鮮やかに塗り替えていきます。',
                      'These are the five engines for us to realize "共笑®︎". Starting with enjoyment, learning together, growing together, sharing each other\'s strengths, and creating new value together. This cycle repaints society to be richer and more vibrant.'
                    )}
                  </p>
                </div>
              </div>

              {/* Section 02: Vision */}
              <div className="flex flex-col items-start gap-2 mt-10 text-left">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl md:text-4xl font-display font-bold" style={{
                    background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1'
                  }}>
                    02
                  </span>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-headings">
                      {t('ビジョン / The Vision', 'The Vision')}
                    </h2>
                  </div>
                </div>
                
                <p className="text-base md:text-lg font-display font-medium mt-1" style={{ color: '#c59a53' }}>
                  {t(
                    '02 The Vision　Philosophy Beyond Coexistence　社会啓発から「社会実装」へ',
                    '02 The Vision　Philosophy Beyond Coexistence　From Social Enlightenment to "Social Implementation"'
                  )}
                </p>
              </div>
              <div className="text-center mt-2 md:mt-4">
                <p className="text-3xl md:text-4xl font-display font-semibold mb-8 leading-relaxed" style={{
                  background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.3',
                  paddingBottom: '0.3em',
                  paddingTop: '0.1em',
                  overflow: 'visible'
                }}>
                  {t(
                    'ただ、共に生きるのではない。響き合い、高め合う。',
                    'It\'s not just about living together. It\'s about resonating with one another and mutually elevating each other.'
                  )}
                  <span style={{ whiteSpace: 'nowrap' }}>一歩先の共生へ。</span>
                </p>
                <div className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8 text-left">
                  <p className="leading-7 md:leading-8" style={{ lineHeight: '1.8' }}>
                    {t(
                      '私たちが目指すのは、社会学者・にしゃんた博士が提唱する「単に共に生きる（共生）だけでなく、その質を高め合う」という哲学の具現化です。プロジェクト開始当初、私たちの軸足は「社会啓発」や「布教」といった教育活動にありました。しかし現在、その枠は軽やかに取り払われ、活動の舞台は人々の生活が息づく「実践の場」へと進化を遂げています。多様性を単なる「違い」として放置するのではなく、互いの存在が響き合い、シナジーを生み出すための技術（コンピテンシー）へ。私たちはこの価値観を共有する専門家ネットワークを構築し、分断を溶かし、誰もが自分らしく輝ける社会の実装に取り組んでいます。',
                      'What we aim for is the embodiment of the philosophy proposed by sociologist Dr. Nishanta: "not just living together (coexistence), but mutually elevating its quality." At the project\'s inception, our focus was on educational activities such as "social enlightenment" and "propagation." However, now those boundaries have been gracefully removed, and our stage of activity has evolved into "places of practice" where people\'s lives breathe. Rather than leaving diversity as mere "differences," we move toward competencies that allow our existences to resonate and create synergy. We are building a network of experts who share these values, dissolving divisions, and working toward implementing a society where everyone can shine in their own way.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 03: Social Practice */}
            <div className="flex flex-col items-start gap-2 mt-10 md:mt-12 text-left">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-display font-bold" style={{
                  background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1'
                }}>
                  03
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-headings">
                    {t('活動領域 / Social Practice', 'Social Practice')}
                  </h2>
                </div>
              </div>
              
              <p className="text-base md:text-lg font-display font-medium mt-1" style={{ color: '#c59a53' }}>
                {t(
                  '03 Social Practice  From Cradle to Grave 人生の全ステージを支える活動領域',
                  '03 Social Practice  From Cradle to Grave  Activity Areas Supporting All Stages of Life'
                )}
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-4 mb-6">
              <img 
                src={tomoemainImage} 
                alt={t('活動領域 / Social Practice', 'Social Practice')}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text below image */}
            <div className="text-center mt-8 mb-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-5" style={{
                background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {t(
                  'ゆりかごから墓場まで',
                  'From Cradle to Grave'
                )}
              </h3>
              <div className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto text-left">
                <p className="leading-7 md:leading-8" style={{ lineHeight: '1.8' }}>
                  {t(
                    '私たちは、単なる「サービス」を提供しているのではありません。 登録商標に基づき法的に守られた5つの専門領域で、人生と組織の質を劇的に変える「社会的実践」を展開しています。',
                    'We are not simply providing "services." Based on registered trademarks that are legally protected, we are developing "social practices" in five specialized areas that dramatically transform the quality of life and organizations.'
                  )}
                </p>
              </div>
            </div>

            {/* Management & Strategy Section */}
            <div className="max-w-4xl mx-auto mt-8 mb-10 text-left">
              <div className="mb-5">
                <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2 lg:whitespace-nowrap">
                  {t(
                    '1.【経営・戦略】Management & Strategy　「違い」を組織の「利益」へと変換する',
                    '1.【Management & Strategy】Management & Strategy　Transforming "Differences" into Organizational "Benefits"'
                  )}
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('DEIコンサルティング：', 'DEI Consulting:')}
                  </span>
                  {' '}
                  {t(
                    '組織の多様性を価値に変える戦略立案・伴走支援。',
                    'Strategic planning and ongoing support to transform organizational diversity into value.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('タレントマネジメント：', 'Talent Management:')}
                  </span>
                  {' '}
                  {t(
                    '個々のポテンシャルを最大化する人財配置・評価設計。',
                    'Human resource allocation and evaluation design to maximize individual potential.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎ブランディング：', '共笑®︎ Branding:')}
                  </span>
                  {' '}
                  {t(
                    '多様性を尊重する先進企業としての社会的信用を構築。',
                    'Building social credibility as an advanced company that respects diversity.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('組織文化のリデザイン：', 'Organizational Culture Redesign:')}
                  </span>
                  {' '}
                  {t(
                    '心理的安全性を高め、イノベーションが生まれる土壌を創出。',
                    'Creating an environment that enhances psychological safety and fosters innovation.'
                  )}
                </li>
              </ul>
            </div>

            {/* Education & Literacy Section */}
            <div className="max-w-4xl mx-auto mt-10 mb-10 text-left">
              <div className="mb-5">
                <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2 lg:whitespace-nowrap">
                  {t(
                    '2.【教育・学び】Education & Literacy　折れない心と、他者を認める知性を育む',
                    '2.【Education & Literacy】Education & Literacy　Nurturing Resilient Hearts and Intelligence that Recognizes Others'
                  )}
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎・ダイバーシティ能力検定®︎：', '共笑®︎・Diversity Competency Certification®︎:')}
                  </span>
                  {' '}
                  {t(
                    '多様性対応力を可視化し、公式に認定・付与。',
                    'Visualizing diversity competency and providing official certification and accreditation.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎講演・研修：', '共笑®︎ Lectures & Training:')}
                  </span>
                  {' '}
                  {t(
                    '唯一無二の理論と体験を融合させた、意識変革プログラム。',
                    'A consciousness transformation program that combines unique theory and experience.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('次世代私塾の運営：', 'Next-Generation Private School Operations:')}
                  </span>
                  {' '}
                  {t(
                    'Z世代・グローバルマインドを育む「共学」の場の提供。',
                    'Providing a "共学" (shared learning) space that nurtures Gen Z and global mindset.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('リスキリング支援：', 'Reskilling Support:')}
                  </span>
                  {' '}
                  {t(
                    '多様化する社会で生き抜くための、新たな知性とスキルの習得サポート。',
                    'Support for acquiring new intelligence and skills to thrive in an increasingly diverse society.'
                  )}
                </li>
              </ul>
            </div>

            {/* Hospitality & Well-being Section */}
            <div className="max-w-4xl mx-auto mt-10 mb-10 text-left">
              <div className="mb-5">
                <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2 lg:whitespace-nowrap">
                  {t(
                    '3.【食・環境】Hospitality & Well-being　命を養う「食」と、安全な「居場所」をプロデュース',
                    '3.【Hospitality & Well-being】Hospitality & Well-being　Producing "Food" that Nourishes Life and Safe "Places to Be"'
                  )}
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎ファーム：', '共笑®︎ Farm:')}
                  </span>
                  {' '}
                  {t(
                    '農業を通じた「食の安全」と「働く喜び」の循環を創出。',
                    'Creating a cycle of "food safety" and "joy of work" through agriculture.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('飲食店・ショップ運営：', 'Restaurant & Shop Operations:')}
                  </span>
                  {' '}
                  {t(
                    '多様な人が集い、五感で共笑®︎を体感できる空間提供。',
                    'Providing spaces where diverse people gather and experience 共笑®︎ through all five senses.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('知能開発・シッティング：', 'Intellectual Development & Sitting:')}
                  </span>
                  {' '}
                  {t(
                    '幼児安全法のプロが担当する、学びのある預かり実務。',
                    'Childcare services provided by professionals in infant safety, incorporating learning opportunities.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('生活支援・家事代行：', 'Life Support & Housekeeping Services:')}
                  </span>
                  {' '}
                  {t(
                    '掃除、料理、身の回りの世話など。高齢者や共働き世帯への「生活支援」としての側面を重視した、QOL向上サポート。',
                    'Cleaning, cooking, personal care, etc. QOL improvement support emphasizing the "life support" aspect for elderly and dual-income households.'
                  )}
                </li>
              </ul>
            </div>

            {/* Wellness & Physical Care Section */}
            <div className="max-w-4xl mx-auto mt-10 mb-10 text-left">
              <div className="mb-5">
                <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2 lg:whitespace-nowrap">
                  {t(
                    '4.【身体・美】Wellness & Physical Care　一生モノの動ける身体と、自分らしい輝きを',
                    '4.【Wellness & Physical Care】Wellness & Physical Care　A Body That Moves for Life and Your Own Unique Radiance'
                  )}
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('身体構造最適化：', 'Body Structure Optimization:')}
                  </span>
                  {' '}
                  {t(
                    '医学的根拠と武道の知見に基づく、超実践的ボディワーク。',
                    'Highly practical bodywork based on medical evidence and martial arts knowledge.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('アスリート栄養学：', 'Athlete Nutrition:')}
                  </span>
                  {' '}
                  {t(
                    'パフォーマンスを最大化する、一生モノの食事戦略支援。',
                    'Lifelong dietary strategy support to maximize performance.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('ビューティーアドバイス：', 'Beauty Advice:')}
                  </span>
                  {' '}
                  {t(
                    'セルフエステームを高める、外見からの戦略的アプローチ。',
                    'Strategic approach from appearance to enhance self-esteem.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('マインドフルネス・プログラム：', 'Mindfulness Program:')}
                  </span>
                  {' '}
                  {t(
                    '精神と肉体の調和を図り、レジリエンス（復元力）を強化。',
                    'Harmonizing mind and body, strengthening resilience (recovery power).'
                  )}
                </li>
              </ul>
            </div>

            {/* Spiritual & Total Care Section */}
            <div className="max-w-4xl mx-auto mt-10 mb-10 text-left">
              <div className="mb-5">
                <h4 className="text-xl md:text-2xl font-display font-bold text-headings mb-2 lg:whitespace-nowrap">
                  {t(
                    '5.【ケア・魂】Spiritual & Total Care 尊厳を守り抜き、魂に寄り添うトータルサポート',
                    '5.【Spiritual & Total Care】Spiritual & Total Care  Total Support That Protects Dignity and Stays Close to the Soul'
                  )}
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎冠婚葬祭：', '共笑®︎ Ceremonial Occasions:')}
                  </span>
                  {' '}
                  {t(
                    '既成概念に囚われない、人生の節目を彩るオーダーメイドな提案。',
                    'Custom-made proposals that color life\'s milestones without being bound by conventional concepts.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('プレミアム・ケアサポート：', 'Premium Care Support:')}
                  </span>
                  {' '}
                  {t(
                    '介護保険の枠を超えた、安全で自由な移動・入浴実務。',
                    'Safe and free mobility and bathing services beyond the scope of long-term care insurance.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('僧侶による対話・終活支援：', 'Dialogue & End-of-Life Support by Monks:')}
                  </span>
                  {' '}
                  {t(
                    '生死の問題を共に考え、魂を整えるカウンセリング。',
                    'Counseling to think together about life and death issues and align the soul.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('グリーフケア・スピリチュアル伴走：', 'Grief Care & Spiritual Support:')}
                  </span>
                  {' '}
                  {t(
                    '喪失の痛みに寄り添い、再び前を向くための精神的支柱を提供。',
                    'Providing spiritual support to accompany the pain of loss and help face forward again.'
                  )}
                </li>
              </ul>
            </div>

            {/* Brand Ecosystem Section */}
            <div className="flex flex-col items-start gap-2 mt-10 md:mt-12 text-left">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-display font-bold" style={{
                  background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1'
                }}>
                  04
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-headings">
                    {t('エコシステム / Brand Ecosystem', 'Brand Ecosystem')}
                  </h2>
                </div>
              </div>
              
              <p className="text-base md:text-lg font-display font-medium mt-1" style={{ color: '#c59a53' }}>
                {t(
                  '04 Brand Ecosystem　Multi-Dimensional Trust　信頼を基盤に、未来へ還元する',
                  '04 Brand Ecosystem　Multi-Dimensional Trust　Returning to the Future Based on Trust'
                )}
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-2">
                {t(
                  '教育、ビジネス、飲食、農業、福祉、そして冠婚葬祭まで。『共笑®︎』は、生活に関わる多岐にわたる分野で商標登録された「信頼と品質の証明」です。私たちはこの堅実な知的財産権（IP）の基盤のもと、点と点を線でつなぎ、「共笑®︎エコシステム」として社会へ還元しています。次世代の才能を育て、地域に根ざした場を作り、日々の暮らしを全方位から支える。この一貫したブランド価値が、より良い未来を担保します。',
                  'From education, business, food and beverage, agriculture, welfare, to ceremonial occasions. 共笑®︎ is a "proof of trust and quality" registered across diverse fields related to daily life. Based on this solid foundation of intellectual property (IP), we connect the dots and return to society as the "共笑®︎ Ecosystem." Nurturing next-generation talent, creating locally-rooted spaces, and supporting daily life from all directions. This consistent brand value guarantees a better future.'
                )}
              </p>
            </div>

            {/* Social Impact Section */}
            <div className="flex flex-col items-start gap-2 mt-10 md:mt-12 text-left">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-display font-bold" style={{
                  background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1'
                }}>
                  05
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-headings">
                    {t('社会的インパクト / Social Impact', 'Social Impact')}
                  </h2>
                </div>
              </div>
              
              <p className="text-base md:text-lg font-display font-medium mt-1" style={{ color: '#c59a53' }}>
                {t(
                  '05 Social Impact　Investing in Smiles　持続可能な「共笑」の循環',
                  '05 Social Impact　Investing in Smiles　Sustainable Cycle of "共笑"'
                )}
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-2">
                {t(
                  '「共笑®︎」は、独占するためのブランドではありません。私たちは、事業収益の一部を「共笑®︎基金」へと還元し、国内外でのボランティア活動や次世代支援を積極的に推進しています。ビジネスが社会を癒し、教育が未来を創り、生活が豊かになる。この美しい循環（サステナビリティ）を止めないために、私たちは志を同じくする皆さんと共に歩み続けます。',
                  '共笑®︎ is not a brand to be monopolized. We return a portion of our business revenue to the "共笑®︎ Fund" and actively promote volunteer activities and next-generation support both domestically and internationally. Business heals society, education creates the future, and life becomes richer. To keep this beautiful cycle (sustainability) going, we continue to walk together with everyone who shares our vision.'
                )}
              </p>
            </div>

            {/* Partnership Section */}
            <div className="flex flex-col items-start gap-2 mt-10 md:mt-12 text-left">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-display font-bold" style={{
                  background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1'
                }}>
                  06
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-headings">
                    {t('パートナーシップ / PARTNERSHIP', 'PARTNERSHIP')}
                  </h2>
                </div>
              </div>
              
              <p className="text-base md:text-lg font-display font-medium mt-1" style={{ color: '#c59a53' }}>
                {t(
                  '06 PARTNERSHIP　共笑®︎ライセンス・パートナーシップ　登録商標の正規提供と連携事業のご案内',
                  '06 PARTNERSHIP　共笑®︎ License & Partnership　Official Trademark Provision and Collaboration Business Information'
                )}
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-2">
                {t(
                  '現在、私たちは「共笑®︎」の理念に共感し、共に新しい価値を創造するパートナーシップを積極的に受け付けております。 ライセンスの活用や連携事業に関する詳細は、下記のリンクよりご確認ください。',
                  'Currently, we are actively accepting partnerships with those who resonate with the philosophy of "共笑®︎" and wish to create new value together. For details regarding license utilization and collaboration businesses, please check the link below.'
                )}
              </p>
            </div>

            <div className="mt-10 md:mt-12 text-center">
              <div className="w-full md:inline-block bg-[#FAF8F0] rounded-xl md:rounded-2xl p-5 md:p-8 shadow-md border-2 border-[#F5F1E8] max-w-2xl mx-auto">
                <p className="text-xl md:text-3xl font-display font-bold text-headings mb-3 md:mb-4">
                  {t('PARTNERSHIP', 'PARTNERSHIP')}
                </p>
                <p className="text-base md:text-2xl text-headings leading-relaxed px-2 md:px-0">
                  {t(
                    '共笑®︎ライセンス・パートナーシップ',
                    '共笑®︎ License & Partnership'
                  )}
                </p>
                
                {/* Intellectual Property Notice */}
                <div className="mt-6 mb-5 px-4 py-3 bg-[#FFF9E6] border-l-4 border-[#c59a53] rounded-r">
                  <p className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                    {t('【知的財産権に関する重要なお知らせ】', '【Important Notice Regarding Intellectual Property Rights】')}
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {t(
                      '「共笑®︎」は、Office KANDY, Inc. の登録商標です。ブランドの価値を維持し、正しい「共生」を提供するため、無断での使用は固くお断りしております。私たちの思想と活動を守るための重要な権利であることをご理解いただけますと幸いです。',
                      '"共笑®︎" is a registered trademark of Office KANDY, Inc. To maintain the brand\'s value and provide proper "coexistence," we strictly prohibit unauthorized use. We appreciate your understanding that this is an important right to protect our philosophy and activities.'
                    )}
                  </p>
                </div>
                
                <div className="mt-5 md:mt-6">
                  <a
                    href="/license"
                    onClick={(e) => handleLinkClick(e, 'license')}
                    className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-black font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-200 w-full md:w-auto justify-center"
                    style={{
                      background: 'linear-gradient(90deg, #fef3c7, #e9d5ff)',
                      maxWidth: '100%',
                      minWidth: 'auto'
                    }}
                  >
                    {t('詳しく見る', 'Learn More')}
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Partnership Content */}
            <div className="max-w-4xl mx-auto mt-10 mb-8 text-center">
              <p className="text-3xl md:text-4xl font-display font-semibold mb-5 leading-relaxed" style={{
                background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {t(
                  '「無断利用」ではなく「正規の連携」を。',
                  'Not "unauthorized use" but "official collaboration."'
                )}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                {t(
                  '「共笑®︎」の旗印のもと、御社と共に新しい未来を創れることを楽しみにしています。',
                  'Under the banner of "共笑®︎," we look forward to creating a new future together with your company.'
                )}
              </p>
              <div className="flex justify-center mb-8">
                <img 
                  src={logoTomoe02} 
                  alt="共笑®︎"
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>

            {/* Important Trademark Notice */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="w-full md:inline-block bg-red-50 border-2 border-red-200 rounded-xl md:rounded-lg p-5 md:p-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl md:text-2xl">⚠️</span>
                    <h3 className="text-base md:text-lg font-display font-bold text-red-800 leading-tight">
                      {t('【重要】登録商標「共笑」の使用に関する注意書き', '【Important】Notice Regarding Use of Registered Trademark "共笑"')}
                    </h3>
                  </div>
                </div>
                <div className="text-left mt-4">
                  <p className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                    {t('注意書き：商標権について', 'Notice: Regarding Trademark Rights')}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {t(
                      '「共笑®︎」は、Office KANDYの登録商標( 第35類、第41類、第43類、第44類、第45類)です。当社の許可なく、本商標を無断で使用（複製、転用、販売等）することは、商標法違反となります。 適正な使用をお願い申し上げます。',
                      '"共笑®︎" is a registered trademark of Office KANDY (Classes 35, 41, 43, 44, 45). Unauthorized use of this trademark (reproduction, transfer, sale, etc.) without our permission constitutes a violation of trademark law. We request proper use.'
                    )}
                  </p>
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

