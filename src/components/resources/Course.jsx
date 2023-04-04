import "./course.css";
import code_logo from "./assets/code.png";
import { useState,useEffect } from "react";

function Course() {
  const Padding = () => {
    return (
      <div className="padding">
        <div className="line"></div>
      </div>
    );
  };

  return (
    <div className="course">
      <h1 className="course-heading">Learn DSA</h1>
      {data.map((x, i, a) => (
        <>
          {<Module {...x} moduleNumber={i} />}
          {i + 1 !== a.length && <Padding />}
        </>
      ))}
    </div>
  );
}

function Module({ lessons, moduleNumber }) {
  
  const id = `module${moduleNumber}`
  
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({});

  let handle = null

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
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
  
  useEffect(() => {
    if (isOpen) {
      let h = 0;
      for (let x of document.querySelectorAll(`#${id} .lesson`)) {
        h += heightOf(x);
      }
      h += "px";
      setStyle({ height: h });
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
  console.log(style)
  return (
    <div id={id}>
      <a href="#">
        <Header logo={code_logo} text={"Segment Tree"} />
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

const data = [
  {
    lessons: [
      "invenireere porro",
      "invenireanum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire tincidunt scripserit frinicus efficitur meliore unum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
    ],
  },
  {
    lessons: [
      "invenireere porro",
      "invenireanum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire tincidunt scripserit frinicus efficitur meliore unum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire tincidunt scripserit frinicus efficitur meliore unum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
    ],
  },
  {
    lessons: [
      "invenireere porro",
      "invenireanum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
    ],
  },
];
