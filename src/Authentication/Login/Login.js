import { Link } from "react-router-dom";
import "./Login.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { URL } from '../../utilities/config';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const loginData = {};
    loginData.email = email;
    loginData.password = password;

    try {
      setLoading(true);
      const { data } = await axios.post(`${URL}/login`, loginData);
      if (data) {
        setLoading(true);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.data.token);
        window.location.href = "/";
      }
    } catch (error) {
      setLoading(false);
      setErrormsg(error.response.data);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="auth">
      <div className="container d-flex justify-content-center">
        <div className="card login-card">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <h5 className="card-title login-text">Login</h5>
            </div>
            <form onSubmit={submitHandler}>
              <h2 className="text-center">Data Workspace</h2>

              <h5 className="d-flex justify-content-center">
                {loading ? (
                  <p>Please Wait.....</p>
                ) : (
                  <p>Sign in to your account</p>
                )}
              </h5>
              {errormsg && (
                <p
                  style={{ color: "red" }}
                  className="d-flex justify-content-center"
                >
                  {errormsg}
                </p>
              )}
              <div className="form-group">
                <label className="form-label login-text">Email</label>
                <input
                  type="email"
                  className="form-control input"
                  name="email"
                  autoComplete="true"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label className="form-label login-text">Password</label>
                <input
                  type="password"
                  className="form-control input"
                  name="password"
                  autoComplete="true"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br />
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn login-btn"
                  style={{ backgroundColor: "#282A36", color: "#ffffff" }}
                >
                  Login
                </button>
              </div>
              <p className="mt-4 d-flex justify-content-center register-rqst">
                <span style={{ color: "#ffff" }}>New user?</span>{" "}
                <Link to={"/register"}>Please Register</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
