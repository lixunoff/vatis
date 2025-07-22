'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

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
    createBoilerBubbleSystem(setRedPipeBubbles, 355, 4000)   // Червона труба
    createBoilerBubbleSystem(setBluePipeBubbles, 43, 3500)   // Синя труба
  }, [])

  // Навигация
  const totalSlides = 18 // 17 проектов + 1 boiler
  
  const scrollToSlide = (slideIndex: number) => {
    if (scrollRef.current) {
      const slideWidth = isMobile ? window.innerWidth * 0.75 + 16 : 416 // 400px + 16px gap
      const scrollPosition = slideIndex * slideWidth
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentSlide(slideIndex)
    }
  }

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1)
    }
  }

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
    },
    {
      id: 11,
      title: 'Проект і монтаж систем опалення, ІТП, вентиляції і кондиціювання ТЦ «Світанок»',
      description: 'Комплексне проектування та монтаж інженерних систем торгового центру, включаючи індивідуальний тепловий пункт, системи опалення, вентиляції та кондиціювання для забезпечення комфортних умов для відвідувачів та персоналу.',
      image: '/images/project-11.webp'
    },
    {
      id: 12,
      title: 'КНП «Шаргородська міська лікарня» та інші медичні заклади',
      description: 'Виконано проектування та монтаж систем вентиляції, опалення для Шаргородської міської лікарні, окремих приміщень Хмільницької міської лікарні, Вінницької обласної дитячої лікарні, Вінницької обласної лікарні ім. М. Пирогова, включаючи вентиляцію «чистих приміщень» та енергоаудити.',
      image: '/images/project-12.webp'
    },
    {
      id: 13,
      title: 'Офісна будівля на проспекті Космонавтів, 23',
      description: 'Системи вентиляції і кондиціювання 2, 6 та 9 поверхів сучасної офісної будівлі в центрі Вінниці для забезпечення комфортного робочого середовища.',
      image: '/images/project-13.webp'
    },
    {
      id: 14,
      title: 'Вінницький молочний завод «Рошен»',
      description: 'Проектування та монтаж систем вентиляції та холодопостачання окремих ділянок виробництва молочної продукції з урахуванням специфічних вимог харчової промисловості.',
      image: '/images/project-14.webp'
    },
    {
      id: 15,
      title: 'Медичний центр «Віола Мед»',
      description: 'Повний цикл робіт з проектування та монтажу систем вентиляції та кондиціювання медичного центру для забезпечення необхідних санітарно-гігієнічних умов.',
      image: '/images/project-15.webp'
    },
    {
      id: 16,
      title: 'Дністровська ГЕС',
      description: 'Проектування та монтаж систем вентиляції та кондиціювання окремих будівель великого енергетичного підприємства з урахуванням специфічних технічних вимог.',
      image: '/images/project-16.webp'
    },
    {
      id: 17,
      title: 'ПрАТ «Вінницький олійножировий комбінат»',
      description: 'Розроблено проектну документацію та здійснено монтаж систем вентиляції окремих цехів харчового виробництва, проведено дослідження ефективності роботи вентиляційного обладнання.',
      image: '/images/project-17.webp'
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
          ref={scrollRef}
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
            {/* Первые 2 проекта */}
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

            {/* Boiler SVG */}
            <div 
              className="flex-shrink-0 flex justify-center items-center" 
              style={{ 
                width: isMobile ? '75vw' : '400px', 
                height: isMobile ? '480px' : '600px', 
                minWidth: isMobile ? '75vw' : '400px' 
              }}
            >
              <motion.div
                className="relative"
                style={{
                  width: '400px',
                  height: '600px',
                  overflow: 'visible'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/images/boiler.svg" 
                  alt="Boiler system illustration" 
                  className="absolute top-0 left-0 w-full h-full object-contain z-10"
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

            {/* Остальные проекты */}
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
            <div className="flex-shrink-0" style={{ width: '16px', height: '1px' }} />
          </motion.div>
        </div>

        {/* Navigation - только на десктопах */}
        <div className="hidden lg:flex justify-center w-full">
          <div className="bg-white rounded-3xl shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_32px_-4px_rgba(12,12,13,0.10)] inline-flex justify-start items-center gap-10">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-12 h-12 relative transition-opacity ${
                currentSlide === 0 
                  ? 'opacity-20 cursor-not-allowed' 
                  : 'opacity-75 hover:opacity-100 cursor-pointer'
              }`}
            >
              <div className="w-6 h-6 left-3 top-3 absolute overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M15 18L9 12L15 6" stroke={currentSlide === 0 ? "black" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            {/* Dots - показываем все 11 (10 проектов + boiler) */}
            <div className="flex justify-start items-center gap-3">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-opacity ${
                    currentSlide === index ? 'bg-black' : 'opacity-20 bg-black hover:opacity-50'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`w-12 h-12 relative transition-opacity rotate-180 ${
                currentSlide === totalSlides - 1 
                  ? 'opacity-20 cursor-not-allowed' 
                  : 'opacity-75 hover:opacity-100 cursor-pointer'
              }`}
            >
              <div className="w-6 h-6 left-3 top-3 absolute overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M15 18L9 12L15 6" stroke={currentSlide === totalSlides - 1 ? "black" : "#183AE4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
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
        
        .red-pipe-down-boiler {
          animation: move-down-boiler-red 4s ease-in forwards;
        }
        
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