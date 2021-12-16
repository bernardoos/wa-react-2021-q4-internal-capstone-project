import React, { useEffect, useState } from "react";
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

function Paginator({ pages, page, setPage }) {
  const [prevPageDisabled, setPrevPageDisabled] = useState(true);
  const [nextPageDisabled, setNextPageDisabled] = useState(true);

  useEffect(() => {
    checkCurrentPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pages]);

  const checkCurrentPage = () => {
    if (Number(page) >= pages) {
      setNextPageDisabled(true);
    } else {
      setNextPageDisabled(false);
    }

    if (Number(page) > 1) {
      setPrevPageDisabled(false);
    } else {
      setPrevPageDisabled(true);
    }
  };

  const handleClickPage = (event) => {
    const page = event.target.innerHTML;
    setPage(page);
  };

  const handleClickNext = () => {
    setPage((currentPage) => {
      if (Number(currentPage) < pages) {
        return parseInt(currentPage) + 1;
      }

      return currentPage;
    });
    checkCurrentPage();
  };

  const handleClickPrevious = () => {
    setPage((currentPage) => {
      if (currentPage > 1) {
        return parseInt(currentPage) - 1;
      }
      return currentPage;
    });

    checkCurrentPage();
  };

  return (
    <PaginatorContainer>
      <button
        style={{
          marginRight: 5,
          cursor: prevPageDisabled ? "not-allowed" : "pointer",
        }}
        disabled={prevPageDisabled}
        data-testid="prevPageArrow"
        onClick={handleClickPrevious}
      >
        <MdArrowBackIos />
      </button>
      {Array.from(Array(pages).keys()).map((page) => (
        <PageButton key={page} onClick={handleClickPage} title="pageButton">
          {page + 1}
        </PageButton>
      ))}
      <button
        style={{
          marginLeft: 5,
          cursor: nextPageDisabled ? "not-allowed" : "pointer",
        }}
        onClick={handleClickNext}
        disabled={nextPageDisabled}
        data-testid="nextPageArrow"
      >
        <MdArrowForwardIos />
      </button>
    </PaginatorContainer>
  );
}

export default Paginator;
