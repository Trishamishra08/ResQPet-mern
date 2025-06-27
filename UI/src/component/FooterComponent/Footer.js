import './Footer.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [FooterContent, setFooter] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const role = localStorage.getItem('role');

            // ✅ Admin or NGO Footer (two strips)
            if (["admin", "ngo"].includes(role)) {
                setFooter(
                    <>
                        <footer className="site-footer admin-footer">
                            {/* ✅ Top Strip */}
                            <div className="site-footer-top bg-dark text-white py-3">
                                <div className="container text-center">
                                    <p className="copyright-text mb-0" style={{color:"#E7D8C5"}}> © 2036 ResQPet Org. All Rights Reserved </p>
                                </div>
                            </div>

                            {/* ✅ Bottom Strip */}
                            <div className="site-footer-bottom">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-lg-6 col-md-7 col-12">
                                            <p className="copyright-text mb-0">
                                                Copyright © 2036 <a href="#">ResQPet</a> Org.
                                                <pre>Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a></pre>
                                            </p>
                                        </div>

                                        <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                                            <ul className="social-icon">
                                                <li className="social-icon-item"><a href="#" className="social-icon-link bi-twitter"></a></li>
                                                <li className="social-icon-item"><a href="#" className="social-icon-link bi-facebook"></a></li>
                                                <li className="social-icon-item"><a href="https://www.instagram.com/direct/t/105030414426119/" className="social-icon-link bi-instagram"></a></li>
                                                <li className="social-icon-item"><a href="#" className="social-icon-link bi-linkedin"></a></li>
                                                <li className="social-icon-item"><a href="https://youtube.com/templatemo" className="social-icon-link bi-youtube"></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </footer>
                    </>
                );
            }

            // ✅ Visitor Footer (default)
            else {
                setFooter(
                    <>
                        <footer className="site-footer">
                            <div className="site-footer-top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-12 mb-4">
                                            <img src="./assests/images/logo.jpg" className="logo img-fluid" alt="logo" />
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                                            <h5 className="site-footer-title mb-3" style={{ color: 'rgb(231, 235, 236)' }}>Quick Links</h5>
                                            <ul className="footer-menu">
                                                <li className="footer-menu-item"><Link to="/login" className="footer-menu-link">Login</Link></li>
                                                <li className="footer-menu-item"><Link to="/register" className="footer-menu-link">Register</Link></li>
                                                <li className="footer-menu-item"><Link to="/rescue" className="footer-menu-link">Report Animal</Link></li>
                                                <li className="footer-menu-item"><Link to="/register" className="footer-menu-link">Partner with us</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12 mx-auto">
                                            <h5 className="site-footer-title mb-3" style={{ color: 'rgb(231, 235, 236)' }}>Contact Information</h5>
                                            <p className="text-white d-flex mb-2">
                                                <i className="bi-telephone me-2"></i>
                                                <a href="tel:120-240-9600" className="site-footer-link">120-240-9600</a>
                                            </p>
                                            <p className="text-white d-flex">
                                                <i className="bi-envelope me-2"></i>
                                                <a href="mailto:ResQPet@gmail.com" className="site-footer-link">ResQPet@gmail.com</a>
                                            </p>
                                            <p className="text-white d-flex">
                                                <i className="bi-geo-alt me-2"></i>
                                                <span style={{ color: '#F0E3C2' }}>ResQPet Centre</span>
                                            </p>
                                            <a href="https://www.google.com/maps/place/IPS+Academy+Gate+No.+02" className="custom-btn btn mt-3">Get Direction</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="site-footer-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-7 col-12">
                                            <p className="copyright-text mb-0">
                                                Copyright © 2036 <a href="#">ResQPet</a> Org.
                                                <pre>Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a></pre>
                                            </p>
                                        </div>

                                        <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                                            <ul className="social-icon">
                                                <li className="social-icon-item"><a href="#" className="social-icon-link bi-twitter"></a></li>
                                                <li className="social-icon-item"><a href="#" className="social-icon-link bi-facebook"></a></li>
                                                <li className="social-icon-item"><a href="https://www.instagram.com/direct/t/105030414426119/" className="social-icon-link bi-instagram"></a></li>
                                                <li className="social-icon-item"><a href="#" className="social-icon-link bi-linkedin"></a></li>
                                                <li className="social-icon-item"><a href="https://youtube.com/templatemo" className="social-icon-link bi-youtube"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </>
                );
            }
        }, 1);

        return () => clearInterval(interval); // cleanup
    }, []);

    return <>{FooterContent}</>;
}

export default Footer;
