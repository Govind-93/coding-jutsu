import code_logo from "../assets/code.png";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {lesson_md} from "../data";

function Module({ name, lessons, moduleNumber, courseLink }) {
  const heightOf = (e) => {
    if (typeof e === "string") {
      e = document.querySelector(e);
    }
    let h = 0;
    let s = window.getComputedStyle(e);
    h += parseFloat(s["marginTop"]);
    h += parseFloat(s["marginBottom"]);
    h += e.offsetHeight;
    return Math.ceil(h);
  };

  const id = `module${moduleNumber}`;

  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({});
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      let h = 0;
      for (let x of document.querySelectorAll(`#${id} .module-lesson`)) {
        h += heightOf(x);
      }
      setStyle({ height: h + "px" });
      document.querySelector(`#${id}`).scrollIntoView(false);
    } else {
      setStyle({ height: "0px" });
    }
  }, [isOpen]);

  return (
    <div id={id}>
      <a href="#" onClick={(e) => e.preventDefault()}>
        <div className="header" onClick={toggle}>
          <div>
            <img src={code_logo} alt="" />
          </div>
          <h3>{name}</h3>
        </div>
      </a>
      <div className="lessons" style={style}>
        {lessons.map((text) => (
          <div className="module-lesson">
            <div>
              <div className="line"></div>
              <div className="dot"></div>
            </div>
            {text && (
              <p
                onClick={() =>
                  navigate(`/resources/${courseLink}/lesson`, {
                    state: { name: "Welcome to C++", text: lesson_md },
                  })
                }
              >
                {text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Module;
