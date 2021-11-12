import React from "react";
import Homepage from "../../pages/Homepage/Homepage";
import styled from "styled-components";

const ContentContainer = styled.div`
  min-height: calc(100vh - 100px);
`;

function Content() {
  return (
    <ContentContainer>
      <Homepage></Homepage>
    </ContentContainer>
  );
}

export default Content;
