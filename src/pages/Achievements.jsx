import React from 'react';
import SEO from '../components/SEO';

export default function Achievements() {
  return (
    <main>
      <SEO 
        title="Our Achievements & Awards | Ehnovate" 
        description="Explore the awards and recognitions Ehnovate Technologies has received for our cutting-edge AI and enterprise software solutions." 
        canonicalUrl="/achievements" 
      />
        {/*  page title start   */}
         <section className="page-title pt-200 pos-rel it-hero-bg">
            <div className="it-hero-bg-shape"><img src="/assets/img/shape/it-hero-bg.png" alt="" /></div>
            <div className="container">
                <div className="page-title-wrap">
                    <div className="row mt-none-30 align-items-end">
                        <div className="col-lg-9 mt-30">
                            <div className="page-title-box">
                                <span className="sub-title"><img src="/assets/img/icon/eye-icon.svg" alt="" /> Casestudy</span>
                                <h2 className="title">Milestones on the ground <br /> highlighting transformative <br /> AI and Enterprise solutions</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-30">
                            <div className="count-box">
                                <h2 className="number">10<span className="suffix">+</span></h2>
                                <span className="text">key <br /> achievement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        {/*  page title end   */}

        {/*  achievement section start   */} 
        <section className="achievement pt-70 pb-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="team-menu achievement-menu">
                            <button className="active" data-filter="*">View all</button>
                            <button data-filter=".cat1" className="">Development</button>
                            <button data-filter=".cat2">Design</button>
                            <button data-filter=".cat3">Marketing</button>
                            <button data-filter=".cat4">Branding</button>
                            <button data-filter=".cat5">IT Services</button>
                        </div> 
                    </div>
                </div>
                <div className="achievement-content mt-70">
                    <div className="row grid mt-none-30">
                        <div className="col-lg-4 col-md-6 grid-item cat4 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img01.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">OWL-AI Deployment at Kumbh..</h3>
                                        <span className="item_tag">Branding</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 grid-item cat3 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img02.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">End-to-End Intelligence..</h3>
                                        <span className="item_tag">Marketing</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item cat4 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img03.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Multilingual Platform Support..</h3>
                                        <span className="item_tag">Branding</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item cat2 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img04.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Smart-Glass AI Integration..</h3>
                                        <span className="item_tag">Design</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item cat1 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img05.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Offline Air-Gapped Engine..</h3>
                                        <span className="item_tag">Development</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item cat5 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img06.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Strategic Tech Partnerships..</h3>
                                        <span className="item_tag">Support</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 grid-item cat2 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img07.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Public Safety Scale..</h3>
                                        <span className="item_tag">Design</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item cat1 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img08.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Enterprise Security..</h3>
                                        <span className="item_tag">Development</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item cat5 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img09.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Real-Time Threat Scoring..</h3>
                                        <span className="item_tag">Strategy</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item cat4 mt-30">
                            <div className="achievement-item">
                                <div className="achievement-img">
                                    <a href="achievement-details.html">
                                        <img src="/assets/img/achievement/img10.jpg" alt="" />
                                    </a>
                                    <div className="content_wrap">
                                        <h3 className="item_title">Healthcare Diagnostics..</h3>
                                        <span className="item_tag">Branding</span>
                                    </div>
                                </div>
                                <a className="xb-overlay" href="achievement-details.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className=" text-center xb-btn mt-55">
                        <a href="achievement.html" className="thm-btn thm-btn--aso thm-btn--aso_black">Load more achievement</a>
                    </div>
                </div>
            </div>
         </section>
        {/*  achievement section end   */} 

        {/*  cta section start   */}
        <section className="cta">
            <div className="container">
                <div className="cta-wrap">
                    <div className="cta-inner ul_li_between">
                        <div className="xb-item--holder wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="600ms">
                            <h2 className="xb-item--title">Stop wasting money on bad SEO.</h2>
                            <span className="xb-item--content">Book a Demo for the SEO results you need.</span>
                            <div className="xb-btn mt-45">
                                <a href="contact.html" className="thm-btn thm-btn--aso thm-btn--aso_white">Book a Demo</a>
                            </div>
                        </div>
                        <div className="cta-right_img wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
                            <img className="updown" src="/assets/img/cta/clip-bord.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         </section>
        {/*  cta section end   */} 

    
    </main>
  );
}
