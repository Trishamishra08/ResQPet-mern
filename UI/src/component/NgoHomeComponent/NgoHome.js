import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { rescueApi } from '../../apiurl';
import './NgoHome.css';
import '../../styles/adminTheme.css'; // Apply admin-like theme

function NgoHome() {
  const [totalRequests, setTotalRequests] = useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [inProgressRequests, setInprogressRequests] = useState(0);
  const ngoId = localStorage.getItem('_id');

  useEffect(() => {
    axios.get(`${rescueApi}fetch?assignedNgo=${ngoId}`)
      .then(response => {
        const data = response.data.rescue || [];
        setTotalRequests(data.length);
        setPendingRequests(data.filter(req => req.status === 'pending').length);
        setInprogressRequests(data.filter(req => req.status === 'in-progress').length);
      })
      .catch(err => {
        console.error("Failed to fetch rescue requests", err);
      });
  }, [ngoId]);

  return (
    <>
      <header className="header">
        <h1>NGO Dashboard</h1>
      </header>

      <section className="admin-home section-padding">
        <div className="container">
          <div className="text-center mb-4 mt-3">
            <h2 className="text-accent fs-2 fw-semibold">Welcome NGO</h2>
            <p className="text-muted fs-5">Track and manage animal rescue requests</p>
          </div>

          <div className="row mb-4 mt-3 justify-content-center">
            <div className="col-12 col-md-4 d-flex mb-4 mb-md-0">
              <div className="stat-card w-100 p-4 shadow-sm text-center rounded-4" style={{ minHeight: '230px' }}>
                <img src="/assests/images/total.jpg" alt="Total Requests" className="mb-3 d-block mx-auto" style={{ width: '200px', height: '200px' }} />
                <h5 className="stat">Total Requests</h5>
                <h2 className="text-accent">{totalRequests}</h2>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex mb-4 mb-md-0">
              <div className="stat-card w-100 p-4 shadow-sm text-center rounded-4" style={{ minHeight: '230px' }}>
                <img src="/assests/images/pending.jpg" alt="Pending Requests" className="mb-3 d-block mx-auto" style={{ width: '200px', height: '200px' }} />
                <h5 className="stat">Pending Requests</h5>
                <h2 className="text-warning">{pendingRequests}</h2>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <div className="stat-card w-100 p-4 shadow-sm text-center rounded-4" style={{ minHeight: '230px' }}>
                <img src="/assests/images/inprogress.jpg" alt="In-Progress Requests" className="mb-3 d-block mx-auto" style={{ width: '200px', height: '200px' }} />
                <h5 className="stat">In-progress Requests</h5>
                <h2 className="text-info">{inProgressRequests}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NgoHome;