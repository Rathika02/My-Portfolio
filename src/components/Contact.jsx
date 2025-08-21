import React from 'react'
import { PiEnvelopeBold, PiGithubLogoBold, PiLinkedinLogoBold } from 'react-icons/pi'
const Contact = () => (
  <section id="contact" className="py-20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">Let’s Connect</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">I’m open to internships, entry‑level roles, and collaboration.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href="mailto:rathikashamili@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 shadow-card"><PiEnvelopeBold /> Email</a>
        <a href="https://www.linkedin.com/in/rathika-goapalakrishanan-040430269/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-500 shadow-card"><PiLinkedinLogoBold /> LinkedIn</a>
        <a href="https://github.com/Rathika02" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 shadow-card"><PiGithubLogoBold /> GitHub</a>
      </div>
    </div>
  </section>
)
export default Contact
