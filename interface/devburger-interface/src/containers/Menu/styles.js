import styled from "styled-components";
import BannerHamburguer from "../../assets/banner-hamburguer.svg";
import Background from "../../assets/background.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("${Background}");
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  position: relative;

  background: url("${BannerHamburguer}"), no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    line-height: 60px;
    position: absolute;
    color: #ffff;

    right: 20%;
    top: 30%;
  }

  span {
    display: block;
    color: #fff;
    font-size: 20px;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  padding: 10px 20px;
  border: none;
  background-color:rgba(255, 86, 34, 0.97);
  color: white;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: rgba(197, 61, 20, 0.84);
  }

  ${(props) =>
    props.$isActive &&
    `
    background-color:rgb(197, 62, 20);
  `}
`;


export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
