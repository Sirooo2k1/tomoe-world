import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Landing from './components/Landing'
import Content from './components/Content'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [language, setLanguage] = useState('ja')

  // Map path/hash -> page id
  useEffect(() => {
    const pathToPage = (path) => {
      const cleanPath = path.replace(/^\/+|\/+$/g, '') // Remove leading/trailing slashes
      if (!cleanPath || cleanPath === '') return 'home'
      
      // Map URL paths to page ids
      const pathMap = {
        'about': 'about',
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
        'ask': 'ask',
        'contact': 'ask'
      }
      return pathMap[cleanPath] || null
    }
    
    const hashToPage = (hash) => {
      const key = hash.replace('#', '')
      if (['home', 'about', 'act', 'lectures', 'jyuku', 'fund', 'license', 'div', 'hr', 'intl', 'sdgs', 'shop', 'ask'].includes(key)) {
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

  return (
    <div className="min-h-screen flex flex-col">
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
      {activePage === 'about' && (
        <>
          <Hero language={language} heroImage={img23Image} />
          <main className="flex-grow">
            <Content language={language} />
            <InstagramFeed language={language} />
          </main>
        </>
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

