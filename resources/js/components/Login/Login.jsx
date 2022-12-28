import React from 'react'
import './Login.css'
export const Login = () => {
  return (

    <div className="   gradient-custom">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-5">
          <div className="card  mt-3  mb-3"    style={{borderRadius: "1rem"}} >
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className=" mb-5">Please enter your login and password!</p>
  
                <div className="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email'/>
                
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Password'/>
                
                </div>
  
  
                <button className="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>
  
                {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-black"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" className="text-black"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" className="text-black"><i className="fab fa-google fa-lg"></i></a>
                </div> */}
  
              </div>
  
            
  
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
