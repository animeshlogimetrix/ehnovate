import React from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <main>
      <SEO 
        title="Contact Us | Ehnovate Technologies" 
        description="Get in touch with Ehnovate Technologies. Let's discuss how our AI and enterprise software solutions can transform your business." 
        canonicalUrl="/contact" 
      />
      <style>{`
        /* ── Hero ── */
        .contact-hero-fix {
          min-height: 380px !important;
          padding: 180px 0 90px !important;
          display: flex !important; align-items: center !important;
        }
        .contact-orange { color: #d34e03 !important; -webkit-text-fill-color: #d34e03 !important; }

        /* ── Contact info cards ── */
        .contact-info-sec {
          background: #0d1b2a;
          padding: 80px 0 90px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(211,78,3,0.25);
        }
        .contact-info-sec::before {
          content: ''; position: absolute;
          top: -100px; left: -100px; width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(211,78,3,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-info-sec::after {
          content: ''; position: absolute;
          bottom: -100px; right: -100px; width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(211,78,3,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-info-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px; padding: 40px 28px;
          height: 100%; text-align: center;
          position: relative; overflow: hidden;
          transition: all 0.35s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .contact-info-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #d34e03, #ff7a35, #d34e03);
        }
        .contact-info-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(211,78,3,0.4);
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(211,78,3,0.18);
        }
        .contact-info-icon {
          width: 68px; height: 68px;
          background: linear-gradient(135deg, rgba(211,78,3,0.3), rgba(211,78,3,0.12));
          border: 1px solid rgba(211,78,3,0.4);
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          color: #ff7a35; font-size: 26px;
          margin: 0 auto 22px;
          transition: all 0.35s ease;
        }
        .contact-info-card:hover .contact-info-icon {
          background: #d34e03;
          color: #fff;
          transform: scale(1.08);
          box-shadow: 0 10px 28px rgba(211,78,3,0.5);
        }
        .contact-info-card h4 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 10px; letter-spacing: 0.3px; }
        .contact-info-card p, .contact-info-card a {
          font-size: 14px; color: rgba(255,255,255,0.75);
          line-height: 1.7; margin: 0; text-decoration: none;
          transition: color 0.25s;
        }
        .contact-info-card a:hover { color: #ff7a35; }

        /* ── Form box ── */
        .contact-form-box {
          background: #fff; border: 1px solid #eef0f5;
          border-radius: 24px; padding: 0;
          box-shadow: 0 24px 70px rgba(13,27,42,0.08);
          overflow: hidden;
        }
        .contact-form-header {
          background: #0d1b2a; border-radius: 0;
          padding: 20px 44px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .contact-form-header span:first-child { color: #d34e03; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; }
        .contact-form-header span:last-child { color: rgba(255,255,255,0.35); font-size: 12px; font-weight: 600; letter-spacing: 1px; }
        .contact-form-inner { padding: 48px 44px; }
        .contact-form-inner h2 { font-size: 30px; font-weight: 900; color: #0d1b2a; margin-bottom: 8px; }
        .contact-form-inner h2 span { color: #d34e03; }
        .contact-form-inner .form-subtitle { font-size: 15px; color: #7a8a9a; margin-bottom: 32px; }

        /* ── Custom inputs ── */
        .cf-input-wrap { position: relative; margin-bottom: 18px; }
        .cf-input-wrap i {
          position: absolute; left: 18px; top: 50%;
          transform: translateY(-50%); color: #d34e03; font-size: 15px;
          pointer-events: none;
        }
        .cf-input-wrap.textarea-wrap i { top: 20px; transform: none; }
        .cf-input-wrap input,
        .cf-input-wrap textarea {
          width: 100%; padding: 14px 18px 14px 46px;
          background: #f8f9fc; border: 1px solid #eef0f5;
          border-radius: 12px; font-size: 14px; color: #0d1b2a;
          outline: none; transition: all 0.25s;
          font-family: inherit;
        }
        .cf-input-wrap input:focus,
        .cf-input-wrap textarea:focus {
          border-color: #d34e03;
          background: rgba(211,78,3,0.03);
          box-shadow: 0 0 0 3px rgba(211,78,3,0.08);
        }
        .cf-input-wrap input::placeholder,
        .cf-input-wrap textarea::placeholder { color: #aab0bc; }
        .cf-input-wrap textarea { height: 130px; resize: none; padding-top: 16px; }

        /* ── Map box ── */
        .contact-map-box {
          background: #fff; border: 1px solid #eef0f5;
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 55px rgba(13,27,42,0.07);
          height: 100%;
        }
        .contact-map-label {
          background: #0d1b2a; padding: 16px 28px;
          display: flex; align-items: center; gap: 10px;
        }
        .contact-map-label span { color: #fff; font-size: 13px; font-weight: 700; }
        .contact-map-label i { color: #d34e03; }
        .contact-map-box iframe {
          width: 100%; height: 280px;
          border: none; display: block;
        }
        .contact-detail-list { padding: 24px 28px; }
        .contact-detail-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 12px 0; border-bottom: 1px solid #f0f0f5;
        }
        .contact-detail-row:last-child { border-bottom: none; }
        .contact-detail-row .cd-icon {
          width: 36px; height: 36px; min-width: 36px;
          background: rgba(211,78,3,0.08); border: 1px solid rgba(211,78,3,0.2);
          border-radius: 10px; display: flex; align-items: center; justify-content: center;
          color: #d34e03; font-size: 14px;
        }
        .contact-detail-row .cd-text strong { display: block; font-size: 12px; font-weight: 700; color: #0d1b2a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px; }
        .contact-detail-row .cd-text span, .contact-detail-row .cd-text a { font-size: 14px; color: #6a7a8a; text-decoration: none; }
        .contact-detail-row .cd-text a:hover { color: #d34e03; }

        /* ── Designed Whitespace Section ── */
        .contact-whitespace-sec {
          background: #ffffff;
          padding: 55px 0;
          position: relative;
          border-top: 1px solid #eef0f5;
          border-bottom: 1px solid #eef0f5;
        }
        .contact-divider-pill {
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
        .contact-divider-pill:hover {
          border-color: #d34e03;
          color: #d34e03;
          background: rgba(211,78,3,0.05);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(211,78,3,0.15);
        }
        .contact-divider-pill i {
          color: #d34e03;
          font-size: 15px;
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        className="hero hero-style-one page-title pos-rel bg_img contact-hero-fix"
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
              <span className="sub-title contact-orange" style={{ fontWeight: '700', letterSpacing: '1px' }}>
                <i className="far fa-circle-dot me-2"></i> Contact Us
              </span>
              <h1 className="title text-white mt-3" style={{ fontSize: '46px', fontWeight: '900', lineHeight: '1.15' }}>
                Let's Build <span className="contact-orange">Smarter, Safer</span> Systems Together
              </h1>
              <p className="text-white mt-3" style={{ opacity: 0.75, fontSize: '16px', maxWidth: '560px' }}>
                Reach out to Ehnovate Technologies — our team will respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DESIGNED WHITESPACE SECTION ══ */}
      <section className="contact-whitespace-sec">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 text-center">
            <span className="contact-divider-pill"><i className="fas fa-headset"></i> 24/7 Technical Response</span>
            <span className="contact-divider-pill"><i className="fas fa-building"></i> Corporate HQ &amp; AI Labs</span>
            <span className="contact-divider-pill"><i className="fas fa-user-shield"></i> Confidential Enterprise Demos</span>
            <span className="contact-divider-pill"><i className="fas fa-paper-plane"></i> Direct Engineer Access</span>
          </div>
        </div>
      </section>

      {/* ══ CONTACT INFO CARDS ══ */}
      <section className="contact-info-sec">
        <div className="container">
          <div className="row g-4">
            {[
              { icon: 'fa-phone', title: 'Call Us', lines: ['+91-7275600003', 'Mon–Sat, 9 AM – 7 PM IST'] },
              { icon: 'fa-envelope', title: 'Email Us', lines: ['director.bdm@ehnovate.com', 'www.ehnovate.com'] },
              { icon: 'fa-map-marker-alt', title: 'Visit Us', lines: ['907, New Delhi House, 27', 'Barakhamba Road, Connaught Place, New Delhi - 110001'] },
              { icon: 'fa-globe', title: 'Website', lines: ['www.ehnovate.com', 'Ehnovate Technologies'] },
            ].map((c, i) => (
              <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i*80}ms`} data-wow-duration="600ms">
                <div className="contact-info-card">
                  <div className="contact-info-icon"><i className={`fas ${c.icon}`}></i></div>
                  <h4>{c.title}</h4>
                  {c.lines.map((l, j) => <p key={j}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORM + MAP ══ */}
      <section className="contact-page" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* Form */}
            <div className="col-lg-8 wow fadeInLeft" data-wow-duration="700ms">
              <div className="contact-form-box">
                <div className="contact-form-header">
                  <span><i className="far fa-circle-dot me-2"></i>Send a Message</span>
                  <span>WE RESPOND IN 24 HRS</span>
                </div>
                <div className="contact-form-inner">
                  <h2>Get in <span>Touch</span></h2>
                  <p className="form-subtitle">Tell us about your institution's needs and we'll get back to you shortly.</p>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="cf-input-wrap">
                          <i className="fas fa-user"></i>
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cf-input-wrap">
                          <i className="fas fa-envelope"></i>
                          <input type="email" placeholder="you@company.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cf-input-wrap">
                          <i className="fas fa-phone"></i>
                          <input type="tel" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cf-input-wrap">
                          <i className="fas fa-building"></i>
                          <input type="text" placeholder="Organisation / Company" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="cf-input-wrap">
                          <i className="fas fa-list"></i>
                          <input type="text" placeholder="Subject (e.g. OWL-AI Demo Request)" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="cf-input-wrap textarea-wrap">
                          <i className="fas fa-comment-alt"></i>
                          <textarea placeholder="How can we help you?"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="xb-btn mt-10">
                          <button type="submit" className="thm-btn thm-btn--fill_icon" style={{ border: 'none', cursor: 'pointer' }}>
                            <div className="xb-item--hidden"><span className="xb-item--hidden-text">Send Message</span></div>
                            <div className="xb-item--holder">
                              <span className="xb-item--text">Send Message</span>
                              <div className="xb-item--icon"><i className="fas fa-arrow-right"></i></div>
                              <span className="xb-item--text">Send Message</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Map + Details */}
            <div className="col-lg-4 wow fadeInRight" data-wow-duration="700ms">
              <div className="contact-map-box">
                <div className="contact-map-label">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Ehnovate Technologies — New Delhi, India</span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961621536767!2d77.2227183!3d28.6298642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd34720979cb%3A0xb35a0fb70425a816!2sNew%20Delhi%20House%2C%20Barakhamba%20Rd%2C%20Fire%20Brigade%20Lane%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  title="Ehnovate Office Location"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="contact-detail-list">
                  <div className="contact-detail-row">
                    <div className="cd-icon"><i className="fas fa-phone"></i></div>
                    <div className="cd-text">
                      <strong>Phone</strong>
                      <a href="tel:+917275600003">+91-7275600003</a>
                    </div>
                  </div>
                  <div className="contact-detail-row">
                    <div className="cd-icon"><i className="fas fa-envelope"></i></div>
                    <div className="cd-text">
                      <strong>Email</strong>
                      <a href="mailto:director.bdm@ehnovate.com">director.bdm@ehnovate.com</a>
                    </div>
                  </div>
                  <div className="contact-detail-row">
                    <div className="cd-icon"><i className="fas fa-globe"></i></div>
                    <div className="cd-text">
                      <strong>Website</strong>
                      <a href="https://www.ehnovate.com" target="_blank" rel="noreferrer">www.ehnovate.com</a>
                    </div>
                  </div>
                  <div className="contact-detail-row">
                    <div className="cd-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="cd-text">
                      <strong>Address</strong>
                      <span>907, New Delhi House, 27, Barakhamba Road, Connaught Place, New Delhi - 110001.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
