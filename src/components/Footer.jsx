import React from 'react'

const Footer = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <footer className="bg-white text-gray-700 py-6 border-t border-[#E6D5B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            {t('© 共笑®︎Office. All rights reserved.', '© 共笑®︎ Office. All rights reserved.')}
          </p>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#FAF8F0] text-gray-700 p-3 rounded-full shadow-lg hover:bg-[#E6D5B8] transition-colors duration-200 z-50"
        aria-label={t('トップに戻る', 'Back to top')}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}

export default Footer

