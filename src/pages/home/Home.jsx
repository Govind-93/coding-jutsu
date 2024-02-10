import React from "react";
import Typewriter from "typewriter-effect";
import "./home.scss";
import HomeImage from "../../assets/home__img.png";
import { Link } from "react-router-dom";
import Contact from "../../components/contact/Contact";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <section className="section home" id="home">
        <div className="home__container">
          <div className="home__left">
            <div className="home__data">
              <h1 className="title">
                Welcome to
                <div>
                  <span id="text__coding">Coding </span>
                  <span id="text__jutsu">
                    <Typewriter
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
                    />
                  </span>
                </div>
              </h1>
              <h3 className="subtitle">Learn, help, share </h3>
              <p className="description">
                A platform for coding geeks to discuss their doubts, share
                achievements and resources.
              </p>
              <div className="btns">
                <Link to="/feeds">
                  <button type="submit" className="explore__feeds btn">
                    Explore Feeds
                  </button>
                </Link>
                <Link to="/discuss">
                  <button type="submit" className="explore__discuss btn">
                    Explore Discuss
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="home__image">
            <img src={HomeImage} alt="" className="home__img" />
          </div>
        </div>
      </section>

      <Features />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
