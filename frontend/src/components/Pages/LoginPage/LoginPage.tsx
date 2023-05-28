import React, { useEffect, useState } from 'react';
import { initialLoginInputs } from '../../../utils/constants';
import './LoginPage.scss';
import { userLogin } from '../../../services/userServices';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../../redux/appSlice';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';

type userLoginResponse = {
  errCode: number;
  errMessage: string;
  data?: any;
};

const LoginPage = () => {
  const [loginInputs, setLoginInputs] = useState(initialLoginInputs);
  const { email, password } = loginInputs;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLoginRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    e.preventDefault();
    const userEmail = loginInputs.email;
    const userPassword = loginInputs.password;
    try {
      let data = await userLogin(userEmail, userPassword);
      if (data.errCode === 0) {
        dispatch(loginSuccess());
      } else {
        setLoginError(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/system');
    } else navigate('/login');
  }, [isLoggedIn]);
  return (
    <div className="login-page">
      <form action="" className="login-form" onSubmit={handleLoginRequest}>
        <i className="fa-solid fa-circle-xmark"></i>
        <div className="login-form--top">
          <h2>User Login</h2>
          <p className="error-message">{loginError && 'Incorrect Username or Password'}</p>
          <div className="form-group email">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Eg: abc@gmail.com"
              value={email}
              onChange={inputOnChange}
              onFocus={() => setLoginError(false)}
            />
          </div>
          <div className="form-group password">
            <label htmlFor="">password:</label>
            <div className="password-input-field">
              <input
                type={isShowPassword ? 'text' : 'password'}
                name="password"
                required
                value={password}
                onFocus={() => setLoginError(false)}
                onChange={inputOnChange}
              />
              <span onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            </div>
          </div>
          <div className="form-item">
            <p className="forgot-password-link">Forgot password?</p>
          </div>
          <div className="form-item">
            <button className="primary-btn" type="submit">
              LOGIN
            </button>
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
