'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function VideoSection() {
  const [scrollY, setScrollY] = useState(0)
  
  // Состояния для всех труб
  const [leftShortBlue, setLeftShortBlue] = useState<Array<{ id: number, x: number }>>([])
  const [leftLongBlue, setLeftLongBlue] = useState<Array<{ id: number, x: number }>>([])
  const [leftShortRed, setLeftShortRed] = useState<Array<{ id: number, x: number }>>([])
  const [leftLongRed, setLeftLongRed] = useState<Array<{ id: number, x: number }>>([])
  
  const [centerShortBlue, setCenterShortBlue] = useState<Array<{ id: number, x: number }>>([])
  const [centerLongBlue, setCenterLongBlue] = useState<Array<{ id: number, x: number }>>([])
  const [centerShortRed, setCenterShortRed] = useState<Array<{ id: number, x: number }>>([])
  const [centerLongRed, setCenterLongRed] = useState<Array<{ id: number, x: number }>>([])
  
  const [rightShortBlue, setRightShortBlue] = useState<Array<{ id: number, x: number }>>([])
  const [rightLongBlue, setRightLongBlue] = useState<Array<{ id: number, x: number }>>([])
  const [rightShortRed, setRightShortRed] = useState<Array<{ id: number, x: number }>>([])
  const [rightLongRed, setRightLongRed] = useState<Array<{ id: number, x: number }>>([])

  useEffect(() => {
    const handleScroll = () => {
      const iframe = window.parent !== window ? window.parent : window
      const scroll = iframe.pageYOffset || iframe.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      setScrollY(scroll)
    }

    const interval = setInterval(handleScroll, 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  // Функция создания системы пузырьков
  const createBubbleSystem = (
    setBubbles: React.Dispatch<React.SetStateAction<Array<{ id: number, x: number }>>>,
    centerX: number,
    duration: number
  ) => {
    const createBubble = () => {
      const newBubble = {
        id: Date.now() + Math.random(),
        x: centerX + (Math.random() - 0.5) * 4 // ±2px от центра
      }
      
      setBubbles(prev => [...prev, newBubble])
      
      setTimeout(() => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id))
      }, duration)
      
      // Следующий пузырек через рандомное время
      const delay = (500 + Math.random() * 1000)
      setTimeout(createBubble, delay)
    }

    // Старт с задержкой
    setTimeout(createBubble, Math.random() * 2000)
  }

  useEffect(() => {
    // LEFT SVG
    createBubbleSystem(setLeftShortBlue, 54.5, 2000)   // Короткая синяя
    createBubbleSystem(setLeftLongBlue, 8.5, 2500)     // Длинная синяя  
    createBubbleSystem(setLeftShortRed, 261, 2000)     // Короткая красная (266 - 5 = 261)
    createBubbleSystem(setLeftLongRed, 309.5, 2500)    // Длинная красная

    // CENTER SVG
    createBubbleSystem(setCenterShortBlue, 66.5, 1800) // Короткая синяя
    createBubbleSystem(setCenterLongBlue, 20.5, 2300)  // Длинная синяя
    createBubbleSystem(setCenterShortRed, 273, 1800)   // Короткая красная (278 - 5 = 273)
    createBubbleSystem(setCenterLongRed, 321.5, 2300)  // Длинная красная

    // RIGHT SVG  
    createBubbleSystem(setRightShortBlue, 76.5, 2200)  // Короткая синяя
    createBubbleSystem(setRightLongBlue, 30.5, 2800)   // Длинная синяя
    createBubbleSystem(setRightShortRed, 283, 2200)    // Короткая красная (288 - 5 = 283)
    createBubbleSystem(setRightLongRed, 331.5, 2800)   // Длинная красная
  }, [])

  return (
    <motion.section 
      className="w-full overflow-hidden flex justify-center items-center"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
    >
      <div className="w-full flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* LEFT SVG */}
        <div className="w-[340px] h-[397px] relative flex-shrink-0">
          {/* Короткая синяя труба */}
          {leftShortBlue.map(bubble => (
            <div key={bubble.id} className="bubble blue short" style={{left: `${bubble.x}px`, top: '1px'}} />
          ))}
          
          {/* Длинная синяя труба */}
          {leftLongBlue.map(bubble => (
            <div key={bubble.id} className="bubble blue long-left" style={{left: `${bubble.x}px`, top: '0px'}} />
          ))}
          
          {/* Короткая красная труба */}
          {leftShortRed.map(bubble => (
            <div key={bubble.id} className="bubble red short-red-left" style={{left: `${bubble.x}px`, top: '345px'}} />
          ))}
          
          {/* Длинная красная труба */}
          {leftLongRed.map(bubble => (
            <div key={bubble.id} className="bubble red long-red-left" style={{left: `${bubble.x}px`, top: '186px'}} />
          ))}

          <img src="/images/left.svg" alt="Left" className="w-full h-full relative z-10" />
          <div className="absolute w-[154px] h-[154px] z-20" 
               style={{
                 left: '41px', 
                 top: '167.5px', 
                 animation: 'spin 4s linear infinite'
               }}>
            <img src="/images/fan.svg" alt="Fan" className="w-full h-full" />
          </div>
        </div>

        {/* CENTER SVG */}
        <div className="w-[340px] h-[397px] relative flex-shrink-0">
          {/* Короткая синяя труба */}
          {centerShortBlue.map(bubble => (
            <div key={bubble.id} className="bubble blue short-center" style={{left: `${bubble.x}px`, top: '0px'}} />
          ))}
          
          {/* Длинная синяя труба */}
          {centerLongBlue.map(bubble => (
            <div key={bubble.id} className="bubble blue long-center" style={{left: `${bubble.x}px`, top: '0px'}} />
          ))}
          
          {/* Короткая красная труба */}
          {centerShortRed.map(bubble => (
            <div key={bubble.id} className="bubble red short-red-center" style={{left: `${bubble.x}px`, top: '254px'}} />
          ))}
          
          {/* Длинная красная труба */}
          {centerLongRed.map(bubble => (
            <div key={bubble.id} className="bubble red long-red-center" style={{left: `${bubble.x}px`, top: '95px'}} />
          ))}

          <img src="/images/center.svg" alt="Center" className="w-full h-full relative z-10" />
          <div className="absolute w-[154px] h-[154px] z-20" 
               style={{
                 left: '53px', 
                 top: '79px', 
                 animation: 'spin 1s linear infinite'
               }}>
            <img src="/images/fan.svg" alt="Fan" className="w-full h-full" />
          </div>
        </div>

        {/* RIGHT SVG */}
        <div className="w-[340px] h-[397px] relative flex-shrink-0">
          {/* Короткая синяя труба */}
          {rightShortBlue.map(bubble => (
            <div key={bubble.id} className="bubble blue short-right" style={{left: `${bubble.x}px`, top: '0px'}} />
          ))}
          
          {/* Длинная синяя труба */}
          {rightLongBlue.map(bubble => (
            <div key={bubble.id} className="bubble blue long-right" style={{left: `${bubble.x}px`, top: '0px'}} />
          ))}
          
          {/* Короткая красная труба */}
          {rightShortRed.map(bubble => (
            <div key={bubble.id} className="bubble red short-red-right" style={{left: `${bubble.x}px`, top: '304px'}} />
          ))}
          
          {/* Длинная красная труба */}
          {rightLongRed.map(bubble => (
            <div key={bubble.id} className="bubble red long-red-right" style={{left: `${bubble.x}px`, top: '145px'}} />
          ))}

          <img src="/images/right.svg" alt="Right" className="w-full h-full relative z-10" />
          <div className="absolute w-[154px] h-[154px] z-20" 
               style={{
                 left: '64px', 
                 top: '129px', 
                 animation: 'spin 2.5s linear infinite'
               }}>
            <img src="/images/fan.svg" alt="Fan" className="w-full h-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        
        .bubble {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          z-index: 15;
          opacity: 0;
        }
        
        .blue { background-color: #ffffff; }
        .red { background-color: #ffffff; }
        
        /* LEFT анимации */
        .short { animation: move-145 2s ease-in forwards; }
        .long-left { animation: move-317 2.5s ease-in forwards; }
        .short-red-left { animation: move-53 2s ease-in forwards; }
        .long-red-left { animation: move-222 2.5s ease-in forwards; }
        
        /* CENTER анимации */
        .short-center { animation: move-56 1.8s ease-in forwards; }
        .long-center { animation: move-227 2.3s ease-in forwards; }
        .short-red-center { animation: move-143 1.8s ease-in forwards; }
        .long-red-center { animation: move-312 2.3s ease-in forwards; }
        
        /* RIGHT анимации */
        .short-right { animation: move-106 2.2s ease-in forwards; }
        .long-right { animation: move-277 2.8s ease-in forwards; }
        .short-red-right { animation: move-93 2.2s ease-in forwards; }
        .long-red-right { animation: move-262 2.8s ease-in forwards; }
        
        /* Keyframes для разных расстояний */
        @keyframes move-145 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(145px); opacity: 0; }
        }
        
        @keyframes move-317 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(317px); opacity: 0; }
        }
        
        @keyframes move-53 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(53px); opacity: 0; }
        }
        
        @keyframes move-222 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(222px); opacity: 0; }
        }
        
        @keyframes move-56 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(56px); opacity: 0; }
        }
        
        @keyframes move-227 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(227px); opacity: 0; }
        }
        
        @keyframes move-143 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(143px); opacity: 0; }
        }
        
        @keyframes move-312 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(312px); opacity: 0; }
        }
        
        @keyframes move-106 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(106px); opacity: 0; }
        }
        
        @keyframes move-277 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(277px); opacity: 0; }
        }
        
        @keyframes move-93 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(93px); opacity: 0; }
        }
        
        @keyframes move-262 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(262px); opacity: 0; }
        }
      `}</style>
    </motion.section>
  )
}