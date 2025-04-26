import React from "react";
import "./drawer.scss";
import Input from "../input/Input";

const Drawer = ({ open, title, closeDrawerHandler }) => {
  const handleOverlayClick = (event) => {
    // Prevent background clicks from triggering the drawer close when it's open
    if (open) {
      event.stopPropagation();
    }
  };
  return (
    <div className="drawer__container" onClick={handleOverlayClick}>
      <div className="drawer">
        <div className="drawer__header">
          <div className="header__title">{title}</div>
          <i class="uil uil-times" onClick={closeDrawerHandler}></i>
        </div>
        <div className="drawer__body">
          <Input required={true} labelName="Title" type="text" id="name" />
          <Input labelName="Tags" type="text" id="name" />
          <div className="input__container text-area">
            <label for="message" className="labels">
              Description
              {true && (
                <span style={{ paddingInline: "2px", color: "red" }}>*</span>
              )}
            </label>
            <textarea
              id="message"
              rows="10"
              className="contact__input"
            ></textarea>
          </div>
        </div>
        <div className="drawer__footer">
          <div className="btns">
            <button type="reset" className="reset btn">
              <i class="uil uil-redo"></i>
              Reset
            </button>
            <button type="submit" className="submit btn">
              Submit
              <i className="uil uil-message"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
