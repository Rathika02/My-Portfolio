import React from 'react'
import { motion } from 'framer-motion'
import { PiGithubLogoBold, PiLinkBold } from 'react-icons/pi'
const projects = [
  { title:'YumBook', desc:'A recipe sharing platform with auth, explore, and add recipe features. Built with React + Tailwind.', tags:['React','Tailwind','Auth'], link:'#', repo:'https://github.com/Rathika02/Yumbook' },
  { title:'Diabetes Support System', desc:'Web-based system for patients and doctors to track health data and recommendations.', tags:['React','Node','MongoDB'], link:'#', repo:'#' },
  { title:'TB Detection (Research)', desc:'Multi‑modal deep learning: cough audio (MFCC+CNN) + chest X‑ray (ResNet).', tags:['Python','DL','Healthcare AI'], link:'#', repo:'#' }
]
const Chip = ({children}) => (<span className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800">{children}</span>)
const Card = ({p,i}) => (
  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4, delay:i*.1}}
    className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-card hover:-translate-y-1 hover:shadow-xl transition">
    <h3 className="text-xl font-semibold">{p.title}</h3>
    <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t => <Chip key={t}>{t}</Chip>)}</div>
    <div className="mt-6 flex items-center gap-3">
      {p.link !== '#' && <a href={p.link} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"><PiLinkBold /> Live</a>}
      {p.repo !== '#' && <a href={p.repo} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition"><PiGithubLogoBold /> Code</a>}
    </div>
  </motion.div>
)
const Projects = () => (
  <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950/40">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">Projects</h2>
      <p className="mt-3 text-center text-slate-600 dark:text-slate-300">Some things I’ve been working on recently.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p,i)=><Card key={p.title} p={p} i={i} />)}
      </div>
    </div>
  </section>
)
export default Projects
