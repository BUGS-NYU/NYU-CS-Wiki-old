import styled from "styled-components";
import SearchBox from "./SearchBox";

export default styled(SearchBox)`
  width: 80%;
  display: flex;
  border: 0px;
  margin: 1rem 4.5rem;
  background-color: var(--color-headerBg);

  .SearchInput {
    outline: none;
    width: 60%;
    font-size: 1em;
    transition: 100ms;
    border: 0px;
    border-radius: 2px;
    padding: 0.35rem 2.5rem;
    background-color: var(--color-headerBg);
    color: var(--color-primary);
  }

  .SearchIcon {
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.5rem 0 0 0.5rem;
    right: 60%;
  }
`;
