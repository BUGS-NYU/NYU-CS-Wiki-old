import algoliasearch from "algoliasearch/lite";
import { createRef, default as React, useState, useContext } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import { ThemeContext } from "../ThemeContext";
import StyledSearchBox from "./StyledSearchBox";
import StyledSearchResult from "./StyledSearchResult";
import StyledSearchRoot from "./StyledSearchRoot";
import useClickOutside from "./useClickOutside";

const SearchBar = ({ indices }) => {
  const { colorMode } = useContext(ThemeContext);
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  useClickOutside(rootRef, () => setFocus(false));
  return (
    <StyledSearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <StyledSearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
          mode={colorMode}
        />
      </InstantSearch>
    </StyledSearchRoot>
  );
};

export default SearchBar;
