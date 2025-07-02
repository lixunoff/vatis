'use client'

import { motion } from 'framer-motion'
import React from 'react'

const Quote: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-32 lg:pb-40 bg-neutral-100 flex justify-center">
      <motion.div 
        className="rounded-2xl sm:rounded-3xl lg:rounded-[40px] border-2 border-[#FF7171] py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-[153px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-[588px] mx-auto flex flex-col justify-start items-center gap-4 sm:gap-5 lg:gap-6">
          
          {/* Profile Section */}
          <motion.div 
            className="w-full flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <motion.img 
              className="w-[120px] sm:w-[130px] lg:w-[148px] h-[120px] sm:h-[130px] lg:h-[148px] rounded-full object-cover"
              src="/images/profile-photo.jpg"
              alt="В'ячеслав Джеджула"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            
            {/* Profile Info */}
            <div className="w-full flex flex-col justify-start items-center gap-2">
              <motion.div 
                className="w-full text-center text-[#201818] text-base sm:text-lg font-bold font-['Inter'] leading-6 sm:leading-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                В'ячеслав Джеджула
              </motion.div>
              
              <motion.div 
                className="w-full text-center text-[#8a8a8a] text-xs sm:text-sm font-medium font-['Inter'] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Головний інженер ТОВ "Ватіс", провідний інженер-проєктувальник, енергоаудитор, стипендіат Президента України і Кабінету Міністрів України, професор Вінницького національного технічного університету
              </motion.div>
            </div>
          </motion.div>

          {/* Quote Icons */}
          <motion.div 
            className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl sm:text-3xl font-bold text-[#FF7171]">«</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#FF7171]">»</span>
          </motion.div>

          {/* Quote Text */}
          <motion.div 
            className="w-full text-center text-[#201818] text-lg sm:text-xl lg:text-2xl font-medium font-['Inter'] leading-6 sm:leading-7 lg:leading-9"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Протягом майже 20 років ми дотримуємося принципів якості, інновацій і відповідальності. Сьогодні "Ватіс" — це команда фахівців, що виконує повний цикл робіт: від проєктування до впровадження енергоефективних рішень. Ми застосовуємо BIM-технології, штучний інтелект та сучасні наукові досягнення, постійно вдосконалюючи підходи до створення комфортного мікроклімату.
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Quote