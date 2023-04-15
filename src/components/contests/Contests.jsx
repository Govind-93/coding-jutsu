import "./contests.css";
import { quiz } from "./data";
import { useState, useEffect } from "react";

const Question = ({ name, submitted, question, options, answer }) => {
  const [option, setOption] = useState("");
  return (
    <div className="question-container">
      <div className="question">{question}</div>
      <form className="options">
        {options.map((x, i) => {
          return (
            <div className="option">
              <input
                type="radio"
                value={x}
                disabled={option !== x && submitted}
                checked={option === x}
                onChange={(e) => {
                  setOption(e.target.value);
                  console.log(e.target.value);
                }}
                name={name}
                id={`${name}option${i}`}
                className={`${submitted && "submitted"} ${
                  option === answer ? "correct" : "wrong"
                }`}
              />
              <label
                htmlFor={`${name}option${i}`}
                className={`${submitted && "submitted"} ${
                  option === answer ? "correct" : "wrong"
                }`}
              >
                {x}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

const getQuestions = (n) => {
  let a = [...quiz.keys()];
  while (a.length > n) {
    let i = Math.floor(Math.random() * a.length);
    a[i] = a.slice(-1);
    a.pop();
  }
  return a.map((i) => quiz[i]);
};

const Quiz = () => {
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(getQuestions(5));
  }, []);

  return (
    <div className="quiz">
      <h2 className="quiz-heading">C++ Quiz</h2>
      {questions.map((x, i) => {
        return <Question {...x} name={`question${i}`} submitted={submitted} />;
      })}
      <button
        className={`quiz-submit ${submitted && "submitted"}`}
        onClick={() => setSubmitted(true)}
      >
        SUBMIT
      </button>
    </div>
  );
};

function Contests() {
  return <Quiz />;
}

export default Contests;
