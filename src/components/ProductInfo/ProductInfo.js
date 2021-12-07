import React from "react";
import {
  Col,
  Row,
  LabelTitle,
  LabelInfo,
  Label,
  LabelDesc,
  SectionContainer,
} from "StyledComponents";
import { capitalize } from "utils/utils";

function ProductInfo({ productData, productTags }) {
  return (
    <SectionContainer>
      <h1>{productData?.name}</h1>
      <br />
      <Row>
        <Col>
          <LabelTitle>Description</LabelTitle>
          <LabelDesc>{productData?.description[0]?.text}</LabelDesc>
        </Col>
        <Col>
          <Label>
            <LabelTitle>Price:</LabelTitle>
            <LabelInfo>${productData?.price}.00</LabelInfo>
          </Label>
          <Label>
            <LabelTitle>SKU:</LabelTitle>
            <LabelInfo>{productData?.sku}</LabelInfo>
          </Label>
          <Label>
            <LabelTitle>Category:</LabelTitle>
            <LabelInfo>
              {productData?.category && capitalize(productData.category?.slug)}
            </LabelInfo>
          </Label>
        </Col>
        <Col>
          <Label>
            {" "}
            <LabelTitle>Tags</LabelTitle>
          </Label>

          {productTags?.map((tag) => (
            <LabelInfo>{tag}</LabelInfo>
          ))}
        </Col>
      </Row>
    </SectionContainer>
  );
}

export default ProductInfo;
