import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.mainBlack};
  color: #fff;
  height: 30px;
  width: 100vw;
  justify-content: center;
  align-items: center;

  p {
    color: ${(props) => props.theme.orange};
    font-size: 15px;
    font-weight: lighter;
  }
`;
