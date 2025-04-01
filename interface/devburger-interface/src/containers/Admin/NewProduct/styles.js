import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${(props) => props.theme.formBackground};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: ${(props) => props.theme.textColor};
`;

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px dashed ${(props) => props.theme.borderColor};
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  transition: border-color 0.3s;

  > svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.black};
    margin-right: 4px;
  }

  &:hover {
    border-color: ${(props) => props.theme.primary};
  }

  input {
    display: none;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.primary};
  }
`;

export const Select = styled(ReactSelect)`
  .css-1s2u09g-control {
    border-radius: 4px;
    border-color: ${(props) => props.theme.borderColor};
    transition: border-color 0.3s;
  }

  .css-1s2u09g-control:hover {
    border-color: ${(props) => props.theme.primary};
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${(props) => props.theme.orange};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.orangeDark};
  }
`;

export const ErrorMessage = styled.span`
    color: ${(props) => props.theme.darkRed};
    font-size: 14px;
    line-height: 80%;
    font-weight: 600;
    margin-top: 2px;
`;
