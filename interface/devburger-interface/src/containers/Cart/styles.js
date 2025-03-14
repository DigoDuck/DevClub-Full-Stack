import styled from "styled-components";
import Texture from "../../assets/texture.svg";
import Backgorund from "../../assets/background.svg";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ), url(${Backgorund});
  width: 100%;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export const Banner = styled.div`
  background-image: url(${Texture});
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 180px;

  img {
    height: 150px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% - 28px);
    content: "";
    width: 56px;
    height: 4px;
    background-color: #61a120;
    bottom: 0;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 20px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;
