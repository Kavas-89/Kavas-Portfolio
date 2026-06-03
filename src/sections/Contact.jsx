import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id='contact' className='py-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Get In Touch</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
          <p className='text-slate-400 mt-4 max-w-2xl mx-auto'>
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold mb-8'>Contact Information</h3>
            
            <div className='space-y-6'>
              <div className='flex items-start gap-4 p-4 glass rounded-xl glass-hover'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0'>
                  <FiMail className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h4 className='font-bold mb-1'>Email</h4>
                  <p className='text-slate-400'>kavasvadivel11@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4 p-4 glass rounded-xl glass-hover'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0'>
                  <FiPhone className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h4 className='font-bold mb-1'>Phone</h4>
                  <p className='text-slate-400'>+91 89217 93054</p>
                </div>
              </div>

              <div className='flex items-start gap-4 p-4 glass rounded-xl glass-hover'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0'>
                  <FiMapPin className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h4 className='font-bold mb-1'>Location</h4>
                  <p className='text-slate-400'>Palakkad, Kerala, India</p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <a
                href='https://wa.me/918921793054'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors'
              >
                <FaWhatsapp className='w-5 h-5' />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='glass rounded-2xl p-8'>
              {submitted ? (
                <div className='text-center py-12'>
                  <FiCheckCircle className='w-20 h-20 text-green-500 mx-auto mb-4' />
                  <h3 className='text-2xl font-bold mb-2'>Message Sent!</h3>
                  <p className='text-slate-400'>Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label className='block text-sm font-semibold mb-2'>Name</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors'
                      placeholder='Your name'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-semibold mb-2'>Email</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors'
                      placeholder='your@email.com'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-semibold mb-2'>Message</label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows='5'
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none'
                      placeholder='Tell me about your project...'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity'
                  >
                    <FiSend />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
