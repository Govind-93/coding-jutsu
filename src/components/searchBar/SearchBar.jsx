import "./searchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "./assets/search-icon.svg";

function SearchBar({ items, getKey, path, placeholder }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = (text) => {
    const s = text.trim().toLowerCase();
    return items.filter((x) => {
      return getKey(x).toLowerCase().indexOf(s) !== -1;
    });
  };

  const onSearchTextChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text.trim()) {
      const result = searchQuery(e.target.value);
      setSearchResults(result.map((x) => getKey(x)));
    } else {
      setSearchResults([]);
    }
  };

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const item = items.find((x) => {
      return getKey(x).toLowerCase() === searchText.trim().toLowerCase();
    });
    if (item) {
      navigate(path(item));
    }
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={onSearchSubmit}>
        <input
          className="search-text"
          type="text"
          placeholder={placeholder}
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

export default SearchBar;