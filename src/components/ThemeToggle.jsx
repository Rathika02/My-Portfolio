import React, { useEffect, useState } from 'react'
import { PiSunBold, PiMoonBold } from 'react-icons/pi'
const ThemeToggle = () => {
  const [dark, setDark] = useState(false)
  useEffect(() => { setDark(localStorage.getItem('theme') === 'dark') }, [])
  useEffect(() => {
    const root = document.documentElement
    if (dark) { root.classList.add('dark'); localStorage.setItem('theme','dark') }
    else { root.classList.remove('dark'); localStorage.setItem('theme','light') }
  }, [dark])
  return (
    <button aria-label="Toggle theme" onClick={() => setDark(v=>!v)}
      className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 shadow-card border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:scale-105 transition-transform">
      {dark ? <PiSunBold className="text-yellow-400" /> : <PiMoonBold />}
      <span className="hidden sm:inline text-sm">{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
export default ThemeToggle
