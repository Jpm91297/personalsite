import styled from "styled-components";

export const AboutMeHeader = styled.h1`
  background: #0f1624;
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 4rem;
  font-weight: 900;
  color: white;
  padding: 6%;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
  }
`;

export const AboutMeWrap = styled.div`
  background: #0f1624;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  display: grid;
  grid-template-columns: 40% 60%;
  padding-bottom: 75px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  .about-content {
    margin: 0 15%;
    display: flex;
    flex-direction: column;
  }

  .about-content h1 {
    padding: 20px 0px;
    font-weight: 900;
    text-align: center;
  }

  .swiper-container {
    height: 600px;
    width: 57%;
    grid-area: 1 / 2 / 1 / 2;
    border-radius: 10%;

    @media screen and (max-width: 1200px) {
      height: 300px;
      width: 75%;
      margin-top: 50px;
    }
  }

  .swiper-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* You can use contain or fill based on your requirement */
    object-position: center;
  }

  .swiper-slide {
    text-align: center;
  }

  .swiper-button-prev {
    color: white;
  }

  .swiper-button-next {
    color: white;
  }
`;
