import "./course.css";
import code_logo from "./assets/code.png";
import { useState } from "react";

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
      {mod.map((x, i, a) => (
        <>
          {x}
          {i + 1 !== a.length && <Padding />}
        </>
      ))}
    </div>
  );
}

function Module() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const Header = ({ logo, text }) => {
    return (
      <div className="header" onClick={toggle}>
        <div>
          <img src={logo} alt="" />
        </div>
        <h2>{text}</h2>
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
    <div className="module">
      <a href="#">
        <Header logo={code_logo} text={"Segment Tree"} />
      </a>
      {isOpen && (
        <div className="lessons">
          {arr.map((x) => (
            <Lesson text={x} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Course;

var mod = [<Module />, <Module />];

var arr = [
  ["invenireere porro"],
  [
    "invenireanum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
  ],
  [
    "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
  ],
  [
    "invenire tincidunt scripserit frinicus efficitur meliore unum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
  ],
];
