import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png";
import SearchSrc from "../../assets/search.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: PapayaWhip;
  font-size: 1em;
  padding: 0.25em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderSection = styled.header`
  display: flex;
  align-items: center;
`;

const LogoSection = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SiteLogo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const SearchLogo = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  line-height: 30px;
  margin-right: 20px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoSection>
          <SiteLogo src={LogoSrc} alt="Logo" />
          Globox
        </LogoSection>
      </Link>

      <HeaderSection>
        <SearchLogo src={SearchSrc} alt="Search" />
        <SearchInput type="text" />
        {/* <CartLogo src={CartSrc} alt="Cart" /> */}
        <MdOutlineShoppingCart style={{ fontSize: 30 }} />
      </HeaderSection>
    </HeaderContainer>
  );
}

export default Header;
