import './ChangePassword.css';
// import '../../styles/adminTheme.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ngoApi } from '../../apiurl';
import { useNavigate } from 'react-router-dom';
function ChangePassword() {
  const navigate = useNavigate();
  const [output, setOutput] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  //const [adminDetail,setAdminDetail] = useState([]);
  // const pass = localStorage.getItem('password');
  const email = localStorage.getItem('email');

  const changePass = (oldPassword, newPassword, confirmPassword) => {
    axios.get(ngoApi + "fetch?email=" + localStorage.getItem('email') + "&password=" + oldPassword).then((response) => {

      if (newPassword == confirmPassword) {
        var updateDetail = { "condition_obj": { "email": email }, "content_obj": { "password": newPassword } }
        axios.patch(ngoApi + "update", updateDetail).then((response) => {
          alert("updated successfully")
          localStorage.setItem("password", newPassword);
          navigate("/admin");
        }).catch((error) => {
          console.log(error);
          alert("not updated")

        })
      }
      else {
        setOutput("new password not match with confirm password");

        setNewPassword("");
        setConfirmPassword("");

      }
    }).catch((err)=>{
      alert("old password not match,admin not found");
      setNewPassword("");
      setConfirmPassword("");
      setOldPassword("");

    })
      
  }






return (
  <>
    
    {/* <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div class="container about px-lg-0">
        <div class="col-lg-12 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
          <div class="p-lg-5 pe-lg-0">
            <font style={{ "color": "blue" }}>{output}</font>
            <h1>Change Password!!!!</h1>
            <form>

              <br />
              <h3></h3>
              <div class="form-group">
                <label for="pwd">Old Password:</label>
                <input type="password" class="form-control" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
              </div>
              <br />
              <div class="form-group">
                <label for="pwd">New Password:</label>
                <input type="password" class="form-control" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
              </div>

              <br />
              <div class="form-group">
                <label for="pwd">Confirm Password:</label>
                <input type="password" class="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              </div>

              <br />
              <button type="button" class="btn btn-primary" onClick={() => { changePass(oldPassword, newPassword, confirmPassword) }}>Submit</button>
            </form>


          </div>
        </div>
      </div>
    </div> */}
    <div className="section-padding">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-12">
        <div className="custom-form bg-light p-5 rounded shadow-sm">
          <h2 className="mb-4 text-center text-primary">Change Password</h2>

          <font style={{ color: "blue" }}>{output}</font>

          <form>
            {/* Old Password */}
            <div className="form-group mb-3">
              <label htmlFor="oldPassword">Old Password:</label>
              <input
                type="password"
                className="form-control"
                id="oldPassword"
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
              />
            </div>

            {/* New Password */}
            <div className="form-group mb-3">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group mb-4">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="btn custom-btn w-100"
              onClick={() => changePass(oldPassword, newPassword, confirmPassword)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

   
  </>
)
}


export default ChangePassword;