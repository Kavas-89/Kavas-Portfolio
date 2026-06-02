import { motion } from 'framer-motion'
import { FiUser, FiMessageSquare } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, Tech Corp',
      content: 'Kavas delivered an exceptional product that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      avatar: 'JS'
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      content: 'Working with Kavas was a pleasure. He understood our requirements perfectly and delivered on time with high quality code.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Brown',
      role: 'CTO, Startup',
      content: 'A talented developer who brings both technical skills and great communication to the table. Highly recommended!',
      avatar: 'MB'
    }
  ]

  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>What People Say</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className='glass rounded-2xl p-8 glass-hover relative'
            >
              <FiMessageSquare className='absolute top-6 right-6 w-8 h-8 text-primary/30' />
              <p className='text-slate-300 mb-6 relative z-10'>"{testimonial.content}"</p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold'>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className='font-bold'>{testimonial.name}</h4>
                  <p className='text-slate-400 text-sm'>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
