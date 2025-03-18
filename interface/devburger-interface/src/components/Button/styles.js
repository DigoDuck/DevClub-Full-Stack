import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.purple};
  font-family: ${(props) => props.theme.roadRageFont};
  font-size: 30px;
  color: ${(props) => props.theme.white};
  transition: background-color 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 8px;
  }
`;
