import React, { useState } from "react";
import { StyledSearchBar } from "./SearchBar.styles";
import { useEmojiContext } from "../../context/emojiContext";
import useDebounce from "../../hooks/useDebounce";
const SearchBar = ({ className }) => {
  const [query, setQuery] = useState("");
  const { filterEmojiData, handleEmojiData, handleLoading } = useEmojiContext();
  const debounce = useDebounce();

  const handleDebounce = (value) => {
    handleLoading(true);
    debounce(() => changeEmojiData(value), 500);
  };

  const changeEmojiData = (q) => {
    const newdata = filterEmojiData(q);
    handleEmojiData(newdata);
    handleLoading(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleDebounce(value);
  };

  const clearValue = () => {
    setQuery("");
    query && handleDebounce("");
  };

  return (
    <StyledSearchBar className={className}>
      <div className="search">
        <input
          data-testid="search-input"
          className="search-input"
          type="text"
          value={query}
          onChange={handleChange}
          autoFocus={true}
          placeholder="Search"
        />
        <div
          data-testid="cross-icon"
          className="cross-icon"
          onClick={clearValue}
        >
          ❌
        </div>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
