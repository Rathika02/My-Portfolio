import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'
const NavItem = ({href, children}) => (
  <a href={href} className="link-underline font-medium hover:text-fuchsia-500 transition-colors">{children}</a>
)
const Navbar = () => (
  <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/60 backdrop-blur border-b border-slate-200/60 dark:border-slate-800">
    <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#" className="text-xl sm:text-2xl font-bold gradient-text">Rathika G</a>
      <div className="flex items-center gap-6">
        <NavItem href="#about">About</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
        <ThemeToggle />
      </div>
    </nav>
  </header>
)
export default Navbar
