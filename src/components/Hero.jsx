import React from 'react'
import cropped02Image from '../Images/img_03.png'

const Hero = ({ language = 'ja' }) => {
  const title = language === 'en' ? 'TOMOE' : '共笑®︎'
  const subtitle = language === 'en' ? 'Indicator for the new world.' : 'Indicator for the new world.'
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image (full visible) */}
      <img
        src={cropped02Image}
        alt="Hero background"
        className="w-full h-auto block"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white px-4 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero

