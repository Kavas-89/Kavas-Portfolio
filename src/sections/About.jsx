import { motion } from 'framer-motion'

export default function About() {
  const achievements = [
    'Reduced project delays by 25% with task management system',
    'Cut appraisal processing time by 35% with automated system',
    'Achieved 99% data accuracy in student record management',
    'Strong foundation in Java, MERN stack, and database management'
  ]

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      university: 'Anna University',
      college: 'Sri Venkateswara College of Computer Applications and Management, Coimbatore',
      year: '2025',
      percentage: '78%'
    },
    {
      degree: 'B.Sc. Computer Science',
      university: 'Bharathiar University',
      college: 'Nallamuthu Gounder Mahalingam College, Pollachi',
      year: '2023',
      percentage: '73%'
    }
  ]

  return (
    <section id='about' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>About Me</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20' />
              <div className='relative glass rounded-3xl p-8'>
                <h3 className='text-2xl font-bold mb-4 text-gradient'>Professional Journey</h3>
                <p className='text-slate-400 mb-6 leading-relaxed'>
                  Software Developer with hands-on experience in Java, MERN stack development, and relational/non-relational databases. 
                  Skilled in building scalable web applications, improving workflow efficiency, and developing user-focused solutions. 
                  Strong foundation in full-stack development, database management, and problem-solving with the ability to collaborate effectively in fast-paced environments.
                </p>
                <p className='text-slate-400 mb-6 leading-relaxed'>
                  Based in Palakkad, Kerala, I'm passionate about turning complex problems into elegant solutions. 
                  My journey in software development is driven by curiosity and a commitment to writing clean, efficient, and maintainable code.
                </p>

                <h4 className='text-xl font-bold mb-4 text-gradient'>Education</h4>
                <div className='space-y-4'>
                  {education.map((edu, index) => (
                    <div key={index} className='p-4 bg-white/5 rounded-xl'>
                      <h5 className='font-bold mb-1'>{edu.degree}</h5>
                      <p className='text-slate-400 text-sm mb-1'>{edu.college}</p>
                      <p className='text-slate-500 text-sm'>{edu.university} | {edu.year} | {edu.percentage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold mb-6'>Key Achievements</h3>
            <div className='space-y-4'>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='flex items-start gap-4 p-4 glass rounded-xl glass-hover'
                >
                  <div className='w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <p className='text-slate-300'>{achievement}</p>
                </motion.div>
              ))}
            </div>

            <h3 className='text-2xl font-bold mb-6 mt-8'>Languages</h3>
            <div className='flex flex-wrap gap-2'>
              {['English', 'Tamil', 'Malayalam'].map((lang, index) => (
                <span key={index} className='px-4 py-2 bg-white/5 rounded-full glass-hover'>
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
