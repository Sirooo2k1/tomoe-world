import React from 'react'
import fundHeroImage from '../Images/cropped_02.png'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'
import fundImage from '../Images/img_2_3.png'
import logoX from '../img_logomxh/LogoX.jpg'
import logoInstagram from '../img_logomxh/logoinstagram.png'
import logoFacebook from '../img_logomxh/logoFb.avif'

const Fund = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={fundHeroImage}
          alt={t('共笑®︎基金', '共笑®︎ Fund')}
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
              {t('共笑®︎基金', '共笑®︎ Fund')}
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
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <p className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎基金', 'TOMOE Fund')}
          </p>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-headings">
              {t(
                '「違いを楽しみ、共に笑い、未来をつくる」共笑®︎基金は、争いのない多文化共生社会の実現を目指します。',
                'The 共笑®︎ Fund, "enjoying differences, laughing together, creating the future," aims to realize a multicultural coexistence society without conflict.'
              )}
            </p>
            <p dangerouslySetInnerHTML={{
              __html: t(
                '<span style="color: #8B7355;">共笑®︎活動</span>から得られる収益は、共笑®︎な社会の実現のために効果的に活用されています。特に、多様性による摩擦が引き起こす戦争や内戦の被害者、特に子どもや社会的弱者の医療や社会復帰支援に重点を置いています。これらの具体的な取り組みについては、<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎事務局</a>にお問い合わせください。',
                'Revenue from <span style="color: #8B7355;">共笑®︎ Activities</span> is effectively utilized for the realization of a 共笑®︎ society. We place particular emphasis on medical and social reintegration support for victims of wars and civil conflicts caused by friction due to diversity, especially children and socially vulnerable people. For details about these specific initiatives, please contact the <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">共笑®︎ office</a>.'
              )
            }} />
          </div>
          <div className="mt-6 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-4 border-[#F5F1E8]">
            <img
              src={fundImage}
              alt={t('共笑®︎基金', '共笑®︎ Fund')}
              className="w-full h-full object-cover block"
            />
          </div>
          <section className="mt-8 space-y-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('支援事例', 'Support Cases')}
            </p>
            <p>
              {t('• 内戦被害を受けた子どもたちの義肢装着支援（スリランカ）', '• Support for prosthetic limb fitting for children affected by civil war (Sri Lanka)')}
            </p>
            <p>
              {t('• 国内避難民の女性たちへの職業訓練支援（アジア諸国）', '• Vocational training support for internally displaced women (Asian countries)')}
            </p>
            <p>
              {t('• 多様性教育をテーマにした学校出張授業（日本国内）', '• School outreach classes on diversity education (within Japan)')}
            </p>
            <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{
              __html: t(
                '※ 活動の詳細については<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">事務局</a>お問い合わせてください。',
                '※ For details about activities, please contact the <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">office</a>.'
              )
            }} />
          </section>
          <section className="mt-6 space-y-2">
            <p className="text-2xl md:text-3xl font-display font-bold text-headings">
              {t('ご支援のお願い', 'Request for Support')}
            </p>
            <p>
              {t('共笑®︎基金の活動は、皆さまのご協力によって支えられています。', 'The activities of the 共笑®︎ Fund are supported by everyone\'s cooperation.')}
            </p>
            <p dangerouslySetInnerHTML={{
              __html: t(
                '✧ 寄付に関するお問い合わせページへ：<a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">https://tomoe-world.com/ask</a>',
                '✧ For donation inquiries: <a href="https://tomoeworld.vercel.app/#ask" target="_blank" rel="noopener noreferrer" style="color: #c59a53; text-decoration: underline;" onmouseover="this.style.color=\'#a87f3d\'" onmouseout="this.style.color=\'#c59a53\'">https://tomoe-world.com/ask</a>'
              )
            }} />
            <p>
              {t(
                '✧ 法人協賛・CSR提携をご検討の方は、',
                '✧ For those considering corporate sponsorship or CSR partnerships, please contact '
              )}
              <a
                href="mailto:staff@tomoe-world.com"
                className="text-headings underline hover:text-headings/80"
              >
                staff@tomoe-world.com
              </a>
              {t('までご連絡ください。', '.')}
            </p>
          </section>
          <div className="mt-4 flex justify-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center">
              <a
                href="https://www.instagram.com/nishan.japan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img src={logoInstagram} alt="Instagram" className="h-10 w-10 object-contain" />
              </a>
            </div>
            <div className="w-13 h-13 flex items-center justify-center">
              <a
                href="https://www.facebook.com/nishan0718"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img src={logoFacebook} alt="Facebook" className="h-12 w-12 object-contain" />
              </a>
            </div>
            <div className="w-14 h-14 flex items-center justify-center">
              <a
                href="https://x.com/tomoe_world?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img src={logoX} alt="X" className="h-10.5 w-10.5 object-contain" />
              </a>
            </div>
          </div>
          <p className="text-center text-headings text-lg md:text-xl mt-6">
            {t('「共笑®︎基金」を広めてください', 'Please help spread the word about the "共笑®︎ Fund"')}
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
        </article>
      </div>
    </>
  )
}

export default Fund

