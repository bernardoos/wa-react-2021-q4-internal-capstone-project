import React, { useState } from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png";
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
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

const SearchButton = styled.button`
  background-color: black;
  color: white;
  font-size: large;
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 7px;
`;

const SearchInput = styled.input`
  line-height: 30px;
  font-size: medium;
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
        <LogoSection>
          <SiteLogo src={LogoSrc} alt="Logo" />
          Globox
        </LogoSection>
      </Link>
      <HeaderSection>
        <SearchInput type="text" value={search} onChange={handleInputChange} />
        <Link to={`/search/?q=${search}`}>
          <SearchButton>
            <MdOutlineSearch />
          </SearchButton>
        </Link>

        <MdOutlineShoppingCart style={{ fontSize: 30 }} />
      </HeaderSection>
    </HeaderContainer>
  );
}

export default Header;
