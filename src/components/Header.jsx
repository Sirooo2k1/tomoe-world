import React, { useEffect, useState } from 'react'
import instagramLogo from '../img_logomxh/logoinstagram.png'
import gmailLogo from '../img_logomxh/logo_gmail.png'
import lineLogo from '../img_logomxh/logoline.png'

const Header = ({ isMenuOpen, setIsMenuOpen, onNavigate, selectedLang, setSelectedLang }) => {
  // State to manage which dropdown is open in mobile menu
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const languages = [
    { code: 'ja', label: '日本語', icon: '🇯🇵' },
    { code: 'en', label: 'English', icon: '🇺🇸' },
  ]
  const currentLang = languages.find((l) => l.code === selectedLang) || languages[0]
  const getAriaLabel = (ja, en) => (selectedLang === 'en' ? en : ja)
  const menuItems = [
    { id: 'home', labelJa: '共笑®︎とは', labelEn: 'About Tomoe', href: '/about' },
    {
      id: 'act',
      labelJa: '共笑®︎活動',
      labelEn: 'Activities',
      href: '/act',
      submenu: [
        { id: 'jyuku', labelJa: '共笑®︎塾', labelEn: 'Tomoe Jyuku', href: '/jyuku' },
        { id: 'fund', labelJa: '共笑®︎基金', labelEn: 'Tomoe Fund', href: '/fund' },
      ],
    },
    {
      id: 'lectures',
      labelJa: '共笑®︎講演',
      labelEn: 'Lectures',
      href: '/lectures',
      submenu: [
        { id: 'div', labelJa: 'ダイバーシティ講演講師', labelEn: 'Diversity Lectures', href: '/lectures/div' },
        { id: 'hr', labelJa: '人権と平和の講演講師', labelEn: 'Human Rights & Peace', href: '/hr' },
        { id: 'intl', labelJa: '多文化共生・国際理解の講演講師', labelEn: 'Multicultural & International', href: '/tabun' },
        { id: 'sdgs', labelJa: 'SDGs・サステナビリティの講演講師', labelEn: 'SDGs & Sustainability', href: '/sdgs' },
      ],
    },
    { id: 'shop', labelJa: '共笑®︎SHOP', labelEn: 'Tomoe SHOP', href: '/shop' },
    { id: 'ask', labelJa: 'お問い合わせ', labelEn: 'Contact', href: '/ask' },
  ]
  const getLabel = (item) => (selectedLang === 'en' ? item.labelEn : item.labelJa)
  const handleNavigation = (event, targetPage, hasSubmenu) => {
    event.preventDefault()
    if (!targetPage) {
      if (!hasSubmenu) setIsMenuOpen(false)
      return
    }
    if (typeof onNavigate === 'function') {
      onNavigate(targetPage)
      setIsMenuOpen(false)
    }
  }
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuButtonLabel = selectedLang === 'en' ? 'Menu' : 'メニュー'
      if (isMenuOpen && !event.target.closest('.mobile-menu-container') && !event.target.closest(`button[aria-label="${menuButtonLabel}"]`)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      // Reset dropdown when menu closes
      setOpenDropdown(null)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, setIsMenuOpen])
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="https://tomoe-world.com/wp-content/uploads/2024/05/cropped-cropped-スクリーンショット-2024-05-05-11.49.14.png"
                alt={getLabel({ labelJa: '共笑®︎', labelEn: 'TOMOE' })}
                className="h-10 w-auto sm:h-12"
              />
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg font-bold text-accent">{selectedLang === 'en' ? 'TOMOE' : '共笑®︎'}</h1>
                <p className="text-xs text-gray-600">Indicator for the new world.</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-base font-bold text-accent">{selectedLang === 'en' ? 'TOMOE' : '共笑®︎'}</h1>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden xl:flex items-center justify-center flex-1">
            <nav className="flex items-center justify-center space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium px-3 py-2 rounded-md flex items-center justify-center text-center whitespace-nowrap"
                    style={{ lineHeight: '1.5' }}
                    onClick={(e) => handleNavigation(e, item.id, Boolean(item.submenu))}
                  >
                    {getLabel(item)}
                  </a>
                  {item.submenu && (
                    <>
                      {/* Dropdown menu */}
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-md shadow-lg border border-[#E6D5B8] ${item.id === 'act' ? 'w-48' : 'w-64'}`}>
                        {/* Pointer arrow - diamond shape */}
                        {/* Outer diamond - beige border (1px thick like dropdown) */}
                        <div 
                          className="absolute left-1/2 transform -translate-x-1/2 rotate-45"
                          style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#E6D5B8',
                            border: '1px solid #E6D5B8',
                            boxSizing: 'border-box',
                            top: '-4px'
                          }}
                        />
                        {/* Inner diamond - white (creates 1px border evenly on all 4 sides) */}
                        <div 
                          className="absolute left-1/2 transform -translate-x-1/2 rotate-45"
                          style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: 'white',
                            top: '-3px'
                          }}
                        />
                        <ul className="py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              {subIndex > 0 && (
                                <hr className="border-t border-[#E6D5B8] mx-2" />
                              )}
                              <a
                                href={subItem.href}
                                className="block px-4 py-2 text-gray-700 hover:text-[#E6D5B8] transition-colors duration-200 text-center"
                                onClick={(e) => handleNavigation(e, subItem.id, false)}
                              >
                                {getLabel(subItem)}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
            
          {/* Language selector + Social Media Icons */}
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0 ml-4">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#E6D5B8] text-gray-700 hover:bg-[#F5F1E8] transition-colors duration-200"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-label={getAriaLabel('言語選択', 'Language Selection')}
              >
                <span className="text-sm font-medium flex items-center gap-2 leading-none">
                  <span className="text-lg leading-none flex items-center justify-center">
                    {currentLang?.icon || '🌐'}
                  </span>
                  <span className="leading-none">{currentLang?.label || '日本語'}</span>
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-[#E6D5B8] z-20">
                  <ul className="py-2">
                    {languages.map((lang) => {
                      const isActive = selectedLang === lang.code
                      return (
                        <li key={lang.code}>
                          <button
                            type="button"
                            className={`w-full px-4 py-2 text-left transition-colors duration-150 text-sm flex items-center justify-between gap-3 rounded-md ${
                              isActive ? 'text-[#c59a53] font-semibold' : 'text-gray-700 hover:bg-[#F5F1E8]'
                            }`}
                            onClick={() => {
                            setSelectedLang(lang.code)
                              setIsLangOpen(false)
                            }}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-lg leading-none flex items-center justify-center">{lang.icon}</span>
                            <span className="leading-none">{lang.label}</span>
                            </span>
                            {isActive && <span className="text-[#c59a53] text-base">✓</span>}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
              <a
                href="https://www.instagram.com/world_of_tomoe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200 flex items-center justify-center rounded-full border-2 border-white overflow-hidden"
                style={{ width: '32px', height: '32px', minWidth: '32px', minHeight: '32px' }}
                aria-label="Instagram"
              >
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="h-full w-full object-cover rounded-full"
                  style={{ minWidth: '100%', minHeight: '100%', transform: 'scale(1.1)' }}
                />
              </a>
              <a
                href="mailto:staff@tomoe-world.com"
                className="hover:opacity-70 transition-opacity duration-200 flex items-center justify-center rounded-full border-2 border-white overflow-hidden"
                style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }}
                aria-label="Email"
              >
                <img
                  src={gmailLogo}
                  alt="Gmail"
                  className="h-full w-full object-cover rounded-full"
                  style={{ minWidth: '100%', minHeight: '100%', transform: 'scale(1.5 )' }}
                />
              </a>
              <a
                href="https://line.me/ti/p/@tomoe-world"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200 flex items-center justify-center"
                aria-label="LINE"
              >
                <img
                  src={lineLogo}
                  alt="LINE"
                  className="h-6 w-6 object-contain"
                  style={{ minWidth: '25px', minHeight: '25px' }}
                />
              </a>
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden flex flex-col space-y-1.5 p-2 ml-auto"
            aria-label={getAriaLabel('メニュー', 'Menu')}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40 mobile-menu-container"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`xl:hidden fixed top-20 right-4 w-64 max-w-[80vw] bg-white z-50 transform transition-transform duration-300 mobile-menu-container shadow-2xl rounded-lg border border-[#E6D5B8] max-h-[calc(100vh-100px)] overflow-y-auto ${
          isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="pt-4 px-4 pb-4">
          <nav className="space-y-3 sm:space-y-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="block text-gray-700 text-base sm:text-lg font-medium hover:text-[#E6D5B8] transition-colors duration-200 py-2 flex-1"
                    onClick={(e) => handleNavigation(e, item.id, Boolean(item.submenu))}
                  >
                    {getLabel(item)}
                  </a>
                  {item.submenu && (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      className="text-gray-700 hover:text-[#E6D5B8] transition-all duration-200 p-2 ml-2"
                      aria-label="Toggle submenu"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.submenu && openDropdown === index && (
                  <ul className="mt-1 sm:mt-2 ml-3 sm:ml-4 space-y-1 sm:space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="block text-gray-700 text-sm sm:text-base hover:text-[#E6D5B8] transition-colors duration-200 py-1.5 sm:py-2"
                          onClick={(e) => handleNavigation(e, subItem.id, false)}
                        >
                          {getLabel(subItem)}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          
          {/* Social Media Icons - Mobile + Language */}
          <div className="flex flex-col items-center space-y-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#E6D5B8]">
            <div className="w-full flex flex-col items-center">
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#E6D5B8] text-gray-700 hover:bg-[#F5F1E8] transition-colors duration-200"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-label={getAriaLabel('言語選択', 'Language Selection')}
              >
                <span className="text-sm font-medium flex items-center gap-2 leading-none">
                  <span className="text-lg leading-none flex items-center justify-center">
                    {currentLang?.icon || '🌐'}
                  </span>
                  <span className="leading-none">{currentLang?.label || '日本語'}</span>
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangOpen && (
                <div className="mt-2 w-40 sm:w-44 bg-white rounded-md shadow-lg border border-[#E6D5B8] z-20">
                  <ul className="py-2">
                    {languages.map((lang) => {
                      const isActive = selectedLang === lang.code
                      return (
                        <li key={lang.code}>
                          <button
                            type="button"
                            className={`w-full px-4 py-2 text-left transition-colors duration-150 text-sm flex items-center justify-between gap-3 rounded-md ${
                              isActive ? 'text-[#c59a53] font-semibold' : 'text-gray-700 hover:bg-[#F5F1E8]'
                            }`}
                            onClick={() => {
                            setSelectedLang(lang.code)
                              setIsLangOpen(false)
                            }}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-lg leading-none flex items-center justify-center">{lang.icon}</span>
                            <span className="leading-none">{lang.label}</span>
                            </span>
                            {isActive && <span className="text-[#c59a53] text-base">✓</span>}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center space-x-4">
              <a
              href="https://www.instagram.com/world_of_tomoe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-200 flex items-center justify-center rounded-full border-2 border-white overflow-hidden"
              style={{ width: '36px', height: '36px', minWidth: '36px', minHeight: '36px' }}
              aria-label="Instagram"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="h-full w-full object-cover rounded-full"
                style={{ minWidth: '100%', minHeight: '100%', transform: 'scale(1.1)' }}
              />
            </a>
              <a
              href="mailto:staff@tomoe-world.com"
              className="hover:opacity-70 transition-opacity duration-200 flex items-center justify-center rounded-full border-2 border-white overflow-hidden"
              style={{ width: '36px', height: '36px', minWidth: '36px', minHeight: '36px' }}
              aria-label="Email"
            >
              <img
                src={gmailLogo}
                alt="Gmail"
                className="h-full w-full object-cover rounded-full"
                style={{ minWidth: '100%', minHeight: '100%', transform: 'scale(1.9)' }}
              />
            </a>
              <a
              href="https://line.me/ti/p/@tomoe-world"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-200 flex items-center justify-center"
              aria-label="LINE"
            >
              <img
                src={lineLogo}
                alt="LINE"
                className="h-8 w-8 object-contain"
                style={{ minWidth: '32px', minHeight: '32px' }}
              />
            </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

