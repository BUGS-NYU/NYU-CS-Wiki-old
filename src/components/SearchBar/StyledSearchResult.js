import styled from "styled-components";
import SearchResult from "./SearchResult";

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 44%;
  top: 100%;
  margin-top: 0.25em;
  width: 100vw;
  max-width: 30em;
  padding: 1em;
  border-radius: 2px;
  background-color: ${props =>
    props.mode === "light"
      ? "rgba(242, 241, 239, 1)"
      : "var(--color-headerBg)"};

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 1em;

      a {
        color: ${props => (props.mode === "light" ? "black" : "white")};

        h4 {
          margin-bottom: 0.2em;
        }

        mark {
          background-color: transparent;
          color: inherit;
        }
      }
    }
  }
`;
