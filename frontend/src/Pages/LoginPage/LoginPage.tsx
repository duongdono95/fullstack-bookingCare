import React, { useEffect, useState } from 'react';
import { initialLoginInputs } from '../../utils/constants';
import './LoginPage.scss';
const LoginPage = () => {
  const [loginInputs, setLoginInputs] = useState(initialLoginInputs);
  console.log(loginInputs);
  useEffect(() => {
    setLoginInputs(loginInputs);
  }, [loginInputs]);
  return (
    <div className="login-page">
      <form action="" className="login-form">
        <i className="fa-solid fa-circle-xmark"></i>
        <div className="login-form--top">
          <h2>User Login</h2>
          <div className="form-group email">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              required
              placeholder="Eg: abc@gmail.com"
              value={loginInputs.email}
              onChange={(e) => setLoginInputs({ ...loginInputs, email: e.target.value })}
            />
          </div>
          <div className="form-group password">
            <label htmlFor="">password:</label>
            <input
              type="password"
              required
              value={loginInputs.password}
              onChange={(e) => setLoginInputs({ ...loginInputs, password: e.target.value })}
            />
          </div>
          <div className="form-item">
            <p className="forgot-password-link">Forgot password?</p>
          </div>
          <div className="form-item">
            <button className="primary-btn">LOGIN</button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="login-form--bottom">
          <h4>Login With: </h4>
          <div className="icons-group">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-google-plus"></i>
          </div>
          <div className="divider"></div>
          <div className="form-item">
            <button className="secondary-btn">Don't have an account?</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
