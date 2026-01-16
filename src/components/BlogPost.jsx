import React, { useState } from 'react'
import eventImage1 from '../images_blog/IMG_1754-scaled.jpeg'
import eventImage2 from '../images_blog/IMG_1752-scaled.jpeg'
import eventImage3 from '../images_blog/IMG_1723-scaled.jpeg'
import galleryImage1 from '../images_blog/IMG_1683-scaled.jpeg'
import galleryImage2 from '../images_blog/IMG_1687-scaled.jpeg'
import galleryImage3 from '../images_blog/IMG_1690-scaled.jpeg'
import galleryImage4 from '../images_blog/IMG_1692-scaled.jpeg'
import galleryImage5 from '../images_blog/IMG_1698-scaled.jpeg'
import galleryImage6 from '../images_blog/IMG_1707-scaled.jpeg'
import galleryImage7 from '../images_blog/IMG_1729-scaled.jpeg'
import galleryImage9 from '../images_blog/IMG_1762-scaled.jpeg'
import galleryImage10 from '../images_blog/IMG_1772-scaled.jpeg'
import galleryImage11 from '../images_blog/IMG_1780-scaled.jpeg'
import galleryImage12 from '../images_blog/IMG_1800-scaled.jpeg'
import galleryImage13 from '../images_blog/IMG_1809-scaled.jpeg'
import galleryImage14 from '../images_blog/IMG_1836-scaled.jpeg'
import galleryImage15 from '../images_blog/IMG_1838-scaled.jpeg'
import galleryImage16 from '../images_blog/IMG_1847-scaled.jpeg'
import galleryImage17 from '../images_blog/IMG_1864-scaled.jpeg'

const BlogPost = ({ language = 'ja', onNavigate }) => {
  const [enlargedImage, setEnlargedImage] = useState(null)
  const t = (ja, en) => (language === 'en' ? en : ja)

  // Gallery images array
  const galleryImages = [
    galleryImage1, galleryImage2, galleryImage3, galleryImage4,
    galleryImage5, galleryImage6, galleryImage7,
    galleryImage9, galleryImage10, galleryImage11, galleryImage12,
    galleryImage13, galleryImage14, galleryImage15, galleryImage16,
    galleryImage17
  ]

  // Blood donation event post content
  const postContent = {
    id: 'blood-donation-2026',
    title: t(
      '共笑®︎ ボランティア実践プロジェクト\n～ 笑顔のたすき、血液でつなごう ～',
      '共笑®︎ Volunteer Practice Project\n～ Passing the Baton of Smiles Through Blood Donation ～'
    ),
    date: '2026.01.10',
    location: t('JR大阪駅南口広場', 'JR Osaka Station South Exit Plaza'),
    category: t('❤️ 社会活動', '❤️ Social Activities')
  }

  return (
    <div className="min-h-screen bg-[#FAF8F0]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V4h4V2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                {postContent.category}
              </span>
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
                {postContent.date}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-800 mb-4 leading-tight whitespace-pre-line">
              {postContent.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {postContent.location}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-red-500">
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                {t(
                  '一年で最も寒さが厳しくなるこの季節。寒風と共に街を行き交う人々の足も速くなり、献血への協力者が減少する傾向にあります。だからこそ、私たちは動きます。来る1月10日（土）、JR大阪駅南口広場にて、恒例の「献血推進キャンペーン」を開催いたします。',
                  'During this season when the cold is at its most severe. As people hurry through the streets with the cold wind, the number of blood donation supporters tends to decrease. That is precisely why we take action. On Saturday, January 10th, we will hold our annual "Blood Donation Promotion Campaign" at JR Osaka Station South Exit Plaza.'
                )}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t(
                  '本プロジェクトは、日本赤十字社、羽衣国際大学、Office KANDY、そして私たち「共笑®︎」による共同開催です。当日は、組織を統括する代表・小川のバックアップのもと、本プロジェクトの総合プロデューサーを務める代表代理（にしゃんた）が、企画から当日の陣頭指揮まで、現場の全責任を担います。',
                  'This project is a joint event by the Japanese Red Cross Society, HAGOROMO International University, Office KANDY, and us "共笑®︎." On the day, under the backup of Representative Ogawa who oversees the organization, Representative Director (Nishanta), who serves as the overall producer of this project, will take full responsibility for the site, from planning to on-site command on the day.'
                )}
              </p>
            </div>
            <div className="w-full">
              <img
                src={eventImage1}
                alt={t('献血推進キャンペーン', 'Blood Donation Promotion Campaign')}
                className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setEnlargedImage(eventImage1)}
              />
            </div>
          </div>
        </section>

        {/* Goal Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 border border-red-100">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span>🩸</span>
              <span>{t('目標100名へ。事業運営と広報にかける想い', 'Toward the Goal of 100 People. Our Commitment to Event Management and Public Relations')}</span>
            </h2>
            <div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                  {t(
                    '「1日100名」という目標は、決して容易な数字ではありません。しかし、血液を待つ患者様にとっては、命をつなぐ切実な希望です。当日は、徹底した現場管理のもと、通行される方々へチラシ配布やマイクを用いた広報・啓発活動を精力的に展開します。「誰かがやるだろう」ではなく「私がやる」。その勇気のリレーを、組織的な運営で広げてまいります。',
                    'The goal of "100 people in one day" is by no means an easy number. However, for patients waiting for blood, it is a desperate hope that connects life. On the day, under thorough on-site management, we will energetically carry out public relations and awareness activities such as distributing flyers and using microphones to passersby. Not "someone will do it" but "I will do it." We will spread this relay of courage through organized operations.'
                  )}
                </p>
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={eventImage3}
                    alt={t('献血活動の様子', 'Blood Donation Activity')}
                    className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setEnlargedImage(eventImage3)}
                  />
                </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 border border-emerald-100">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span>🎓</span>
              <span>{t('実践教育の場と、安全なエスコート', 'A Place for Practical Education and Safe Escort')}</span>
            </h2>
            <div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t(
                    '本活動は単なるイベントにとどまらず、羽衣国際大学の「ボランティア論」「共生社会論」に基づく実地教育の場でもあります。大学教授による専門的な指導のもと、学生やOB・OGがワンチームとなって活動します。また、混雑する駅前において、スタッフが通行人の皆様の安全確保と誘導を行い、社会貢献活動としての質の高い運営を目指します。',
                    'This activity is not just an event, but also a place for practical education based on HAGOROMO International University\'s "Volunteer Theory" and "Coexistence Society Theory." Under the professional guidance of university professors, students and alumni work together as one team. In addition, at the crowded station front, staff ensure the safety of passersby and provide guidance, aiming for high-quality operation as a social contribution activity.'
                  )}
                </p>
            </div>
          </div>
        </section>

        {/* Health Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span>🏥</span>
              <span>{t('健康への寄与と、憩いのひととき', 'Contribution to Health and a Moment of Rest')}</span>
            </h2>
            <div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t(
                    '献血は、ご自身の健康管理（血液検査結果の通知等）に役立つ機会でもあります。現場では、初めての方にも安心していただけるよう、体調管理に関する適切なアドバイスを行います。また、ご協力いただいた方や参加者の皆様には、水分補給のための飲料提供や、リラックスできる休憩スペースをご用意し、心身ともに温まる環境を整えてお待ちしております。',
                    'Blood donation is also an opportunity that helps with your own health management (such as notification of blood test results). At the site, we provide appropriate advice on health management so that first-time participants can feel at ease. In addition, for those who cooperate and all participants, we prepare beverages for hydration and a relaxing rest space, creating an environment where both body and mind can be warmed, and we look forward to welcoming you.'
                  )}
                </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 border-l-4 border-amber-500">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span>🤝</span>
              <span>{t('開催にあたって', 'Regarding the Event')}</span>
            </h2>
            <div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  {t(
                    '「ボランティアに参加したことがない」「一人で行くのは不安」という方も、どうぞご安心ください。当日は、私たちが満面の「共笑®︎」で皆様をお迎えいたします。まもなく成人式を迎える皆様におかれましても、誰かのために行動する「大人」としての第一歩を、ここから踏み出していただければ幸いです。寒空の下ではございますが、心は熱く活動してまいります。',
                    'For those who have never participated in volunteer activities or feel anxious about going alone, please rest assured. On the day, we will welcome everyone with full "共笑®︎" smiles. For those about to celebrate Coming of Age Day, we would be happy if you could take your first step as an "adult" who acts for others from here. Although it will be under the cold sky, we will work with warm hearts.'
                  )}
                </p>
                <p className="text-xl md:text-2xl font-display font-bold text-gray-800 text-center mt-8 py-6 bg-white/50 rounded-lg">
                  {t(
                    '少しの時間でも構いません。皆様の「参集」を心よりお待ちしております。',
                    'Even a little time is fine. We sincerely look forward to your participation.'
                  )}
                </p>
            </div>
          </div>
        </section>

        {/* Gallery Section - Activity Records */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 md:px-10 lg:px-12 py-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-3">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t('📸 活動の記録', '📸 Activity Records')}</span>
              </h2>
              <p className="text-white/90 text-sm md:text-base mt-2">
                {t('当日の様子を写真でお届けします', 'We bring you the day\'s moments through photos')}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => setEnlargedImage(image)}
                  >
                    <div className="aspect-square bg-gray-200">
                      <img
                        src={image}
                        alt={t(`活動写真 ${index + 1}`, `Activity Photo ${index + 1}`)}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                      />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Overview Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 md:px-10 lg:px-12 py-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-3">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t('【開催概要】', '【Event Overview】')}</span>
              </h2>
            </div>

            <div className="p-8 md:p-10 lg:p-12">
              {/* Event Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-gray-800 font-semibold mb-1">{t('日時', 'Date & Time')}</p>
                    <p className="text-base md:text-lg text-gray-700">{t('2026年1月10日（土）', 'Saturday, January 10, 2026')}</p>
                    <p className="text-base md:text-lg text-gray-700">{t('時間： 9:30 ～ 17:00（終日活動しております）', 'Time: 9:30 AM - 5:00 PM (We will be active throughout the day)')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-gray-800 font-semibold mb-1">{t('場所', 'Location')}</p>
                    <p className="text-base md:text-lg text-gray-700">{t('JR大阪駅 南口広場', 'JR Osaka Station South Exit Plaza')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-gray-800 font-semibold mb-1">{t('総合プロデューサー', 'Executive Producer')}</p>
                    <p className="text-base md:text-lg text-gray-700">{t('にしゃんた（共笑®︎ 代表代理）', 'Nishanta (共笑®︎ Representative Director)')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-gray-800 font-semibold mb-1">{t('企画・運営・主催', 'Planning, Management & Organizer')}</p>
                    <p className="text-base md:text-lg text-gray-700">{t('日本赤十字社 / 共笑®︎（代表：小川） / Office KANDY / 羽衣国際大学', 'Japanese Red Cross Society / 共笑®︎ (Representative: Ogawa) / Office KANDY / HAGOROMO International University')}</p>
                  </div>
                </div>
              </div>

              {/* Participation Info */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 md:p-8 border-l-4 border-amber-500 mb-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span>{t('参加・協力をご希望の方へ', 'For Those Who Wish to Participate or Cooperate')}</span>
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">・</span>
                    <span>{t('事前の申し込みは不要です。当日、暖かい服装で直接現地へお越しください。', 'No advance registration is required. Please come directly to the venue on the day in warm clothing.')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">・</span>
                    <span>{t('献血へのご協力はもちろん、呼びかけのサポートやスタッフへの激励のお言葉だけでも大きな力になります。', 'Of course, your cooperation with blood donation is welcome, but even just supporting our calls or words of encouragement to our staff would be a great help.')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">・</span>
                    <span>{t('共に笑い、共に支え合う「共笑®︎」の実践の場で、お会いしましょう。', 'Let\'s meet at the place where we practice "共笑®︎," laughing together and supporting each other.')}</span>
                  </li>
                </ul>
              </div>

              {/* Organizer Message */}
              <div className="text-center py-6 border-t border-gray-200">
                <p className="text-lg md:text-xl font-display font-semibold text-gray-800 mb-2">
                  {t('主催：共笑®︎', 'Organized by: 共笑®︎')}
                </p>
                <p className="text-base md:text-lg text-gray-600 italic">
                  {t('～私たちは、違いを力に変え、共に笑う社会（共生社会）を目指しています～', '～We aim to transform differences into strength and create a society where we laugh together (a society of coexistence)～')}
                </p>
              </div>

              {/* Hashtags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                  <span className="text-sm md:text-base text-gray-500 font-medium">#</span>
                  <span className="text-sm md:text-base text-red-600 hover:text-red-700 transition-colors cursor-pointer font-medium">{t('にしゃんた', 'Nishanta')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-blue-600 hover:text-blue-700 transition-colors cursor-pointer font-medium">{t('ボランティア活動', 'Volunteer Activities')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-green-600 hover:text-green-700 transition-colors cursor-pointer font-medium">{t('共生社会', 'Coexistence Society')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-purple-600 hover:text-purple-700 transition-colors cursor-pointer font-medium">{t('共笑', 'Tomoe')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-pink-600 hover:text-pink-700 transition-colors cursor-pointer font-medium">{t('大阪府赤十字血液センター', 'Osaka Red Cross Blood Center')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer font-medium">{t('大阪駅', 'Osaka Station')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-red-700 hover:text-red-800 transition-colors cursor-pointer font-medium">{t('献血', 'Blood Donation')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-teal-600 hover:text-teal-700 transition-colors cursor-pointer font-medium">{t('社会貢献', 'Social Contribution')}</span>
                  <span className="text-sm md:text-base text-gray-400">|</span>
                  <span className="text-sm md:text-base text-rose-600 hover:text-rose-700 transition-colors cursor-pointer font-medium">{t('赤十字大阪支部', 'Red Cross Osaka Branch')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate && onNavigate('blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('ブログに戻る', 'Back to Blog')}
          </button>
        </div>
      </article>

      {/* Image Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label={t('閉じる', 'Close')}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={enlargedImage}
            alt={t('拡大画像', 'Enlarged Image')}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default BlogPost
