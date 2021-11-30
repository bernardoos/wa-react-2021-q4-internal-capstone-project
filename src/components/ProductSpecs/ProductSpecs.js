import React from "react";
import styled from "styled-components";
import { Label, LabelTitle } from "StyledComponents";

const SpecsTable = styled.table`
  border-collapse: collapse;
  border: thin black solid;
`;

const SpecsTableTd = styled.td`
  padding: 10px;
  border: thin black solid;
`;

const SectionContainer = styled.div`
  margin: 50px 20% 50px 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function ProductSpecs({ productSpecs }) {
  return (
    <SectionContainer>
      <Label>
        <LabelTitle>Product Specs</LabelTitle>
      </Label>

      <SpecsTable>
        <tr>
          <SpecsTableTd>Spec</SpecsTableTd>
          <SpecsTableTd>Description</SpecsTableTd>
        </tr>
        {productSpecs?.map(({ spec_name, spec_value }) => (
          <tr>
            <SpecsTableTd>{spec_name}</SpecsTableTd>
            <SpecsTableTd>{spec_value}</SpecsTableTd>
          </tr>
        ))}
      </SpecsTable>
    </SectionContainer>
  );
}

export default ProductSpecs;
