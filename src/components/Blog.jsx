import React, { useState } from 'react'
import nishantomodiverImage from '../Images/nishantomodiver.png'
import nishantaImgPng from '../Images/nishanta_img.png'
import featuredEventImage from '../images_blog/IMG_1754-scaled.jpeg'
import newYearImage from '../images_blog/謹賀新年の写真.jpeg'
import nishantaLectureImage from '../Images/img_nishanta_03-2048x1324.jpg'
import healthSupportImage from '../images_blog/pixta.jpg'

const Blog = ({ language = 'ja', onNavigate }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  
  // Sample blog posts data - in real app, this would come from API or CMS
  const featuredPost = {
    id: 1,
    title: t('【1/10開催】目標100名！今年一番寒い週末を、熱い「共笑®︎」で温めませんか？（共笑®︎献血推進フェス）＠JR大阪駅', '【Jan 10 Event】Goal: 100 People! Warm Up the Coldest Weekend of the Year with Hot "共笑®︎" (共笑®︎ Blood Donation Promotion Fest) @ JR Osaka Station'),
    excerpt: t(
      '共笑®︎ ボランティア実践プロジェクト ～ 笑顔の …',
      '共笑®︎ Volunteer Practice Project ～ Smiles ...'
    ),
    category: t('❤️ 社会活動', '❤️ Social Activities'),
    date: '2026.01.10',
    location: t('JR大阪駅', 'JR Osaka Station'),
    goal: t('目標100名', 'Goal: 100 People'),
    image: featuredEventImage,
    featured: true
  }

  const activities = [
    {
      id: 2,
      title: t('謹賀新年', 'Happy New Year'),
      excerpt: t(
        '新春のご挨拶を申し上げます。昨年も多くの良きご縁に恵まれ、無事に一年を過ごさせていただきました。これもひとえに皆様のおかげと、心より感謝申し上げます。',
        'We extend our New Year\'s greetings. Last year, we were blessed with many good connections and were able to spend the year safely. This is entirely thanks to all of you, and we express our heartfelt gratitude.'
      ),
      category: t('🎊 新年のご挨拶', '🎊 New Year Greetings'),
      date: '2026.01.01',
      image: newYearImage,
      fullContent: t(
        '謹賀新年\n\n新春のご挨拶を申し上げます。\n\n昨年も多くの良きご縁に恵まれ、無事に一年を過ごさせていただきました。これもひとえに皆様のおかげと、心より感謝申し上げます。\n\n新しい年も、一日一日を大切に、感謝の気持ちを忘れず歩んでまいりたいと存じます。本年も変わらぬお付き合いのほど、何卒よろしくお願い申し上げます。\n\n2026年1月\nTEAM 共笑®',
        'Happy New Year\n\nWe extend our New Year\'s greetings.\n\nLast year, we were blessed with many good connections and were able to spend the year safely. This is entirely thanks to all of you, and we express our heartfelt gratitude.\n\nIn the new year, we intend to cherish each day and move forward without forgetting our gratitude. We kindly ask for your continued support this year.\n\nJanuary 2026\nTEAM 共笑®'
      ),
      greetingImage: newYearImage
    },
    {
      id: 3,
      title: t('人権と平和の講演講師', 'Human Rights & Peace Lecturer'),
      excerpt: t('人権の進化とダイバーシティ＆ …', 'The Evolution of Human Rights and Diversity & ...'),
      category: t('🕊️ 人権・平和', '🕊️ Human Rights & Peace'),
      date: '2024.11.22',
      image: nishantaLectureImage,
      fullContent: t(
        '人権と平和の講演講師\n\n人権の進化とダイバーシティ＆インクルージョンについて、深く考え、実践していくことが大切です。',
        'Human Rights & Peace Lecturer\n\nIt is important to deeply consider and practice the evolution of human rights and diversity & inclusion.'
      )
    },
    {
      id: 4,
      title: t('共笑®︎ からだ・健康・きれい相談室', '共笑®︎ Body, Health, Beauty Consultation Room'),
      excerpt: t('共笑®︎ みんなの活躍・組織サポート 〜「違い」を …', '共笑®︎ Everyone\'s Activity / Organization Support 〜 "Differences" ...'),
      category: t('💚 健康・サポート', '💚 Health & Support'),
      date: '2026.01.04',
      image: healthSupportImage,
      fullContent: t(
        '共笑®︎ からだ・健康・きれい相談室\n\n共笑®︎ みんなの活躍・組織サポート 〜「違い」を力に変え、未来を創る。',
        '共笑®︎ Body, Health, Beauty Consultation Room\n\n共笑®︎ Everyone\'s Activity / Organization Support 〜 Turning "differences" into strength and creating the future.'
      )
    }
  ]

  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-[#FAF8F0]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-amber-50 to-ivory-50 pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V4h4V2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              {t('共笑®︎ブログ', '共笑®︎ Blog')}
            </span>
          </div>
          <h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-gray-800 leading-tight"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            {t(
              '違いを笑いに、未来を共笑®に',
              'Turning Differences into Laughter, Transforming the Future into 共笑®'
            )}
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            {t(
              '教育の現場で、社会活動で、一人ひとりの心に寄り添う日々。\nここには、私たちが歩んできた道のりと、共に笑える未来への想いが綴られています。\n\nプロの安心と、仏教の慈悲を胸に。\n共笑®︎の実践を、あなたと共に。',
              'Days spent close to each person\'s heart in education and social activities.\nHere, we record the path we have walked and our thoughts toward a future where we can laugh together.\n\nWith professional peace of mind and Buddhist compassion in our hearts.\nThe practice of 共笑®︎, together with you.'
            )}
          </p>
        </div>
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Featured Story Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-2">
            {t('✨ 特集記事', '✨ Featured Story')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
        </div>
        
        <article 
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setHoveredCard('featured')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative overflow-hidden">
              <div 
                className="w-full h-64 md:h-full bg-cover bg-center transition-transform duration-500"
                style={{
                  backgroundImage: `url(${featuredPost.image})`,
                  transform: hoveredCard === 'featured' ? 'scale(1.03)' : 'scale(1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {featuredPost.date}
                </span>
                {featuredPost.goal && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featuredPost.goal}
                  </span>
                )}
                {featuredPost.location && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {featuredPost.location}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gray-800 mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                {featuredPost.excerpt}
              </p>
              <button
                onClick={() => onNavigate && onNavigate('blog-post')}
                className="flex items-center gap-1 w-fit text-sm text-emerald-700 hover:text-emerald-800 font-semibold bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-all group"
              >
                {t('続きを読む', 'Read More')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </section>

      {/* Activities & Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-2">
            {t('📚 活動・記事', '📚 Activities & Articles')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((post) => {
            const isNewYear = post.id === 2
            const isHumanRights = post.id === 3
            const isHealthSupport = post.id === 4
            return (
            <article
              key={post.id}
              className={`rounded-xl shadow-md overflow-hidden border transition-all duration-300 group cursor-pointer ${
                isNewYear 
                  ? 'bg-gradient-to-br from-red-50 via-amber-50/80 to-yellow-50 border-red-300/50 hover:shadow-2xl hover:border-red-400/70' 
                  : isHumanRights
                  ? 'bg-gradient-to-br from-blue-50 via-indigo-50/80 to-cyan-50 border-blue-300/50 hover:shadow-2xl hover:border-blue-400/70'
                  : isHealthSupport
                  ? 'bg-gradient-to-br from-emerald-50 via-green-50/80 to-teal-50 border-emerald-300/50 hover:shadow-2xl hover:border-emerald-400/70'
                  : 'bg-white border-gray-100 hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    transform: hoveredCard === post.id ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="absolute top-3 left-3 z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium shadow-md ${
                    isNewYear 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white backdrop-blur-sm border border-red-500/30' 
                      : isHumanRights
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white backdrop-blur-sm border border-blue-500/30'
                      : isHealthSupport
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white backdrop-blur-sm border border-emerald-500/30'
                      : 'bg-white/90 backdrop-blur-sm text-gray-700'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className={`p-5 md:p-6 ${
                isNewYear 
                  ? 'bg-gradient-to-b from-white to-red-50/30' 
                  : isHumanRights
                  ? 'bg-gradient-to-b from-white to-blue-50/30'
                  : isHealthSupport
                  ? 'bg-gradient-to-b from-white to-emerald-50/30'
                  : ''
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <p className={`text-xs font-semibold ${
                    isNewYear 
                      ? 'text-red-800 bg-red-50/50 px-2 py-1 rounded' 
                      : isHumanRights
                      ? 'text-blue-800 bg-blue-50/50 px-2 py-1 rounded'
                      : isHealthSupport
                      ? 'text-emerald-800 bg-emerald-50/50 px-2 py-1 rounded'
                      : 'text-gray-500'
                  }`}>
                    {post.date}
                  </p>
                  {isNewYear && (
                    <span className="text-2xl animate-pulse">🎊</span>
                  )}
                  {isHumanRights && (
                    <span className="text-2xl">🕊️</span>
                  )}
                  {isHealthSupport && (
                    <span className="text-2xl">💚</span>
                  )}
                </div>
                <h3 className={`text-xl font-display font-bold mb-3 leading-tight transition-colors ${
                  isNewYear 
                    ? 'text-red-900 group-hover:text-red-950 bg-gradient-to-r from-red-900 to-red-800 bg-clip-text text-transparent' 
                    : isHumanRights
                    ? 'text-blue-900 group-hover:text-indigo-950 bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent'
                    : isHealthSupport
                    ? 'text-emerald-900 group-hover:text-teal-950 bg-gradient-to-r from-emerald-900 to-teal-800 bg-clip-text text-transparent'
                    : 'text-gray-800 group-hover:text-emerald-600'
                }`}>
                  {post.title}
                </h3>
                <p className={`text-sm leading-relaxed line-clamp-2 ${
                  isNewYear 
                    ? 'text-gray-800' 
                    : isHumanRights
                    ? 'text-gray-800'
                    : isHealthSupport
                    ? 'text-gray-800'
                    : 'text-gray-600'
                }`}>
                  {post.excerpt}
                </p>
                {post.fullContent && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (isNewYear && onNavigate) {
                        onNavigate('new-year')
                      } else if (isHumanRights && onNavigate) {
                        onNavigate('human-rights-post')
                      } else if (isHealthSupport && onNavigate) {
                        onNavigate('organization-support-post')
                      } else {
                        setSelectedImage(post)
                      }
                    }}
                    className={`mt-4 text-sm font-semibold flex items-center gap-1 group/btn transition-all ${
                      isNewYear 
                        ? 'text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-200' 
                        : isHumanRights
                        ? 'text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200'
                        : isHealthSupport
                        ? 'text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200'
                        : 'text-emerald-600 hover:text-emerald-700'
                    }`}
                  >
                    {t('続きを読む', 'Read More')}
                    <svg className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform ${
                      isNewYear 
                        ? 'text-red-600' 
                        : isHumanRights
                        ? 'text-blue-600'
                        : isHealthSupport
                        ? 'text-emerald-600'
                        : ''
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                )}
              </div>
            </article>
          )})}
        </div>
      </section>

      {/* Message Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-amber-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-emerald-500">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4">
                {t('メッセージ', 'Message')}
              </h2>
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center italic">
              <p className="mb-4">
                {t(
                  '「教育とは、知識を伝えるだけではありません。一人ひとりの心に寄り添い、共に歩むこと。それが、共笑®︎の実践です。」',
                  '"Education is not just about transmitting knowledge. It is about being close to each person\'s heart and walking together. That is the practice of 共笑®︎."'
                )}
              </p>
              <footer className="mt-6 text-base text-gray-600 not-italic">
                <p className="font-semibold text-emerald-700">
                  {t('Office KANDY チームより', 'From the Office KANDY Team')}
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800">
              {t('筆者について', 'About the Author')}
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full ml-11 md:ml-13"></div>
        </div>
        
        {/* Nishanta Image */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <img
              src={nishantomodiverImage}
              alt={t('にしゃんた', 'Nishanta')}
              className="w-full h-auto"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1)',
              }}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/3 flex-shrink-0 p-6 md:p-8 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50">
              <div className="w-full max-w-xs">
                <img
                  src={nishantaImgPng}
                  alt={t('にしゃんた', 'Nishanta')}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-6 md:p-8 lg:p-10">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  {t(
                    '英連邦自治領セイロン出身。1987年、17歳でボーイスカウト集いに初来日。一年後、父が家を担保に借りた7万円と片道切符で再来日し、留学開始。日本語能力試験1級合格。新聞奨学生として大学生活を送り、空手四段や公認指導員・審判員資格を取得。弁論大会で多数優勝し、「スピコン荒らし」とあだ名される。',
                    'Born in Ceylon, a Commonwealth territory. First came to Japan in 1987 at age 17 with a Boy Scout group. A year later, returned with 70,000 yen borrowed by his father using their house as collateral and a one-way ticket, beginning his studies. Passed the Japanese Language Proficiency Test Level 1. Supported himself as a newspaper scholarship student while earning karate 4th dan and certified instructor/judge qualifications. Won numerous speech contests, earning the nickname "Speech Contest Raider."'
                  )}
                </p>
                <p className="text-base md:text-lg">
                  {t(
                    '立命館大学経営学部を学部総代で卒業。名城大学大学院や龍谷大学大学院で学び、経済学や商学修士号と経済学博士号を取得。日本国籍を取得。タレントとして映画『地球のヘソ』主演、落語家としても注目され、テレビ番組で人気に。',
                    'Graduated as valedictorian from Ritsumeikan University\'s Faculty of Business Administration. Studied at Meijo University and Ryukoku University graduate schools, earning master\'s degrees in economics and commerce, and a Ph.D. in economics. Obtained Japanese nationality. Starred in the film "The Navel of the Earth" as a talent, gained attention as a rakugo performer, and became popular on TV programs.'
                  )}
                </p>
                <p className="text-base md:text-lg">
                  {t(
                    '大学教授、タレント、随筆家、講演家、僧侶、空手家など多様な顔を持ち"ミスター・ダイバーシティ"とも称される人物である。現在は羽衣国際大学教授を務める傍ら、テレビ・ラジオ出演、出版、ウェブニュース執筆など多方面で活躍。「ダイバーシティ」「国際理解・国際交流」「多文化共生」「人権・平和」「SDGs」などをテーマに講演や研修を行い高評を得ている。ボランティア活動として、教え子たちと日本赤十字社と連携しイベントを毎年開催。',
                    'A person with diverse roles including university professor, talent, essayist, lecturer, monk, and karate practitioner, also known as "Mr. Diversity." Currently serves as a professor at HAGOROMO International University while actively appearing on TV and radio, publishing, and writing for web news. Highly regarded for lectures and training on themes such as "Diversity," "International Understanding & Exchange," "Multicultural Coexistence," "Human Rights & Peace," and "SDGs." Organizes annual events in collaboration with the Japanese Red Cross Society and students as volunteer activities.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nishanta Official Web Button */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <a
            href="https://nishan.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold rounded-lg shadow-sm hover:shadow-md border border-amber-200 hover:border-amber-300 transition-all duration-300"
          >
            <span>{t('にしゃんた Official Web', 'Nishanta Official Web')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4">
                {selectedImage.title}
              </h3>
              {selectedImage.fullContent && (
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                    {selectedImage.fullContent}
                  </p>
                </div>
              )}
              {selectedImage.greetingImage && (
                <div className={`mt-6 rounded-lg overflow-hidden shadow-2xl ${
                  selectedImage.id === 2 
                    ? 'border-4 border-gradient-to-r from-red-500 via-amber-400 to-yellow-400 border-red-300/80 bg-gradient-to-br from-red-50/50 to-amber-50/50 p-2' 
                    : 'border-2 border-amber-200'
                }`}>
                  <div className={`rounded-md overflow-hidden ${
                    selectedImage.id === 2 ? 'shadow-inner' : ''
                  }`}>
                    <img
                      src={selectedImage.greetingImage}
                      alt={selectedImage.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog
