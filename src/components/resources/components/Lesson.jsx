import "./lesson.css";
import { useLocation } from "react-router-dom";
import Article from "../../article/Article";

function Lesson() {
  const { state } = useLocation();

  return (
    <div className="lesson">
      <h1 className="heading">{state?.name}</h1>
      <Article>{state?.text}</Article>
    </div>
  );
}

export default Lesson;
