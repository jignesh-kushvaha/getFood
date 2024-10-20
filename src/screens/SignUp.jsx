import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [userData,setUserData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const navigate = useNavigate();


  const handleOnChangeData = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
  }

  const handleSubmitData = async (e) => {
      e.preventDefault();
      // try {
        const response = await fetch("http://localhost:5000/api/createuser",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
        const result = await response.json()
        
        if(result.success){
          alert("send successfully...");
          console.log("send successfully");
          setUserData({
            name: "",
            email: "",
            password: "",
            location: "",
          });
          navigate('/login',{replace: true});
        }

          
      // } catch (error) {
      //   console.log("error -- ",error)
      // }

      
      
  }


  return (
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
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form onSubmit={handleSubmitData}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">
                          Your Name
                        </label>
                        <input
                          name="name"
                          value={userData.name}
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          onChange={handleOnChangeData}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Your Email
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
                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="location"
                        >
                         location
                        </label>
                        <input
                          name="location"
                          value={userData.location}
                          type="text"
                          id="location"
                          className="form-control form-control-lg"
                          onChange={handleOnChangeData}
                        />                        
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
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
  );
}

export default SignUp;
