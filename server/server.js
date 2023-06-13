import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()

// Configure middleware
app.use(cors())
app.use(express.json())

// Create Nodemailer transport
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.DEV_EMAIL,
    pass: process.env.DEV_EMAIL_PASSWORD,
  },
})

// Verify email transport
contactEmail.verify((error) => {
  if (error) {
    console.log(error + 'contact email verification failed')
  } else {
    console.log('ready to send email')
  }
})

// Define route handlers
app.get('/api/hello-world', (req, res) => {
  res.send('Hello, world!')
})

app.post('/api/contact', (req, res) => {
  const name = req.body.firstName + req.body.lastName
  const email = req.body.email
  const message = req.body.message
  const phone = req.body.phone
  const mail = {
    from: name,
    to: process.env.DEV_EMAIL,
    subject: 'Contact form submission - Portfolio',
    html: `<p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>`,
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error)
    } else {
      res.json({ code: 200, status: 'Message Sent' })
    }
  })
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(
    `API Server is online\nHealth check: http://localhost:${port}/api/hello-world`
  )
})
