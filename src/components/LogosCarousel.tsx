'use client'

import { motion } from 'framer-motion'

export default function LogosCarousel() {
  // Массив логотипов
  const logos = [
    { src: '/images/logo-1.png', opacity: '' },
    { src: '/images/logo-2.png', opacity: '' },
    { src: '/images/logo-3.png', opacity: '' },
    { src: '/images/logo-4.png', opacity: '' },
    { src: '/images/logo-5.png', opacity: '' },
    { src: '/images/logo-6.png', opacity: '' },
    { src: '/images/logo-7.png', opacity: '' },
    { src: '/images/logo-8.png', opacity: '' },
    { src: '/images/logo-9.png', opacity: '' },
    { src: '/images/logo-10.png', opacity: '' },
    { src: '/images/logo-11.png', opacity: '' }
  ]

  // Функция для рендера набора логотипов
  const renderLogosSet = (keyPrefix: string) => (
    logos.map((logo, index) => (
      <div key={`${keyPrefix}-${index}`} className="w-[120px] h-16 relative flex-shrink-0 mx-8">
        <img 
          className={`w-[120px] h-16 object-contain mix-blend-multiply ${logo.opacity}`}
          src={logo.src} 
          alt={`Logo ${index + 1}`}
        />
      </div>
    ))
  )

  return (
    <section className="w-full bg-[#F5F5F5] flex flex-col justify-center items-center py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[157px] flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-[872px] flex flex-col items-center text-center"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#8a8a8a] text-xs sm:text-sm font-medium uppercase font-['Inter'] leading-normal tracking-wide mb-8 sm:mb-12 lg:mb-16"
            style={{ marginBottom: '48px' }}
          >
            Нам довіряють
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden">
        <div className="relative">
          {/* Анимированная карусель */}
          <div className="flex animate-scroll">
            {/* Первый набор логотипов */}
            {renderLogosSet('first')}
            
            {/* Второй набор для бесшовности */}
            {renderLogosSet('second')}
            
            {/* Третий набор для больших экранов */}
            {renderLogosSet('third')}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-120px * 11 - 64px * 11));
          }
        }
        
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}