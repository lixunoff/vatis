'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import React from 'react'

interface Bubble {
  id: number
  y: number
}

const Footer: React.FC = () => {
  const [redBubbles, setRedBubbles] = useState<Bubble[]>([])
  const [blueBubbles, setBlueBubbles] = useState<Bubble[]>([])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const createBubbleSystem = (
    setBubbles: React.Dispatch<React.SetStateAction<Bubble[]>>,
    centerY: number,
    duration: number
  ) => {
    const createBubble = () => {
      const newBubble: Bubble = {
        id: Date.now() + Math.random(),
        y: centerY + (Math.random() - 0.5) * 4
      }
      
      setBubbles(prev => [...prev, newBubble])
      
      setTimeout(() => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id))
      }, duration)
      
      const delay = 300 + Math.random() * 600
      setTimeout(createBubble, delay)
    }

    setTimeout(createBubble, Math.random() * 1000)
  }

  useEffect(() => {
    createBubbleSystem(setRedBubbles, 65, 4000)   // Червона труба (вправо)
    createBubbleSystem(setBlueBubbles, 131, 3500) // Синя труба (вліво)
  }, [])

  return (
    <footer className="w-full bg-white flex flex-col justify-start items-center gap-20 sm:gap-40">
      
      {/* SVG with Pipes and Bubbles */}
      <div className="w-full flex justify-center items-center overflow-hidden">
        <motion.div 
          className="relative overflow-visible"
          style={{
            width: '1360px',
            height: '200px',
            minWidth: '1360px',
            minHeight: '200px',
            maxWidth: '1360px',
            maxHeight: '200px'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* SVG Background */}
          <svg width="1360" height="200" viewBox="0 0 1360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-10">
            <rect x="1" y="73" width="12" height="1358" transform="rotate(-90 1 73)" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="2"/>
            <rect x="1" y="139" width="12" height="1358" transform="rotate(-90 1 139)" fill="url(#paint2_linear)" stroke="url(#paint3_linear)" strokeWidth="2"/>
            <defs>
              <linearGradient id="paint0_linear" x1="7" y1="74" x2="7" y2="1434" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFACAE" stopOpacity="0"/>
                <stop offset="0.178413" stopColor="#FFACAE"/>
                <stop offset="0.828482" stopColor="#FFACAE"/>
                <stop offset="1" stopColor="#FFACAE" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="7" y1="74" x2="7" y2="1434" gradientUnits="userSpaceOnUse">
                <stop offset="0.0384615" stopOpacity="0"/>
                <stop offset="0.177885"/>
                <stop offset="0.826923"/>
                <stop offset="0.961538" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="7" y1="140" x2="7" y2="1500" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B6B2FF" stopOpacity="0"/>
                <stop offset="0.178413" stopColor="#B6B2FF"/>
                <stop offset="0.828482" stopColor="#B6B2FF"/>
                <stop offset="1" stopColor="#B6B2FF" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear" x1="7" y1="140" x2="7" y2="1500" gradientUnits="userSpaceOnUse">
                <stop offset="0.0384615" stopOpacity="0"/>
                <stop offset="0.177885"/>
                <stop offset="0.826923"/>
                <stop offset="0.961538" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Bubbles */}
          {/* Червоні бульбашки - рухаються вправо */}
          {redBubbles.map(bubble => (
            <div 
              key={`red-${bubble.id}`}
              className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-0 z-20"
              style={{ left: '0px', top: `${bubble.y}px`, animation: 'moveLeftToRight 4s ease-in forwards' }}
            />
          ))}
          
          {/* Сині бульбашки - рухаються вліво */}
          {blueBubbles.map(bubble => (
            <div 
              key={`blue-${bubble.id}`}
              className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-0 z-20"
              style={{ left: '1360px', top: `${bubble.y}px`, animation: 'moveRightToLeft 3.5s ease-in forwards' }}
            />
          ))}

          {/* White Squares with Fans */}
          <motion.div 
            className="absolute w-[198px] h-[198px] bg-white border-2 border-black rounded-[40px] flex items-center justify-center z-30"
            style={{ left: '234px', top: '1px' }}
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-[138px] h-[138px]" style={{ animation: 'spin 4s linear infinite' }}>
              <img src="/images/fan.svg" alt="Fan" className="w-full h-full" />
            </div>
          </motion.div>

          <motion.div 
            className="absolute w-[198px] h-[198px] bg-white border-2 border-black rounded-[40px] flex items-center justify-center z-30"
            style={{ left: '581px', top: '1px' }}
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-[138px] h-[138px]" style={{ animation: 'spin 1s linear infinite' }}>
              <img src="/images/fan.svg" alt="Fan" className="w-full h-full" />
            </div>
          </motion.div>

          <motion.div 
            className="absolute w-[198px] h-[198px] bg-white border-2 border-black rounded-[40px] flex items-center justify-center z-30"
            style={{ left: '928px', top: '1px' }}
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-[138px] h-[138px]" style={{ animation: 'spin 2.5s linear infinite' }}>
              <img src="/images/fan.svg" alt="Fan" className="w-full h-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Content */}
      <motion.div 
        className="w-full max-w-[894px] px-4 sm:px-6 lg:px-0 pb-20 sm:pb-16 lg:pb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 sm:gap-4">
          <div className="order-2 sm:order-1 text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight text-center sm:text-left">
            ТОВ «Ватіс». 2025 © Усі права захищені
          </div>
          
          <div className="order-1 sm:order-2 flex justify-center sm:justify-start items-center sm:items-start gap-3 sm:gap-4 flex-wrap">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight hover:text-[#183ae4] transition-colors cursor-pointer"
            >
              Компанія
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight hover:text-[#183ae4] transition-colors cursor-pointer"
            >
              Послуги
            </button>
            <button 
              onClick={() => scrollToSection('licenses')}
              className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight hover:text-[#183ae4] transition-colors cursor-pointer"
            >
              Ліцензії
            </button>
            <button 
              onClick={() => scrollToSection('objects')}
              className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight hover:text-[#183ae4] transition-colors cursor-pointer"
            >
              Об'єкти
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight hover:text-[#183ae4] transition-colors cursor-pointer"
            >
              Контакти
            </button>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes moveLeftToRight {
          0% { 
            transform: translateX(0px); 
            opacity: 0; 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            transform: translateX(1360px); 
            opacity: 0; 
          }
        }
        
        @keyframes moveRightToLeft {
          0% { 
            transform: translateX(0px); 
            opacity: 0; 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            transform: translateX(-1360px); 
            opacity: 0; 
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  )
}

export default Footer