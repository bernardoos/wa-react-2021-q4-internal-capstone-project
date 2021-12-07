import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const Col = styled.div`
  flex-basis: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (min-width: 500px) and (max-width: 770px) {
    flex-basis: 50%;
  }
  @media (min-width: 770px) {
    flex-basis: 33%;
  }
`;

export const ContentContainer = styled.div`
  min-height: calc(100vh - 108px);
  text-align: left;
`;

export const LabelTitle = styled.p`
  font-weight: bold;
  font-size: large;
  margin-right: 5px; ;
`;

export const LabelInfo = styled.p`
  font-size: large;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LabelDesc = styled.p`
  font-size: large;
  text-align: left;
`;

export const SectionContainer = styled.div`
  margin: 50px;
  text-align: center;
`;
