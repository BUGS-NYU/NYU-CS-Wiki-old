import React, { useState } from "react";
import styled from "styled-components";

import searchIcon from "../images/svg/search.svg";

// ? Checkout this for search results https://github.com/algolia/react-instantsearch/
const SearchBar = ({ handleSearch = f => f, focusref, onFocus }) => {
  const [open, setOpen] = useState(false);

  return (
    <SearchContainer>
      <SearchIcon onClick={() => setOpen(!open)} />
      <SearchInput
        type="text"
        aria-label="Search"
        placeholder="Search for courses or content"
        onChange={e => handleSearch(e.target.value)}
        onFocus={onFocus}
        ref={focusref}
        isOpen={open}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  display: flex;
  width: 80%;
  background-color: var(--color-headerBg);
  @media screen and (max-width: 600px) {
    width: auto;
    margin-left: 40%;
  }
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

  @media screen and (max-width: 600px) {
    display: ${({ isOpen }) => (isOpen ? "inline-block" : "none")};
  }
`;

const SearchIcon = styled(searchIcon)`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.5rem;
  right: -1.5rem;

  @media screen and (max-width: 600px) {
    margin: 0;
    right: 0;
  }
`;

export default SearchBar;
