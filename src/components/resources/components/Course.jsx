import "./course.css";
import { useParams, Routes, Route } from "react-router-dom";
import Module from "./Module";
import Lesson from "./Lesson";
import data from "../data";

function Course() {
  const { courseLink } = useParams();

  const { name, modules } = data.find((x) => {
    return x.link === courseLink;
  });

  const CourseLayout = () => (
    <div className="course">
      <h1 className="course-heading">{name}</h1>
      {modules.map((x, i, a) => (
        <>
          {<Module {...x} courseLink={courseLink} moduleNumber={i} />}
          {i + 1 !== a.length && (
            <div className="padding">
              <div className="line"></div>
            </div>
          )}
        </>
      ))}
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<CourseLayout />} />
      <Route path="/:lessonLink" element={<Lesson />} />
    </Routes>
  );
}

export default Course;
