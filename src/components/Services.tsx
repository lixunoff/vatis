'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Состояния для бульбашок в трубах l-1.svg
  const [leftRedBubbles, setLeftRedBubbles] = useState<Array<{ id: number, x: number }>>([])
  const [centerBlueBubbles, setCenterBlueBubbles] = useState<Array<{ id: number, x: number }>>([])
  const [rightRedBubbles, setRightRedBubbles] = useState<Array<{ id: number, x: number }>>([])

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
      const delay = (800 + Math.random() * 1200)
      setTimeout(createBubble, delay)
    }

    // Старт с задержкой
    setTimeout(createBubble, Math.random() * 3000)
  }

  useEffect(() => {
    // Бульбашки для труб l-1.svg (відносно контейнера 435px)
    createBubbleSystem(setLeftRedBubbles, 132, 3000)    // Ліва червона труба (зверху вниз)
    createBubbleSystem(setCenterBlueBubbles, 217, 3500) // Центральна синя труба (знизу вверх)  
    createBubbleSystem(setRightRedBubbles, 302, 3000)   // Права червона труба (зверху вниз)
  }, [])

  return (
    <section id="services" className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-20 lg:py-40 bg-white">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[894px] flex flex-col justify-start items-center gap-12 sm:gap-16 lg:gap-20">
          
          {/* Header */}
          <div className="w-full flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full text-[#201818] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-['Inter'] leading-tight lg:leading-[48px]"
            >
              Послуги
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]"
            >
              Вже понад 20 років компанія «Ватіс» успішно реалізує проєкти у сфері інженерних систем для об&apos;єктів цивільного та промислового будівництва. За цей час ми виконали понад 200 проєктів різного масштабу, що підтверджує наш професіоналізм і досвід.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="w-full h-auto lg:h-[1353px] relative">
            
            {/* Карточка 1 - верх лево */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[443px] h-auto min-h-[353px] lg:h-[443px] p-6 sm:p-7 lg:p-8 bg-neutral-100 rounded-2xl sm:rounded-3xl lg:rounded-[32px] flex flex-col justify-between items-start lg:absolute lg:top-0 lg:left-0 mb-3 sm:mb-4 lg:mb-0"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <div className="p-2.5 sm:p-3 bg-[#183ae4] rounded-2xl sm:rounded-3xl">
                  <img src="/images/air.svg" alt="Вентиляція та кондиціювання" className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10" />
                </div>
                <div className="opacity-10 text-[#232323] text-[80px] sm:text-[100px] lg:text-[144px] font-medium font-['Inter'] leading-[80px] sm:leading-[100px] lg:leading-[144px]">01</div>
              </div>
              <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="text-[#232323] text-lg sm:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[24px] lg:leading-[30px] whitespace-pre-line">
                  Вентиляція{'\n'}та кондиціювання
                </div>
                <div className="text-[#232323] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]">
                  • Проєктування і монтаж систем (ОВК)<br/>
                  • Налагодження та балансування<br/>
                  • Сервісне обслуговування<br/>
                  • Енергоаудит систем<br/>
                  • Діагностика та оптимізація
                </div>
              </div>
            </motion.div>

            {/* Карточка 2 - верх право */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-[443px] h-auto min-h-[353px] lg:h-[443px] p-6 sm:p-7 lg:p-8 bg-neutral-100 rounded-2xl sm:rounded-3xl lg:rounded-[32px] flex flex-col justify-between items-start lg:absolute lg:top-0 lg:left-[459px] mb-3 sm:mb-4 lg:mb-0"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <div className="p-2.5 sm:p-3 bg-[#183ae4] rounded-2xl sm:rounded-3xl">
                  <img src="/images/water.svg" alt="Опалення та водопостачання" className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10" />
                </div>
                <div className="opacity-10 text-[#232323] text-[80px] sm:text-[100px] lg:text-[144px] font-medium font-['Inter'] leading-[80px] sm:leading-[100px] lg:leading-[144px]">02</div>
              </div>
              <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="text-[#232323] text-lg sm:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[24px] lg:leading-[30px] whitespace-pre-line">
                  Опалення{'\n'}та водопостачання
                </div>
                <div className="text-[#232323] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]">
                  • Внутрішнє та зовнішнє теплопостачання<br/>
                  • Водопостачання та водовідведення<br/>
                  • Холодопостачання<br/>
                  • Циркуляційні мережі<br/>
                  • Діагностика та оптимізація
                </div>
              </div>
            </motion.div>

            {/* Карточка 3 - средина лево */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full lg:w-[443px] h-auto min-h-[353px] lg:h-[443px] p-6 sm:p-7 lg:p-8 bg-neutral-100 rounded-2xl sm:rounded-3xl lg:rounded-[32px] flex flex-col justify-between items-start lg:absolute lg:top-[459px] lg:left-0 mb-3 sm:mb-4 lg:mb-0"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <div className="p-2.5 sm:p-3 bg-[#183ae4] rounded-2xl sm:rounded-3xl">
                  <img src="/images/heat.svg" alt="Енергоефективність та обслуговування" className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10" />
                </div>
                <div className="opacity-10 text-[#232323] text-[80px] sm:text-[100px] lg:text-[144px] font-medium font-['Inter'] leading-[80px] sm:leading-[100px] lg:leading-[144px]">03</div>
              </div>
              <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="text-[#232323] text-lg sm:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[24px] lg:leading-[30px] whitespace-pre-line">
                  Енергоефективність{'\n'}та обслуговування
                </div>
                <div className="text-[#232323] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]">
                  • Комплексний енергоаудит<br/>
                  • Оптимізація енергоспоживання<br/>
                  • Енергоефективні рішення<br/>
                  • Сервісне обслуговування
                </div>
              </div>
            </motion.div>

            {/* Карточка 4 - средина право */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-[443px] h-auto min-h-[353px] lg:h-[443px] p-6 sm:p-7 lg:p-8 bg-neutral-100 rounded-2xl sm:rounded-3xl lg:rounded-[32px] flex flex-col justify-between items-start lg:absolute lg:top-[459px] lg:left-[459px] mb-3 sm:mb-4 lg:mb-0"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <div className="p-2.5 sm:p-3 bg-[#183ae4] rounded-2xl sm:rounded-3xl">
                  <img src="/images/energy.svg" alt="Коригування чужих проєктів" className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10" />
                </div>
                <div className="opacity-10 text-[#232323] text-[80px] sm:text-[100px] lg:text-[144px] font-medium font-['Inter'] leading-[80px] sm:leading-[100px] lg:leading-[144px]">04</div>
              </div>
              <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="text-[#232323] text-lg sm:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[24px] lg:leading-[30px] whitespace-pre-line">
                  Коригування{'\n'}існуючих проєктів
                </div>
                <div className="text-[#232323] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]">
                  • Аудит та адаптація існуючих проєктів<br/>
                  • Виправлення проєктної документації<br/>
                  • Впровадження інновацій<br/>
                  • Діагностика та оптимізація
                </div>
              </div>
            </motion.div>

            {/* Карточка 5 - низ лево (черная) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[443px] h-auto min-h-[353px] lg:h-[443px] p-6 sm:p-7 lg:p-8 bg-[#232323] rounded-2xl sm:rounded-3xl lg:rounded-[32px] flex flex-col justify-between items-start lg:absolute lg:top-[918px] lg:left-0 mb-3 sm:mb-4 lg:mb-0"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <div className="p-2.5 sm:p-3 bg-white rounded-2xl sm:rounded-3xl">
                  <img src="/images/3d_rotation.svg" alt="Інноваційне проєктування" className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10" />
                </div>
                <div className="opacity-20 text-white text-[80px] sm:text-[100px] lg:text-[144px] font-medium font-['Inter'] leading-[80px] sm:leading-[100px] lg:leading-[144px]">05</div>
              </div>
              <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[24px] lg:leading-[30px] whitespace-pre-line">
                  Інноваційне{'\n'}проєктування
                </div>
                <div className="text-white text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]">
                  • Робота з категоріями СС1–СС3<br/>
                  • Застосування BIM-технологій<br/>
                  • Цифрове моделювання<br/>
                  • Точність та прозорість на всіх етапах
                </div>
              </div>
            </motion.div>

            {/* SVG иллюстрация - центрується на мобильных */}
            <div className="w-full flex justify-center items-center lg:block h-[435px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="w-[435px] h-[435px] lg:absolute lg:top-[918px] lg:left-[459px] relative overflow-visible"
                style={{ minWidth: '435px', minHeight: '435px', maxWidth: '435px', maxHeight: '435px' }}
              >
                {/* Бульбашки для лівої червоної труби (зверху вниз) */}
                {leftRedBubbles.map(bubble => (
                  <div 
                    key={bubble.id} 
                    className="bubble red-pipe-down" 
                    style={{left: `${bubble.x}px`, top: '17px'}} 
                  />
                ))}
                
                {/* Бульбашки для центральної синьої труби (знизу вверх) */}
                {centerBlueBubbles.map(bubble => (
                  <div 
                    key={bubble.id} 
                    className="bubble blue-pipe-up" 
                    style={{left: `${bubble.x}px`, top: '418px'}} 
                  />
                ))}
                
                {/* Бульбашки для правої червоної труби (зверху вниз) */}
                {rightRedBubbles.map(bubble => (
                  <div 
                    key={bubble.id} 
                    className="bubble red-pipe-down" 
                    style={{left: `${bubble.x}px`, top: '17px'}} 
                  />
                ))}

                {/* Основна підложка l-1.svg - фіксована */}
                <img 
                  src="/images/l-1.svg" 
                  alt="Base layer" 
                  className="w-[435px] h-[435px] absolute z-10"
                />
                
                {/* Перший шар l-2.svg - ліва позиція */}
                <img 
                  src="/images/l-2.svg" 
                  alt="Layer 2 left" 
                  className="absolute object-contain z-20"
                  style={{ 
                    width: '60px', 
                    height: '238px',
                    top: '50%',
                    left: '102px',
                    transform: 'translateY(-50%)'
                  }}
                />
                
                {/* Другий шар l-2.svg - центральна позиція */}
                <img 
                  src="/images/l-2.svg" 
                  alt="Layer 2 center" 
                  className="absolute object-contain z-20"
                  style={{ 
                    width: '60px', 
                    height: '238px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
                
                {/* Третій шар l-2.svg - права позиція */}
                <img 
                  src="/images/l-2.svg" 
                  alt="Layer 2 right" 
                  className="absolute object-contain z-20"
                  style={{ 
                    width: '60px', 
                    height: '238px',
                    top: '50%',
                    right: '102px',
                    transform: 'translateY(-50%)'
                  }}
                />
                
                {/* Стрілки - фіксовані розміри */}
                <motion.img
                  src="/images/black-arrow.svg"
                  alt="Arrow"
                  className="absolute w-12 h-12 z-30"
                  style={{ top: '136px', left: '108px' }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img
                  src="/images/black-arrow.svg"
                  alt="Arrow"
                  className="absolute w-12 h-12 z-30"
                  style={{ top: '136px', left: '193px' }}
                  animate={{ rotate: [0, -7, 7, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                <motion.img
                  src="/images/black-arrow.svg"
                  alt="Arrow"
                  className="absolute w-12 h-12 z-30"
                  style={{ top: '136px', left: '278px' }}
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <motion.img
                  src="/images/white-arrow.svg"
                  alt="Arrow"
                  className="absolute w-12 h-12 z-30"
                  style={{ top: '248px', left: '108px' }}
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
                
                <motion.img
                  src="/images/white-arrow.svg"
                  alt="Arrow"
                  className="absolute w-12 h-12 z-30"
                  style={{ top: '248px', left: '193px' }}
                  animate={{ rotate: [0, 9, -9, 0] }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                />
                
                <motion.img
                  src="/images/white-arrow.svg"
                  alt="Arrow"
                  className="absolute w-12 h-12 z-30"
                  style={{ top: '248px', left: '278px' }}
                  animate={{ rotate: [0, -4, 4, 0] }}
                  transition={{
                    duration: 2.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                />
              </motion.div>
            </div>

          </div>

          {/* CTA Button - как в Hero */}
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

        </div>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: #ffffff;
          z-index: 15;
          opacity: 0;
        }
        
        .red-pipe-down {
          animation: move-down-400 3s ease-in forwards;
        }
        
        .blue-pipe-up {
          animation: move-up-400 3.5s ease-in forwards;
        }
        
        @keyframes move-down-400 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        
        @keyframes move-up-400 {
          0% { transform: translateY(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(-400px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}