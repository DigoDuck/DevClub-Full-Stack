// Estilos
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.black};
  padding-top: 20px;

  img {
    width: 80%;
    margin: 0 auto 40px;
    display: block;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: auto;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  transition: background-color 0.3s ease;
  background-color: ${(props) => props.$isActive ? props.theme.orange : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.orange};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`;
