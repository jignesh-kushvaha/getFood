import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [userData,setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  
  const handleOnChangeData = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
  }

  const handleSubmitData = async (e) => {
      e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
        const result = await response.json()
        
        if(result.success){
          localStorage.setItem("user", result.id);
          localStorage.setItem("authToken", result.authToken);
          setUserData({
            email: "",
            password: ""
          });
          // navigate('/',{replace: true});  replaces the current page in the history stack
          navigate('/'); // add the current page in the history stack 
        }
  }

  return (
   <>
     <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-3">
                      Login
                    </h2>
                    <form onSubmit={handleSubmitData}>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          name="email"
                          value={userData.email}
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          onChange={handleOnChangeData}
                        />                                     
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          name="password"
                          value={userData.password}
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          onChange={handleOnChangeData}
                        />                        
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-primary text-white btn-block btn-lg gradient-custom-4"
                        >
                          Login
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Don't have an account?{" "}
                        <Link to="/signup" className="fw-bold text-body">
                          <u>Sign up here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
   </>
  )
}

export default Login
