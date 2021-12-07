import CustomerForm from "components/CustomerForm/CustomerForm";
import OrderSummary from "components/OrderSummary/OrderSummary";
import React from "react";
import styled from "styled-components";
import { SectionContainer } from "StyledComponents";

const ContentContainer = styled.div`
  min-height: calc(100vh - 158px);
  text-align: left;
`;

function Checkout() {
  return (
    <ContentContainer>
      <SectionContainer>
        <CustomerForm />
        <OrderSummary />
      </SectionContainer>
    </ContentContainer>
  );
}

export default Checkout;
