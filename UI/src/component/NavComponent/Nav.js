
import './Nav.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Nav() {
    const [navContent, setNavContent] = useState();

    useEffect(() => {
        setInterval(() => {
            if (localStorage.getItem('role') == "ngo") {
                setNavContent(
                    <>
                        <nav className="navbar navbar-expand-lg shadow-lg">
                            <div className="container">
                                <a className="navbar-brand" href="index.html">
                                    <img src="./assests/images/logo.jpg" className="logo img-fluid" alt="Kind Heart Charity" />
                                    <span>
                                        ResQPet Organization
                                        <small>Rescue Stray Animals with Just One Click</small>
                                    </span>
                                </a>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className="nav-link click-scroll"><Link to="/ngo">NGOHome</Link></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link click-scroll"><Link to="/managereq">Manage Request</Link></a>
                                        </li>
                                        {/* Profile Icon Dropdown */}
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="profileDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="bi bi-person-circle fs-4"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                                <li>
                                                    <a className="dropdown-item"><Link to="/epngo">Edit Profile</Link></a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item"><Link to="/cpngo">Change Password</Link></a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="nav-link custom-btn custom-border-btn btn"><Link to="/logout">Logout</Link></a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </>
                )
            }




            //for admin
            else if (localStorage.getItem('role') == "admin") {
                setNavContent(
                    <>
                        <nav className="navbar navbar-expand-lg shadow-lg">
                            <div className="container">
                                <a className="navbar-brand" href="index.html">
                                    <img src="./assests/images/logo.jpg" className="logo img-fluid" alt="Kind Heart Charity" />
                                    <span>
                                        ResQPet Organization
                                        <small>Rescue Stray Animals with Just One Click</small>
                                    </span>
                                </a>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className="nav-link click-scroll"><Link to="/admin">AdminHome</Link></a>
                                        </li>


                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="profileDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="bi bi-person-circle fs-4"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                                <li>
                                                    <a className="dropdown-item"><Link to="/epadmin">Edit Profile</Link></a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="nav-link custom-btn custom-border-btn btn"><Link to="/logout">Logout</Link></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </nav>
                    </>
                )
            }


            //for visitors
            else {
                setNavContent(
                    <>
                        <nav className="navbar navbar-expand-lg shadow-lg">
                            <div className="container">
                                <a className="navbar-brand" href="index.html">
                                    <img src="./assests/images/logo.jpg" className="logo img-fluid" alt="Kind Heart Charity" />
                                    <span>
                                        ResQPet Organization
                                        <small>Rescue Stray Animals with Just One Click</small>
                                    </span>
                                </a>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className="nav-link click-scroll"><Link to="/">Home</Link></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link click-scroll"><Link to="/rescue">Report Animal</Link></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link click-scroll"><Link to="/register">Register NGO</Link></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link click-scroll"><Link to="/login">Login</Link></a>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </>
                )
            }
        });
    }, 1)

    return (
        <>

            {
                navContent
            }
        </>
    );
}
export default Nav;