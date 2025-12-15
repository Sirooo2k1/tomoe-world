import React from 'react'
import croppedMirrorlake from '../Images/img_shop.png'
import logoShop from '../Images/Logo_shop.png'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const Shop = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={croppedMirrorlake}
          alt={t('共笑®︎SHOP', '共笑®︎ SHOP')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
              {t('共笑®︎SHOP', '共笑®︎ SHOP')}
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-10">
          <a
            href="https://tomoeworld.base.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
          >
            <img
              src={logoShop}
              alt={t('共笑®︎SHOP logo', '共笑®︎ SHOP logo')}
              className="w-full h-auto max-w-full object-contain hover:opacity-90 transition-opacity duration-200"
            />
          </a>
        </div>
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎SHOP', '共笑®︎ SHOP')}
          </h1>
          <p className="indent-4 md:indent-6">
            {t('共笑®︎の心でつながる、笑顔広がるお店', 'A shop where smiles spread, connected by the 共笑®︎ spirit')}
          </p>
          <p className="indent-4 md:indent-6">
            {t(
              '共笑®︎SHOP（共笑®︎ショップ・共笑®︎商店）は、「共楽（共に楽しむ）」「共学（共に学ぶ）」「共育（共に育つ）」「共活（共に生き、活かされる）」「共創（共に未来を創る）」「共笑®︎（共に笑う）」理念に掲げ、多様性を楽しみながら人と人とのつながりを深める商品やサービスをお届けする場です。一つひとつの商品やサービスには、「違いを楽しみ、共に未来を創る」という想いが込められています。',
              '共笑®︎ SHOP (共笑®︎ Shop / 共笑®︎ Store), guided by the principles of "共楽 (enjoying together)," "共学 (learning together)," "共育 (growing together)," "共活 (living and being enlivened together)," "共創 (creating the future together)," and "共笑®︎ (laughing together)," is a place that delivers products and services that deepen connections between people while enjoying diversity. Each product and service contains the thought of "enjoying differences and creating the future together."'
            )}
          </p>
          <p className="indent-4 md:indent-6">
            {t(
              '　共笑®︎ SHOPで、笑顔と共感が広がる新たな価値観や体験、そしてオルタナティブな世界観をお楽しみください。',
              '　At 共笑®︎ SHOP, please enjoy new values and experiences where smiles and empathy spread, as well as alternative worldviews.'
            )}
          </p>
          <div className="flex justify-center mt-8 mb-6">
            <a
              href="https://tomoeworld.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #833ab4)',
                minWidth: '250px',
                justifyContent: 'center'
              }}
            >
              {t('オンラインショップへ', 'Visit Online Shop')}
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
        </article>
      </div>
    </>
  )
}

export default Shop
