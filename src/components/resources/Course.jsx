import "./course.css";
import code_logo from "./assets/code.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import data from "./data";

function Course() {
  const { courseLink } = useParams();

  const { name, modules } = data.find((x) => {
    return x.link === courseLink;
  });

  const Padding = () => {
    return (
      <div className="padding">
        <div className="line"></div>
      </div>
    );
  };

  return (
    <div className="course">
      <h1 className="course-heading">{name}</h1>
      {modules.map((x, i, a) => (
        <>
          {<Module {...x} moduleNumber={i} />}
          {i + 1 !== a.length && <Padding />}
        </>
      ))}
    </div>
  );
}

function Module({ name, lessons, moduleNumber }) {
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

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      let h = 0;
      for (let x of document.querySelectorAll(`#${id} .lesson`)) {
        h += heightOf(x);
      }
      setStyle({ height: h + "px" });
      document.querySelector(`#${id}`).scrollIntoView(false);
    } else {
      setStyle({ height: "0px" });
    }
  }, [isOpen]);

  const Header = ({ logo, text }) => {
    return (
      <div className="header" onClick={toggle}>
        <div>
          <img src={logo} alt="" />
        </div>
        <h3>{text}</h3>
      </div>
    );
  };

  const Lesson = ({ text }) => {
    return (
      <div className="lesson">
        <div>
          <div className="line"></div>
          <div className="dot"></div>
        </div>
        {text && <p>{text}</p>}
      </div>
    );
  };

  return (
    <div id={id}>
      <a href="#" onClick={(e) => e.preventDefault()}>
        <Header logo={code_logo} text={name} />
      </a>
      <div className="lessons" style={style}>
        {lessons.map((x) => (
          <Lesson text={x} />
        ))}
      </div>
    </div>
  );
}

export default Course;
