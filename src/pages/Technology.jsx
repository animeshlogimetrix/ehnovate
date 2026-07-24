import React from 'react';

export default function Technology() {
  return (
    <main>
      <style>{`
        /* ── Hero ── */
        .tech-hero-fix {
          min-height: 400px !important;
          padding: 180px 0 100px !important;
          display: flex !important;
          align-items: center !important;
        }
        .tech-orange { color: #d34e03 !important; -webkit-text-fill-color: #d34e03 !important; }

        /* ── Shared ── */
        .tech-sub-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #d34e03;
          background: rgba(211,78,3,0.08); padding: 6px 16px;
          border-radius: 50px; border: 1px solid rgba(211,78,3,0.2);
          margin-bottom: 18px;
        }

        /* ── Advantage Cards (dark section) ── */
        .tech-advantage {
          background: #0d1b2a;
          padding: 100px 0 110px;
          position: relative; overflow: hidden;
          border-top: 1px solid rgba(211,78,3,0.25);
        }
        .tech-advantage::before {
          content: ''; position: absolute;
          top: -120px; left: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(211,78,3,0.10) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .tech-advantage::after {
          content: ''; position: absolute;
          bottom: -100px; right: -80px;
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(211,78,3,0.07) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .tech-advantage .sec-title--two .sub-title { color: #d34e03; }
        .tech-advantage .sec-title--two .title { color: #fff; }
        .tech-adv-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 36px 30px;
          height: 100%; position: relative; overflow: hidden;
          transition: all 0.35s ease;
        }
        .tech-adv-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #d34e03, transparent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s;
        }
        .tech-adv-card:hover { background: rgba(255,255,255,0.07); transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.3); }
        .tech-adv-card:hover::before { transform: scaleX(1); }
        .tech-adv-icon {
          width: 62px; height: 62px;
          background: linear-gradient(135deg, rgba(211,78,3,0.22), rgba(211,78,3,0.08));
          border: 1px solid rgba(211,78,3,0.35); border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          color: #d34e03; font-size: 24px; margin-bottom: 24px;
          transition: all 0.35s;
        }
        .tech-adv-card:hover .tech-adv-icon { background: #d34e03; color: #fff; box-shadow: 0 8px 24px rgba(211,78,3,0.4); }
        .tech-adv-card h4 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 12px; }
        .tech-adv-card p { font-size: 14px; line-height: 1.8; color: rgba(255,255,255,0.55); margin: 0; }

        /* ── Tech Stack (light section) ── */
        .tech-stack { background: #f4f5f8; padding: 100px 0 110px; }
        .tech-stack-box {
          background: #fff; border: 1px solid #eef0f5;
          border-radius: 24px; padding: 0;
          position: relative; overflow: hidden;
          box-shadow: 0 20px 60px rgba(13,27,42,0.07);
        }
        .tech-stack-header {
          background: #0d1b2a; border-radius: 24px 24px 0 0;
          padding: 18px 40px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .tech-stack-header span:first-child { color: #d34e03; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; }
        .tech-stack-header span:last-child { color: rgba(255,255,255,0.35); font-size: 12px; font-weight: 600; letter-spacing: 1px; }
        .tech-stack-inner { padding: 50px 48px; }
        .tech-layer-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
        .tech-layer-label {
          min-width: 120px; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1px;
          color: #d34e03; padding-top: 10px;
        }
        .tech-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #f8f9fc; border: 1px solid #eef0f5;
          border-radius: 50px; padding: 8px 18px;
          font-size: 13px; font-weight: 600; color: #0d1b2a;
          transition: all 0.2s;
        }
        .tech-pill:hover { border-color: #d34e03; color: #d34e03; background: rgba(211,78,3,0.05); }
        .tech-pill i { color: #d34e03; font-size: 13px; }
        .tech-layer-divider { height: 1px; background: #eef0f5; margin: 4px 0 20px; }

        /* ── Architecture boxes (Premium Light) ── */
        .tech-arch {
          background: linear-gradient(160deg, #f0f4ff 0%, #fff8f4 50%, #f4f8f0 100%);
          padding: 110px 0 120px;
          position: relative; overflow: hidden;
        }
        .tech-arch::before {
          content: ''; position: absolute;
          top: -120px; right: -120px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(211,78,3,0.07) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .tech-arch::after {
          content: ''; position: absolute;
          bottom: -100px; left: -80px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(13,27,42,0.04) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .tech-arch-card {
          background: #fff;
          border: 1px solid rgba(211,78,3,0.12);
          border-radius: 24px;
          padding: 44px 32px 38px;
          height: 100%;
          position: relative; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 20px rgba(13,27,42,0.05);
        }
        .tech-arch-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #d34e03, #ff7c3a, #d34e03);
          background-size: 200% 100%;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
          border-radius: 24px 24px 0 0;
        }
        .tech-arch-card::after {
          content: ''; position: absolute;
          bottom: 0; right: 0;
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(211,78,3,0.05) 0%, transparent 70%);
          border-radius: 50%;
          transition: transform 0.4s ease;
        }
        .tech-arch-card:hover {
          box-shadow: 0 24px 60px rgba(211,78,3,0.15);
          transform: translateY(-8px);
          border-color: rgba(211,78,3,0.3);
        }
        .tech-arch-card:hover::before { transform: scaleX(1); }
        .tech-arch-card:hover::after { transform: scale(2); }
        .tech-arch-step {
          display: inline-flex; align-items: center; justify-content: center;
          width: 56px; height: 56px;
          background: linear-gradient(135deg, rgba(211,78,3,0.12), rgba(211,78,3,0.04));
          border: 1.5px solid rgba(211,78,3,0.25);
          border-radius: 16px;
          margin-bottom: 22px;
          transition: all 0.35s;
        }
        .tech-arch-card:hover .tech-arch-step {
          background: linear-gradient(135deg, #d34e03, #ff7c3a);
          border-color: #d34e03;
          box-shadow: 0 8px 24px rgba(211,78,3,0.35);
        }
        .tech-arch-step i {
          font-size: 22px; color: #d34e03;
          transition: color 0.35s;
        }
        .tech-arch-card:hover .tech-arch-step i { color: #fff; }
        .tech-arch-num {
          position: absolute; top: 20px; right: 24px;
          font-size: 52px; font-weight: 900; line-height: 1;
          color: rgba(211,78,3,0.08);
          transition: color 0.35s; user-select: none;
          font-family: 'Georgia', serif;
        }
        .tech-arch-card:hover .tech-arch-num { color: rgba(211,78,3,0.14); }
        .tech-arch-card h4 {
          font-size: 19px; font-weight: 800; color: #0d1b2a;
          margin-bottom: 14px; line-height: 1.3;
        }
        .tech-arch-card p {
          font-size: 14px; line-height: 1.85; color: #5a6a7a;
          margin: 0;
        }
        .tech-arch-tag {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 22px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #d34e03;
          opacity: 0.7; transition: opacity 0.3s;
        }
        .tech-arch-card:hover .tech-arch-tag { opacity: 1; }
        .tech-arch-tag::before {
          content: ''; display: block;
          width: 18px; height: 2px;
          background: #d34e03; border-radius: 2px;
        }

        /* ── Designed Whitespace Section ── */
        .tech-whitespace-sec {
          background: #ffffff;
          padding: 55px 0;
          position: relative;
          border-top: 1px solid #eef0f5;
          border-bottom: 1px solid #eef0f5;
        }
        .tech-divider-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0d1b2a;
          box-shadow: 0 4px 15px rgba(13,27,42,0.03);
          transition: all 0.35s ease;
        }
        .tech-divider-pill:hover {
          border-color: #d34e03;
          color: #d34e03;
          background: rgba(211,78,3,0.05);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(211,78,3,0.15);
        }
        .tech-divider-pill i {
          color: #d34e03;
          font-size: 15px;
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        className="hero hero-style-one page-title pos-rel bg_img tech-hero-fix"
        data-background="/assets/img/bg/hero-bg01.jpg"
        style={{ backgroundImage: 'url(/assets/img/bg/hero-bg01.jpg)' }}>
        <div className="hero-shape">
          <div className="shape shape--one bg_img" data-background="/assets/img/shape/hero-glassisom.png"
            style={{ backgroundImage: 'url(/assets/img/shape/hero-glassisom.png)' }}></div>
          <div className="shape shape--two"><img src="/assets/img/shape/hero-shape01.png" alt="" /></div>
          <div className="shape shape--three"><img src="/assets/img/shape/hero-shape04.png" alt="" /></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="sub-title tech-orange" style={{ fontWeight: '700', letterSpacing: '1px' }}>
                <i className="far fa-circle-dot me-2"></i> Technology
              </span>
              <h1 className="title text-white mt-3" style={{ fontSize: '46px', fontWeight: '900', lineHeight: '1.15' }}>
                Built for Speed, Scale &amp; <span className="tech-orange">Intelligence</span>
              </h1>
              <p className="text-white mt-3" style={{ opacity: 0.75, fontSize: '16px', maxWidth: '580px' }}>
                Ehnovate's technology stack powers real-time AI, intelligence correlation, and enterprise automation — all built from the ground up for institutions where every second counts.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="d-flex gap-4 justify-content-lg-end">
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: '#fff', fontWeight: '900', fontSize: '40px', WebkitTextFillColor: 'white', margin: 0 }}>
                    99<span style={{ color: '#d34e03', WebkitTextFillColor: '#d34e03' }}>%</span>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>Uptime SLA</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: '#fff', fontWeight: '900', fontSize: '40px', WebkitTextFillColor: 'white', margin: 0 }}>
                    {'<'}5<span style={{ color: '#d34e03', WebkitTextFillColor: '#d34e03' }}>s</span>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>Threat Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DESIGNED WHITESPACE SECTION ══ */}
      <section className="tech-whitespace-sec">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 text-center">
            <span className="tech-divider-pill"><i className="fas fa-brain"></i> Deep Learning Vision AI</span>
            <span className="tech-divider-pill"><i className="fas fa-shield-alt"></i> Air-Gapped Off-Grid Operation</span>
            <span className="tech-divider-pill"><i className="fas fa-bolt"></i> Real-Time Incident Alerts</span>
            <span className="tech-divider-pill"><i className="fas fa-cubes"></i> Modular Platform Core</span>
          </div>
        </div>
      </section>

      {/* ══ TECHNOLOGY & COMPETITIVE ADVANTAGE ══ */}
      <section className="tech-advantage">
        <div className="container">
          <div className="sec-title--two text-center mb-60">
            <div className="sub-title"><img src="/assets/img/icon/eye-icon.svg" alt="" /> Why Ehnovate</div>
            <h2 className="title">Technology &amp; <span style={{ color: '#d34e03' }}>Competitive Advantage</span></h2>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-bolt', title: 'AI + Communication, Unified', desc: 'Detection and response coordination live in one platform — not stitched-together tools.' },
              { icon: 'fa-mobile', title: 'Smart Wearable Integration', desc: 'Capture directly from mobile devices and smart glasses (Meta AI Glass) for hands-free monitoring.' },
              { icon: 'fa-microchip', title: 'Real-Time Threat Scoring', desc: 'Deep-learning severity scoring turns raw footage into a prioritised action queue.' },
              { icon: 'fa-database', title: 'Scalable Cloud Architecture', desc: 'Built to scale from a single site to nationwide, multi-agency deployments.' },
              { icon: 'fa-globe', title: 'Multilingual by Design', desc: 'English, Hindi and Marathi support with per-user language preferences.' },
              { icon: 'fa-cubes', title: 'Modular & Future-Ready', desc: 'Every module — surveillance, intelligence, ERP — plugs into one extensible core.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 80}ms`} data-wow-duration="600ms">
                <div className="tech-adv-card">
                  <div className="tech-adv-icon"><i className={`fas ${item.icon}`}></i></div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECHNOLOGY STACK ══ */}
      <section className="tech-stack">
        <div className="container">
          <div className="sec-title--two text-center mb-50">
            <div className="sub-title"><img src="/assets/img/icon/eye-icon.svg" alt="" /> Under the Hood</div>
            <h2 className="title">Our <span style={{ color: '#d34e03' }}>Technology Stack</span></h2>
          </div>
          <div className="tech-stack-box">
            <div className="tech-stack-header">
              <span><i className="far fa-circle-dot me-2"></i>Platform Architecture</span>
              <span>EHNOVATE TECH DNA</span>
            </div>
            <div className="tech-stack-inner">
              {[
                { label: 'AI / ML', pills: [['fa-brain','Deep Learning (PyTorch)'], ['fa-eye','Computer Vision'], ['fa-comments','NLP'], ['fa-chart-line','Threat Scoring']] },
                { label: 'Backend', pills: [['fa-server','Node.js'], ['fa-database','PostgreSQL'], ['fa-cube','REST API'], ['fa-lock','JWT Auth']] },
                { label: 'Frontend', pills: [['fa-code','React.js'], ['fa-mobile-alt','Flutter'], ['fa-layer-group','PWA']] },
                { label: 'Infrastructure', pills: [['fa-cloud','AWS / Azure'], ['fa-box','Docker'], ['fa-sync','CI/CD'], ['fa-shield-alt','VPN + Zero Trust']] },
                { label: 'IoT / Edge', pills: [['fa-video','IP Camera Feeds'], ['fa-wifi','BLE Wearables'], ['fa-mobile','Mobile SDK'], ['fa-microchip','Smart Devices']] },
              ].map((row, i) => (
                <div key={i}>
                  <div className="tech-layer-row">
                    <span className="tech-layer-label">{row.label}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {row.pills.map(([icon, name], j) => (
                        <span key={j} className="tech-pill"><i className={`fas ${icon}`}></i>{name}</span>
                      ))}
                    </div>
                  </div>
                  {i < 4 && <div className="tech-layer-divider"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ARCHITECTURE PILLARS ══ */}
      <section className="tech-arch">
        <div className="container">
          <div className="sec-title--two text-center mb-60">
            <div className="sub-title"><img src="/assets/img/icon/eye-icon.svg" alt="" /> Design Principles</div>
            <h2 className="title">How We <span style={{ color: '#d34e03' }}>Build</span></h2>
            <p style={{ color: '#5a6a7a', fontSize: '16px', maxWidth: '560px', margin: '16px auto 0', lineHeight: '1.7' }}>
              Every architectural decision is made with security, scale, and real-world reliability in mind.
            </p>
          </div>
          <div className="row g-4">
            {[
              { n: '01', icon: 'fa-wifi-slash', tag: 'Resilience', t: 'Offline-First', d: 'Core functions operate without internet — critical for field deployments in low-connectivity zones.' },
              { n: '02', icon: 'fa-bolt', tag: 'Performance', t: 'Real-Time by Default', d: 'Every alert, detection, and update is pushed within milliseconds using WebSocket and event-driven design.' },
              { n: '03', icon: 'fa-server', tag: 'Privacy', t: 'Data Sovereignty', d: 'All data stays on-premise by default. No third-party cloud dependency for sensitive government or healthcare data.' },
              { n: '04', icon: 'fa-shield-alt', tag: 'Security', t: 'Zero Trust Security', d: 'Hardware-bound authentication, role isolation, and immutable audit trails at every layer.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i * 80}ms`} data-wow-duration="600ms">
                <div className="tech-arch-card">
                  <div className="tech-arch-num">{item.n}</div>
                  <div className="tech-arch-step"><i className={`fas ${item.icon}`}></i></div>
                  <h4>{item.t}</h4>
                  <p>{item.d}</p>
                  <div className="tech-arch-tag">{item.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="cta" style={{ marginTop: '0' }}>
        <div className="container">
          <div className="cta-wrap">
            <div className="cta-inner ul_li_between">
              <div className="xb-item--holder wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="600ms">
                <h2 className="xb-item--title">Want to see Ehnovate's technology in a live environment?</h2>
                <span className="xb-item--content">Book a technical demo and speak with our engineering team.</span>
                <div className="xb-btn mt-45">
                  <a href="/contact" className="thm-btn thm-btn--fill_icon">
                    <div className="xb-item--hidden"><span className="xb-item--hidden-text">Book a Demo</span></div>
                    <div className="xb-item--holder">
                      <span className="xb-item--text">Book a Demo</span>
                      <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                      <span className="xb-item--text">Book a Demo</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="cta-right_img wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
                <img className="updown" src="/assets/img/cta/clip-bord.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
