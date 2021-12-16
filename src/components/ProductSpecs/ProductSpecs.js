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
        <tbody>
          <tr>
            <SpecsTableTd>Spec</SpecsTableTd>
            <SpecsTableTd>Description</SpecsTableTd>
          </tr>
          {productSpecs?.map(({ spec_name, spec_value }) => (
            <tr key={spec_name}>
              <SpecsTableTd>{spec_name}</SpecsTableTd>
              <SpecsTableTd>{spec_value}</SpecsTableTd>
            </tr>
          ))}
        </tbody>
      </SpecsTable>
    </SectionContainer>
  );
}

export default ProductSpecs;
