import React from 'react';
import SEO from '../components/SEO';

export default function Products() {
  return (
    <main>
      <SEO 
        title="Our Products | ERP, AI Surveillance, Healthcare Platforms" 
        description="Explore our suite of enterprise software, including OWL AI Surveillance, Secure Link, and advanced Healthcare Platforms." 
        canonicalUrl="/products" 
      />
      <style>{`
        /* ── HERO ── */
        .prod-hero-fix {
          min-height: 400px !important;
          padding: 180px 0 100px !important;
          display: flex !important;
          align-items: center !important;
        }
        .prod-hero-text-orange {
          color: #d34e03 !important;
          -webkit-text-fill-color: #d34e03 !important;
        }

        /* ── SHARED ── */
        .prod-sub-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #d34e03;
          background: rgba(211,78,3,0.08);
          padding: 6px 16px;
          border-radius: 50px;
          border: 1px solid rgba(211,78,3,0.2);
          margin-bottom: 18px;
        }
        .prod-section-intro {
          padding: 90px 0 70px;
          background: #fff;
        }
        .prod-dark-section {
          background: #0d1b2a;
          padding: 90px 0 100px;
          position: relative;
          overflow: hidden;
        }
        .prod-dark-section::before {
          content: '';
          position: absolute;
          top: -100px; left: -100px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(211,78,3,0.10) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }
        .prod-dark-section::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 300px;          background: radial-gradient(circle, rgba(211,78,3,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .prod-intro-box {
          background: #fff;
          border: 1px solid #eef0f5;
          border-radius: 24px;
          padding: 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(13,27,42,0.09);
          display: flex;
          flex-direction: column;
        }
        /* Orange top accent bar */
        .prod-intro-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #d34e03, #ff8c47, #d34e03);
          z-index: 2;
        }
        /* Radial glow top-right */
        .prod-intro-box::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(211,78,3,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .prod-intro-inner { padding: 52px 48px; }
        .prod-intro-box h2 {
          font-size: 36px;
          font-weight: 900;
          color: #0d1b2a;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .prod-intro-box h2 span { color: #d34e03; }
        .prod-intro-box .prod-tagline {
          font-size: 14px;
          font-style: italic;
          color: #d34e03;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: 0.4px;
        }
        .prod-intro-box p {
          font-size: 15px;
          line-height: 1.9;
          color: #5a6a7a;
          margin-bottom: 14px;
        }
        /* Animated feature check-list */
        .prod-feature-list { list-style: none; padding: 0; margin: 20px 0 0; display: flex; flex-direction: column; gap: 0; }
        .prod-feature-list li {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          margin-bottom: 8px;
          background: #f8f9fc;
          border: 1px solid #eef0f5;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #0d1b2a;
          transition: all 0.25s;
        }
        .prod-feature-list li:hover {
          border-color: #d34e03;
          background: rgba(211,78,3,0.04);
          color: #d34e03;
          transform: translateX(4px);
        }
        .prod-feature-list li .prod-fi {
          width: 40px; height: 40px; min-width: 40px;
          background: linear-gradient(135deg, rgba(211,78,3,0.14), rgba(211,78,3,0.06));
          border: 1px solid rgba(211,78,3,0.25);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #d34e03;
          font-size: 16px;
          transition: all 0.25s;
        }
        .prod-feature-list li:hover .prod-fi {
          background: #d34e03;
          color: #fff;
          border-color: #d34e03;
        }
          display: flex; align-items: center; justify-content: center;
          color: #d34e03;
          font-size: 18px;
        }
        .prod-img-frame {
          position: relative;
          border-radius: 18px;
        }
        .prod-img-frame-inner {
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(211,78,3,0.15);
          box-shadow: 0 24px 70px rgba(13,27,42,0.15), 0 0 0 6px rgba(211,78,3,0.05);
        }
        .prod-img-frame-inner img {
          width: 100%;
          border-radius: 14px;
          display: block;
          object-fit: cover;
        }
        .prod-img-frame-inner img + img {
          margin-top: 10px;
        }
        .prod-img-caption {
          text-align: center;
          font-size: 13px;
          color: #7a8a9a;
          margin-top: 12px;
          font-style: italic;
        }
        .prod-corner-deco {
          position: absolute;
          top: -16px; right: -16px;
          width: 70px; height: 70px;
          border: 3px solid #d34e03;
          border-radius: 12px;
          opacity: 0.2;
          pointer-events: none;
        }

        /* ── CAPABILITY CARDS (2x2 grid) ── */
        .prod-cap-card {
          background: #fff;
          border: 1px solid #eef0f5;
          border-radius: 18px;
          padding: 32px 28px;
          height: 100%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .prod-cap-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #d34e03, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .prod-cap-card:hover { box-shadow: 0 16px 50px rgba(0,0,0,0.09); transform: translateY(-5px); }
        .prod-cap-card:hover::before { transform: scaleX(1); }
        .prod-cap-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f0f0f5;
        }
        .prod-cap-icon {
          width: 54px; height: 54px; min-width: 54px;
          background: linear-gradient(135deg, rgba(211,78,3,0.15), rgba(211,78,3,0.06));
          border: 1px solid rgba(211,78,3,0.2);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: #d34e03; font-size: 22px;
          transition: all 0.3s;
        }
        .prod-cap-card:hover .prod-cap-icon {
          background: #d34e03;
          color: #fff;
          box-shadow: 0 8px 24px rgba(211,78,3,0.35);
        }
        .prod-cap-header h4 {
          font-size: 17px;
          font-weight: 800;
          color: #0d1b2a;
          margin: 0;
        }
        .prod-cap-list { list-style: none; padding: 0; margin: 0; }
        .prod-cap-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #5a6a7a;
          line-height: 1.6;
          padding: 6px 0;
        }
        .prod-cap-list li i { color: #d34e03; font-size: 12px; margin-top: 4px; }

        /* ── LIGHT CAPABILITY SECTION ── */
        .prod-grey-section {
          background: #f4f5f8;
          padding: 100px 0 120px;
          position: relative;
          overflow: hidden;
        }
        .prod-grey-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(211,78,3,0.06) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }
        .prod-cap-card-dark {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          padding: 32px 28px;
          height: 100%;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .prod-cap-card-dark:hover {
          background: rgba(255,255,255,0.07);
          transform: translateY(-5px);
          box-shadow: 0 20px 55px rgba(0,0,0,0.3);
        }
        .prod-cap-card-dark::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #d34e03, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s;
        }
        .prod-cap-card-dark:hover::before { transform: scaleX(1); }
        .prod-cap-card-dark .prod-cap-header { border-color: rgba(255,255,255,0.08); }
        .prod-cap-card-dark .prod-cap-header h4 { color: #fff; }
        .prod-cap-card-dark .prod-cap-list li { color: rgba(255,255,255,0.6); }

        /* ── PCMS NUMBERED FEATURES ── */
        .prod-num-card {
          background: #fff;
          border: 1px solid #eef0f5;
          border-radius: 14px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 18px;
          height: 100%;
          transition: all 0.3s;
        }
        .prod-num-card:hover {
          border-color: #d34e03;
          box-shadow: 0 12px 36px rgba(211,78,3,0.1);
          transform: translateY(-3px);
        }
        .prod-num-badge {
          width: 50px; height: 50px; min-width: 50px;
          background: #0d1b2a;
          color: #d34e03;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px;
          font-weight: 900;
          transition: all 0.3s;
        }
        .prod-num-card:hover .prod-num-badge {
          background: #d34e03;
          color: #fff;
        }
        .prod-num-card span {
          font-size: 14px;
          font-weight: 600;
          color: #0d1b2a;
          line-height: 1.4;
        }

        /* ── SECTION TITLE OVERRIDES ── */
        .prod-dark-section .sec-title--two .sub-title,
        .prod-dark-section .sec-title--two .title { color: #fff; }
        .prod-dark-section .sec-title--two .sub-title { color: #d34e03; }

        /* ── CTA ── */
        .prod-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #eef0f5, transparent);
          margin: 0;
        }
      `}</style>

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="hero hero-style-one page-title pos-rel bg_img prod-hero-fix"
        data-background="/assets/img/bg/hero-bg01.jpg"
        style={{ backgroundImage: 'url(/assets/img/bg/hero-bg01.jpg)' }}>
        <div className="hero-shape">
          <div className="shape shape--one bg_img"
            data-background="/assets/img/shape/hero-glassisom.png"
            style={{ backgroundImage: 'url(/assets/img/shape/hero-glassisom.png)' }}></div>
          <div className="shape shape--two"><img src="/assets/img/shape/hero-shape01.png" alt="" /></div>
          <div className="shape shape--three"><img src="/assets/img/shape/hero-shape04.png" alt="" /></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="sub-title prod-hero-text-orange" style={{ fontWeight: '700', letterSpacing: '1px' }}>
                <i className="far fa-circle-dot me-2"></i> Our Products
              </span>
              <h1 className="title text-white mt-3" style={{ fontSize: '46px', fontWeight: '900', lineHeight: '1.15' }}>
                Next-Generation AI &amp; Enterprise <span className="prod-hero-text-orange">Platforms</span>
              </h1>
              <p className="text-white mt-3" style={{ opacity: 0.75, fontSize: '16px', maxWidth: '580px' }}>
                From AI-powered surveillance to intelligence correlation and healthcare automation — Ehnovate engineers end-to-end platforms for institutions that cannot afford to be slow.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="d-flex gap-4 justify-content-lg-end">
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: '#fff', fontWeight: '900', fontSize: '40px', WebkitTextFillColor: 'white', margin: 0 }}>
                    3<span style={{ color: '#d34e03', WebkitTextFillColor: '#d34e03' }}>+</span>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>AI Platforms</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: '#fff', fontWeight: '900', fontSize: '40px', WebkitTextFillColor: 'white', margin: 0 }}>
                    6<span style={{ color: '#d34e03', WebkitTextFillColor: '#d34e03' }}>+</span>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>Industries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ PRODUCT 01 — OWL-AI INTRO ══════════════════ */}
      <section style={{ background: '#f4f5f8', padding: '80px 0 50px' }}>
        <div className="container">
          {/* Product heading strip */}
          <div style={{
            background: '#0d1b2a',
            borderRadius: '16px 16px 0 0',
            padding: '18px 40px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
            <span style={{ color: '#d34e03', fontWeight: '700', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              <i className="far fa-circle-dot me-2"></i>Flagship Product 01
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>OWL-AI SURVEILLANCE</span>
          </div>
          <div className="prod-intro-box">
            <div className="prod-intro-inner">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 wow fadeInLeft" data-wow-duration="700ms">
                  <h2>OWL-AI <span>Surveillance</span></h2>
                  <p className="prod-tagline">AI-Powered Real-Time Monitoring &amp; Security Platform</p>
                  <p>
                    OWL-AI is an AI-powered real-time surveillance and communication platform designed to detect, classify and respond to security threats instantly — transforming passive monitoring into proactive intelligence.
                  </p>
                  <ul className="prod-feature-list">
                    <li><span className="prod-fi"><i className="far fa-eye"></i></span>Computer Vision</li>
                    <li><span className="prod-fi"><i className="far fa-microchip"></i></span>AI-Based Threat Detection</li>
                    <li><span className="prod-fi"><i className="far fa-comments"></i></span>Real-Time Communication</li>
                    <li><span className="prod-fi"><i className="far fa-mobile-alt"></i></span>Smart Device Integration</li>
                  </ul>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-duration="700ms">
                  <div className="prod-img-frame">
                    <div className="prod-corner-deco"></div>
                    <div className="prod-img-frame-inner">
                      <img src="/assets/img/project/owl-main.png" alt="OWL-AI Live Command Dashboard" />
                    </div>
                    <p className="prod-img-caption">Live command dashboard &amp; field officer app</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ OWL-AI CAPABILITIES (dark) ══════════════════ */}
      <section className="prod-dark-section" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="sec-title--two text-center mb-60">
            <div className="sub-title" style={{ color: '#d34e03' }}><img src="/assets/img/icon/eye-icon.svg" alt="" /> OWL-AI · Core Capabilities</div>
            <h2 className="title" style={{ color: '#fff' }}>From Passive Footage to <span style={{ color: '#d34e03' }}>Proactive Response</span></h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
              <div className="prod-cap-card-dark">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="far fa-video"></i></div>
                  <h4>Real-Time AI Detection</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="far fa-circle-dot"></i>Weapon recognition</li>
                  <li><i className="far fa-circle-dot"></i>Suspicious behaviour detection</li>
                  <li><i className="far fa-circle-dot"></i>Missing person identification</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
              <div className="prod-cap-card-dark">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="far fa-layer-group"></i></div>
                  <h4>Intelligent Classification</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="far fa-circle-dot"></i>Automatic threat severity labelling</li>
                  <li><i className="far fa-circle-dot"></i>Rule-based escalation logic</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
              <div className="prod-cap-card-dark">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="far fa-bell"></i></div>
                  <h4>Instant Alert System</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="far fa-circle-dot"></i>Push notifications to responders</li>
                  <li><i className="far fa-circle-dot"></i>On-device alarm trigger</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
              <div className="prod-cap-card-dark">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="far fa-comment-dots"></i></div>
                  <h4>Communication Hub</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="far fa-circle-dot"></i>Real-time one-to-one chat</li>
                  <li><i className="far fa-circle-dot"></i>Group coordination channels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ PRODUCT 02 — SECURE-LINK INTRO ══════════════════ */}
      <section style={{ background: '#f4f5f8', padding: '80px 0 50px' }}>
        <div className="container">
          <div style={{
            background: '#0d1b2a',
            borderRadius: '16px 16px 0 0',
            padding: '18px 40px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
            <span style={{ color: '#d34e03', fontWeight: '700', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              <i className="far fa-circle-dot me-2"></i>Flagship Product 02
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>SECURE-LINK INTELLIGENCE PLATFORM</span>
          </div>
          <div className="prod-intro-box">
            <div className="prod-intro-inner">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 wow fadeInLeft" data-wow-duration="700ms">
                  <h2>Secure-Link <span>Intelligence</span> Platform</h2>
                  <p className="prod-tagline">Comprehensive Intelligence &amp; Data Correlation Solution</p>
                  <p>
                    Secure-Link unifies fragmented records into one intelligence network — helping analysts and investigators uncover hidden relationships, verify identities, and act on a single, trusted source of truth.
                  </p>
                  <p style={{ fontWeight: '700', color: '#0d1b2a', marginBottom: '10px', fontSize: '14px' }}>Core Data Management — Four Record Types</p>
                  <ul className="prod-feature-list">
                    <li><span className="prod-fi"><i className="far fa-user"></i></span><span><strong>Index (Individuals)</strong> — PII, IDs, family links, financials, contacts, photos</span></li>
                    <li><span className="prod-fi"><i className="far fa-user-secret"></i></span><span><strong>Agents (Operatives)</strong> — Clearance, handlers, operational history, risk</span></li>
                    <li><span className="prod-fi"><i className="far fa-sitemap"></i></span><span><strong>Organisations</strong> — Hierarchy, leadership, affiliates, surveillance</span></li>
                    <li><span className="prod-fi"><i className="far fa-folder"></i></span><span><strong>Dossiers (Case Files)</strong> — Criminal history, assets, vehicles, threats</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-duration="700ms">
                  <div className="prod-img-frame">
                    <div className="prod-corner-deco"></div>
                    <div className="prod-img-frame-inner">
                      <img src="/assets/img/project/img02.png" alt="Secure-Link Import Record" />
                      <img src="/assets/img/project/img03.png" alt="Secure-Link Intelligence Reports" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ SECURE-LINK CAPABILITIES (light) ══════════════════ */}
      <section className="prod-grey-section">
        <div className="container">
          <div className="sec-title--two text-center mb-60">
            <div className="sub-title"><img src="/assets/img/icon/eye-icon.svg" alt="" /> Secure-Link · Capabilities</div>
            <h2 className="title">Correlation, Recognition &amp; <span style={{ color: '#d34e03' }}>Ironclad Security</span></h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
              <div className="prod-cap-card">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="fas fa-link"></i></div>
                  <h4>Intelligent Linking &amp; Correlation</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="fas fa-circle-dot"></i>Automated hidden-relationship discovery</li>
                  <li><i className="fas fa-circle-dot"></i>Three parallel engines: exact, fuzzy, phonetic</li>
                  <li><i className="fas fa-circle-dot"></i>Analyst validation with confidence scoring</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
              <div className="prod-cap-card">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="fas fa-id-card"></i></div>
                  <h4>Face Recognition &amp; Biometric Search</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="fas fa-circle-dot"></i>Offline face-recognition pipeline</li>
                  <li><i className="fas fa-circle-dot"></i>Ranked match retrieval on image upload</li>
                  <li><i className="fas fa-circle-dot"></i>No external dependency for secure sites</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
              <div className="prod-cap-card">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="fas fa-project-diagram"></i></div>
                  <h4>Network Visualisation</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="fas fa-circle-dot"></i>Interactive relationship graph</li>
                  <li><i className="fas fa-circle-dot"></i>Multi-level connection exploration</li>
                  <li><i className="fas fa-circle-dot"></i>Full drill-down intelligence navigation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
              <div className="prod-cap-card">
                <div className="prod-cap-header">
                  <div className="prod-cap-icon"><i className="fas fa-shield-alt"></i></div>
                  <h4>Advanced Security Architecture</h4>
                </div>
                <ul className="prod-cap-list">
                  <li><i className="fas fa-circle-dot"></i>Hardware-bound authentication (BIOS + MAC + GUID)</li>
                  <li><i className="fas fa-circle-dot"></i>Role-based access: SuperAdmin / Data Manager / Viewer</li>
                  <li><i className="fas fa-circle-dot"></i>Real-time PII masking &amp; immutable audit trail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ PRODUCT 03 — PCMS ══════════════════ */}
      <section className="prod-dark-section" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="row align-items-center mb-60">
            <div className="col-lg-8">
              <span className="prod-sub-label"><i className="far fa-circle-dot"></i> Expanding the Portfolio</span>
              <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#fff', marginBottom: '12px' }}>
                Preventive Care Management System <span style={{ color: '#d34e03' }}>(PCMS)</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: '1.8', maxWidth: '640px' }}>
                A comprehensive healthcare automation platform combining smart device integration, AI-verified patient management, and affordable medical equipment solutions for hospitals and clinics.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="xb-btn mt-3">
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
          </div>
          <div className="row g-3">
            {[
              { n: '01', t: 'Bluetooth height & weight devices' },
              { n: '02', t: 'Long battery life' },
              { n: '03', t: 'End-to-end automation' },
              { n: '04', t: 'Offline capability' },
              { n: '05', t: 'Face-verification auth' },
              { n: '06', t: 'Medical Equipment & Healthcare' },
              { n: '07', t: 'Refurbished MRI, CT, Cathlab' },
              { n: '08', t: '30–50% lower cost' },
              { n: '09', t: 'OEM-equivalent warranty' },
              { n: '10', t: 'Remote diagnostics' },
              { n: '11', t: 'Flexible financing' },
            ].map((item) => (
              <div key={item.n} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="50ms" data-wow-duration="500ms">
                <div className="prod-num-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <div className="prod-num-badge" style={{ background: 'rgba(211,78,3,0.15)', color: '#d34e03', border: '1px solid rgba(211,78,3,0.3)' }}>{item.n}</div>
                  <span style={{ color: '#fff' }}>{item.t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="cta" style={{ marginTop: '60px' }}>
        <div className="container">
          <div className="cta-wrap">
            <div className="cta-inner ul_li_between">
              <div className="xb-item--holder wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="600ms">
                <h2 className="xb-item--title">Ready to deploy Ehnovate's intelligence platforms in your institution?</h2>
                <span className="xb-item--content">Book a Demo and see OWL-AI, Secure-Link, or PCMS in action.</span>
                <div className="xb-btn mt-45">
                  <a href="/contact" className="thm-btn thm-btn--fill_icon">
                    <div className="xb-item--hidden-text"><span className="text">Book a Demo</span></div>
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
