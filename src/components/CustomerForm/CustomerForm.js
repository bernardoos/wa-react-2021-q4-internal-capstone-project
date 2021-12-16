import React from "react";
import {
  Label,
  LabelTitle,
  Row,
  Col,
  SectionContainer,
} from "StyledComponents";
import styled from "styled-components";

const FormInput = styled.input`
  line-height: 2.5em;
  width: 70%;
  font-size: medium;
  border-radius: 5px;
  display: flex;
  border: gray thin solid;
`;

const FormTextArea = styled.textarea`
  width: 50%;
  font-size: medium;
  border-radius: 5px;
  display: flex;
  border: gray thin solid;
`;

const FormCard = styled.div`
  padding: 2rem;
  background-color: rgba(241, 242, 244, 0.6);
  border: gray thin solid;
  border-radius: 10px;
  margin: 0px 5rem 0px 5rem;
  width: 100%;
  @media (min-width: 770px) {
    max-width: 100%;
  }
`;

const FormContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  margin-top: 0px;
`;

const FormLabel = styled(Label)`
  justify-content: flex-start;
`;

const FormTitle = styled.h2`
  display: flex;
  justify-self: flex-start;
`;

function CustomerForm() {
  return (
    <FormContainer>
      <FormCard>
        <form>
          <FormTitle>Customer Information</FormTitle>
          <Row>
            <Col>
              <FormLabel>
                <LabelTitle>Full name</LabelTitle>
              </FormLabel>
              <FormInput type="text" />
            </Col>
            <Col>
              <FormLabel>
                <LabelTitle>Email</LabelTitle>
              </FormLabel>
              <FormInput type="email" />
            </Col>
            <Col>
              <FormLabel>
                <LabelTitle>Zip code</LabelTitle>
              </FormLabel>
              <FormInput type="text" />
            </Col>
          </Row>
          <br />
          <FormLabel>
            <LabelTitle>Notes</LabelTitle>
          </FormLabel>
          <FormTextArea rows={8} />
        </form>
      </FormCard>
    </FormContainer>
  );
}

export default CustomerForm;
