import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminHome.css';
import '../../styles/adminTheme.css';

function AdminHome() {
    const [totalNgos, setTotalNgos] = useState(0);
    const [pendingNgos, setPendingNgos] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3001/ngo/fetch?role=ngo")
            .then(res => setTotalNgos(res.data.ngo.length))
            .catch(err => {
                console.warn("Error fetching total NGOs:", err.message);
                setTotalNgos(0);
            });

        axios.get("http://localhost:3001/ngo/fetch?status=0")
            .then(res => {
                if (res.data.ngo) {
                    setPendingNgos(res.data.ngo.length);
                } else {
                    setPendingNgos(0);
                }
            })
            .catch(err => {
                console.warn("No pending NGOs found or error occurred:", err.message);
                setPendingNgos(0);
            });
    }, []);

    return (
        <>
            <header className="header">
                <h1>Admin Dashboard</h1>
            </header>

            <section className="admin-home section-padding">
                <div className="container">
                    <div className="text-center mb-4 mt-3">
                        <h2 className="text-accent fs-2 fw-semibold">Welcome Admin</h2>
                        <p className="text-muted fs-5">Manage ResQPet platform from this dashboard</p>
                    </div>

                    {/* First row: 2 cards */}
                    <div className="row mb-4 mt-3 justify-content-center">
                        <div className="col-12 col-md-4 d-flex mb-4 mb-md-0">
                            <div className="stat-card w-100 p-4 shadow-sm text-center rounded-4" style={{ minHeight: '230px' }}>
                                <img src="/assests/images/ngo.jpg" alt="Total NGOs" className="mb-3 d-block mx-auto" style={{ width: '200px', height: '200px' }} />
                                <h5 className="stat">Total NGOs</h5>
                                <h2 className="text-accent">{totalNgos}</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 offset-md-1 d-flex">
                            <div className="stat-card w-100 p-4 shadow-sm text-center rounded-4" style={{ minHeight: '230px' }}>
                                <img src="/assests/images/pending.jpg" alt="Pending Approvals" className="mb-3 d-block mx-auto" style={{ width: '230px', height: '230px' }} />
                                <h5 className="stat">Pending Approvals</h5>
                                <h2 className="text-warning">{pendingNgos}</h2>
                            </div>
                        </div>
                    </div>

                    {/* Second row: Manage NGOs */}
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-md-4 d-flex">
                            <Link to="/managengo" className="text-decoration-none w-100">
                                <div className="nav-card w-100 h-100 p-4 d-flex flex-column align-items-center justify-content-center shadow-sm text-center rounded-4" style={{ minHeight: '350px' }}>
                                    <img src="/assests/images/manage.jpg" alt="Manage NGOs" className="mb-3 d-block mx-auto" style={{ width: '200px', height: '200px' }} />
                                    <h5 className="mb-0">Manage NGOs</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2026 Kind Heart Charity Org. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default AdminHome;
