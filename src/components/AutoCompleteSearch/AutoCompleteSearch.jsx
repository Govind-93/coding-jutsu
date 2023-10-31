// Note : This file requires changes according to the data passed to the component

import React, { useState } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";
import "./autoCompleteSearch.css";

const AutoCompleteSearch = ({ items }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchQuery = (text) => {
    const s = text.trim().toLowerCase();
    return items.filter((x) => {
      return x.name.toLowerCase().indexOf(s) !== -1;
    });
  };

  const onSearchTextChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text.trim()) {
      const result = searchQuery(e.target.value);
      console.log("Search quey ka result", result);
      setSearchResults(result);
    } else {
      setSearchResults([]);
    }
    console.log(searchResults);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const item = items.find((x) => {
      return x.name.toLowerCase() === searchText.trim().toLowerCase();
    });
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={onSearchSubmit}>
        <IconSearch className="search-icon" />
        <input
          className="search-text"
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={onSearchTextChange}
        />
        {searchText && (
          <IconX
            className="search-clear"
            onClick={() => {
              setSearchText("");
              setSearchResults([]);
            }}
          />
        )}
      </form>

      {searchResults.length > 0 && (
        <div className="search-list">
          <hr className="divider-line" />
          {searchResults.slice(0, 5).map((x, i, a) => (
            <div
              className="search-list-item"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "4px",
              }}
              onClick={() => {
                setSearchText(x.name);
                setSearchResults([]);
                document.querySelector(`.search-text`).focus();
              }}
            >
              <IconSearch className="search-icon" style={{ width: "18px" }} />
              <div className="list-item-content">
                <span
                  style={{
                    display: "block",
                    textAlign: "left",
                    marginLeft: "0.5rem",
                    fontSize: "14px",
                    marginRight: "1rem",
                  }}
                >
                  {x.name}
                </span>
                <span
                  style={{
                    display: "block",
                    textAlign: "left",
                    fontSize: "12px",
                    marginRight: "0.5rem",
                  }}
                >
                  {x.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearch;
