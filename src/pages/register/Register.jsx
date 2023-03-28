import React from 'react'
import './register.scss'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className="register__container">

      
        

        <div className="register__card card">

        <div className="image__container">
        <img src={Logo} alt='logo' ></img>
        </div>

          <h1 className='text-center'>Create Account</h1>

          <form className='register__form' action="">

            <div className="input__container">
              <label htmlFor="" className="labels">User Name</label>
              <input className='inputs' type="text" />
            </div>

            <div className="input__container">
              <label htmlFor="" className="labels">Email</label>
              <input className='inputs' type="text" />
            </div>

            <div className="input__container">
              <label htmlFor="" className="labels">Password</label>
              <input className='inputs' type="password" />
            </div>

            <div className="input__container">
              <label htmlFor="" className="labels">Confirm Password</label>
              <input className='inputs' type="password" />
            </div>

            <div className="buttons">
            <button className='btn text-center' type='submit'>Sign up</button>
            </div>


            <div className='partition'>
                <div className="partition__line"></div>
                <span>OR</span>
                <div className="partition__line"></div>
            </div>

            <div className='register__option'>
              <span>Already have account ? </span>
              <span className='sign__in__link'>
                <Link to={`/login`}> Sign In </Link>

                 </span>
            </div>

          </form>

        </div>
      

    </div>
  )
}

export default Register;
