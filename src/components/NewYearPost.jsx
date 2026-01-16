import React, { useState } from 'react'
import newYearImage from '../images_blog/謹賀新年の写真.jpeg'
import teamTomoeImage from '../images_blog/teamtomo.png'

const NewYearPost = ({ language = 'ja', onNavigate }) => {
  const [enlargedImage, setEnlargedImage] = useState(null)
  const t = (ja, en) => (language === 'en' ? en : ja)

  const postContent = {
    title: t('謹賀新年', 'Happy New Year'),
    date: '2026.01.01',
    category: t('🎊 新年のご挨拶', '🎊 New Year Greetings')
  }

  const content = t(
    '新春のご挨拶を申し上げます。\n\n昨年も多くの良きご縁に恵まれ、無事に一年を過ごさせていただきました。これもひとえに皆様のおかげと、心より感謝申し上げます。\n\n新しい年も、一日一日を大切に、感謝の気持ちを忘れず歩んでまいりたいと存じます。本年も変わらぬお付き合いのほど、何卒よろしくお願い申し上げます。\n\n2026年1月 TEAM 共笑®︎ | OFFICE KANDY',
    'We extend our New Year\'s greetings.\n\nLast year, we were blessed with many good connections and were able to spend the year safely. This is entirely thanks to all of you, and we express our heartfelt gratitude.\n\nIn the new year, we intend to cherish each day and move forward without forgetting our gratitude. We kindly ask for your continued support this year.\n\nJanuary 2026 TEAM 共笑®︎ | OFFICE KANDY'
  )

  return (
    <div className="min-h-screen bg-[#FAF8F0]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V4h4V2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-xs font-medium shadow-md">
                  {postContent.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {postContent.date}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-red-900 mb-4 leading-tight">
                {postContent.title}
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-300/80 bg-gradient-to-br from-red-50/50 to-amber-50/50 p-2">
                <div className="rounded-md overflow-hidden shadow-inner">
                  <img
                    src={newYearImage}
                    alt={postContent.title}
                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setEnlargedImage(newYearImage)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-red-500">
          <div className="mb-6 md:mb-8 flex justify-center">
            <img
              src={teamTomoeImage}
              alt="TEAM 共笑®"
              className="max-w-full h-auto"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
              {content}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <span className="text-lg md:text-xl font-semibold text-red-600 hover:text-red-700 transition-colors cursor-pointer">
                #共笑®
              </span>
            </div>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate && onNavigate('blog')}
            className="inline-flex items-center gap-2 text-sm text-red-700 hover:text-red-800 font-semibold bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg border border-red-200 transition-all group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('ブログに戻る', 'Back to Blog')}
          </button>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={enlargedImage}
            alt={postContent.title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default NewYearPost
