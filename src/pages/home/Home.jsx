import React from 'react'
import Typewriter from 'typewriter-effect'
import './home.scss'
import HomeImage from '../../assets/home__img.png'
import WhiteLogo from '../../assets/logo_bw.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

      <section className='section home' id='home'>
        <div className="home__container">
          <div className="home__left">
            <div className="home__data">
              <h1 className="title">Welcome to <span id="text__coding">Coding </span><span id="text__jutsu"><Typewriter
              className="Typewriter"
              options={{
                loop: true,
              }}
                onInit={(typewriter) => {

                  typewriter

                    .typeString("Jutsu")
                    .pauseFor(1500)
                    .deleteAll(100)
                    .typeString("World")
                    .pauseFor(2000)
                    .start();
                }}
              /></span></h1>
              <h3 className="subtitle">Learn, help, share </h3>
              <p className="description">A platform for coding geeks to discuss their doubts, share acheivements and resources.</p>
              <div className="btns">
                <Link to="/feeds"> <button type='submit' className="explore__feeds btn">Explore Feeds</button> </Link>
                <Link to="/discuss"><button type='submit' className="explore__discuss btn">Explore Discuss</button></Link>
              </div>
            </div>
          </div>

          <div className="home__image">
            <img src={HomeImage} alt="" className="home__img" />
          </div>
        </div>
      </section>

      <section className="section features" id='features'>
        <h1 className='section__title text-center'>
          <i className="uil uil-apps icon"></i>
          Features
        </h1>
        <div className="features__container">


          <div className="feature card">
            <div className="feature__icon" >
              <i className="uil uil-postcard"></i>
            </div>
            <div className="feature__title">
              <h3>Feeds for you</h3>
            </div>
            <div className="feature__content">
              <p>Share your acheivements, experiences with others and show your passion toward programming .</p>
            </div>
          </div>

          <div className="feature card" >
            <div className="feature__icon" >
              <i className="uil uil-comments"></i>
            </div>
            <div className="feature__title">
              <h3>Doubt Discussion</h3>
            </div>
            <div className="feature__content">
              <p>Have doubts, got stuck ? Don't worry, we have discussion section where you can post/solve the doubts. </p>
            </div>
          </div>

          <div className="feature card">
            <div className="feature__icon" >
              <i className="uil uil-books"></i>
            </div>
            <div className="feature__title">
              <h3>Curated Resources</h3>
            </div>
            <div className="feature__content">
              <p>
                Having right resources in hand can increase the learning pace of an individual, so we have curated resources for you.
              </p>
            </div>
          </div>

          <div className="feature card">
            <div className='upcoming__text'>
              Coming Soon
            </div>
            <div className="feature__icon" >
              <i className="uil uil-brackets-curly"></i>
            </div>
            <div className="feature__title">
              <h3>Quiz Battles</h3>
            </div>
            <div className="feature__content">
              <p>
                Sharpen your concepts by participating in one on one quiz battles and showcase your grasp on programming concepts.
              </p>
            </div>
          </div>

          <div className="feature card">
            <div className='upcoming__text'>
              Coming Soon
            </div>
            <div className="feature__icon" >
              <i className="uil uil-window"></i>
            </div>
            <div className="feature__title">
              <h3>Hinglish Articles</h3>
            </div>
            <div className="feature__content">
              <p>
                There is no better way to learn the concepts in your own way. Articles will be in hinglish so that there is no language barrier anymore.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="section contact" >
        <h1 className="section__title text-center">Contact us</h1>
        <span className="section__subtitle text-center">Have query or suggestion ?</span>

        <div className="contact-form__container">

          <form action="" className="contact__form">

            <div className="input__container">
              <label htmlFor="" className="labels">Name</label>
              <input className='inputs' type="text" />
            </div>

            <div className="input__container text-area">
              <label for="" className="labels">Message</label>
              <textarea nam="" id="" cols="0" rows="10" className="contact__input"></textarea>
            </div>

            <div className="input__container">
              <label htmlFor="" className="labels">Email</label>
              <input className='inputs' type="text" />
            </div>

            <div className="input__container">
              <label htmlFor="" className="labels">Subject</label>
              <input className='inputs' type="text" />
            </div>

            <div className="contact__submit-btn">
              <button type='submit'>
                Send Message
                <i className="uil uil-message"></i>
              </button>
            </div>

          </form>


        </div>
      </section>

      <footer className='footer'>
        <div className="footer__container">

          <div className='left'>
            <div className="footer__logo">
              <img src={WhiteLogo} alt="white_logo" />
              <h3 className='text-center'>Learn, help, share.</h3>
            </div>
            <div className="seperator">

            </div>
          </div>



          <div className='mid'>
            <h3>Features</h3>
            <ul>
              <li>Feeds</li>
              <li>Discuss</li>
              <li>Resources</li>
              <li>Quiz Battles</li>
              <li>Hinglish Articles</li>
            </ul>
          </div>


          <div className='right'>
            <h3 className='text-center'>Get in touch</h3>
            <ul>
              <li><i className="uil uil-instagram-alt"></i></li>
              <li><i className="uil uil-discord"></i></li>
              <li><i className="uil uil-envelope"></i></li>
              <li><i className="uil uil-linkedin"></i></li>
              <li><i className="uil uil-telegram"></i></li>
            </ul>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home
