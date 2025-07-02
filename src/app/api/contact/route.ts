// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, company, phone, message } = await request.json()

    // Валідація
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Ім\'я та телефон є обов\'язковими полями' },
        { status: 400 }
      )
    }

    // Відправка на tovvatis@gmail.com через Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const emailHtml = `
        <h2 style="color: #183ae4;">Нове повідомлення з сайту Ватіс</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <p><strong>👤 Ім'я:</strong> ${name}</p>
          <p><strong>🏢 Компанія:</strong> ${company || 'Не вказано'}</p>
          <p><strong>📞 Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>💬 Повідомлення:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message || 'Без повідомлення'}
          </div>
        </div>
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          📅 Відправлено з сайту: ${new Date().toLocaleString('uk-UA', {
            timeZone: 'Europe/Kiev',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      `

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Сайт Ватіс <onboarding@resend.dev>', // тимчасовий email від Resend
          to: ['tovvatis@gmail.com'],
          subject: `🔔 Нове повідомлення від ${name}`,
          html: emailHtml,
          reply_to: phone ? `${name} <noreply@resend.dev>` : undefined,
        }),
      })

      if (resendResponse.ok) {
        const result = await resendResponse.json()
        console.log('Email успішно відправлено на tovvatis@gmail.com:', result.id)
        
        return NextResponse.json({ 
          success: true, 
          message: 'Повідомлення успішно відправлено на tovvatis@gmail.com' 
        })
      } else {
        const errorData = await resendResponse.json()
        console.error('Resend API Error:', errorData)
        throw new Error('Помилка Resend API')
      }
    } else {
      // Якщо немає API ключа - логуємо в консоль
      console.log('=== НОВЕ ПОВІДОМЛЕННЯ НА tovvatis@gmail.com ===')
      console.log(`Від: ${name}`)
      console.log(`Компанія: ${company || 'Не вказано'}`)
      console.log(`Телефон: ${phone}`)
      console.log(`Повідомлення: ${message || 'Без повідомлення'}`)
      console.log(`Дата: ${new Date().toLocaleString('uk-UA')}`)
      console.log('===========================================')

      return NextResponse.json({ 
        success: true, 
        message: 'Повідомлення зареєстровано (перевірте логи сервера)' 
      })
    }

  } catch (error) {
    console.error('Помилка відправки на tovvatis@gmail.com:', error)
    return NextResponse.json(
      { error: 'Помилка сервера при відправці на tovvatis@gmail.com' },
      { status: 500 }
    )
  }
}