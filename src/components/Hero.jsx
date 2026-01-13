import React from 'react'
import cropped02Image from '../Images/img_03.png'
import img23Image from '../Images/img_2_3.png'

const Hero = ({ language = 'ja', heroImage }) => {
  const title = language === 'en' 
    ? (
        <>
          Turn differences into laughter.<br />
          Transform the future into 共笑®.
        </>
      )
    : '違いを笑いに。未来を共笑®に。'
  const subtitle = 'Indicator for the new world.'
  const imageSrc = heroImage || cropped02Image
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image (full visible) */}
      <img
        src={imageSrc}
        alt="Hero background"
        className="w-full h-auto block"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center overflow-x-auto">
        <div className="text-center px-2 sm:px-4 w-full max-w-full">
          <h2 
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-2 sm:mb-4 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-1 ${language === 'ja' ? 'md:whitespace-nowrap' : ''} inline-block`}
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
              wordBreak: 'break-word',
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
            {title}
          </h2>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-8 text-white cursor-pointer transition-all duration-500 hover:scale-105 hover:translate-y-[-5px] px-2"
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
            {subtitle}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero

