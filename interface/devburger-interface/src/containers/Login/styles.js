import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.svg";
import Background from "../../assets/background.svg";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url("${BackgroundLogin}");
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
`;

export const RightContainer = styled.div`
  background: url("${Background}");
  background-color: #181717;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: white;
    font-size: 15px;
    font-weight: 800;
    margin: auto;
    a {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: white;

  span {
    color: #8758a6;
    font-family: "Road Rage", sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 45px;
    border-radius: 10px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: white;
  }
  p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 2px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: white;
`