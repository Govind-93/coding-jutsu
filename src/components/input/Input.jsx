import React from "react";
import "./input.scss";

const Input = ({ labelName, type, id }) => {
  return (
    <div className="input__container">
      <label htmlFor={id} className="labels">
        {labelName}
      </label>
      <input className="inputs" type={type} id={id} />
    </div>
  );
};

export default Input;
