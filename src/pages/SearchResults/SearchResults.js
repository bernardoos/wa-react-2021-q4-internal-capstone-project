import Grid from "components/Grid/Grid";
import React, { useEffect, useState } from "react";
import { useSearchProducts } from "utils/hooks/useSearchProduct";
import { useLocation } from "react-router-dom";
import Paginator from "components/Paginator/Paginator";
import { ContentContainer, SectionContainer } from "StyledComponents";

function SearchResults() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get("q");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: searchedProducts = [],
    isLoading,
    error,
  } = useSearchProducts(searchValue, page);

  useEffect(() => {
    setSearchValue(query);
  }, [query, searchedProducts, page]);

  return (
    <ContentContainer>
      <SectionContainer>
        {searchedProducts.results?.length === 0 ? (
          <h1>No products found</h1>
        ) : (
          <>
            <Grid
              productsInfo={searchedProducts.results}
              isLoading={isLoading}
              error={error}
            />

            <Paginator pages={searchedProducts.total_pages} setPage={setPage} />
          </>
        )}
      </SectionContainer>
    </ContentContainer>
  );
}

export default SearchResults;
