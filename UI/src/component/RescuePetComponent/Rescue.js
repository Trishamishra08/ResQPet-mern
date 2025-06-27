import './Rescue.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { rescueApi, ngoApi } from '../../apiurl';
import React from 'react';

function Rescue() {
  const [output, setOutput] = useState();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [assignedNgo, setAssignedNgo] = useState("");
  const [ngoName, setNgoName] = useState("");

  const fileInputRef = useRef();

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("location", location);
    formData.append("city", city);
    formData.append("animalImage", file);
    formData.append("description", description);

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    };

    axios.post(rescueApi + "save", formData, config)
      .then((response) => {
        if (response.data.status) {
          setAssignedNgo(response.data.assignedNgo || "No NGO assigned");
          setEmail("");
          setMobile("");
          setLocation("");
          setCity("");
          setDescription("");
          setFile(null);
          fileInputRef.current.value = "";
          setOutput("");  // ✅ Clear error if success
        } else {
          setOutput("Something went wrong");
        }
      })
      .catch((err) => {
        console.error(err);
        setOutput("Form not submitted");
      });
  };

  useEffect(() => {
    if (assignedNgo) {
      axios.get(`${ngoApi}fetch?email=${assignedNgo}`)
        .then((response) => {
          setNgoName(response.data.ngo[0]?.name || "NGO");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [assignedNgo]);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="custom-form bg-light p-5 rounded shadow-sm">
              <h2 className="mb-4 text-center" style={{ color: "#7B4019" }}>Rescue Pet</h2>
              {output && <p className="text-danger">{output}</p>}
              {assignedNgo && (
                <div className="alert alert-info mt-3">
                  🐾 Rescue request sent to NGO: <strong>{ngoName}</strong>, contact: <strong>{assignedNgo}</strong> | status: pending
                </div>
              )}

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="✉️ Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Mobile */}
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile"
                    id="mobile"
                    placeholder="📱 Enter your mobile number"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                {/* Pet Image */}
                <div className="form-group">
                  <label htmlFor="animalImage">Pet Image 📸</label>
                  <input
                    type="file"
                    className="form-control"
                    name="animalImage"
                    id="animalImage"
                    accept="image/*"
                    required
                    ref={fileInputRef}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description">Pet Description 📝 <small className="text-muted">(optional)</small></label>
                  <textarea
                    className="form-control"
                    name="description"
                    id="description"
                    rows="4"
                    placeholder="Describe condition, appearance, or behavior (max 200 words)"
                    value={description}
                    onChange={(e) => {
                      if (countWords(e.target.value) <= 200) setDescription(e.target.value);
                    }}
                  ></textarea>
                  {description && (
                    <small className="text-muted">
                      {200 - countWords(description)} words remaining
                    </small>
                  )}
                </div>

                {/* Location */}
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    id="location"
                    placeholder="📍 Enter the rescue location"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                {/* City Dropdown */}
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select
                    className="form-control"
                    name="city"
                    id="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">📍 Select your city</option>
                    <option value="Indore">Indore</option>
                    <option value="Ujjain">Ujjain</option>
                  </select>
                </div>

                {/* Map Preview */}
                {location && (
                  <div className="mt-4">
                    <h6>Map View:</h6>
                    <iframe
                      title="Location Map"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: "8px" }}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <button type="submit" className="btn custom-btn w-100 mt-4">
                  Submit Rescue Request
                </button>
              </form>

              <p className="text-center mt-4">
                Are you an NGO?{" "}
                <Link to="/ngo/register" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rescue;