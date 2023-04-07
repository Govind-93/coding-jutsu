import { useState } from "react";
import "./resources.css";
import searchIcon from "../../assets/search-icon.svg";
import Adapter from "./Adapter";
import Course from "./Course";
import { Routes, Route } from "react-router-dom";

import data from "./data";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const s = searchText.trim().toLowerCase();
    
  };

  return (
    <>
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
    </>
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
      <Route path="/" element={ <ResourcesLayout /> } />
      <Route path="/:courseName" element={ <Course /> } />
    </Routes>
  );
}

export default Resources;
