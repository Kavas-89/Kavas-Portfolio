import { motion } from 'framer-motion'
import { FiMonitor, FiServer, FiDatabase, FiSmartphone, FiZap, FiShield } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks for exceptional performance.',
      icon: FiMonitor
    },
    {
      title: 'Backend Development',
      description: 'Scalable APIs and server-side solutions using Java, Spring Boot, and Node.js.',
      icon: FiServer
    },
    {
      title: 'Database Design',
      description: 'Efficient database architecture with MySQL and MongoDB for optimal performance.',
      icon: FiDatabase
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first, fully responsive designs that work beautifully on all devices.',
      icon: FiSmartphone
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your application with performance tuning and best practices.',
      icon: FiZap
    },
    {
      title: 'Security & Testing',
      description: 'Secure your application with robust testing and security implementations.',
      icon: FiShield
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
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Services</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
          <p className='text-slate-400 mt-4 max-w-2xl mx-auto'>
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className='glass rounded-2xl p-8 glass-hover'
              >
                <div className='w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6'>
                  <Icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-4'>{service.title}</h3>
                <p className='text-slate-400'>{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
