import './Header.css';
import { useState, useEffect } from 'react';
import Auth from '../AuthComponent/Auth';
function Header() {
    const [headerContent, setHeaderContent] = useState();
    useEffect(() => {
        setInterval(() => {
            //for user
            if (localStorage.getItem('role') == "ngo") {
                setHeaderContent(
                    <>
                        <header class="site-header">
                            <div class="container">
                                <div class="row">

                                    <div class="col-lg-8 col-12 d-flex flex-wrap">
                                        <p class="d-flex me-4 mb-0">
                                            <i class="bi-geo-alt me-2"></i>
                                            NGO Dashboard
                                        </p>

                                        <p class="d-flex mb-0">
                                            <i class="bi-envelope me-2"></i>

                                            <a href="mailto:info@company.com">
                                                ResQPet@gmail.com
                                            </a>
                                        </p>
                                    </div>

                                    <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                                        <ul class="social-icon">
                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-twitter"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-facebook"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-instagram"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-youtube"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-whatsapp"></a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </header>
                    </>
                )
            }

            //for admin
            else if (localStorage.getItem('role') == "admin") {
                setHeaderContent(
                    <>
                        <header class="site-header">
                            <div class="container">
                                <div class="row">

                                    <div class="col-lg-8 col-12 d-flex flex-wrap">
                                        <p class="d-flex me-4 mb-0">
                                            <i class="bi-geo-alt me-2"></i>
                                            Admin Dashboard
                                        </p>

                                        <p class="d-flex mb-0">
                                            <i class="bi-envelope me-2"></i>

                                            <a href="mailto:info@company.com">
                                                ResQPet@gmail.com
                                            </a>
                                        </p>
                                    </div>

                                    <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                                        <ul class="social-icon">
                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-twitter"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-facebook"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-instagram"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-youtube"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-whatsapp"></a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </header>
                    </>
                )
            }

            //visitors
            else {
                setHeaderContent(
                    <>
                        <header class="site-header">
                            <div class="container">
                                <div class="row">

                                    <div class="col-lg-8 col-12 d-flex flex-wrap">
                                        <p class="d-flex me-4 mb-0">
                                            <i class="bi-geo-alt me-2"></i>
                                            ResQPet Centre, Indore
                                        </p>

                                        <p class="d-flex mb-0">
                                            <i class="bi-envelope me-2"></i>

                                            <a href="mailto:info@company.com">
                                                ResQPet@gmail.com
                                            </a>
                                        </p>
                                    </div>

                                    <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                                        <ul class="social-icon">
                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-twitter"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-facebook"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-instagram"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-youtube"></a>
                                            </li>

                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-whatsapp"></a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </header>
                    </>
                )
            }
        });
    }, 1)


    return (
        <>
        <Auth/>
        {
            headerContent
        }
        </>
    );
}
export default Header;