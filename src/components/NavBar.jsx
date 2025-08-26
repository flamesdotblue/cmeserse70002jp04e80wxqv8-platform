import React from 'react'

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <div className="logo-spark" aria-hidden />
          <span className="brand-name">NovaLedger</span>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#security">Security</a>
          <a href="#docs">Docs</a>
        </nav>
        <div className="nav-cta">
          <button className="btn ghost">Sign in</button>
          <button className="btn primary">Get Started</button>
        </div>
      </div>
    </header>
  )
}
