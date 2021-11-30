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
  const { data: categoriesInfo = [] } = useProductCategories();
  const { data: productsInfo = [] } = useProducts();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const categoryId = searchParams.get("category");

  useEffect(() => {
    setSelectedProductsIds([categoryId]);
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

    const pages =
      auxProducts?.length > 12 ? (auxProducts?.length || 1) / 12 : 1;

    setSelectedProducts(auxProducts);
    setTotalPages(pages);
  }, [selectedProductsIds, productsInfo]);

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
            <Paginator pages={totalPages} />
          </PaginatorContainer>
        </div>
      </div>
    </ContentContainer>
  );
}

export default ProductList;
