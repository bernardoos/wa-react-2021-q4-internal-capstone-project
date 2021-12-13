import { useProductCategories } from "utils/hooks/useProductCategories";
import Grid from "components/Grid/Grid";
import React, { useEffect, useState } from "react";
import Sidebar from "components/Sidebar/Sidebar";
import styled from "styled-components";
import "./ProductList.css";
import Paginator from "components/Paginator/Paginator";
import { useProducts } from "utils/hooks/useProducts";
import { useLocation } from "react-router-dom";
import { ContentContainer } from "StyledComponents";

const PaginatorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProductList() {
  const [page, setPage] = useState(1);
  const { data: categoriesInfo = [] } = useProductCategories();
  const { data: productsInfo = [] } = useProducts(page);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const categoryId = searchParams.get("category");

  useEffect(() => {
    if (categoryId) {
      setSelectedProductsIds([categoryId]);
    } else {
      setSelectedProductsIds([]);
    }
  }, [categoryId]);

  useEffect(() => {
    let auxProducts = [];

    if (selectedProductsIds.length === 0) {
      auxProducts = productsInfo?.results;
    } else {
      selectedProductsIds.forEach((categoryId) => {
        const categoryProducts =
          productsInfo.results?.filter(
            (products) => products.data.category.id === categoryId
          ) ?? [];

        auxProducts = [...auxProducts, ...categoryProducts];
      });
    }

    setSelectedProducts(auxProducts);
  }, [selectedProductsIds, productsInfo, page]);

  return (
    <ContentContainer>
      <div id="wrapper">
        <Sidebar
          categoriesInfo={categoriesInfo}
          selectedProductsIds={selectedProductsIds}
          setSelectedProductsIds={setSelectedProductsIds}
        />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h1>This is the Product List Page</h1>
          </div>
          <Grid productsInfo={selectedProducts} />
          <PaginatorContainer>
            <Paginator pages={productsInfo.total_pages} setPage={setPage} />
          </PaginatorContainer>
        </div>
      </div>
    </ContentContainer>
  );
}

export default ProductList;
