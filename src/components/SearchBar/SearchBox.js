import * as React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import SearchIcon from "../../images/svg/search.svg";

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search for posts"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <SearchIcon className="SearchIcon" />
    </form>
  )
);
