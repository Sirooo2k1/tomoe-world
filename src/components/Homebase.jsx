import React from 'react'
import Hero from './Hero'
import croppedImage0524 from '../Images/cropped_cropped_IMG_0524.png'
import tomoeHomeImage from '../Images/tomoe-home.jpg'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const Homebase = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={croppedImage0524}
          alt={t('共笑®︎ホームベース', '共笑®︎ Homebase')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h2 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-1"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 25%, #fef3c7 50%, #e9d5ff 75%, #ffffff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255,255,255,0.5), 0 4px 8px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                animation: 'gradientShift 3s ease infinite',
                lineHeight: '1.2',
                paddingBottom: '0.1em',
                overflow: 'visible',
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
              {t('共笑®︎ホームベース', '共笑®︎ Homebase')}
            </h2>
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white cursor-pointer transition-all duration-500 hover:scale-105 hover:translate-y-[-5px]"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = '0 2px 15px rgba(255,255,255,0.6), 0 0 30px rgba(147, 197, 253, 0.5), 0 4px 8px rgba(0,0,0,0.3)'
                e.target.style.color = '#e0f2fe'
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
                e.target.style.color = 'white'
              }}
            >
              {t('Indicator for the new world.', 'Indicator for the new world.')}
            </p>
          </div>
        </div>
        <style>{`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </div>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Image Section */}
          <div className="mt-6 mb-6">
            <img 
              src={tomoeHomeImage} 
              alt={t('共笑®︎ホームベース', '共笑®︎ Homebase')}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content Section */}
          <article className="p-8 md:p-12 flex justify-center">
            <div className="w-full md:inline-block bg-[#FAF8F0] rounded-xl md:rounded-2xl p-5 md:p-8 shadow-md border-2 border-[#F5F1E8] max-w-4xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-headings mb-6">
                  {t(
                    '共笑®︎ホーム（ベース）のご案内',
                    '共笑®︎ Home (Base) Information'
                  )}
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl font-display font-semibold text-center text-gray-800 leading-relaxed">
                  {t(
                    '5つの「プロの技」が交差する、あなただけの特別な居場所。',
                    'A special place just for you, where five "professional skills" intersect.'
                  )}
                </p>
                
                <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                  <p className="leading-7 md:leading-8" style={{ lineHeight: '1.8' }}>
                    {t(
                      'ここは、単なる拠点ではありません。登録商標「共笑®︎」に基づき、法的に守られた5つの専門領域が融合する、人生と組織の質を劇的に変えるための「社会的実践」の場です。',
                      'This is not just a base. Based on the registered trademark "共笑®︎," it is a place of "social practice" where five legally protected specialized areas merge to dramatically transform the quality of life and organizations.'
                    )}
                  </p>
                </div>
                
                <div className="text-lg md:text-xl leading-relaxed">
                  <p className="leading-7 md:leading-8 font-semibold text-center" style={{ 
                    lineHeight: '1.8',
                    background: 'linear-gradient(90deg, #8B7355, #C59A53, #8B7355)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {t(
                      '所在地は非公開。ご縁をいただいた会員様にのみ開放される、究極のプライベート・ベースです。',
                      'Location is private. It is an ultimate private base open only to members with whom we have a connection.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </article>
          
          {/* Professional Solutions Section */}
          <div className="pt-4 pb-8 md:pt-6 md:pb-12 px-8 md:px-12 flex justify-center">
            <div className="w-full max-w-5xl">
              <p className="text-xl md:text-2xl font-display font-semibold mb-8 text-left" style={{
                background: 'linear-gradient(135deg, #1e73be, #c59a53)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {t(
                  '🌟 商標登録に基づいた5つのプロフェッショナル・ソリューション',
                  '🌟 5 Professional Solutions Based on Registered Trademark'
                )}
              </p>

              {/* Section 1: Management & Strategy */}
              <div className="mt-8 mb-10 text-left">
              <div className="bg-gray-100 rounded-lg p-6 md:p-8 border-l-4 border-gray-500">
                <div className="mb-5">
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-2 lg:whitespace-nowrap">
                    <span className="text-gray-600">1.</span>
                    <span className="text-headings">【経営・戦略】</span>
                    <span className="text-headings">{t('共笑®︎マネジメント', '共笑®︎ Management')}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {t(
                      '（第35類：経営コンサルティング・広告・ブランディング）',
                      '(Class 35: Management Consulting, Advertising, Branding)'
                    )}
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="text-base md:text-lg" style={{ 
                    lineHeight: '1.8', 
                    textAlign: 'left',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}>
                    <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('DEI戦略顧問：', 'DEI Strategic Advisor:')}
                  </span>
                  {' '}
                  {t(
                    '多様性を「利益」と「信用」に変える戦略立案・伴走支援。',
                    'Strategic planning and ongoing support to transform diversity into "profit" and "credibility."'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('タレントマネジメント：', 'Talent Management:')}
                  </span>
                  {' '}
                  {t(
                    '個々のポテンシャルを最大化する人財配置と評価設計の最適化。',
                    'Optimization of human resource allocation and evaluation design to maximize individual potential.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎ブランディング：', '共笑®︎ Branding:')}
                  </span>
                  {' '}
                  {t(
                    '多様性を尊重する先進企業としての社会的信用を構築する広報支援。',
                    'Public relations support to build social credibility as an advanced company that respects diversity.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('組織開発ワークショップ：', 'Organizational Development Workshop:')}
                  </span>
                  {' '}
                  {t(
                    '心理的安全性を土台とした、次世代型チームビルディングの実施。',
                    'Implementation of next-generation team building based on psychological safety.'
                  )}
                </li>
              </ul>
              </div>
              </div>

              {/* Section 2: Education & Intelligence */}
              <div className="mt-10 mb-10 text-left">
              <div className="bg-orange-50 rounded-lg p-6 md:p-8 border-l-4 border-orange-500">
                <div className="mb-5">
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-2 lg:whitespace-nowrap">
                    <span className="text-orange-600">2.</span>
                    <span className="text-headings">【教育・知性】</span>
                    <span className="text-headings">{t('共笑®︎アカデミー', '共笑®︎ Academy')}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {t(
                      '（第41類：教育・研修・検定・文化）',
                      '(Class 41: Education, Training, Certification, Culture)'
                    )}
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="text-base md:text-lg" style={{ 
                    lineHeight: '1.8', 
                    textAlign: 'left',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}>
                    <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('ダイバーシティ能力検定®︎：', 'Diversity Competency Certification®︎:')}
                  </span>
                  {' '}
                  {t(
                    '多様性対応力を可視化し、公式に認定・ライセンスを付与。',
                    'Visualizing diversity competency and providing official certification and licensing.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('次世代リーダー養成：', 'Next-Generation Leader Development:')}
                  </span>
                  {' '}
                  {t(
                    'グローバルマインドと日本文化（武道・落語）を融合させたリーダー教育。',
                    'Leader education that integrates global mindset with Japanese culture (martial arts, rakugo).'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎講演・研修プログラム：', '共笑®︎ Lecture & Training Program:')}
                  </span>
                  {' '}
                  {t(
                    '学術的根拠と唯一無二の体験を融合させた意識変革セミナー。',
                    'Consciousness transformation seminars that combine academic evidence with unique experiences.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('武道フィットネス：', 'Martial Arts Fitness:')}
                  </span>
                  {' '}
                  {t(
                    '公認四段の指導員による、心身の軸を整える「動く瞑想」としての空手・護身術。',
                    'Karate and self-defense as "moving meditation" to align mind and body, led by certified 4th dan instructors.'
                  )}
                </li>
              </ul>
              </div>
              </div>

              {/* Section 3: Food & Living Environment */}
              <div className="mt-10 mb-10 text-left">
              <div className="bg-green-50 rounded-lg p-6 md:p-8 border-l-4 border-green-500">
                <div className="mb-5">
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-2 lg:whitespace-nowrap">
                    <span className="text-green-600">3.</span>
                    <span className="text-headings">【食・生活環境】</span>
                    <span className="text-headings">{t('共笑®︎ライフ・ベース', '共笑®︎ Life Base')}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {t(
                      '（第43類・45類：飲食・宿泊・託児・家事代行）',
                      '(Classes 43 & 45: Food & Beverage, Accommodation, Childcare, Housekeeping)'
                    )}
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="text-base md:text-lg" style={{ 
                    lineHeight: '1.8', 
                    textAlign: 'left',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}>
                    <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎カフェ＆ゲストハウス：', '共笑®︎ Cafe & Guest House:')}
                  </span>
                  {' '}
                  {t(
                    '栄養学に基づいた食事と、五感を研ぎ澄ます宿泊体験。',
                    'Meals based on nutrition science and accommodation experiences that sharpen all five senses.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('プレミアム・シッティング：', 'Premium Sitting:')}
                  </span>
                  {' '}
                  {t(
                    '保育士・救急法のプロが担当する、学びと安全を兼ね備えた託児実務。',
                    'Childcare services provided by professional childcare workers and first aid experts, combining learning and safety.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('高度家事代行（生活支援）：', 'Advanced Housekeeping (Life Support):')}
                  </span>
                  {' '}
                  {t(
                    '高齢者や共働き世帯のQOLを劇的に高める、プロによる身の回りの世話。',
                    'Professional personal care that dramatically improves QOL for elderly and dual-income households.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('共笑®︎ファーム連携：', '共笑®︎ Farm Partnership:')}
                  </span>
                  {' '}
                  {t(
                    '「食の安全」と「働く喜び」を追求した、産地直送のオーガニック食糧提供。',
                    'Direct-from-farm organic food provision pursuing "food safety" and "joy of work."'
                  )}
                </li>
              </ul>
              </div>
              </div>

              {/* Section 4: Body & Health */}
              <div className="mt-10 mb-10 text-left">
              <div className="bg-blue-50 rounded-lg p-6 md:p-8 border-l-4 border-blue-500">
                <div className="mb-5">
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-2 lg:whitespace-nowrap">
                    <span className="text-blue-600">4.</span>
                    <span className="text-headings">【身体・健康】</span>
                    <span className="text-headings">{t('共笑®︎ウェルネス・ラボ', '共笑®︎ Wellness Lab')}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {t(
                      '（第44類：医療・美容・健康・訪問介護）',
                      '(Class 44: Medical, Beauty, Health, Home Care)'
                    )}
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="text-base md:text-lg" style={{ 
                    lineHeight: '1.8', 
                    textAlign: 'left',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}>
                    <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('身体構造最適化：', 'Body Structure Optimization:')}
                  </span>
                  {' '}
                  {t(
                    '医学的根拠と武道の知見に基づく、超実践的ボディワーク・整体。',
                    'Highly practical bodywork and chiropractic based on medical evidence and martial arts knowledge.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('パーソナル・ケアサポート：', 'Personal Care Support:')}
                  </span>
                  {' '}
                  {t(
                    '介護保険の枠を超えた、安全で尊厳ある入浴介助・移動支援実務。',
                    'Safe and dignified bathing assistance and mobility support services beyond the scope of long-term care insurance.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('アスリート栄養指導：', 'Athlete Nutrition Guidance:')}
                  </span>
                  {' '}
                  {t(
                    'パフォーマンスを最大化し、一生モノの健康を手に入れる食事戦略支援。',
                    'Dietary strategy support to maximize performance and achieve lifelong health.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('ビューティーアドバイス：', 'Beauty Advice:')}
                  </span>
                  {' '}
                  {t(
                    'セルフエステーム（自己肯定感）を高める、外見からの戦略的アプローチ。',
                    'Strategic approach from appearance to enhance self-esteem (self-affirmation).'
                  )}
                </li>
              </ul>
              </div>
            </div>

            {/* Section 5: Mind, Soul & Safety */}
            <div className="mt-10 mb-10 text-left">
              <div className="bg-purple-50 rounded-lg p-6 md:p-8 border-l-4 border-purple-500">
                <div className="mb-5">
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-2 lg:whitespace-nowrap">
                    <span className="text-purple-600">5.</span>
                    <span className="text-headings">【心・魂・安全】</span>
                    <span className="text-headings">{t('共笑®︎ライフ・シールド', '共笑®︎ Life Shield')}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {t(
                      '（第45類：精神ケア・僧侶対話・冠婚葬祭・安全守護）',
                      '(Class 45: Mental Care, Monk Dialogue, Ceremonial Occasions, Security)'
                    )}
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="text-base md:text-lg" style={{ 
                    lineHeight: '1.8', 
                    textAlign: 'left',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}>
                    <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('僧侶による対話・終活支援：', 'Dialogue & End-of-Life Support by Monks:')}
                  </span>
                  {' '}
                  {t(
                    '浄土真宗僧侶が、生死の問題から日常の悩みまで共に考え、魂を整えます。',
                    'Jodo Shinshu monks think together with you about life and death issues and daily concerns, aligning the soul.'
                  )}
                </li>
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('オーダーメイド冠婚葬祭：', 'Custom-Made Ceremonial Occasions:')}
                  </span>
                  {' '}
                  {t(
                    '既成概念に囚われない、人生の節目を彩る唯一無二の儀礼プロデュース。',
                    'Unique ceremonial production that colors life\'s milestones without being bound by conventional concepts.'
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
                <li className="text-base md:text-lg leading-relaxed">
                  <span className="mr-2">✧</span>
                  <span className="font-semibold text-black">
                    {t('パーソナル・セキュリティ：', 'Personal Security:')}
                  </span>
                  {' '}
                  {t(
                    '救急・安全指導員による、個人宅の防犯診断と身辺の安全確保実務。',
                    'Security assessment of private residences and personal safety services by emergency and safety instructors.'
                  )}
                </li>
              </ul>
              </div>
              </div>

              {/* Usage Flow Section */}
              <div className="mt-12 mb-10">
                <div className="bg-[#FAF8F0] rounded-xl md:rounded-2xl p-5 md:p-8 shadow-md border-2 border-[#F5F1E8]">
                  <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-headings mb-3 text-left">
                    {t(
                      '✨ ご利用の流れ：要予約・カスタマイズ制',
                      '✨ Usage Flow: Reservation Required・Customized System'
                    )}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                    {t(
                      '一人ひとりに合わせた「100点満点のプラン」にこだわります。',
                      'We are committed to creating a "perfect 100-point plan" tailored to each individual.'
                    )}
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-4 mt-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg md:text-xl text-gray-800 mb-1">
                        {t('お問い合わせ：', 'Inquiry:')}
                      </h4>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {t(
                          '専用フォームよりご連絡。',
                          'Contact us through the dedicated form.'
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg md:text-xl text-gray-800 mb-1">
                        {t('初回相談：', 'Initial Consultation:')}
                      </h4>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {t(
                          'オンラインまたは対面。プロがあなたの声をじっくり聴きます。',
                          'Online or in-person. Professionals will carefully listen to your voice.'
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg md:text-xl text-gray-800 mb-1">
                        {t('パーソナルプラン：', 'Personal Plan:')}
                      </h4>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {t(
                          'あなた専用のメニューと見積を作成。',
                          'Create a menu and estimate customized for you.'
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg md:text-xl text-gray-800 mb-1">
                        {t('契約・案内：', 'Contract & Guidance:')}
                      </h4>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {t(
                          '正式会員として、拠点の詳細場所をご案内。',
                          'As an official member, we will guide you to the detailed location of the base.'
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg md:text-xl text-gray-800 mb-1">
                        {t('スタート：', 'Start:')}
                      </h4>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {t(
                          '専属チームによる「共笑®︎」な日常の始まりです。',
                          'The beginning of a "共笑®︎" daily life with your dedicated team.'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                </div>

                {/* Closing Message - Separate Frame */}
                <div className="mt-10 mb-8">
                  <div className="bg-[#FAF8F0] rounded-xl md:rounded-2xl p-5 md:p-8 shadow-md border-2 border-[#F5F1E8] text-center">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                      {t(
                        '「共笑®︎ホーム」は、あなたが一番自分らしく、そして安全にいられる場所。まずは、最初の一歩として、私たちにお話しを聞かせてください。',
                        '"共笑®︎ Home" is a place where you can be most yourself and safe. As a first step, please share your story with us.'
                      )}
                    </p>
                    
                    {/* Button */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href="/ask"
                        className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full text-black font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        style={{
                          background: 'linear-gradient(90deg, #fef3c7, #e9d5ff)',
                        }}
                      >
                        {t('まずは共笑®︎プロに相談してみる', 'First, Consult with 共笑®︎ Professionals')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trademark Notice Section */}
          <div className="pt-2 pb-8 md:pb-12 px-8 md:px-12 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="flex justify-center mb-6">
                <img 
                  src={logoTomoe02} 
                  alt="共笑®︎"
                  className="w-28 h-28 object-contain"
                />
              </div>
              
              <div className="bg-red-50 border-2 border-red-200 rounded-xl md:rounded-lg p-5 md:p-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl md:text-2xl">⚠️</span>
                    <h3 className="text-base md:text-lg font-display font-bold text-red-800 leading-tight">
                      {t('【重要】登録商標「共笑®︎」の使用に関する注意書き', '【Important】Notice Regarding Use of Registered Trademark "共笑®︎"')}
                    </h3>
                  </div>
                </div>
                <div className="text-left mt-4">
                  <p className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                    {t('注意書き：商標権について', 'Notice: Regarding Trademark Rights')}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {t(
                      '「共笑®︎」は、Office KANDYの登録商標です。 当社の許可なく、本商標を無断で使用（複製、転用、販売等）することは、商標法違反にあたりますので、お控えください。',
                      '"共笑®︎" is a registered trademark of Office KANDY. Unauthorized use of this trademark (reproduction, transfer, sale, etc.) without our permission constitutes a violation of trademark law, so please refrain from doing so.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Homebase
