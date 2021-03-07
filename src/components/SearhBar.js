import * as React from "react";
import styled from "styled-components";

import searchIcon from "../images/svg/search.svg";

const SearchBar = () => {
  const [query, setQuery] = React.useState("");

  const onChange = event => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };
  return (
    <SearchContainer>
      <SearchIcon />
      <Bar
        type="test"
        placeholder="Search for courses or content"
        onChange={onChange}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  width: 80%;
`;

const Bar = styled.input`
  width: 100%;
  font-family: Roboto;
  font-size: 1rem;
  border: 0px;
  padding: 0.6rem 0.6rem 0.6rem 2.25rem;

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
