import React, { useState } from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "components/ShoppingCartIcon/ShoppingCartIcon";

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

const SearchButton = styled.button`
  background-color: black;
  color: white;
  font-size: large;
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 7px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  line-height: 30px;
  font-size: medium;
`;

const ShoppingCartButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

function Header() {
  const handleInputChange = (event) => {
    const { value } = event.target;

    setSearch(value);
  };

  const [search, setSearch] = useState("");
  return (
    <HeaderContainer>
      <Link to="/">
        <button
          title="headerLink"
          style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }}
        >
          <LogoSection>
            <SiteLogo src={LogoSrc} alt="Logo" />
            Globox
          </LogoSection>
        </button>
      </Link>
      <HeaderSection>
        <SearchInput
          type="text"
          value={search}
          onChange={handleInputChange}
          title="searchInput"
        />
        <Link to={`/search/?q=${search}`}>
          <SearchButton title="searchButton">
            <MdOutlineSearch />
          </SearchButton>
        </Link>
        <Link to="/cart" className="shoppingCartLink">
          <ShoppingCartButton title="cartButton">
            <ShoppingCartIcon />
          </ShoppingCartButton>
        </Link>
      </HeaderSection>
    </HeaderContainer>
  );
}

export default Header;
