'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-[75vh] sm:h-[85vh] bg-[#F5F5F5] flex flex-col justify-center items-center overflow-hidden">
      {/* Animated Gradient Background - половина висоти */}
      <div className="animated-gradient"></div>
      
      {/* Overlay gradient для плавного переходу */}
      <div className="overlay-gradient"></div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-[157px] flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[872px] flex flex-col gap-8 sm:gap-10 md:gap-12 items-center text-center mt-6 sm:mt-8 md:mt-10"
        >
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 items-center">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-900 text-xs sm:text-sm font-medium uppercase font-['Inter'] leading-normal tracking-wide"
            >
              Ми створюємо клімат для вашого бізнесу
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-900 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Inter'] leading-tight sm:leading-tight md:leading-tight lg:leading-[48px] text-center max-w-4xl"
            >
              Проектування та впровадження систем вентиляції, кондиціювання, опалення та водопостачання
            </motion.h1>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-8 sm:px-8 py-4 sm:py-[18px] bg-[#183ae4] hover:bg-[#1b6bff] active:bg-gradient-to-b active:from-[#132fbc] active:to-[#183ae4] rounded-[24px] sm:rounded-[28px] flex justify-center items-center gap-2.5 transition-all duration-300 hover:shadow-[0px_8px_16px_0px_rgba(24,143,228,0.32),0px_4px_8px_0px_rgba(24,58,228,0.25),0px_12px_20px_0px_rgba(0,195,255,0.25)] active:shadow-none"
          >
            <div className="text-white text-xs sm:text-[14px] font-bold font-['Inter'] uppercase leading-[18px] sm:leading-tight whitespace-nowrap">
              Зв&apos;яжіться з нами
            </div>
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .animated-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          z-index: 1;
        }

        .overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse 100% 100% at 50% 0%, rgba(245, 245, 245, 0) 0%, #F5F5F5 75%);
          z-index: 2;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}