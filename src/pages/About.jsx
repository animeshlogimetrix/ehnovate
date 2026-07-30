import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <main>
      <SEO 
        title="About Us | Enterprise Software & AI Experts" 
        description="Learn about Ehnovate Technologies, our vision, mission, and how we build intelligent enterprise software and AI solutions." 
        canonicalUrl="/about" 
      />
        <style>
        {`
        .about-hero-fix {
            min-height: 400px !important;
            padding: 180px 0 100px !important;
            display: flex !important;
            align-items: center !important;
        }
        .about-hero-text-orange {
            color: #d34e03 !important;
            -webkit-text-fill-color: #d34e03 !important;
        }

        /* --- About Intro Section --- */
        .about-intro {
            padding: 80px 0 40px;
            background: #fff;
        }
        .about-intro-box {
            background: #fff;
            border: 1px solid #eef0f5;
            border-radius: 24px;
            padding: 60px 50px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(13,27,42,0.07);
        }
        .about-intro-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #d34e03, #ff7a35, #d34e03);
        }
        .about-intro-box::after {
            content: '';
            position: absolute;
            top: -80px;
            right: -80px;
            width: 260px;
            height: 260px;
            background: radial-gradient(circle, rgba(211,78,3,0.07) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }
        .about-intro .sub-label {
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
            margin-bottom: 22px;
        }
        .about-intro h2 {
            font-size: 38px;
            font-weight: 800;
            line-height: 1.25;
            color: #0d1b2a;
            margin-bottom: 20px;
        }
        .about-intro h2 span {
            color: #d34e03;
        }
        .about-intro p {
            font-size: 15px;
            line-height: 1.9;
            color: #5a6a7a;
            margin-bottom: 16px;
        }
        .about-feature-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 24px 0 32px;
        }
        .about-feature-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 600;
            color: #0d1b2a;
            background: #f8f9fc;
            border: 1px solid #eef0f5;
            padding: 8px 16px;
            border-radius: 50px;
            transition: all 0.2s;
        }
        .about-feature-pill:hover {
            border-color: #d34e03;
            color: #d34e03;
            background: rgba(211,78,3,0.05);
        }
        .about-feature-pill i {
            color: #d34e03;
            font-size: 12px;
        }
        .about-intro-img-wrap {
            position: relative;
            border-radius: 18px;
        }
        .about-intro-img-frame {
            position: relative;
            border-radius: 18px;
            overflow: hidden;
            border: 3px solid rgba(211,78,3,0.15);
            box-shadow: 0 30px 80px rgba(13,27,42,0.15), 0 0 0 8px rgba(211,78,3,0.06);
        }
        .about-intro-img-frame img {
            width: 100%;
            height: 430px;
            object-fit: cover;
            border-radius: 15px;
            display: block;
        }
        .about-intro-img-badge {
            position: absolute;
            bottom: -20px;
            left: 28px;
            background: #d34e03;
            color: #fff;
            padding: 16px 24px;
            border-radius: 14px;
            font-weight: 700;
            font-size: 14px;
            line-height: 1.4;
            box-shadow: 0 15px 40px rgba(211,78,3,0.45);
            z-index: 2;
        }
        .about-intro-img-badge span {
            display: block;
            font-size: 28px;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 2px;
        }
        .about-intro-corner-deco {
            position: absolute;
            top: -16px;
            right: -16px;
            width: 80px;
            height: 80px;
            border: 3px solid #d34e03;
            border-radius: 14px;
            opacity: 0.25;
            pointer-events: none;
        }
            box-shadow: 0 10px 30px rgba(211,78,3,0.4);
        }
        .about-intro-img-badge span {
            display: block;
            font-size: 26px;
            font-weight: 900;
        }

        /* --- Stats Cards --- */
        .about-stats {
            padding: 0 0 90px;
            background: #fff;
        }
        .about-stat-card {
            background: #f8f9fc;
            border: 1px solid #eef0f5;
            border-radius: 16px;
            padding: 30px 24px;
            display: flex;
            align-items: center;
            gap: 18px;
            transition: all 0.3s ease;
            height: 100%;
        }
        .about-stat-card:hover {
            border-color: #d34e03;
            box-shadow: 0 12px 40px rgba(211,78,3,0.12);
            transform: translateY(-4px);
        }
        .about-stat-icon {
            width: 56px;
            height: 56px;
            min-width: 56px;
            background: linear-gradient(135deg, rgba(211,78,3,0.12), rgba(211,78,3,0.06));
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #d34e03;
            font-size: 22px;
        }
        .about-stat-info h3 {
            font-size: 28px;
            font-weight: 900;
            color: #0d1b2a;
            margin: 0 0 4px;
            line-height: 1;
        }
        .about-stat-info p {
            font-size: 13px;
            font-weight: 600;
            color: #7a8a9a;
            margin: 0;
            line-height: 1.3;
        }

        /* --- Values / Pillars Section --- */
        .about-values {
            background: #0d1b2a;
            padding: 110px 0 120px;
            position: relative;
            overflow: hidden;
        }
        .about-values::before {
            content: '';
            position: absolute;
            top: -120px;
            left: -120px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(211,78,3,0.12) 0%, transparent 65%);
            border-radius: 50%;
            pointer-events: none;
        }
        .about-values::after {
            content: '';
            position: absolute;
            bottom: -100px;
            right: -100px;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(211,78,3,0.08) 0%, transparent 65%);
            border-radius: 50%;
            pointer-events: none;
        }
        .about-values .sec-title--two .sub-title {
            color: #d34e03;
            border-color: rgba(211,78,3,0.3);
        }
        .about-values .sec-title--two .title {
            color: #fff;
        }
        .about-value-card {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px;
            padding: 40px 32px;
            height: 100%;
            position: relative;
            overflow: hidden;
            transition: all 0.35s ease;
        }
        .about-value-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            padding: 1px;
            background: linear-gradient(135deg, rgba(211,78,3,0), rgba(211,78,3,0.4), rgba(211,78,3,0));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.35s;
        }
        .about-value-card:hover {
            background: rgba(255,255,255,0.07);
            transform: translateY(-6px);
            box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }
        .about-value-card:hover::before {
            opacity: 1;
        }
        .about-value-num {
            font-size: 72px;
            font-weight: 900;
            line-height: 1;
            color: rgba(211,78,3,0.12);
            position: absolute;
            top: 16px;
            right: 20px;
            font-family: inherit;
            pointer-events: none;
            transition: color 0.35s;
        }
        .about-value-card:hover .about-value-num {
            color: rgba(211,78,3,0.22);
        }
        .about-value-icon {
            width: 62px;
            height: 62px;
            background: linear-gradient(135deg, rgba(211,78,3,0.25), rgba(211,78,3,0.1));
            border: 1px solid rgba(211,78,3,0.3);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #d34e03;
            font-size: 24px;
            margin-bottom: 24px;
            transition: all 0.35s;
        }
        .about-value-card:hover .about-value-icon {
            background: #d34e03;
            color: #fff;
            box-shadow: 0 8px 24px rgba(211,78,3,0.4);
        }
        .about-value-card h4 {
            font-size: 19px;
            font-weight: 800;
            color: #fff;
            margin-bottom: 12px;
        }
        .about-value-card p {
            font-size: 14px;
            line-height: 1.85;
            color: rgba(255,255,255,0.55);
            margin: 0;
        }
        .about-value-divider {
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, #d34e03, transparent);
            margin: 14px 0 16px;
            border-radius: 2px;
        }

        /* ── Milestones on the Ground (Achievements Redesign) ── */
        .about-milestones {
            padding: 100px 0 70px;
            background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
            position: relative;
            overflow: hidden;
        }
        .about-milestones::before {
            content: '';
            position: absolute;
            top: -100px;
            left: -100px;
            width: 450px;
            height: 450px;
            background: radial-gradient(circle, rgba(211,78,3,0.06) 0%, transparent 65%);
            border-radius: 50%;
            pointer-events: none;
        }
        .about-milestones::after {
            content: '';
            position: absolute;
            bottom: -80px;
            right: -80px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0,168,232,0.05) 0%, transparent 65%);
            border-radius: 50%;
            pointer-events: none;
        }
        .about-milestone-card {
            background: #ffffff;
            border: 1px solid rgba(211,78,3,0.14);
            border-radius: 24px;
            padding: 44px 34px 38px;
            height: 100%;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 4px 20px rgba(13,27,42,0.04);
            position: relative;
            overflow: hidden;
        }
        .about-milestone-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #d34e03, #ff7a35, #00a8e8);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
        }
        .about-milestone-card:hover {
            transform: translateY(-8px);
            border-color: rgba(211,78,3,0.35);
            box-shadow: 0 24px 55px rgba(211,78,3,0.12);
        }
        .about-milestone-card:hover::before {
            transform: scaleX(1);
        }
        .about-milestone-num {
            position: absolute;
            top: 24px;
            right: 28px;
            font-size: 48px;
            font-weight: 900;
            color: rgba(211,78,3,0.07);
            font-family: 'Georgia', serif;
            transition: color 0.35s ease;
            user-select: none;
        }
        .about-milestone-card:hover .about-milestone-num {
            color: rgba(211,78,3,0.15);
        }
        .about-milestone-icon {
            width: 64px;
            height: 64px;
            border-radius: 18px;
            background: linear-gradient(135deg, rgba(211,78,3,0.12), rgba(211,78,3,0.04));
            border: 1.5px solid rgba(211,78,3,0.22);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 26px;
            color: #d34e03;
            font-size: 24px;
            transition: all 0.35s ease;
        }
        .about-milestone-card:hover .about-milestone-icon {
            background: linear-gradient(135deg, #d34e03, #ff7a35);
            border-color: #d34e03;
            color: #fff;
            box-shadow: 0 8px 24px rgba(211,78,3,0.4);
            transform: scale(1.06);
        }
        .about-milestone-card h4 {
            font-size: 19px;
            font-weight: 800;
            color: #0d1b2a;
            margin-bottom: 14px;
            line-height: 1.35;
        }
        .about-milestone-card p {
            font-size: 14px;
            line-height: 1.85;
            color: #5a6a7a;
            margin: 0;
        }

        /* ── What's Next for Ehnovate (Roadmap Redesign) ── */
        .about-whats-next {
            padding: 70px 0 110px;
            background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%);
            position: relative;
            overflow: hidden;
        }
        .about-roadmap-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 26px;
            padding: 46px 40px;
            height: 100%;
            box-shadow: 0 4px 20px rgba(13,27,42,0.05);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }
        .about-roadmap-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #0d1b2a, #d34e03);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
        }
        .about-roadmap-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 55px rgba(13,27,42,0.12);
        }
        .about-roadmap-card:hover::before {
            transform: scaleX(1);
        }
        .about-roadmap-card.featured {
            background: linear-gradient(145deg, #0d1b2a 0%, #15273b 100%);
            border: 1.5px solid rgba(0, 180, 216, 0.35);
            color: #fff;
            box-shadow: 0 20px 50px rgba(13,27,42,0.25);
        }
        .about-roadmap-card.featured::before {
            background: linear-gradient(90deg, #00b4d8, #0077b6, #d34e03);
            transform: scaleX(1);
        }
        .about-roadmap-card.featured::after {
            content: '';
            position: absolute;
            top: -60px;
            right: -60px;
            width: 220px;
            height: 220px;
            background: radial-gradient(circle, rgba(0, 180, 216, 0.18) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }
        .about-roadmap-card.featured:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 70px rgba(0, 180, 216, 0.3);
            border-color: rgba(0, 180, 216, 0.6);
        }
        .about-roadmap-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 24px;
            background: #0d1b2a;
            color: #fff;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 2px;
            border-radius: 50px;
            text-transform: uppercase;
            margin-bottom: 30px;
            box-shadow: 0 4px 14px rgba(13,27,42,0.15);
        }
        .about-roadmap-badge.featured-badge {
            background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%);
            color: #fff;
            box-shadow: 0 6px 20px rgba(0, 180, 216, 0.4);
        }
        .about-roadmap-badge-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ff7a35;
            display: inline-block;
        }
        .about-roadmap-badge.featured-badge .about-roadmap-badge-dot {
            background: #fff;
            box-shadow: 0 0 8px #fff;
            animation: pulse-dot 1.8s infinite;
        }
        @keyframes pulse-dot {
            0% { transform: scale(0.9); opacity: 0.7; }
            50% { transform: scale(1.3); opacity: 1; }
            100% { transform: scale(0.9); opacity: 0.7; }
        }
        .about-roadmap-card h3 {
            font-size: 23px;
            font-weight: 800;
            color: #0d1b2a;
            margin-bottom: 32px;
            line-height: 1.3;
        }
        .about-roadmap-card.featured h3 {
            color: #fff;
        }
        .about-roadmap-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .about-roadmap-list li {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            font-size: 14.5px;
            line-height: 1.7;
            color: #475569;
            font-weight: 500;
        }
        .about-roadmap-card.featured .about-roadmap-list li {
            color: rgba(255,255,255,0.88);
        }
        .about-roadmap-item-icon {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            background: rgba(13,27,42,0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #d34e03;
            font-size: 11px;
            flex-shrink: 0;
            margin-top: 2px;
            transition: all 0.3s ease;
        }
        .about-roadmap-card:hover .about-roadmap-item-icon {
            background: #d34e03;
            color: #fff;
        }
        .about-roadmap-card.featured .about-roadmap-item-icon {
            background: rgba(0, 180, 216, 0.15);
            color: #00b4d8;
            border: 1px solid rgba(0, 180, 216, 0.3);
        }
        .about-roadmap-card.featured:hover .about-roadmap-item-icon {
            background: #00b4d8;
            color: #fff;
        }


        `}
        </style>

        {/* ── HERO ── */}
        <section className="hero hero-style-one page-title pos-rel bg_img about-hero-fix"
            data-background="/assets/img/bg/hero-bg01.jpg"
            style={{ backgroundImage: 'url(/assets/img/bg/hero-bg01.jpg)' }}>
            <div className="hero-shape">
                <div className="shape shape--one bg_img"
                    data-background="/assets/img/shape/hero-glassisom.png"
                    style={{ backgroundImage: 'url(/assets/img/shape/hero-glassisom.png)' }}>
                </div>
                <div className="shape shape--two"><img src="/assets/img/shape/hero-shape01.png" alt="" /></div>
                <div className="shape shape--three"><img src="/assets/img/shape/hero-shape04.png" alt="" /></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <span className="sub-title about-hero-text-orange" style={{ fontWeight: '700', letterSpacing: '1px' }}>
                            <i className="far fa-circle-dot me-2"></i> About Ehnovate
                        </span>
                        <h1 className="title text-white mt-3" style={{ fontSize: '48px', fontWeight: '900', lineHeight: '1.15' }}>
                            Building the Technology Backbone for <span className="about-hero-text-orange">Safer, Smarter</span> Institutions
                        </h1>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                        <div className="d-flex gap-4 justify-content-lg-end">
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ color: '#fff', fontWeight: '900', fontSize: '42px', WebkitTextFillColor: 'white', margin: 0 }}>
                                    12<span style={{ color: '#d34e03', WebkitTextFillColor: '#d34e03' }}>+</span>
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>Technology Milestones</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ color: '#fff', fontWeight: '900', fontSize: '42px', WebkitTextFillColor: 'white', margin: 0 }}>
                                    6<span style={{ color: '#d34e03', WebkitTextFillColor: '#d34e03' }}>+</span>
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>Industry Use Cases</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ── /HERO ── */}

        {/* ── ABOUT INTRO ── */}
        <section className="about-intro">
            <div className="container">
                <div className="about-intro-box">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-duration="700ms">
                            <span className="sub-label"><i className="far fa-circle-dot"></i> About Ehnovate</span>
                            <h2>Building the Technology Backbone for <span>Safer, Smarter</span> Institutions</h2>
                            <p>
                                Ehnovate Technologies is an AI and enterprise-software company building next-generation platforms for security, intelligence, and business operations. Our engineering teams design end-to-end systems from AI-powered surveillance and investigative intelligence tools to enterprise resource planning that convert raw data into fast, actionable decisions.
                            </p>
                            <p>
                                We build for the people who cannot afford delay police and public-safety teams, hospitals, campuses, industrial sites, and enterprises  pairing deep-learning intelligence with real-time communication in one unified ecosystem.
                            </p>
                            <div className="about-feature-pills">
                                <span className="about-feature-pill"><i className="far fa-check"></i> AI Surveillance</span>
                                <span className="about-feature-pill"><i className="far fa-check"></i> Enterprise ERP</span>
                                <span className="about-feature-pill"><i className="far fa-check"></i> Public Safety</span>
                                <span className="about-feature-pill"><i className="far fa-check"></i> Healthcare AI</span>
                                <span className="about-feature-pill"><i className="far fa-check"></i> Real-time Intelligence</span>
                            </div>
                            <div className="xb-btn">
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
                        <div className="col-lg-6 wow fadeInRight" data-wow-duration="700ms">
                            <div className="about-intro-img-wrap">
                                <div className="about-intro-corner-deco"></div>
                                <div className="about-intro-img-frame">
                                    <img src="/assets/img/project/owl-main.png" alt="Ehnovate AI Surveillance Platform" />
                                </div>
                                <div className="about-intro-img-badge">
                                    <span>200+</span>
                                    Technology Experts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ── /ABOUT INTRO ── */}

        {/* ── STATS CARDS ── */}
        <section className="about-stats">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <i className="far fa-brain"></i>
                            </div>
                            <div className="about-stat-info">
                                <h3>2</h3>
                                <p>In-house AI Platforms</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <i className="far fa-globe"></i>
                            </div>
                            <div className="about-stat-info">
                                <h3>3</h3>
                                <p>Languages Supported</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <i className="far fa-layer-group"></i>
                            </div>
                            <div className="about-stat-info">
                                <h3>6+</h3>
                                <p>Industry Use Cases</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="about-stat-info">
                                <h3>&lt;5s</h3>
                                <p>Threat-to-Alert Response Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ── /STATS CARDS ── */}

        {/* ── VALUES / PILLARS ── */}
        <section className="about-values">
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <div className="sub-title"><img src="/assets/img/icon/eye-icon.svg" alt="" /> What drives us forward</div>
                    <h2 className="title">Our Core Pillars</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                        <div className="about-value-card">
                            <span className="about-value-num">01</span>
                            <div className="about-value-icon"><i className="far fa-bolt"></i></div>
                            <h4>Deliver Results</h4>
                            <div className="about-value-divider"></div>
                            <p>At Ehnovate, delivering results means turning complex data into clear, actionable decisions — every time.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
                        <div className="about-value-card">
                            <span className="about-value-num">02</span>
                            <div className="about-value-icon"><i className="far fa-wifi"></i></div>
                            <h4>Be Proactive</h4>
                            <div className="about-value-divider"></div>
                            <p>We engineer systems that detect threats and inefficiencies before they become crises, giving teams decisive advantages.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                        <div className="about-value-card">
                            <span className="about-value-num">03</span>
                            <div className="about-value-icon"><i className="far fa-leaf"></i></div>
                            <h4>Sustainable Growth</h4>
                            <div className="about-value-divider"></div>
                            <p>Our modular architecture evolves with your institution, ensuring your technology investment grows with you long-term.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                        <div className="about-value-card">
                            <span className="about-value-num">04</span>
                            <div className="about-value-icon"><i className="far fa-tachometer-alt"></i></div>
                            <h4>Maximize Speed</h4>
                            <div className="about-value-divider"></div>
                            <p>From deployment to detection, speed is built into our DNA. We build for institutions where every second counts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ── /VALUES ── */}

        {/* ── ROADMAP ── */}
        <section className="roadmap roadmap-pb pt-130 pb-200 pos-rel" data-bg-color="#d34e03" style={{ marginTop: '60px' }}>
            <div className="container">
                <div className="sa-tes_top roadmap-top pos-rel mb-85">
                    <div className="sec-title--two">
                        <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms"><img src="/assets/img/icon/process-icon.svg" alt="" />Our Journey</div>
                        <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Why teams choose Ehnovate</h2>
                    </div>
                    <div className="sa-tes_button roadmap-button">
                        <div className="sa-swiper-btn swiper-button-prev"><i className="fal fa-angle-left"></i></div>
                        <div className="sa-swiper-btn active swiper-button-next"><i className="fal fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="raodmap-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="roadmap-item">
                            <div className="xb-item--top">
                                <img src="/assets/img/shape/line-shape03.png" alt="" />
                                <span className="xb-item--ques">Q-1</span>
                                <img src="/assets/img/shape/line-shape04.png" alt="" />
                            </div>
                            <div className="xb-item--holder">
                                <span className="xb-item--year">2012</span>
                                <h3 className="xb-item--title">AI + Communication, Unified</h3>
                                <p className="xb-item--content">Ehnovate started with a mission to bridge the gap between complex software systems and actionable intelligence, laying the groundwork for our integrated AI solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="roadmap-item">
                            <div className="xb-item--top">
                                <img src="/assets/img/shape/line-shape03.png" alt="" />
                                <span className="xb-item--ques">Q-2</span>
                                <img src="/assets/img/shape/line-shape04.png" alt="" />
                            </div>
                            <div className="xb-item--holder">
                                <span className="xb-item--year">2014</span>
                                <h3 className="xb-item--title">Smart Wearable Integration</h3>
                                <p className="xb-item--content">In 2014, Ehnovate deployed our first unified communication modules and wearable tech integrations, helping field agents and security teams stay connected in critical situations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="roadmap-item">
                            <div className="xb-item--top">
                                <img src="/assets/img/shape/line-shape03.png" alt="" />
                                <span className="xb-item--ques">Q-3</span>
                                <img src="/assets/img/shape/line-shape04.png" alt="" />
                            </div>
                            <div className="xb-item--holder">
                                <span className="xb-item--year">2016</span>
                                <h3 className="xb-item--title">Real-Time Threat Scoring</h3>
                                <p className="xb-item--content">By 2016, our hard work in AI vision systems started to be recognized. We launched advanced threat scoring modules, scaling our team to over 60 dedicated engineers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="roadmap-item">
                            <div className="xb-item--top">
                                <img src="/assets/img/shape/line-shape03.png" alt="" />
                                <span className="xb-item--ques">Q-4</span>
                                <img src="/assets/img/shape/line-shape04.png" alt="" />
                            </div>
                            <div className="xb-item--holder">
                                <span className="xb-item--year">2018</span>
                                <h3 className="xb-item--title">Scalable Cloud Architecture</h3>
                                <p className="xb-item--content">By 2018, Ehnovate attracted a global clientele spanning the US, UK, Australia, and Japan. We introduced our robust cloud architecture for enterprise ERP systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="roadmap-item">
                            <div className="xb-item--top">
                                <img src="/assets/img/shape/line-shape03.png" alt="" />
                                <span className="xb-item--ques">Q-5</span>
                                <img src="/assets/img/shape/line-shape04.png" alt="" />
                            </div>
                            <div className="xb-item--holder">
                                <span className="xb-item--year">2024</span>
                                <h3 className="xb-item--title">Modular &amp; Future-Ready</h3>
                                <p className="xb-item--content">Today, Ehnovate has over 200 dedicated technology experts. We continue to evolve our modular ecosystem, building future-ready platforms for healthcare, security, and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="roadmap-shape">
                <div className="shape shape--one"><img src="/assets/img/shape/pattern02.png" alt="" /></div>
                <div className="shape shape--two"><img src="/assets/img/shape/monitor-shape.png" alt="" /></div>
                <div className="shape shape--three"><img src="/assets/img/shape/blur-shape.png" alt="" style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(85%) saturate(3062%) hue-rotate(8deg) brightness(97%) contrast(98%)' }} /></div>
            </div>
        </section>
        {/* ── /ROADMAP ── */}

        {/* ── ACHIEVEMENTS / MILESTONES ── */}
        <section className="about-milestones">
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <div className="sub-title"><img src="/assets/img/icon/eye-icon.svg" alt="" /> ACHIEVEMENTS</div>
                    <h2 className="title">Milestones on the <span style={{ color: '#d34e03' }}>Ground</span></h2>
                    <p style={{ color: '#5a6a7a', fontSize: '16px', maxWidth: '580px', margin: '16px auto 0', lineHeight: '1.7' }}>
                        Real-world deployments and proprietary engineering breakthroughs powering critical operations.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                        <div className="about-milestone-card">
                            <span className="about-milestone-num">01</span>
                            <div className="about-milestone-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <h4>Kumbh Mela 2026 Security Deployment</h4>
                            <p>OWL-AI deployed for large-scale public-safety monitoring at Haridwar, Uttarakhand, in coordination with State Police &amp; Mela Authority.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="about-milestone-card">
                            <span className="about-milestone-num">02</span>
                            <div className="about-milestone-icon">
                                <i className="fas fa-microchip"></i>
                            </div>
                            <h4>Two Proprietary AI Platforms, Built In-House</h4>
                            <p>OWL-AI Surveillance and the Secure-Link Intelligence Platform engineered end-to-end by Ehnovate's product team.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="about-milestone-card">
                            <span className="about-milestone-num">03</span>
                            <div className="about-milestone-icon">
                                <i className="fas fa-globe"></i>
                            </div>
                            <h4>Multilingual, Field-Ready Deployment</h4>
                            <p>English, Hindi and Marathi language support for real-world officer and analyst adoption.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="about-milestone-card">
                            <span className="about-milestone-num">04</span>
                            <div className="about-milestone-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h4>Smart Wearable Integration</h4>
                            <p>Among the first in-region platforms to integrate smart-glass capture (Meta AI Glass) into a live security workflow.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="about-milestone-card">
                            <span className="about-milestone-num">05</span>
                            <div className="about-milestone-icon">
                                <i className="fas fa-lock"></i>
                            </div>
                            <h4>Offline-Capable Secure Intelligence</h4>
                            <p>Face recognition and correlation engines built to run fully offline for classified, air-gapped environments.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="about-milestone-card">
                            <span className="about-milestone-num">06</span>
                            <div className="about-milestone-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h4>Growing Ecosystem Partnership</h4>
                            <p>Collaborating with strategic technology partners to accelerate AI product development and enterprise innovation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ── /ACHIEVEMENTS ── */}

        {/* ── ROADMAP GRID (WHAT'S NEXT) ── */}
        <section className="about-whats-next">
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <div className="sub-title"><img src="/assets/img/icon/process-icon.svg" alt="" /> ROADMAP</div>
                    <h2 className="title">What's Next for <span style={{ color: '#d34e03' }}>Ehnovate</span></h2>
                    <p style={{ color: '#5a6a7a', fontSize: '16px', maxWidth: '580px', margin: '16px auto 0', lineHeight: '1.7' }}>
                        Our multi-phase product evolution strategy from live field foundations to autonomous video intelligence.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0ms">
                        <div className="about-roadmap-card">
                            <span className="about-roadmap-badge"><span className="about-roadmap-badge-dot"></span> NOW</span>
                            <h3>Deployed Foundations</h3>
                            <ul className="about-roadmap-list">
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-chevron-right"></i></div>
                                    <span>OWL-AI live: image-based detection &amp; alerting</span>
                                </li>
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-chevron-right"></i></div>
                                    <span>Secure-Link live: correlation &amp; face search</span>
                                </li>
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-chevron-right"></i></div>
                                    <span>Field deployment at scale (Kumbh Mela 2026)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="150ms">
                        <div className="about-roadmap-card featured">
                            <span className="about-roadmap-badge featured-badge"><span className="about-roadmap-badge-dot"></span> NEXT</span>
                            <h3>Live Video Intelligence</h3>
                            <ul className="about-roadmap-list">
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-bolt"></i></div>
                                    <span>Continuous live video-stream monitoring</span>
                                </li>
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-bolt"></i></div>
                                    <span>Motion &amp; anomaly detection</span>
                                </li>
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-bolt"></i></div>
                                    <span>Automated incident logging</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="about-roadmap-card">
                            <span className="about-roadmap-badge"><span className="about-roadmap-badge-dot"></span> AHEAD</span>
                            <h3>Platform Expansion</h3>
                            <ul className="about-roadmap-list">
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-chevron-right"></i></div>
                                    <span>Ehnovate ERP Suite full launch</span>
                                </li>
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-chevron-right"></i></div>
                                    <span>Predictive risk &amp; analytics models</span>
                                </li>
                                <li>
                                    <div className="about-roadmap-item-icon"><i className="fas fa-chevron-right"></i></div>
                                    <span>Smart-city &amp; multi-agency integration</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ── /ROADMAP GRID ── */}

        {/* ── CTA ── */}
        <section className="cta" style={{ marginTop: '60px' }}>
            <div className="container">
                <div className="cta-wrap">
                    <div className="cta-inner ul_li_between">
                        <div className="xb-item--holder wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="600ms">
                            <h2 className="xb-item--title">Engineering intelligent systems that help institutions see faster, decide sooner, and act with confidence.</h2>
                            <span className="xb-item--content">Book a Demo to discover our advanced AI and enterprise solutions.</span>
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
        {/* ── /CTA ── */}

    </main>
  );
}
