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

const PaginatorContainer = styled.div`
  margin-bottom: 30px;
`;

function Paginator({ pages, setPage }) {
  const handleClickPage = (event) => {
    const page = event.target.innerHTML;

    setPage(page);
  };

  const handleClickNext = () => {
    setPage((currentPage) => {
      if (currentPage !== pages) {
        return parseInt(currentPage) + 1;
      }
      return currentPage;
    });
  };

  const handleClickPrevious = () => {
    setPage((currentPage) => {
      if (currentPage > 1) {
        return parseInt(currentPage) - 1;
      }
      return currentPage;
    });
  };

  return (
    <PaginatorContainer>
      <MdArrowBackIos
        style={{ marginRight: 5, cursor: "pointer" }}
        onClick={handleClickPrevious}
      />
      {Array.from(Array(pages).keys()).map((page) => (
        <PageButton key={page} onClick={handleClickPage}>
          {page + 1}
        </PageButton>
      ))}
      <MdArrowForwardIos
        style={{ marginLeft: 5, cursor: "pointer" }}
        onClick={handleClickNext}
      />
    </PaginatorContainer>
  );
}

export default Paginator;
