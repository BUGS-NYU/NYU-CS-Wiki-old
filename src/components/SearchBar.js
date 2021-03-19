import * as React from "react";
import styled from "styled-components";

import searchIcon from "../images/svg/search.svg";

// ? Checkout this for search results https://github.com/algolia/react-instantsearch/
const SearchBar = ({ handleSearch = f => f, focusref, onFocus }) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        type="text"
        aria-label="Search"
        placeholder="Search for courses or content"
        onChange={e => handleSearch(e.target.value)}
        onFocus={onFocus}
        ref={focusref}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  display: flex;
  width: 80%;
  background-color: var(--color-headerBg);
`;

const SearchInput = styled.input`
  width: 100%;
  font-family: Roboto;
  font-size: 1rem;
  border: 0px;
  padding: 0.6rem 0.6rem 0.6rem 2.25rem;
  background-color: var(--color-headerBg);
  color: var(--color-primary);
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(searchIcon)`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.5rem;
  right: -1.5rem;
`;

export default SearchBar;
