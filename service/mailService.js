const nodemailer = require('nodemailer')

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: to,
      subject: 'Ссылка активации аккаунта',
      html: `
      <h1>Для активации перейдите по ссылке</h1>
      <a href="http://localhost:${process.env.PORT}/api/activate/${link}">http://localhost:${process.env.PORT}/api/activate/${link}</a>`,
    })
  }
}

module.exports = new MailService()
