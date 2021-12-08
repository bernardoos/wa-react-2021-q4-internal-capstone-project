import CustomerForm from "components/CustomerForm/CustomerForm";
import OrderSummary from "components/OrderSummary/OrderSummary";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "StyledComponents";

const ContentContainer = styled.div`
  min-height: calc(100vh - 158px);
  text-align: left;
`;

const CheckoutButton = styled.button`
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  margin: 15px;
  font-size: 1.3em;
  border: black;
`;

const PlaceOrderButton = styled(CheckoutButton)`
  background-color: black;
  color: white;
`;

function Checkout() {
  return (
    <ContentContainer>
      <SectionContainer>
        <CustomerForm />
        <OrderSummary />
        <Link to="/cart">
          <CheckoutButton>Go back to cart</CheckoutButton>
        </Link>
        <PlaceOrderButton>Place order</PlaceOrderButton>
      </SectionContainer>
    </ContentContainer>
  );
}

export default Checkout;
