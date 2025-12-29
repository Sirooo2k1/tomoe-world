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

  // Map hash -> page id
  useEffect(() => {
    const hashToPage = (hash) => {
      const key = hash.replace('#', '')
      if (['home', 'about', 'act', 'lectures', 'jyuku', 'fund', 'license', 'div', 'hr', 'intl', 'sdgs', 'shop', 'ask'].includes(key)) {
        return key
      }
      // legacy paths
      if (key === 'tabun') return 'intl'
      return null
    }
    const applyHash = () => {
      const page = hashToPage(window.location.hash)
      if (page) setActivePage(page)
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  // Sync hash when activePage changes
  useEffect(() => {
    const nextHash = activePage === 'home' ? '' : `#${activePage}`
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash
    }
    // Always scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
        <Landing language={language} />
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

