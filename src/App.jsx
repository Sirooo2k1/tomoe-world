import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Landing from './components/Landing'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import img23Image from './Images/img_2_3.png'
import Activities from './components/Activities'
import Jyuku from './components/Jyuku'
import Fund from './components/Fund'
import License from './components/License'
import Lectures from './components/Lectures'
import DiversityLectures from './components/DiversityLectures'
import HumanRightsLectures from './components/HumanRightsLectures'
import InternationalLectures from './components/InternationalLectures'
import SDGsLectures from './components/SDGsLectures'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Homebase from './components/Homebase'
import Crew from './components/Crew'
import Health from './components/Health'
import Learning from './components/Learning'
import Organization from './components/Organization'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import NewYearPost from './components/NewYearPost'
import HumanRightsPost from './components/HumanRightsPost'
import OrganizationSupportPost from './components/OrganizationSupportPost'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')
  // Load language from localStorage or default to 'ja'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('tomoe_language')
    return savedLanguage || 'ja'
  })

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('tomoe_language', language)
  }, [language])

  // Map path/hash -> page id
  useEffect(() => {
    const pathToPage = (path) => {
      const cleanPath = path.replace(/^\/+|\/+$/g, '') // Remove leading/trailing slashes
      if (!cleanPath || cleanPath === '') return 'home'
      
      // Map URL paths to page ids
      const pathMap = {
        'homebase': 'homebase',
        'act': 'act',
        'activities': 'act',
        'lectures': 'lectures',
        'jyuku': 'jyuku',
        'fund': 'fund',
        'license': 'license',
        'div': 'div',
        'diversity': 'div',
        'hr': 'hr',
        'human-rights': 'hr',
        'intl': 'intl',
        'international': 'intl',
        'tabun': 'intl',
        'sdgs': 'sdgs',
        'shop': 'shop',
        'crew': 'crew',
        'health': 'health',
        'learning': 'learning',
        'organization': 'organization',
        'blog': 'blog',
        'blog-post': 'blog-post',
        'blood-donation': 'blog-post',
        'new-year': 'new-year',
        'human-rights-post': 'human-rights-post',
        'organization-support-post': 'organization-support-post',
        'ask': 'ask',
        'contact': 'ask'
      }
      return pathMap[cleanPath] || null
    }
    
    const hashToPage = (hash) => {
      const key = hash.replace('#', '')
      if (['home', 'homebase', 'act', 'lectures', 'jyuku', 'fund', 'license', 'div', 'hr', 'intl', 'sdgs', 'shop', 'crew', 'health', 'learning', 'organization', 'blog', 'blog-post', 'blood-donation', 'new-year', 'human-rights-post', 'organization-support-post', 'ask'].includes(key)) {
        return key
      }
      // legacy paths
      if (key === 'tabun') return 'intl'
      return null
    }
    
    const applyRoute = () => {
      // Priority: URL path > hash
      const pathPage = pathToPage(window.location.pathname)
      const hashPage = hashToPage(window.location.hash)
      
      const page = pathPage || hashPage || 'home'
      if (page) {
        setActivePage(page)
        // Update URL to use path instead of hash (if path is available)
        if (pathPage && window.location.pathname !== `/${page}` && page !== 'home') {
          window.history.replaceState(null, '', `/${page}`)
        } else if (!pathPage && hashPage && window.location.hash !== `#${hashPage}`) {
          // Keep hash for backward compatibility
          window.location.hash = `#${hashPage}`
        }
      }
    }
    
    applyRoute()
    window.addEventListener('popstate', applyRoute)
    window.addEventListener('hashchange', applyRoute)
    return () => {
      window.removeEventListener('popstate', applyRoute)
      window.removeEventListener('hashchange', applyRoute)
    }
  }, [])

  // Sync URL when activePage changes (use path instead of hash)
  useEffect(() => {
    const currentPath = window.location.pathname.replace(/^\/+|\/+$/g, '')
    const expectedPath = activePage === 'home' ? '' : activePage
    
    // Only update if path doesn't match
    if (currentPath !== expectedPath) {
      const newPath = activePage === 'home' ? '/' : `/${activePage}`
      window.history.pushState(null, '', newPath)
    }
    
    // Always scroll to top when changing page (instant, no smooth animation)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [activePage])

  // SEO metadata for each page
  const seoData = {
    'home': {
      title: language === 'ja' 
        ? '共笑®︎ Official Site | 共楽・共学・共育・共活・共笑｜共に笑おう'
        : '共笑®︎ Official Site | Co-enjoyment・Co-learning・Co-raising・Co-living・Co-laughter',
      description: language === 'ja'
        ? '共に楽しみ、学び、育ち、活かされ、笑い合う社会を目指す、にしゃんた博士が提唱する共笑®︎の理念を広める講演会や研修会の講師依頼受付中'
        : 'Promoting the philosophy of 共笑®︎ advocated by Dr. Nishanta, aiming for a society where we enjoy, learn, grow, be utilized, and laugh together. Accepting requests for lectures and training sessions.',
      path: ''
    },
    'homebase': {
      title: language === 'ja'
        ? '共笑®︎ホームベース | 共笑®︎ Official Site'
        : '共笑®︎ Homebase | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '共笑®︎ホームベースは、Office KANDYが運営する会員制・完全予約制の多機能ビジネスハブです。共笑®︎ワークスペース、共笑®︎オフサイト・ミーティング会場としてご活用ください。'
        : '共笑®︎ Homebase is a membership-based, fully-reserved multi-functional business hub operated by Office KANDY. Use it as 共笑®︎ workspace and 共笑®︎ off-site meeting venue.',
      path: 'homebase'
    },
    'act': {
      title: language === 'ja'
        ? '共笑®︎活動 | 共笑®︎ Official Site'
        : '共笑®︎ Activities | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '共笑®︎の様々な活動をご紹介します。学びとあんしんサポート、からだ・健康・きれい相談室、みんなの活躍・組織サポートなど。'
        : 'Introducing various activities of 共笑®︎. Learning and peace of mind support, body, health, beauty consultation room, everyone\'s activity and organization support, etc.',
      path: 'act'
    },
    'lectures': {
      title: language === 'ja'
        ? '共笑®︎講演 | 講演講師依頼受付中'
        : '共笑®︎ Lectures | Accepting Lecture Requests',
      description: language === 'ja'
        ? 'にしゃんた博士による共笑®︎講演のご案内。ダイバーシティ、人権、国際理解、SDGsなど様々なテーマで講演を行います。'
        : 'Information about 共笑®︎ lectures by Dr. Nishanta. Lectures on various themes including diversity, human rights, international understanding, and SDGs.',
      path: 'lectures'
    },
    'jyuku': {
      title: language === 'ja'
        ? '共笑®︎ Jyuku | 次世代向け私塾'
        : '共笑®︎ Jyuku | Private School for Next Generation',
      description: language === 'ja'
        ? '共笑®︎ Jyukuは、次世代を担う若者を育成する私塾です。Z世代とグローバル視点を重視した教育を提供します。'
        : '共笑®︎ Jyuku is a private school that nurtures the next generation. We provide education that emphasizes Gen Z and global perspectives.',
      path: 'jyuku'
    },
    'fund': {
      title: language === 'ja'
        ? '共笑®︎ Fund | 社会貢献基金'
        : '共笑®︎ Fund | Social Contribution Fund',
      description: language === 'ja'
        ? '共笑®︎ Fundは、社会貢献活動を支援する基金です。多様性と共生社会の実現を目指します。'
        : '共笑®︎ Fund is a fund that supports social contribution activities. We aim to realize diversity and a symbiotic society.',
      path: 'fund'
    },
    'license': {
      title: language === 'ja'
        ? 'ライセンス連携事業について | 共笑®︎ Official Site'
        : 'About License Partnership Business | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '共笑®︎のライセンス連携事業についてご紹介します。ダイバーシティ能力検定®︎などの資格・検定事業を展開しています。'
        : 'Introduction to 共笑®︎ license partnership business. We operate qualification and certification businesses such as Diversity Competency Certification®︎.',
      path: 'license'
    },
    'div': {
      title: language === 'ja'
        ? 'ダイバーシティ講演 | 共笑®︎ Official Site'
        : 'Diversity Lectures | 共笑®︎ Official Site',
      description: language === 'ja'
        ? 'ダイバーシティをテーマにした講演を行います。多様性を活かす組織づくりや人財育成についてお話しします。'
        : 'We conduct lectures on the theme of diversity. We talk about building organizations that utilize diversity and developing human resources.',
      path: 'div'
    },
    'hr': {
      title: language === 'ja'
        ? '人権と平和の講演 | 共笑®︎ Official Site'
        : 'Human Rights and Peace Lectures | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '人権と平和をテーマにした講演を行います。人権の進化とダイバーシティ＆インクルージョンの実現についてお話しします。'
        : 'We conduct lectures on the theme of human rights and peace. We talk about the evolution of human rights and the realization of diversity and inclusion.',
      path: 'hr'
    },
    'intl': {
      title: language === 'ja'
        ? '国際理解講演 | 共笑®︎ Official Site'
        : 'International Understanding Lectures | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '国際理解をテーマにした講演を行います。多文化共生やグローバル視点についてお話しします。'
        : 'We conduct lectures on the theme of international understanding. We talk about multicultural coexistence and global perspectives.',
      path: 'intl'
    },
    'sdgs': {
      title: language === 'ja'
        ? 'SDGs講演 | 共笑®︎ Official Site'
        : 'SDGs Lectures | 共笑®︎ Official Site',
      description: language === 'ja'
        ? 'SDGsをテーマにした講演を行います。持続可能な社会の実現に向けた取り組みについてお話しします。'
        : 'We conduct lectures on the theme of SDGs. We talk about efforts to realize a sustainable society.',
      path: 'sdgs'
    },
    'shop': {
      title: language === 'ja'
        ? '共笑®︎ SHOP | オンラインショップ'
        : '共笑®︎ SHOP | Online Shop',
      description: language === 'ja'
        ? '共笑®︎ SHOPでは、共笑®︎ブランドの商品をお取り扱いしています。'
        : '共笑®︎ SHOP handles 共笑®︎ brand products.',
      path: 'shop'
    },
    'crew': {
      title: language === 'ja'
        ? '共笑®︎クルー | 共笑®︎ Official Site'
        : '共笑®︎ Crew | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '共笑®︎を支えるメンバーをご紹介します。にしゃんた博士をはじめ、様々な専門家が集結しています。'
        : 'Introducing the members who support 共笑®︎. Various experts including Dr. Nishanta have gathered.',
      path: 'crew'
    },
    'health': {
      title: language === 'ja'
        ? '共笑®︎ からだ・健康・きれい相談室 | 共笑®︎ Official Site'
        : '共笑®︎ Body, Health, Beauty Consultation Room | 共笑®︎ Official Site',
      description: language === 'ja'
        ? 'からだ・健康・きれいに関する相談を受け付けています。身体構造最適化、アスリート栄養、美容アドバイス、マインドフルネスプログラムなどを提供します。'
        : 'We accept consultations on body, health, and beauty. We provide body structure optimization, athlete nutrition, beauty advice, mindfulness programs, etc.',
      path: 'health'
    },
    'learning': {
      title: language === 'ja'
        ? '共笑®︎ 学びとあんしんサポート | 共笑®︎ Official Site'
        : '共笑®︎ Learning and Peace of Mind Support | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '学びとあんしんをサポートするサービスをご提供します。共笑®︎・ダイバーシティ能力検定®︎、共笑®︎講演・研修、次世代私塾運営、リスキリング支援など。'
        : 'We provide services that support learning and peace of mind. 共笑®︎・Diversity Competency Certification®︎, 共笑®︎ lectures and training, next-generation private school operations, reskilling support, etc.',
      path: 'learning'
    },
    'organization': {
      title: language === 'ja'
        ? '共笑®︎ みんなの活躍・組織サポート | 共笑®︎ Official Site'
        : '共笑®︎ Everyone\'s Activity / Organization Support | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '組織の課題を本質的に解決し、社会から選ばれ続ける企業ブランドを構築するための専門実務を提供します。経営戦略・ブランディング、人財育成・社員研修、次世代分析・マーケティング、組織文化・チーム構築など。'
        : 'We provide specialized services to fundamentally solve organizational issues and build corporate brands that continue to be chosen by society. Management strategy and branding, human resource development and employee training, next-generation analysis and marketing, organizational culture and team building, etc.',
      path: 'organization'
    },
    'blog': {
      title: language === 'ja'
        ? '共笑®︎ Blog | 最新情報・お知らせ'
        : '共笑®︎ Blog | Latest News & Updates',
      description: language === 'ja'
        ? '共笑®︎の最新情報やお知らせ、ブログ記事をご紹介します。'
        : 'Introducing the latest news, updates, and blog articles from 共笑®︎.',
      path: 'blog'
    },
    'blog-post': {
      title: language === 'ja'
        ? '笑顔のたすき、血液でつなごう | 共笑®︎ Blog'
        : 'Passing the Baton of Smiles Through Blood Donation | 共笑®︎ Blog',
      description: language === 'ja'
        ? '献血イベント「笑顔のたすき、血液でつなごう」のレポートです。'
        : 'Report on the blood donation event "Passing the Baton of Smiles Through Blood Donation".',
      path: 'blog-post'
    },
    'new-year': {
      title: language === 'ja'
        ? '謹賀新年 2026 | 共笑®︎ Blog'
        : 'Happy New Year 2026 | 共笑®︎ Blog',
      description: language === 'ja'
        ? '2026年、TEAM 共笑®︎からの新年のご挨拶です。'
        : 'New Year\'s greetings from TEAM 共笑®︎ for 2026.',
      path: 'new-year'
    },
    'human-rights-post': {
      title: language === 'ja'
        ? '人権と平和の講演講師 | 共笑®︎ Official Site'
        : 'Human Rights and Peace Lecturer | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '人権の進化とダイバーシティ＆インクルージョンの実現について講演を行います。21世紀は「人権の世紀」と呼ばれ、人権は平和で持続可能な社会を築くための重要な柱です。'
        : 'We conduct lectures on the evolution of human rights and the realization of diversity and inclusion. The 21st century is called the "century of human rights," and human rights are an important pillar for building a peaceful and sustainable society.',
      path: 'human-rights-post'
    },
    'organization-support-post': {
      title: language === 'ja'
        ? '共笑®︎ みんなの活躍・組織サポート | 共笑®︎ Official Site'
        : '共笑®︎ Everyone\'s Activity / Organization Support | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '「違い」を「価値」に変える、新しい時代の経営戦略。DEIを単なるスローガンで終わらせず、経営の力に変える実務を提供します。'
        : 'Management strategy for a new era that transforms "differences" into "value". We provide practical services that transform DEI from a mere slogan into management power.',
      path: 'organization-support-post'
    },
    'ask': {
      title: language === 'ja'
        ? 'お問い合わせ | 共笑®︎ Official Site'
        : 'Contact | 共笑®︎ Official Site',
      description: language === 'ja'
        ? '共笑®︎へのお問い合わせはこちらから。講演依頼、ご相談など、お気軽にお問い合わせください。'
        : 'Contact 共笑®︎ from here. Please feel free to contact us for lecture requests, consultations, etc.',
      path: 'ask'
    }
  }

  const currentSeo = seoData[activePage] || seoData['home']

  return (
    <div className={`min-h-screen flex flex-col lang-${language}`} data-lang={language}>
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        path={currentSeo.path}
        language={language}
      />
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onNavigate={setActivePage}
        selectedLang={language}
        setSelectedLang={setLanguage}
      />
      {activePage === 'home' && (
        <Landing language={language} onNavigate={setActivePage} />
      )}
      {activePage === 'homebase' && (
        <Homebase language={language} />
      )}
      {activePage === 'act' && (
        <main className="flex-grow">
          <Activities language={language} />
        </main>
      )}
      {activePage === 'lectures' && (
        <main className="flex-grow">
          <Lectures language={language} />
        </main>
      )}
      {activePage === 'jyuku' && (
        <main className="flex-grow">
          <Jyuku language={language} />
        </main>
      )}
      {activePage === 'fund' && (
        <main className="flex-grow">
          <Fund language={language} />
        </main>
      )}
      {activePage === 'license' && (
        <main className="flex-grow">
          <License language={language} />
        </main>
      )}
      {activePage === 'div' && (
        <main className="flex-grow">
          <DiversityLectures language={language} />
        </main>
      )}
      {activePage === 'hr' && (
        <main className="flex-grow">
          <HumanRightsLectures language={language} />
        </main>
      )}
      {activePage === 'intl' && (
        <main className="flex-grow">
          <InternationalLectures language={language} />
        </main>
      )}
      {activePage === 'sdgs' && (
        <main className="flex-grow">
          <SDGsLectures language={language} />
        </main>
      )}
      {activePage === 'shop' && (
        <main className="flex-grow">
          <Shop language={language} />
        </main>
      )}
      {activePage === 'crew' && (
        <main className="flex-grow">
          <Crew language={language} />
        </main>
      )}
      {activePage === 'health' && (
        <main className="flex-grow">
          <Health language={language} onNavigate={setActivePage} />
        </main>
      )}
      {activePage === 'learning' && (
        <main className="flex-grow">
          <Learning language={language} />
        </main>
      )}
      {activePage === 'organization' && (
        <main className="flex-grow">
          <Organization language={language} onNavigate={setActivePage} />
        </main>
      )}
      {activePage === 'blog' && (
        <main className="flex-grow">
          <Blog language={language} onNavigate={setActivePage} />
        </main>
      )}
      {activePage === 'blog-post' && (
        <main className="flex-grow">
          <BlogPost language={language} onNavigate={setActivePage} />
        </main>
      )}
      {activePage === 'new-year' && (
        <main className="flex-grow">
          <NewYearPost language={language} onNavigate={setActivePage} />
        </main>
      )}
      {activePage === 'human-rights-post' && (
        <main className="flex-grow">
          <HumanRightsPost language={language} onNavigate={setActivePage} />
        </main>
      )}
      {activePage === 'organization-support-post' && (
        <main className="flex-grow">
          <OrganizationSupportPost language={language} onNavigate={setActivePage} />
        </main>
      )}
      {activePage === 'ask' && (
        <main className="flex-grow">
          <Contact language={language} />
        </main>
      )}
      <Footer language={language} />
    </div>
  )
}

export default App

