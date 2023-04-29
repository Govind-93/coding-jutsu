import "./lesson.css";
import { useParams } from "react-router-dom";
import Article from "../../article/Article";
import { lessons, lesson_md } from "../data";

function Lesson() {
  const { lessonLink: link } = useParams();

  let lesson = lessons.find((x) => x.id == link);

  if (!lesson) {
    lesson = lesson_md;
  }

  return (
    <div className="lesson">
      <h1 className="heading">{lesson?.name}</h1>
      <Article>{lesson?.text}</Article>
    </div>
  );
}

export default Lesson;
