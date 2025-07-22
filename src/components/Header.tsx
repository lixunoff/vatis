'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Отслеживаем скролл для появления фона
  useEffect(() => {
    const handleScroll = () => {
      // Специально для DevTools Responsive режима
      const iframe = window.parent !== window ? window.parent : window
      const scroll = iframe.pageYOffset || iframe.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      
      setIsScrolled(scroll > 50)
    }

    // Обновляем по таймеру тоже
    const interval = setInterval(() => {
      handleScroll()
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* SVG фильтр для glass blur эффекта */}
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <filter id="glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <header className="fixed top-3 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-10">
        <div 
          className="liquid-glass w-full max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-48px)] lg:max-w-[calc(100vw-80px)] h-12 sm:h-16 relative rounded-[24px] sm:rounded-[32px]"
        >
          {/* Liquid Glass Bend Layer - появляется при скролле */}
          <div 
            className={`absolute inset-0 z-0 rounded-[24px] sm:rounded-[32px] transition-opacity duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backdropFilter: 'blur(3px)',
              filter: 'url(#glass-blur)'
            }}
          ></div>

          {/* Liquid Glass Face Layer - появляется при скролле */}
          <div 
            className={`absolute inset-0 z-[1] rounded-[24px] sm:rounded-[32px] transition-opacity duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.04), 0 0 24px rgba(0, 0, 0, 0.04)'
            }}
          ></div>

          {/* Liquid Glass Edge Layer - появляется при скролле */}
          <div 
            className={`absolute inset-0 z-[2] rounded-[24px] sm:rounded-[32px] transition-opacity duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              boxShadow: `
                inset 3px 3px 3px -3px rgba(255, 255, 255, 1.00),
                inset -3px -3px 3px -3px rgba(255, 255, 255, 1.00)
              `
            }}
          ></div>

          {/* Основной контент header - всегда видимый */}
          <div 
            className={`w-full h-12 sm:h-16 py-2 sm:py-3 flex justify-between items-center relative z-[3] transition-all duration-500 ${
              isScrolled ? 'px-4 sm:px-6 lg:px-8' : 'px-0'
            }`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="VATIS Logo" 
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 xl:gap-10">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-black text-sm xl:text-base font-medium font-['Inter'] leading-normal hover:underline transition-colors"
              >
                Компанія
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-black text-sm xl:text-base font-medium font-['Inter'] leading-normal hover:underline transition-colors"
              >
                Послуги
              </button>
              <button 
                onClick={() => scrollToSection('licenses')}
                className="text-black text-sm xl:text-base font-medium font-['Inter'] leading-normal hover:underline transition-colors"
              >
                Ліцензії
              </button>
              <button 
                onClick={() => scrollToSection('objects')}
                className="text-black text-sm xl:text-base font-medium font-['Inter'] leading-normal hover:underline transition-colors"
              >
                Об&apos;єкти
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black text-sm xl:text-base font-medium font-['Inter'] leading-normal hover:underline transition-colors"
              >
                Контакти
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-900 p-1 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-2 sm:mt-4 absolute top-full left-0 w-full z-20">
              <div className="flex flex-col gap-3 sm:gap-4 bg-white/70 backdrop-blur-[16px] rounded-lg p-3 sm:p-4 shadow-lg mx-4 sm:mx-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-black text-sm sm:text-base font-medium font-['Inter'] leading-normal text-left hover:text-blue-600 transition-colors py-1 sm:py-2"
                >
                  Компанія
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-black text-sm sm:text-base font-medium font-['Inter'] leading-normal text-left hover:text-blue-600 transition-colors py-1 sm:py-2"
                >
                  Послуги
                </button>
                <button 
                  onClick={() => scrollToSection('licenses')}
                  className="text-black text-sm sm:text-base font-medium font-['Inter'] leading-normal text-left hover:text-blue-600 transition-colors py-1 sm:py-2"
                >
                  Ліцензії
                </button>
                <button 
                  onClick={() => scrollToSection('objects')}
                  className="text-black text-sm sm:text-base font-medium font-['Inter'] leading-normal text-left hover:text-blue-600 transition-colors py-1 sm:py-2"
                >
                  Об&apos;єкти
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-black text-sm sm:text-base font-medium font-['Inter'] leading-normal text-left hover:text-blue-600 transition-colors py-1 sm:py-2"
                >
                  Контакти
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}