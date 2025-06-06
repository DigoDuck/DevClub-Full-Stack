import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;
  height: 72px;
  padding: 0 50px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    hr {
      height: 24px;
      border: 1px solid ${(props) => props.theme.orange};
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive ? (props) => props.theme.orange : props.theme.white};
  border-bottom: 2px solid
    ${(props) => (props.$isActive ? props.theme.orange : "transparent")};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.4s;

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  p {
    color: ${(props) => props.theme.white};
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: ${(props) => props.theme.orange};
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.red};
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;
