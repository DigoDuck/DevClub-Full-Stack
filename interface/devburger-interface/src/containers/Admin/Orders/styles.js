import styled from "styled-components";
import Select from "react-select";

export const ProductImage = styled.img`
  height: 89px;
  padding: 12px;
  border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
  width: 220px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  gap: 30px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.orange : props.theme.darkGray};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `1px solid ${props.theme.orange}` : "none"};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
`;
