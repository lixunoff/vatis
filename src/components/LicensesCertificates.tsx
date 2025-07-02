'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

interface License {
  id: number
  image: string
  title: string
  height: string
}

// Модальне вікно як частина компонента
function LicenseModal({ 
  isOpen, 
  onClose, 
  imageUrl, 
  title 
}: { 
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Затемнений фон */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Кнопка закриття - в правому верхньому куті екрана */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Зображення без фону */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function LicensesCertificates() {
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null)

  const licenses: License[] = [
    {
      id: 1,
      image: "/images/doc-1.jpg",
      title: "Кваліфікаційний сертифікат виконавця робіт повʼязаних зі створенням обʼєктів архітектури",
      height: "340px"
    },
    {
      id: 2,
      image: "/images/doc-2.jpg",
      title: "Ліцензія Державної архітектурно-будівельною інспекції України",
      height: "340px"
    },
    {
      id: 3,
      image: "/images/doc-3.jpg",
      title: "Почесна грамота Вінницької обласної державної адміністрації та обласної Ради",
      height: "340px"
    }
  ]

  const openModal = (license: License) => {
    setSelectedLicense(license)
  }

  const closeModal = () => {
    setSelectedLicense(null)
  }

  return (
    <section id="licenses" className="w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-32 lg:pb-40 bg-white">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[894px] flex flex-col justify-start items-start gap-12 sm:gap-16 lg:gap-20">
          {/* Header section */}
          <div className="self-stretch flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="self-stretch justify-start text-[#201818] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-['Inter'] leading-tight lg:leading-[48px]"
            >
              Ліцензії та сертифікати
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="self-stretch justify-start text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]"
            >
              Компанія «Ватіс» має всі необхідні ліцензії, сертифікати та дозволи, що засвідчують нашу кваліфікацію та право виконувати роботи будь-якої складності. Ми дотримуємося стандартів безпеки, будівельних норм і вимог до проєктування, монтажу та обслуговування кліматичних систем.
            </motion.p>
          </div>

          {/* Licenses grid */}
          <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch gap-3 sm:gap-4">
            {licenses.map((license, index) => (
              <motion.div 
                key={license.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-1 w-full h-full p-4 sm:p-5 lg:p-6 bg-neutral-100 rounded-2xl sm:rounded-3xl flex flex-col justify-start items-start gap-3 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(license)}
              >
                <div className="self-stretch h-[240px] sm:h-[280px] lg:h-[340px] rounded-lg sm:rounded-xl overflow-hidden">
                  <motion.img 
                    className="w-full h-full object-cover"
                    src={license.image}
                    alt={license.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="self-stretch flex-1 flex items-start justify-start text-[#8a8a8a] font-['Inter'] text-sm sm:text-base font-medium leading-[1.25]">
                  {license.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Модальне вікно */}
      <LicenseModal
        isOpen={selectedLicense !== null}
        onClose={closeModal}
        imageUrl={selectedLicense?.image || ''}
        title={selectedLicense?.title || ''}
      />
    </section>
  )
}