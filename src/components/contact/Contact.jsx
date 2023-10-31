import React from "react";
import "./contact.scss";
import Input from "../input/Input";

const Contact = () => {
  return (
    <section className="section contact">
      <h1 className="section__title text-center">Contact us</h1>
      <span className="section__subtitle text-center">
        Have query or suggestion ?
      </span>

      <div className="contact-form__container">
        <form action="" className="contact__form">

          <Input labelName="Name" type="text" id="name"/>

          <div className="input__container text-area">
            <label for="message" className="labels">
              Message
            </label>
            <textarea
              id="message"
              rows="10"
              className="contact__input"
            ></textarea>
          </div>

          <Input labelName="Email" id="email" type="email" />

          <Input labelName="Subject" id="subject" type="text" />

          <div className="contact__submit-btn">
            <button type="submit">
              Send Message
              <i className="uil uil-message"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
