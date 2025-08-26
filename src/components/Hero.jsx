import React from 'react'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero with 3D center animation">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="eyebrow">Dark. Secure. Effortless.</div>
          <h1>
            The operating system for modern finance
          </h1>
          <p className="lede">
            Real-time insights, global payments, and automated compliance in one platform. Built for scale and fortified for security.
          </p>
          <div className="cta-row">
            <button className="btn primary lg">Start free trial</button>
            <button className="btn outline lg">Book a demo</button>
          </div>
          <div className="trust">
            <div className="pill">SOC 2 Type II</div>
            <div className="pill">PCI DSS</div>
            <div className="pill">ISO 27001</div>
          </div>
        </div>

        <div className="hero-center" aria-hidden>
          <div className="spline-wrap">
            <spline-viewer url="https://prod.spline.design/Sq0CqNP6k5y4y5yU/scene.splinecode"></spline-viewer>
          </div>
          <div className="vignette" />
        </div>

        <div className="hero-right">
          <div className="card metric">
            <div className="metric-label">Monthly Volume</div>
            <div className="metric-value">$18.4M</div>
            <div className="metric-trend up">+12.7%</div>
          </div>
          <div className="card metric">
            <div className="metric-label">Authorization Rate</div>
            <div className="metric-value">99.3%</div>
            <div className="metric-trend up">+0.6%</div>
          </div>
          <div className="card activity">
            <div className="row">
              <span className="dot green" /> Payout sent to EU corridor
            </div>
            <div className="row">
              <span className="dot blue" /> Risk alert resolved
            </div>
            <div className="row">
              <span className="dot purple" /> New settlement received
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
