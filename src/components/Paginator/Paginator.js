import React from "react";
import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const PageButton = styled.button`
  background-color: white;
  border: black thin solid;
  color: black;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  font-size: medium;
  font-weight: bold;
`;

function Paginator({ pages }) {
  return (
    <>
      <MdArrowBackIos style={{ marginRight: 5 }} />
      {Array.from(Array(pages).keys()).map((page) => (
        <PageButton>{page + 1}</PageButton>
      ))}
      <MdArrowForwardIos style={{ marginLeft: 5 }} />
    </>
  );
}

export default Paginator;
