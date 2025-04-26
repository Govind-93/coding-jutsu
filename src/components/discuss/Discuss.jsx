import "./discuss.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Discussion from "./components/Discussion";
// import SearchBar from "../searchBar/SearchBar";
// import MyImage from "../../assets/me.jpeg";
import { DiscussLayout } from "./DiscussionLayout";

const Discuss = () => {
  return (
    <Routes>
      <Route path="/" element={<DiscussLayout />} />
      <Route path="/:discussionLink" element={<Discussion />} />
    </Routes>
  );
};

export default Discuss;
