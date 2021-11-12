import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png";
import CartSrc from "../../assets/cart.png";
import SearchSrc from "../../assets/search.png";

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

const SiteLogo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const CartLogo = styled.img`
  height: 30px;
`;

const SearchLogo = styled.img`
  height: 20px;
  margin-right: 20px;
`;

const SearchInput = styled.input`
  line-height: 30px;
  margin-right: 20px;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderSection>
        <SiteLogo src={LogoSrc} alt="Logo" />
        Globox
      </HeaderSection>

      <HeaderSection>
        <SearchLogo src={SearchSrc} alt="Search" />
        <SearchInput type="text" />
        <CartLogo src={CartSrc} alt="Cart" />
      </HeaderSection>
    </HeaderContainer>
  );
}

export default Header;
