// import './Register.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Register() {
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [mobile, setmobile] = useState('');
//   const [address, setaddress] = useState('');
//   const [pincode, setpincode] = useState('');
//   const [city, setcity] = useState('');
//   const [output, setoutput] = useState('');
// const handleSubmit=()=>{

// }

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (!name) return setoutput("Name is required");
//   //   if (!email) return setoutput("Email is required");
//   //   if (!mobile) return setoutput("Mobile is required");
//   //   if (!address) return setoutput("Address is required");
//   //   if (!city) return setoutput("City is required");
//   //   if (!pincode) return setoutput("Pincode is required");
//   //   if (!password || password.length < 5 || password.length > 10)
//   //     return setoutput("Password must be 5–10 characters");

//   //   const userDetail = { name, email, password, mobile, pincode, address, city };

//   //   axios.post("http://localhost:3001/user/save", userDetail)
//   //     .then(() => {
//   //       setoutput("Registration successful ✅");
//   //       setname('');
//   //       setemail('');
//   //       setpassword('');
//   //       setmobile('');
//   //       setaddress('');
//   //       setpincode('');
//   //       setcity('');
//   //     })
//   //     .catch(() => setoutput("Not registered ❌"));
//   // };

//   return (
//     <>
//       <section className="section-padding">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 col-12">
//               <div className="custom-form bg-light p-5 rounded shadow-sm">
//                 <h2 className="mb-4 text-center text-primary">NGO Register</h2>

//                 <p className="text-danger text-center">{output}</p>

//                 <form onSubmit={handleSubmit} className="custom-form">
//                   <div className="form-group mb-3">
//                     <label htmlFor="name">Name</label>
//                     <input type="text" className="form-control" id="name" value={name} onChange={e => setname(e.target.value)} />
//                   </div>

//                   <div className="form-group mb-3">
//                     <label htmlFor="email">Email address</label>
//                     <input type="email" className="form-control" id="email" value={email} onChange={e => setemail(e.target.value)} />
//                   </div>

//                   <div className="form-group mb-3">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" id="password" value={password} onChange={e => setpassword(e.target.value)} />
//                   </div>

//                   <div className="form-group mb-3">
//                     <label htmlFor="mobile">Mobile</label>
//                     <input type="text" className="form-control" id="mobile" value={mobile} onChange={e => setmobile(e.target.value)} />
//                   </div>

//                   <div className="form-group mb-3">
//                     <label htmlFor="address">Address</label>
//                     <textarea className="form-control" id="address" value={address} onChange={e => setaddress(e.target.value)}></textarea>
//                   </div>

//                   <div className="form-group mb-3">
//                     <label htmlFor="city">City</label>
//                     <select className="form-control" id="city" value={city} onChange={e => setcity(e.target.value)}>
//                       <option value="">Select City</option>
//                       <option>Indore</option>
//                       <option>Ujjain</option>
//                       <option>Dewas</option>
//                     </select>
//                   </div>

//                   <div className="form-group mb-4">
//                     <label htmlFor="pincode">Pincode</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="pincode"
//                       value={pincode}
//                       onChange={e => setpincode(e.target.value)}
//                     />
//                   </div>

//                   <button type="submit" className="btn custom-btn w-100">
//                     Submit Registration
//                   </button>
//                 </form>
//                 <p className="text-center mt-4">
//                 Already registered?{" "}
//                 <Link to="/login" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
//                   Login here
//                 </Link>
//               </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

import axios from 'axios';

function Register() {
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [mobile, setmobile] = useState(null);
  const [address, setaddress] = useState(null);
  const [pincode, setpincode] = useState(null);
  const [city, setcity] = useState(null);
  const [output, setoutput] = useState();


  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   address: "",
  //   password: "",
  //   pincode: "",
  //   city: "",
  // });

  const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(name);
    if (name == null) {
      setoutput("name is required");
    }
    else if (email == null) {
      setoutput("email is required");
    }
    else if (mobile == null) {
      setoutput("mobile is required");
    }
    else if (address == null) {
      setoutput("address is required");
    }
    else if (city == null) {
      setoutput("city is required");
    }
    else if (pincode == null) {
      setoutput("pincode is required");
    }
     else if (password == null) {
      setoutput("password is required");
    }
    else if (password.length < 5 || password.length > 10) {
      setoutput("password length  required");
    }
   
    else {


      const ngoDetail = { "name": name, "email": email, "password": password, "mobile": mobile, "pincode": pincode, "address": address, "city": city }
      axios.post("http://localhost:3001/ngo/save", ngoDetail).then((response) => {
        // setoutput(" registeration successfully");
        setSubmitted(true);
        setaddress("");
        setname("");
        setemail("");
        setmobile("");
        setpincode("");
        setcity("");
        setpassword("");

      }).catch((error) => {
        alert("not registerd");
      });
    }
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="custom-form bg-light p-5 rounded shadow-sm">
              <h2 className="mb-4 text-center text-primary">Register Your NGO</h2>

              {submitted && (
                <div
                  className="text-center mb-4"
                  style={{
                    backgroundColor: "#d1ecf1",
                    color: "#0c5460",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    fontWeight: 600,
                  }}
                >
                  ✅ Registration successful. Approval pending from admin.
                </div>
              )}
              <font style={{"color":"red"}}>{output}</font>
              <form onSubmit={handleSubmit} className="custom-form">

                <div className="form-group">
                  <label htmlFor="name">Organization Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="🏢 NGO name"
                    required
                    value={name}
                    onChange={e => setname(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="📧 Email"
                    required
                    value={email}
                    onChange={e => setemail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="📱 Mobile number"
                    required
                    value={mobile}
                    onChange={e => setmobile(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="📍 Address"
                    required
                    value={address}
                    onChange={e => setaddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    placeholder="🏷️ Enter your area pincode"
                    required
                    value={pincode}
                    onChange={e => setpincode(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select
                    className="form-control"
                    id="city"
                    name="city"
                    required
                    value={city}
                    onChange={e => setcity(e.target.value)}
                    style={{ borderRadius: "10px", padding: "12px 18px", fontSize: "16px" }}
                  >
                    <option value="" disabled selected hidden>📍 Select your city</option>
                    <option value="Indore">Indore</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Dewas">Dewas</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Jabalpur">Jabalpur</option>
                    <option value="Rewa">Rewa</option>
                  </select>
                </div>



                <div className="form-group">
                  <label htmlFor="password">Create Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="🔒 Password"
                    required
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn custom-btn w-100 mt-4">
                  Register
                </button>
              </form>

              <p className="text-center mt-4">
                Already registered?{" "}
                <Link to="/login" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;