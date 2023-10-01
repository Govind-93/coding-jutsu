import "./discuss.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { queries } from "./data";
import Query from "./components/Query";
import Discussion from "./components/Discussion";
// import SearchBar from "../searchBar/SearchBar";
// import MyImage from "../../assets/me.jpeg";
import AutoCompleteSearch from "../AutoCompleteSearch/AutoCompleteSearch";

function Discuss() {
  const DiscussLayout = () => {
    return (
      <div className="discuss__container">
        <div className="discuss">
          <div className="search__container">
            {/* <SearchBar
          items={queries}
          getKey={(q) => q.question}
          path={(q) => `/discuss/${q.id}`}
          placeholder={"Search here..."}
        /> */}
            <div className="autoCompleteSearch">
              <AutoCompleteSearch></AutoCompleteSearch>
            </div>
            <div className="button add__post">
              <i class="uil uil-plus"></i> New Doubt
            </div>
          </div>

          <div className="queries">
            {queries.map((x) => (
              <Query {...x} description={null} />
            ))}
          </div>
          <div className="post__doubt">
            <i class="uil uil-plus-circle"></i>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<DiscussLayout />} />
      <Route path="/:discussionLink" element={<Discussion />} />
    </Routes>
  );
}

export default Discuss;
