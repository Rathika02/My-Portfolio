import React from 'react'
import { motion } from 'framer-motion'
import { PiArrowDownBold } from 'react-icons/pi'
const Hero = () => (
  <section id="about" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
    <div className="absolute inset-0 bg-hero-gradient opacity-20 dark:opacity-30"></div>
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">Hi, I’m <span className="gradient-text">Rathika</span> 👋</h1>
      <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">Entry‑level Frontend Developer • React • Tailwind • UI/UX Enthusiast</p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a href="#projects" className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-card transition-transform hover:scale-[1.02]">View My Work</a>
        <a href="#contact" className="px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-card">Contact Me</a>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}} className="mt-16 flex justify-center">
        <PiArrowDownBold className="animate-bounce text-2xl text-slate-500 dark:text-slate-400" />
      </motion.div>
    </motion.div>
  </section>
)
export default Hero
