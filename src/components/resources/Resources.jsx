import { useState } from "react";
import "./resources.css";
import searchIcon from "../../assets/search-icon.svg";
import Adapter from "./components/Adapter";
import Course from "./components/Course";
import { Routes, Route, useNavigate } from "react-router-dom";

import data from "./data";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = (text) => {
    const s = text.trim().toLowerCase();
    return data.filter((x) => {
      return x.name.toLowerCase().indexOf(s) !== -1;
    });
  };

  const onSearchTextChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text.trim()) {
      const result = searchQuery(e.target.value);
      setSearchResults(result.map((x) => x.name));
    } else {
      setSearchResults([]);
    }
  };

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const course = data.find((x) => {
      return x.name.toLowerCase() === searchText.trim().toLowerCase();
    });
    if (course) {
      navigate(`/resources/${course.link}`);
    }
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={onSearchSubmit}>
        <input
          className="search-text"
          type="text"
          placeholder="search here..."
          value={searchText}
          onChange={onSearchTextChange}
        />

        <button type="submit" className="search-submit">
          <img src={searchIcon} />
        </button>
      </form>
      {searchResults.length > 0 && (
        <div className="search-list">
          {searchResults.map((x, i, a) => (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <p
                onClick={() => {
                  setSearchText(x);
                  setSearchResults([]);
                  document.querySelector(`.search-text`).focus();
                }}
              >
                {x}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Resources() {
  const ResourcesLayout = () => (
    <div className="resources">
      <h2>Hello, What are you looking for?</h2>

      <SearchBar />

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
      <Route path="/:courseLink/*" element={<Course />} />
    </Routes>
  );
}

export default Resources;
