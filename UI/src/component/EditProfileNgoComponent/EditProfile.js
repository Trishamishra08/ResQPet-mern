import './EditProfile.css';
// import '../../styles/adminTheme.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ngoApi } from '../../apiurl';
import { useNavigate } from 'react-router-dom';
function EditProfileNgo() {
  const navigate = useNavigate();
  const [name, setname] = useState("");

  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [city, setcity] = useState("");
  const [output, setoutput] = useState();
  const email = localStorage.getItem('email');

  useEffect(() => {
    axios.get(ngoApi + `fetch?email=${email}`).then((res) => {
     console.log("Fetched NGO data:", res.data);
      const ngo = res.data.ngo[0];
      setname(ngo.name);
      setmobile(ngo.mobile);
      setaddress(ngo.address);
      setcity(ngo.city);
      setpincode(ngo.pincode);
    }).catch((err) => {
      console.log("Error fetching NGO details", err);
    });
  }, []);


  const handleSubmit = () => {
    var updateDetail = { "condition_obj": { "email": email }, "content_obj": { "name": name, "city": city, "pincode": pincode, "address": address, "mobile": mobile } }
    axios.patch(ngoApi + "update", updateDetail).then((response) => {
      alert("updated successfully")

      navigate("/ngo");
    }).catch((error) => {
      console.log(error);
      alert("not updated")

    })
  }

  return (
    <>
      
      <div className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="custom-form bg-light p-5 rounded shadow-sm">
                <h2 className="mb-4 text-center text-primary">Edit Profile</h2>

                <font style={{ color: "blue" }}>{output}</font>

                <form className="custom-form">
                  {/* Name */}
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                       placeholder='Enter Your Name'
                      value={name}
                      onChange={e => setname(e.target.value)}
                    />
                  </div>

                  {/* Mobile */}
                  <div className="form-group mb-3">
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='📱Enter Mobile Number'
                      value={mobile}
                      onChange={e => setmobile(e.target.value)}
                    />
                  </div>

                  {/* Address */}
                  <div className="form-group mb-3">
                    <label htmlFor="address">Address:</label>
                    <textarea
                      className="form-control"
                      placeholder='📍Enter Address'
                      value={address}
                      onChange={e => setaddress(e.target.value)}
                    ></textarea>
                  </div>

                  {/* City */}
                  <div className="form-group mb-3">
                    <label htmlFor="city">City:</label>
                    <select
                      className="form-control"
                      value={city}
                      onChange={e => setcity(e.target.value)}
                      style={{ borderRadius: "10px", padding: "12px 18px", fontSize: "16px" }}
                    >
                      <option value="">📍 Select your city</option>
                      <option>Indore</option>
                      <option>Ujjain</option>
                      <option>Dewas</option>
                    </select>
                  </div>

                  {/* Pincode */}
                  <div className="form-group mb-3">
                    <label htmlFor="pincode">Pincode:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={pincode}
                      onChange={e => setpincode(e.target.value)}
                      placeholder="🏷️ Enter your area pincode"
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="button" className="btn custom-btn w-100" onClick={handleSubmit}>
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditProfileNgo;