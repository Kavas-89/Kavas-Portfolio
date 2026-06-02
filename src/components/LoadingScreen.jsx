import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950'
    >
      <div className='text-center'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-lg'
        />
        <h2 className='text-2xl font-bold text-gradient'>KAVAS V</h2>
        <p className='text-slate-400 mt-2'>Loading...</p>
      </div>
    </motion.div>
  )
}
