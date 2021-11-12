import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 50px;
  position: relative;
  left: 0;
  bottom: 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <FooterContainer>
      Ecommerce created during Wizeline’s Academy React Bootcamp
    </FooterContainer>
  );
}

export default Footer;
