import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiCode } from 'react-icons/fi'

export default function GitHubStats() {
  const stats = [
    { label: 'Repositories', value: '25', icon: FiGithub, color: 'text-primary' },
    { label: 'Stars', value: '150+', icon: FiStar, color: 'text-yellow-400' },
    { label: 'Forks', value: '50+', icon: FiGitBranch, color: 'text-green-400' },
    { label: 'Contributions', value: '500+', icon: FiCode, color: 'text-accent' }
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
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>GitHub Stats</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className='glass rounded-2xl p-8 glass-hover text-center'
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <p className='text-4xl font-bold text-gradient mb-2'>{stat.value}</p>
                <p className='text-slate-400'>{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12 text-center'
        >
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-8 py-3 glass rounded-lg glass-hover'
          >
            <FiGithub className='w-5 h-5' />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
