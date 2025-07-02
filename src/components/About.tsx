'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-20 lg:py-40">
      <div className="w-full flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-[894px] flex flex-col justify-start items-start gap-20"
        >
          {/* Header Section */}
          <div className="w-full flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full text-[#201818] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-['Inter'] leading-tight lg:leading-[48px]"
            >
              Про компанію
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-[24px] lg:leading-[27px]"
            >
              ТОВ «Ватіс» успішно функціонує з 2005 року і пропонує до вашої уваги широкий спектр товарів та послуг, призначених для спорядження промислових, житлових, громадських, та адміністративних приміщень системами кондиціювання, вентиляції, опалення.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 w-full p-4 sm:p-5 lg:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex flex-col justify-start items-start gap-3"
            >
              <div className="text-[#FF7171] text-3xl sm:text-4xl lg:text-[64px] font-medium font-['Inter'] leading-tight lg:leading-[64px]">
                20+
              </div>
              <div className="text-black text-sm sm:text-base font-normal font-['Inter'] leading-normal">
                років на ринку
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full p-4 sm:p-5 lg:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex flex-col justify-start items-start gap-3"
            >
              <div className="text-[#FF7171] text-3xl sm:text-4xl lg:text-[64px] font-medium font-['Inter'] leading-tight lg:leading-[64px]">
                200+
              </div>
              <div className="text-black text-sm sm:text-base font-normal font-['Inter'] leading-normal">
                виконаних проєктів
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex-1 w-full p-4 sm:p-5 lg:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex flex-col justify-start items-start gap-3"
            >
              <div className="text-[#FF7171] text-3xl sm:text-4xl lg:text-[64px] font-medium font-['Inter'] leading-tight lg:leading-[64px]">
                100+
              </div>
              <div className="text-black text-sm sm:text-base font-normal font-['Inter'] leading-normal">
                працюючих спеціалістів
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}