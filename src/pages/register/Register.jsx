import React from "react";
import "./register.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Input from "../../components/input/Input";

const Register = () => {
  return (
    <div className="register__container">
      <div className="register__card card">
        <div className="image__container">
          <img src={Logo} alt="logo"></img>
        </div>

        <h1 className="text-center">Create Account</h1>

        <form className="register__form" action="">
          <Input labelName="User Name" id="user__name" type="text" />

          <Input labelName="Email" id="email" type="email" />

          <Input labelName="Password" id="password" type="password" />

          <Input
            labelName="Confirm Password"
            id="confirm__password"
            type="password"
          />

          <div className="buttons">
            <Link to={`/login`}>
              <button className="btn text-center" type="submit">
                Sign up
              </button>
            </Link>
          </div>

          <div className="partition">
            <div className="partition__line"></div>
            <span>OR</span>
            <div className="partition__line"></div>
          </div>

          <div className="register__option">
            <span>Already have account ? </span>
            <span className="sign__in__link">
              <Link to={`/login`}> Sign In </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
