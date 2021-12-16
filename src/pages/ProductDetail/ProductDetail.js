import React, { useState, useEffect } from "react";
import { useProductDetail } from "utils/hooks/useProductDetail";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import { Col, ContentContainer, Row } from "StyledComponents";
import ProductInfo from "components/ProductInfo/ProductInfo";
import ProductSpecs from "components/ProductSpecs/ProductSpecs";
import AddToCart from "components/AddToCart/AddToCart";

function ProductDetail() {
  const { id } = useParams();
  const { data = [] } = useProductDetail(id);
  const [images, setImages] = useState([]);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (data.results) {
      const productInfo = data?.results[0];
      setProductInfo(productInfo);
      setImages(productInfo.data.images);
    }
  }, [data]);

  return (
    <ContentContainer>
      <Row>
        <Col>
          <Gallery images={images} />
        </Col>
        <Col>
          <AddToCart productInfo={productInfo} />
        </Col>
      </Row>
      <ProductInfo
        productData={productInfo.data}
        productTags={productInfo.tags}
      />
      <ProductSpecs productSpecs={productInfo.data?.specs} />
    </ContentContainer>
  );
}

export default ProductDetail;
