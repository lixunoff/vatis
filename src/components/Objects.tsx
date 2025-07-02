'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import React from 'react'

interface Project {
  id: number
  title: string
  description?: string
  image: string
}

const Objects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Состояния для бульбашок в boiler.svg
  const [redPipeBubbles, setRedPipeBubbles] = useState<Array<{ id: number, x: number }>>([])
  const [bluePipeBubbles, setBluePipeBubbles] = useState<Array<{ id: number, x: number }>>([])

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Функция создания системы пузырьков для boiler
  const createBoilerBubbleSystem = (
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
    // Инициализируем бульбашки для boiler.svg 
    // Позиции основаны на анализе SVG (червона труба справа, синя ліворуч)
    createBoilerBubbleSystem(setRedPipeBubbles, 355, 4000)   // Червона труба (зміщуємо на 3px вправо: 352 + 3)
    createBoilerBubbleSystem(setBluePipeBubbles, 43, 3500)   // Синя труба (зміщуємо на 5px вліво: 48 - 5)
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: 'Вінницький академічний музично-драматичний театр ім. М. Садовського',
      description: 'Фахівцями ТОВ «Ватіс» здійснено консультування проектної організації та виконано монтаж систем вентиляції, кондиціювання, повітряного опалення основної та малої сцени з максимальним збереженням історичного стану приміщень.',
      image: '/images/project-1.webp'
    },
    {
      id: 2,
      title: 'Лікувально-діагностичний центр «Меділюкс», лабораторії «Медилабс» м. Вінниця',
      description: 'Розроблено проектну документацію та змонтовано системи опалення, вентиляції, кондиціювання, водопостачання, каналізації. Змонтовано системи мультизонального VRF кондиціювання та унікальну систему охолодження МРТ з фрикулінгом.',
      image: '/images/project-2.webp'
    },
    {
      id: 3,
      title: '«РЛЦ-Одеса» ТОВ «Інрайс Девелопмент»',
      description: 'Запроектовано та змонтовано системи вентиляції і кондиціювання одного з найбільш високотехнологічного мульти-температурного логістичного комплексу в Україні класу «А+». Більше 36000 м² складської, офісної та додаткової площі.',
      image: '/images/project-3.webp'
    },
    {
      id: 4,
      title: 'Міський басейн «АкваВін»',
      description: 'Фахівцями ТОВ «Ватіс» здійснено консультування проектної організації та виконано монтаж систем вентиляції, кондиціювання, повітряного опалення басейну та спортивних і допоміжних приміщень.',
      image: '/images/project-4.webp'
    },
    {
      id: 5,
      title: 'Центр надання адміністративних послуг «Прозорий офіс»',
      description: 'Змонтовано системи вентиляції та кондиціювання приміщень адміністративної будівлі по вул. Замостянська, 7 в м. Вінниці для забезпечення комфортних умов роботи.',
      image: '/images/project-5.webp'
    },
    {
      id: 6,
      title: 'Центр сімейної медицини «Меділюкс»',
      description: 'Запроектовано і змонтовано системи опалення, водопостачання, вентиляції і кондиціювання, холодопостачання, ІТП для забезпечення оптимальних умов роботи медичного центру.',
      image: '/images/project-6.webp'
    },
    {
      id: 7,
      title: 'Молодіжний центр «Квадрат»',
      description: 'Розроблено і змонтовано системи вентиляції і кондиціювання для забезпечення комфортного мікроклімату в приміщеннях молодіжного центру.',
      image: '/images/project-7.webp'
    },
    {
      id: 8,
      title: 'Медичний центр «Подільський центр зору», «Зорик»',
      description: 'Запроектовано та змонтовано системи опалення, вентиляції, кондиціювання чистих приміщень-операційних, підтримання нормованих параметрів повітря для роботи ексимерного лазера.',
      image: '/images/project-8.webp'
    },
    {
      id: 9,
      title: 'ВФ «Панда» ТМ «Караван»',
      description: 'Розроблено систему вентиляції і кондиціювання цеху по розливу води, купажу та інших приміщень. Використання припливно-витяжного агрегату з роторним рекуператором дозволило мінімізувати витрати на опалення.',
      image: '/images/project-9.webp'
    },
    {
      id: 10,
      title: 'Готельно-ресторанний комплекс "Vinograd"',
      description: 'Системи вентиляції СПА зони Готельно-ресторанного комплексу "Vinograd" м. Гайсин.',
      image: '/images/project-10.webp'
    }
  ]

  return (
    <section id="objects" className="w-full py-20 sm:py-32 lg:py-40 bg-neutral-100">
      <div className="w-full mx-auto flex flex-col justify-start items-center gap-12 sm:gap-16 lg:gap-20">
        
        {/* Header */}
        <div className="w-full max-w-[894px] px-4 sm:px-6 lg:px-0 flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="self-stretch justify-start text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-['Inter'] leading-tight lg:leading-[48px]"
          >
            Виконані об'єкти
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="self-stretch justify-start text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]"
          >
            Нам довіряють сотні поважних клієнтів, і кожен завершений об'єкт — це не просто проєкт, а приклад надійної співпраці та професіоналізму. Ми щиро вдячні кожному, хто був і залишається з нами на цьому шляху. Попереду ще багато амбітних цілей, нових технологій та викликів, які ми готові приймати — як завжди, на високому рівні.
          </motion.p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div 
          className="w-full overflow-x-auto overflow-y-hidden"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <motion.div 
            className="flex justify-start items-start gap-3 sm:gap-4 pl-4 sm:pl-6 lg:pl-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                className="relative flex-shrink-0 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden cursor-pointer"
                style={{
                  width: isMobile ? '75vw' : '400px',
                  height: isMobile ? '480px' : '600px',
                  minWidth: isMobile ? '75vw' : '400px'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center bg-gray-400"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                  }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1 
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                <div 
                  className={`absolute inset-0 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'bg-gradient-to-b from-black/0 to-black/90'
                      : 'bg-gradient-to-b from-black/0 to-black/60'
                  }`}
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10">
                  <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
                    <motion.h3 
                      className="text-white text-base sm:text-lg lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[24px] lg:leading-[30px]"
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    {hoveredIndex === index && project.description && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1,
                          height: 'auto'
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-white text-xs sm:text-sm lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[20px] lg:leading-[27px]">
                          {project.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Спеціальний контейнер для boiler без hover ефектів */}
            <div className="w-full flex justify-center items-center overflow-visible" style={{ width: '400px', height: isMobile ? '480px' : '600px', minWidth: '400px' }}>
              <motion.div
                key="boiler-carousel-container"
                className="relative flex-shrink-0"
                style={{
                  width: '400px',
                  height: '600px',
                  minWidth: '400px',
                  minHeight: '600px',
                  maxWidth: '400px',
                  maxHeight: '600px',
                  overflow: 'visible'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* SVG з boiler */}
                <img 
                  src="/images/boiler.svg" 
                  alt="Boiler system illustration" 
                  className="absolute top-0 left-0 w-full h-full object-contain z-10 visible"
                />

                {/* Бульбашки для червоної труби */}
                {redPipeBubbles.map(bubble => (
                  <div 
                    key={bubble.id} 
                    className="absolute bubble red-pipe-down-boiler z-20" 
                    style={{
                      left: `${bubble.x}px`, 
                      top: '210px'
                    }} 
                  />
                ))}
                
                {/* Бульбашки для синьої труби */}
                {bluePipeBubbles.map(bubble => (
                  <div 
                    key={bubble.id} 
                    className="absolute bubble blue-pipe-down-boiler z-20" 
                    style={{
                      left: `${bubble.x}px`, 
                      top: '90px'
                    }} 
                  />
                ))}

                {/* Анімована стрілка */}
                <motion.img
                  src="/images/white-arrow.svg"
                  alt="Arrow"
                  className="absolute w-12 h-12 z-30"
                  style={{ 
                    top: '331px', 
                    left: '176px', 
                    transform: 'translate(-50%, -50%)' 
                  }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* Решта проєктів */}
            {projects.slice(2).map((project, index) => (
              <motion.div
                key={project.id}
                className="relative flex-shrink-0 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden cursor-pointer"
                style={{
                  width: isMobile ? '75vw' : '400px',
                  height: isMobile ? '480px' : '600px',
                  minWidth: isMobile ? '75vw' : '400px'
                }}
                onMouseEnter={() => setHoveredIndex(index + 2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center bg-gray-400"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                  }}
                  animate={{ 
                    scale: hoveredIndex === (index + 2) ? 1.1 : 1 
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                <div 
                  className={`absolute inset-0 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] transition-all duration-300 ${
                    hoveredIndex === (index + 2)
                      ? 'bg-gradient-to-b from-black/0 to-black/90'
                      : 'bg-gradient-to-b from-black/0 to-black/60'
                  }`}
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10">
                  <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
                    <motion.h3 
                      className="text-white text-base sm:text-lg lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[24px] lg:leading-[30px]"
                      animate={{ 
                        opacity: hoveredIndex === (index + 2) ? 1 : 1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    {hoveredIndex === (index + 2) && project.description && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1,
                          height: 'auto'
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-white text-xs sm:text-sm lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[20px] lg:leading-[27px]">
                          {project.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Padding spacer */}
            <div 
              className="flex-shrink-0" 
              style={{ width: '16px', height: '1px' }}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        
        .bubble {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: #ffffff;
          opacity: 0;
          pointer-events: none;
        }
        
        /* Бульбашки для червоної труби в boiler (зверху вниз) */
        .red-pipe-down-boiler {
          animation: move-down-boiler-red 4s ease-in forwards;
        }
        
        /* Бульбашки для синьої труби в boiler (зверху вниз) */
        .blue-pipe-down-boiler {
          animation: move-down-boiler-blue 3.5s ease-in forwards;
        }
        
        @keyframes move-down-boiler-red {
          0% { 
            transform: translateY(0px); 
            opacity: 0; 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(300px); 
            opacity: 0; 
          }
        }
        
        @keyframes move-down-boiler-blue {
          0% { 
            transform: translateY(0px); 
            opacity: 0; 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(300px); 
            opacity: 0; 
          }
        }
      `}</style>
    </section>
  )
}

export default Objects