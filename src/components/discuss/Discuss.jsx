import "./discuss.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { queries } from "./data";
import Query from "./components/Query";
import Discussion from "./components/Discussion";
import SearchBar from "../searchBar/SearchBar";

function Discuss() {
  const DiscussLayout = () => (
    <div className="discuss">
      <SearchBar
        items={queries}
        getKey={(q) => q.question}
        path={(q) => `/discuss/${q.id}`}
        placeholder={"search question..."}
      />
      <div className="queries">
        {queries.map((x) => (
          <Query {...x} description={null} />
        ))}
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<DiscussLayout />} />
      <Route path="/:discussionLink" element={<Discussion />} />
    </Routes>
  );
}

export default Discuss;
