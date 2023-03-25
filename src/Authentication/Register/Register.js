import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='auth'>
     <div className="d-flex justify-content-center">
            <div className="card register-card">
                <div className="card-body">
                <div className="d-flex justify-content-center">
                <h5 className="card-title login-text">Register</h5>
                </div>
                <form>
                <div class="form-group">
                    <label className="form-label login-text">Name</label>
                    <input type="text" className="form-control"   name="name"  placeholder="Enter Name"/>
                </div>
                <br/>
                <div className="form-group">
                    <label className="form-label login-text">Email</label>
                    <input type="email" className="form-control"  name="email"  placeholder="Enter email"/>
                </div>
                <br />
                <div class="form-group">
                    <label className="form-label login-text">Password</label>
                    <input type="password" className="form-control"   name="password" placeholder="Password"/>
                </div>
                <br />
                <div className="form-group">
                    <label className="form-label login-text">Confirm Password</label>
                    <input type="password" className="form-control"    name="password2" placeholder="Re Type Your Password"/>
                </div>
                <br />
                <div className="d-grid">
                <button type="submit"  className="btn" style={{backgroundColor:'#282A36', color:'#ffffff'}}>Register</button>
                </div>
             </form>
          </div>
        </div>
        </div>
  </div>
  )
}

export default Register