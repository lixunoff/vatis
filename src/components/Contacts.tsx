'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import React from 'react'

const Contacts: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert('Будь ласка, заповніть обов&apos;язкові поля: ім&apos;я та телефон')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        alert('✅ Повідомлення успішно відправлено! Ми зв&apos;яжемося з вами найближчим часом.')
        
        // Очищення форми
        setFormData({
          name: '',
          company: '',
          phone: '',
          message: ''
        })
      } else {
        alert(`❌ ${data.error || 'Помилка відправки повідомлення'}`)
      }
    } catch (error) {
      console.error('Помилка відправки:', error)
      alert('❌ Помилка з&apos;єднання. Спробуйте ще раз або зв&apos;яжіться з нами за телефоном.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-20 lg:py-40 bg-white">
      <div className="w-full max-w-[894px] mx-auto flex flex-col justify-start items-start gap-12 sm:gap-16 lg:gap-20">
        
        <div className="w-full flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full text-[#201818] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-['Inter'] leading-tight lg:leading-[48px]"
          >
            Контактна інформація
          </motion.h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-6 sm:gap-8 lg:gap-10 lg:h-[600px]">
          
          <div className="flex-1 flex flex-col">
            <motion.div 
              className="w-full h-full rounded-2xl sm:rounded-3xl flex flex-col p-6 sm:p-8 bg-[#f5f5f5]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-full text-black text-base sm:text-lg font-bold font-['Inter'] leading-6 sm:leading-[27px]">
                  Форма зворотнього зв'язку
                </div>
                <div className="w-full text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-6 lg:leading-[27px]">
                  Зв'яжіться з нами вже сьогодні — і отримаєте професійне рішення для вашого об'єкта!
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-6 flex-1">
                <input
                  type="text"
                  name="name"
                  value={mounted ? formData.name : ''}
                  onChange={handleInputChange}
                  placeholder="Ваше ім'я"
                  className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-white rounded-2xl sm:rounded-[28px] border border-black/20 text-sm sm:text-base font-normal font-['Inter'] placeholder:text-[#8b8b8b] focus:outline-none focus:border-[#183ae4] transition-colors"
                />
                
                <input
                  type="text"
                  name="company"
                  value={mounted ? formData.company : ''}
                  onChange={handleInputChange}
                  placeholder="Назва компанії"
                  className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-white rounded-2xl sm:rounded-[28px] border border-black/20 text-sm sm:text-base font-normal font-['Inter'] placeholder:text-[#8b8b8b] focus:outline-none focus:border-[#183ae4] transition-colors"
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={mounted ? formData.phone : ''}
                  onChange={handleInputChange}
                  placeholder="Номер телефону"
                  className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-white rounded-2xl sm:rounded-[28px] border border-black/20 text-sm sm:text-base font-normal font-['Inter'] placeholder:text-[#8b8b8b] focus:outline-none focus:border-[#183ae4] transition-colors"
                />
                
                <textarea
                  name="message"
                  value={mounted ? formData.message : ''}
                  onChange={handleInputChange}
                  placeholder="Що вас цікавить?"
                  className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-white rounded-2xl sm:rounded-[28px] border border-black/20 text-sm sm:text-base font-normal font-['Inter'] placeholder:text-[#8b8b8b] focus:outline-none focus:border-[#183ae4] transition-colors resize-none flex-1 overflow-y-auto"
                />
                
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-[18px] rounded-2xl sm:rounded-[28px] flex justify-center items-center gap-2.5 transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#183ae4] hover:bg-[#1b6bff] active:bg-gradient-to-b active:from-[#132fbc] active:to-[#183ae4] hover:shadow-[0px_8px_16px_0px_rgba(24,143,228,0.32),0px_4px_8px_0px_rgba(24,58,228,0.25),0px_12px_20px_0px_rgba(0,195,255,0.25)] active:shadow-none'
                  }`}
                >
                  <span className="text-center text-white text-xs sm:text-sm font-bold font-['Inter'] uppercase leading-tight">
                    {isSubmitting ? 'Відправка...' : 'Відправити'}
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
            <motion.div 
              className="text-black text-base sm:text-lg font-bold font-['Inter'] leading-6 sm:leading-[27px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Віддаєте перевагу прямому спілкуванню?
            </motion.div>
            
            <motion.div 
              className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full flex justify-start items-center gap-2.5">
                <div className="p-2.5 sm:p-3 bg-neutral-100 rounded-lg sm:rounded-xl flex justify-start items-center gap-2.5">
                  <img src="/images/iphone.svg" alt="Mobile phone" className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight">
                    Моб. телефон
                  </div>
                  <div className="text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-6 lg:leading-[27px]">
                    +380 (98) 270 21 06
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-start items-center gap-2.5">
                <div className="p-2.5 sm:p-3 bg-neutral-100 rounded-lg sm:rounded-xl flex justify-start items-center gap-2.5">
                  <img src="/images/deskphone.svg" alt="Desk phone" className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight">
                    Тел. /факс
                  </div>
                  <div className="text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-6 lg:leading-[27px]">
                    +380 (0432) 50 91 07
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-start items-center gap-2.5">
                <div className="p-2.5 sm:p-3 bg-neutral-100 rounded-lg sm:rounded-xl flex justify-start items-center gap-2.5">
                  <img src="/images/mail.svg" alt="Email" className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[#8b8b8b] text-xs sm:text-sm font-medium font-['Inter'] leading-tight">
                    E-mail
                  </div>
                  <div className="text-[#201818] text-sm sm:text-base lg:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-6 lg:leading-[27px]">
                    tovvatis@gmail.com
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full flex-1 lg:flex-1 aspect-square lg:aspect-auto rounded-2xl sm:rounded-3xl relative overflow-hidden min-h-[200px] max-h-[460px] lg:max-h-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.417751023468!2d28.410150876429853!3d49.230568421385016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c5db25fc271%3A0x8e1131336d3fb2ef!2z0KLQntCSICLQktCw0YLRltGBIg!5e0!3m2!1suk!2sua!4v1751372899878!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl sm:rounded-3xl"
              />
              
              {/* Office Info Card поверх карти */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="w-full p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-lg flex justify-start items-start gap-2.5 sm:gap-3">
                  <div className="p-2.5 sm:p-3 bg-neutral-100 rounded-lg sm:rounded-xl flex justify-start items-center gap-2.5">
                    <img src="/images/location.svg" alt="Location" className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start">
                    <div className="text-black text-sm sm:text-base lg:text-lg font-bold font-['Inter'] leading-tight sm:leading-6 lg:leading-[27px]">
                      Відвідайте наш офіс
                    </div>
                    <div className="w-full text-[#201818] text-xs sm:text-sm lg:text-base font-medium font-['Inter'] leading-tight sm:leading-relaxed lg:leading-6">
                      21021, Україна, м. Вінниця, проспект Юності, 8, офіс 16
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts