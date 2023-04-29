import "./resources.css";
import Adapter from "./components/Adapter";
import Course from "./components/Course";
import Lesson from "./components/Lesson";
import { Routes, Route } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import data from "./data";

function Resources() {
  const ResourcesLayout = () => (
    <div className="resources">
      <h2>Hello, What are you looking for?</h2>

      <SearchBar
        items={data}
        getKey={(x) => x.name}
        path={(x) => `/resources/${x.link}`}
        placeholder={"search here..."}
      />

      {data.map((x) => (
        <>
          <br />
          <br />
          <br />
          <Adapter {...x} />
        </>
      ))}
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<ResourcesLayout />} />
      <Route path="/:lessonLink" element={<Lesson />} />
      <Route path="/:courseLink/*" element={<Course />} />
    </Routes>
  );
}

export default Resources;
