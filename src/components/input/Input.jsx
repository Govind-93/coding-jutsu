import React from "react";
import "./input.scss";

const Input = ({ labelName, type, id, required = false }) => {
  return (
    <div className="input__container">
      <label htmlFor={id} className="labels">
        {labelName}
        {required && (
          <span style={{ paddingInline: "2px", color: "red" }}>*</span>
        )}
      </label>
      <input className="inputs" type={type} id={id} />
    </div>
  );
};

export default Input;
