import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer pos-rel mt-80" data-bg-color="#111112">
        <div className="container">
            <div className="row pb-95">
                <div className="col-lg-4">
                    <div className="xb-newslatter">
                        <div className="xb-item--icon">
                            <img src="assets/img/icon/email.png" alt="" />
                        </div>
                        <h2 className="xb-item--title">Stay Updated</h2>
                        <span className="xb-item--content">Get the latest updates on our AI and enterprise software platforms.</span>
                        <div className="xb-item--contact mt-35">
                            <div className="xb-item--input_field pos-rel">
                                <input type="email" name="gmail" id="text6" placeholder="enter your email" />
                                <div className="img"><img src="assets/img/icon/sms.svg" alt="" /></div>
                            </div>
                            <button className="xb-item--button btn-effect_2">Subscribe</button>
                            <span className="xb-item--text">No spam. Updates that matter to your work.</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="xb-footer is-footer ml-75">
                        <ul className="footer-nav list-unstyled ul_li">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/products">Solutions</Link></li>
                            <li><Link to="/industries">Industries</Link></li>
                            <li><Link to="/technology">Technology</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <div className="footer-inner mt-50 row">
                            <div className="col-md-4 footer-widget">
                                <span className="xb-item--sub-title">Quick Links</span>
                                <ul className="xb-item--holder list-unstyled">
                                    <li className="xb-item--list"><Link to="/about">About</Link></li>
                                    <li className="xb-item--list"><Link to="/products">Products</Link></li>
                                    <li className="xb-item--list"><Link to="/industries">Industries</Link></li>
                                    <li className="xb-item--list"><Link to="/technology">Technology</Link></li>
                                    <li className="xb-item--list"><Link to="#">Careers</Link></li>
                                    <li className="xb-item--list"><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-widget">
                                <span className="xb-item--sub-title">Products</span>
                                <ul className="xb-item--holder list-unstyled">
                                    <li className="xb-item--list"><Link to="#">OWL-AI</Link></li>
                                    <li className="xb-item--list"><Link to="#">Secure-Link</Link></li>
                                    <li className="xb-item--list"><Link to="#">ERP Suite</Link></li>
                                    <li className="xb-item--list"><Link to="#">PCMS</Link></li>
                                    <li className="xb-item--list"><Link to="#">Healthcare Solutions</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-info footer-widget">
                                <span className="xb-item--sub-title">Contact Us</span>
                                <h4 className="xb-item--email">info@ehnovate.com</h4>
                                <span className="xb-item--sub-title">LinkedIn</span>
                                <h4 className="xb-item--number">Ehnovate Technologies</h4>
                            </div>
                        </div>
                        <div className="footer-copyright mt-50 ul_li_between">
                            <p className="copyright mt-20">Copyright &copy; 2025 <Link to="#">Ehnovate Technologies</Link>. All rights reserved.</p>
                            <ul className="footer-links ul_li mt-20">
                                <li><Link to="#">Terms of Use</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom pos-rel bg_img o-hidden" data-background="assets/img/bg/footer-glassisom.png">
            <Link to="#" className="title marquee-left" data-cursor-text="say hi!">Let's Build Smarter, Safer Systems Together &mdash; Ehnovate Technologies</Link>
        </div>
    </footer>
  );
}
