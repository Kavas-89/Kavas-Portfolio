import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'Task Management System',
      category: 'Full Stack',
      description: 'A comprehensive task management application with real-time updates and team collaboration features.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      problem: 'Teams struggled with fragmented communication and inefficient task tracking.',
      solution: 'Built a centralized platform with drag-and-drop functionality, real-time notifications, and detailed analytics.',
      results: '50% improvement in team productivity and 30% reduction in project delays.',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Employee Performance Appraisal System',
      category: 'Full Stack',
      description: 'An automated system for managing employee performance reviews and goal setting.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
      problem: 'Manual appraisal processes were time-consuming and prone to errors.',
      solution: 'Created an automated workflow with customizable templates, 360-degree feedback, and performance analytics.',
      results: '80% reduction in appraisal processing time and improved employee engagement.',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Student Mark Management System',
      category: 'Full Stack',
      description: 'Educational platform for managing student grades, transcripts, and academic records.',
      techStack: ['React', 'Node.js', 'MySQL'],
      problem: 'Schools needed an efficient way to manage and analyze student performance data.',
      solution: 'Developed a system with grade entry, report generation, and performance analytics dashboard.',
      results: 'Used by 1000+ students and 50+ faculty members with 99% accuracy in grade calculations.',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Featured Projects</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8' />
          
          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'glass glass-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className='glass rounded-2xl overflow-hidden'
            >
              <div className='h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-b border-white/10'>
                <div className='text-4xl font-bold text-gradient'>{project.title.charAt(0)}</div>
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                    <span className='text-sm text-primary'>{project.category}</span>
                  </div>
                  <div className='flex gap-2'>
                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='p-2 glass rounded-lg glass-hover'>
                      <FiGithub className='w-5 h-5' />
                    </a>
                    <a href={project.live} target='_blank' rel='noopener noreferrer' className='p-2 glass rounded-lg glass-hover'>
                      <FiExternalLink className='w-5 h-5' />
                    </a>
                  </div>
                </div>
                
                <p className='text-slate-400 mb-4'>{project.description}</p>
                
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className='px-3 py-1 bg-white/5 rounded-full text-sm'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='space-y-3 pt-4 border-t border-white/10'>
                  <div>
                    <p className='text-sm font-semibold mb-1 text-accent'>Problem</p>
                    <p className='text-slate-400 text-sm'>{project.problem}</p>
                  </div>
                  <div>
                    <p className='text-sm font-semibold mb-1 text-accent'>Solution</p>
                    <p className='text-slate-400 text-sm'>{project.solution}</p>
                  </div>
                  <div>
                    <p className='text-sm font-semibold mb-1 text-green-400'>Results</p>
                    <p className='text-slate-400 text-sm'>{project.results}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
