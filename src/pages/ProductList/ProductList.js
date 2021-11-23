import CategoriesSrc from "mocks/en-us/product-categories";
import Grid from "components/Grid/Grid";
import ProductsSrc from "mocks/en-us/featured-products";
import React, { useEffect, useState } from "react";
import Sidebar from "components/Sidebar/Sidebar";
import styled from "styled-components";
import "./ProductList.css";
import Paginator from "components/Paginator/Paginator";

const ContentContainer = styled.div`
  min-height: calc(100vh - 108px);
  text-align: left;
`;

const PaginatorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProductList() {
  const { results: categoriesInfo } = CategoriesSrc;
  const { results: productsInfo } = ProductsSrc;

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);

  useEffect(() => {
    let auxProducts = [];

    selectedProductsIds.forEach((categoryId) => {
      const categoryProducts = productsInfo.filter(
        (products) => products.data.category.id === categoryId
      );

      auxProducts = [...auxProducts, ...categoryProducts];
    });

    setSelectedProducts(auxProducts);
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
          <Grid
            productsInfo={selectedProducts}
            categoriesInfo={categoriesInfo}
          />
          <PaginatorContainer>
            <Paginator pages={10} />
          </PaginatorContainer>
        </div>
      </div>
    </ContentContainer>
  );
}

export default ProductList;
