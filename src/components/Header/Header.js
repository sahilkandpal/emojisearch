import React from "react";
import { StyledHeader } from "./Header.styles";
const Header = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <h1>
        <span>🌈</span>
        <span>Em💣ji Search</span>
      </h1>
    </StyledHeader>
  );
};

export default Header;
