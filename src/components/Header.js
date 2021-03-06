import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import HeaderBranding from "./HeaderBranding";

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderBranding />
    </Link>
    {/* <span>search...</span> */}
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  background-color: var(--color-headerBg);
  width: 100%;
  height: 4rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  margin-bottom: 1rem;
`;

export default Header;
