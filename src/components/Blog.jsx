import React from 'react'

const Blog = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-sky-200">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4">
            {t('共笑®︎ブログ', '共笑®︎ Blog')}
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            {t(
              'コンテンツはまもなく更新されます。',
              'Content will be updated soon.'
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
