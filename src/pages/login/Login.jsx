import React from 'react'
import './login.scss'
import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login__container">

      

      
        <div className="login__card card">

        <div className="image__container">
        <img src={Logo} alt="logo" ></img>
        </div>
        

          <h1 className='text-center'>Login</h1>

          <form className='login__form' action="">

            <div className="input__container">
              <label htmlFor="" className="labels">User Name</label>
              <input className='inputs' type="text" />
            </div>

            <div className="input__container">
              <label htmlFor="" className="labels">Password</label>
              <input className='inputs' type="password" />
            </div>

            <div className="buttons">
            <Link to={`/`}><button className='btn text-center' type='submit'> Sign in </button></Link>
            </div>

            <div className='forget__button'>
                Forgot Password ?
            </div>

            <div className='partition'>
                <div className="partition__line"></div>
                <span>OR</span>
                <div className="partition__line"></div>
            </div>

            <div className='register__option'>
              <span>Do not have account ? </span>
              <span className='create__account__link'>
                 <Link to={`/register`}> Sign Up </Link>
                 </span>
            </div>

          </form>

        </div>
      

    </div>
  )
}

export default Login

