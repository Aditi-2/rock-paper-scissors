import React from "react";
import styled from "@emotion/styled";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <span className="header-title">Waste an hour having fun</span>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  background-color: #eaeaea;
  color: #141942;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 1.5rem 1rem;
  -webkit-box-shadow: 0px 8px 15px -3px #000000;
  box-shadow: 0px 8px 15px -3px #000000;

  & .header-title {
    font-size: 1.3rem;
  }
`;

export default Header;
