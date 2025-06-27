import './Login.css';
// import Test from '../TestComponent/Test';
import { useState } from 'react';
import axios from 'axios';
import { ngoApi } from '../../apiurl';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [output, setoutput] = useState();

  const handleSubmit = () => {
    if(email==null){
      setoutput("email is reqired");
    }
    else if(password==null){
      setoutput("password is reqired");
    }
    else{

      const ngoDetail = { email: email, password: password };
      //Writing web service using axios tool
  
      axios.post(ngoApi + "login", ngoDetail).then((response) => {
  
        const ngoDetail = response.data.ngoList;
        //  console.log(ngoDetail);
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("name", ngoDetail.name)
        localStorage.setItem("email", ngoDetail.email)
        localStorage.setItem("password", ngoDetail.password)
        localStorage.setItem("pincode", ngoDetail.pincode)
        localStorage.setItem("city", ngoDetail.city)
        localStorage.setItem("mobile", ngoDetail.mobile)
        localStorage.setItem("address", ngoDetail.address)
        localStorage.setItem("role", ngoDetail.role)
        localStorage.setItem("_id", ngoDetail._id)
        if (ngoDetail.role == "ngo") {
          navigate("/ngo");
  
        } else {
          navigate("/admin");
        }
      }).catch((error) => {
        setoutput("incorrect email address or password");
        setemail("");
        setpassword("");
      });
    }

  }
  return (
    <>
      {/* <div id='Login'>
        <h1>Login</h1>
        
        {/* <p>c={props.c}</p>
        <Test a= {a} b={b}/> 
       </div> */}
      {/* <div id='Login'>
            <font style={{"color":"blue"}}>{output}</font>
            <h1>Login</h1>;
            <form>
          
          
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" value={email} onChange={e=>setemail(e.target.value)}/>
          </div>
          <br/>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" value={password} onChange={e=>setpassword(e.target.value)}/>
          </div>
          
          <button type="button" class="btn btn-success" onClick={handleSubmit}>Login</button>
        </form>
        </div> */}


      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="custom-form bg-light p-5 rounded shadow-sm">
                <h2 className="mb-4 text-center text-primary">NGO Login</h2>
                 <font style={{"color":"red"}}>{output}</font>
                <form>


                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required value={email} onChange={e => setemail(e.target.value)} />
                  </div>
                  <br />
                  <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id='password' placeholder="🔒 Enter your password"
                      required value={password} onChange={e => setpassword(e.target.value)} />
                  </div>

                  <button type="button" className="btn custom-btn w-100 mt-4" onClick={handleSubmit}>Login</button>
                </form>

                {/* Redirect to Register */}
                <p className="text-center mt-4">
                  Don`t have an account?{" "}
                  <Link to="/register" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;