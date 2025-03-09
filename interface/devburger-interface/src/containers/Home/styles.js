import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background.svg";

export const Banner = styled.div`
  background: url("${BannerHome}");
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: "Road Rage", sans-serif;
    color: white;
    font-size: 80px;
    position: absolute;
    right: 15%;
    top: 7%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("${Background}");
`;

