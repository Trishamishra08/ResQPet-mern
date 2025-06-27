import './Main.css';
import { useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';


function Main() {

    return (
        <>
            <main>
                {/* carousel start */}
                <section className="hero-section hero-section-full-height">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-12 p-0">
                                <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./assests/images/banner3.jpg" className="carousel-image img-fluid" alt="..." />

                                            <div className="carousel-caption d-flex flex-column justify-content-end">
                                                <h2 style={{"fontFamily":"times new roman"}}>Every Life Matters</h2>

                                                <p>Help injured animals get the care they need.</p>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img src="./assests/images/banner1.jpg" className="carousel-image img-fluid" alt="..." />

                                            <div className="carousel-caption d-flex flex-column justify-content-end">
                                                <h2 style={{"fontFamily":"times new roman"}}>Rescue in One Click</h2>

                                                <p>Report and alert nearby NGOs instantly.</p>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img src="./assests/images/banner7.jpg" className="carousel-image img-fluid" alt="..." />

                                            <div className="carousel-caption d-flex flex-column justify-content-end">
                                                <h2 style={{"fontFamily":"times new roman"}}>Be Their Hero</h2>

                                                <p>Over 2,000 lives saved — and counting.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>

                                    <button className="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* carousel end */}

                {/* <section className="section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-10 col-12 text-center mx-auto">
                                <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
                                <p>yash Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias possimus, nostrum quia hic minus natus. Deserunt est blanditiis nesciunt minima? Sequi est voluptatibus dolore ipsa aliquid ad quibusdam? Numquam quis quam corporis nesciunt qui et ea ipsam optio aperiam? Amet reprehenderit asperiores, aliquam error soluta quod id ipsa cumque itaque facere voluptates dicta impedit laudantium at. Unde minima sequi, eveniet ut asperiores cumque sapiente nihil illum, esse vel consequatur? Unde autem blanditiis voluptates assumenda rem eius in? Molestias omnis consequatur libero odio nemo dolores deserunt, repellendus, debitis rem saepe voluptatum ipsa voluptas magnam perferendis quibusdam, modi totam placeat nulla.</p>
                            </div>


                        </div>
                    </div>
                </section> */}
                {/* <section className="section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-10 col-12 text-center mx-auto">
                                <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
                                <p>
                                    yash Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias possimus, nostrum quia hic minus natus. Deserunt est blanditiis nesciunt minima? Sequi est voluptatibus dolore ipsa aliquid ad quibusdam? Numquam quis quam corporis nesciunt qui et ea ipsam optio aperiam? Amet reprehenderit asperiores, aliquam error soluta quod id ipsa cumque itaque facere voluptates dicta impedit laudantium at. Unde minima sequi, eveniet ut asperiores cumque sapiente nihil illum, esse vel consequatur? Unde autem blanditiis voluptates assumenda rem eius in? Molestias omnis consequatur libero odio nemo dolores deserunt, repellendus, debitis rem saepe voluptatum ipsa voluptas magnam perferendis quibusdam, modi totam placeat nulla.
                                </p>

                                <Link to="/register" 
                                    
                                    style={{
                                        display: "inline-block",
                                        marginTop: "30px",
                                        padding: "12px 24px",
                                        backgroundColor: "#007bff",
                                        color: "#ffffff",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontSize: "16px",
                                        textDecoration: "none",
                                        transition: "background-color 0.3s ease"
                                    }}
                                    onMouseOver={e => e.target.style.backgroundColor = "#0056b3"}
                                    onMouseOut={e => e.target.style.backgroundColor = "#007bff"}
                                >
                                    Are you an NGO? Join the mission
                                    </Link>
                                
                            </div>

                        </div>
                    </div>
                </section>

 */}

            {/* welcome mssg start */}
            <section className="section-padding">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-10 col-12">

                    {/* Start Box Wrapper */}
                    <div className="welcome-box text-center">

                    <h2
                        className="mb-4"
                        style={{
                        fontFamily: "'Times New Roman', serif",
                        fontWeight: "bold"
                        }}
                    >
                        "Your click can save a life. Help strays get home"
                    </h2>

                    <p
                        style={{
                        fontFamily: "'Times New Roman', serif",
                        fontSize: "18px",
                        color: "#7B4019",
                        fontWeight: "bold"
                        }}
                    >
                        ResQPet is a smart rescue platform that connects injured street animals with nearby verified NGOs. Anyone can report a case by just uploading an image or location — our system instantly notifies the closest approved NGO for help. <br />
                        Built with secure admin approval, real-time report tracking, and NGO management, ResQPet ensures every report is trusted, and every animal gets the care it deserves.
                    </p>

                    <div className="d-flex justify-content-center mt-4">
                        <Link
                        to="/rescue"
                        style={{
                            padding: "12px 24px",
                            backgroundColor: "#393E46",
                            color: "#ffffff",
                            borderRadius: "8px",
                            fontSize: "16px",
                            textDecoration: "none",
                            transition: "background-color 0.3s ease"
                        }}
                        onMouseOver={e => e.target.style.backgroundColor = "#1e7e34"}
                        onMouseOut={e => e.target.style.backgroundColor = "#28a745"}
                        >
                        Report Injured Pet
                        </Link>
                    </div>

                    </div>
                    {/* End Box Wrapper */}

                </div>
                </div>
            </div>
            </section>

            {/* welcome mssg end */}

            {/* our story start */}

                <section className="section-padding section-bg" id="section_2">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                                <img src="./assests/images/groupphoto.jpg" className="custom-text-box-image img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="custom-text-box">
                                    <h2 className="mb-2" style={{"fontFamily":"times new roman"}}>Our Story</h2>

                                    <h5 className="mb-3" style={{"fontFamily":"times new roman"}}>ResQPet – For Every Life That Matters</h5>

                                    <p className="mb-0">ResQPet began with a simple goal — to help injured street animals quickly. We built a platform where anyone can report a case in seconds. Today, we connect people and NGOs to save more lives, faster.
            
                                    </p>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="custom-text-box mb-lg-0">
                                            <h5 className="mb-3">Why ResQPet?</h5>

                                            <p>Because every second counts in saving a life.</p>

                                            <ul className="custom-list mt-2">
                                                <li className="custom-list-item d-flex">
                                                    <i className="bi-check custom-text-box-icon me-2"></i>
                                                    Quick help without login
                                                </li>

                                                <li className="custom-list-item d-flex">
                                                    <i className="bi-check custom-text-box-icon me-2"></i>
                                                   Verified reports, managed by admin
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                                            <div className="counter-thumb">
                                                <div className="d-flex">
                                                    <span className="counter-number" >
                                                        {/* data-from="1" data-to="2009" data-speed="1000" */}


                                                        <CountUp start={1} end={2009} duration={4} />
                                                    </span>

                                                    <span className="counter-number-text"></span>
                                                </div>

                                                <span className="counter-text">Injured Animals Helped</span>
                                            </div>

                                            <div className="counter-thumb mt-4">
                                                <div className="d-flex">
                                                    <span className="counter-number" >
                                                        {/* data-from="1" data-to="120" data-speed="1000" */}
                                                        <CountUp start={1} end={120} duration={4} />

                                                    </span>
                                                    <span className="counter-number-text">+</span>
                                                </div>

                                                <span className="counter-text">NGOs partnered</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            
            {/* our story end */}


                {/* feedback start */}
                <section className="testimonial-section section-padding section-bg">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-12 mx-auto">
                                <h2 className="mb-lg-3">Happy User Feedback</h2>

                                <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="carousel-caption">
                                                <h4 className="carousel-title" > "Clean interface, fast alerts — it’s the rescue tool every city needs."</h4>

                                                <small className="carousel-name"><span className="carousel-name-title">Shrey</span>,Engineer</small>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <div className="carousel-caption">
                                                <h4 className="carousel-title">"ResQPet made reporting so easy. One click, and help arrived!"</h4>

                                                <small className="carousel-name"><span className="carousel-name-title">Trisha</span>, Volunteer</small>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <div className="carousel-caption">
                                                <h4 className="carousel-title">"The NGO partnership feature helps us reach animals faster than ever."</h4>

                                                <small className="carousel-name"><span className="carousel-name-title">sakshee</span>,NGO Coordinator</small>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <div className="carousel-caption">
                                                <h4 className="carousel-title">"I reported a dog hit by a car — someone rescued it in minutes. Thank you!"</h4>

                                                <small className="carousel-name"><span class="carousel-name-title">Yash</span>, Student</small>
                                            </div>
                                        </div>

                                        <ol className="carousel-indicators">
                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="0" class="active">
                                                <img src="./assests/images/shrey.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>

                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="1" class="">
                                                <img src="./assests/images/trisha2.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>

                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="2" class="">
                                                <img src="./assests/images/sakshee.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>

                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="3" class="">
                                                <img src="./assests/images/avatar/studio-portrait-emotional-happy-funny.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>
                                        </ol>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* feedback end  */}


                 {/* pet gallery start */}
                <section id="pet-gallery" className="section-padding section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mb-4" style={{"fontFamily":"times new roman"}}>Meet Our Pets</h2>
                        <p className="mb-5" style={{"fontWeight":"bold"}}>These lovable companions have filled hearts and homes.</p>
                    </div>
                    </div>

                    <div className="row text-center">
                    <div className="col-sm-6 col-md-4 mb-4">
                        <img
                        src="/assests/images/petgallery1.jpg"
                        className="img-fluid shadow"
                        alt="Pet 1"
                        style={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '30%',
                            objectFit: 'cover',
                            border: '5px solid white'
                        }}
                        />
                    </div>

                    <div className="col-sm-6 col-md-4 mb-4">
                        <img
                        src="/assests/images/petgallery7.jpg"
                        className="img-fluid shadow"
                        alt="Pet 2"
                        style={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '30%',
                            objectFit: 'cover',
                            border: '5px solid white'
                        }}
                        />
                    </div>

                    <div className="col-sm-6 col-md-4 mb-4">
                        <img
                        src="/assests/images/petgallery3.jpg"
                        className="img-fluid shadow"
                        alt="Pet 3"
                        style={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '30%',
                            objectFit: 'cover',
                            border: '5px solid white'
                        }}
                        />
                    </div>

                    <div className="col-sm-6 col-md-4 mb-4">
                        <img
                        src="/assests/images/petgallery4.jpg"
                        className="img-fluid shadow"
                        alt="Pet 4"
                        style={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '30%',
                            objectFit: 'cover',
                            border: '5px solid white'
                        }}
                        />
                    </div>

                    <div className="col-sm-6 col-md-4 mb-4">
                        <img
                        src="/assests/images/petgallery8.jpg"
                        className="img-fluid shadow"
                        alt="Pet 5"
                        style={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '30%',
                            objectFit: 'cover',
                            border: '5px solid white'
                        }}
                        />
                    </div>

                    <div className="col-sm-6 col-md-4 mb-4">
                        <img
                        src="/assests/images/petgallery6.jpg"
                        className="img-fluid shadow"
                        alt="Pet 6"
                        style={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '30%',
                            objectFit: 'cover',
                            border: '5px solid white'
                        }}
                        />
                    </div>
                    </div>
                </div>
                </section>

                {/* pet gallery end */}
            </main>

        </>
    );
}
export default Main;