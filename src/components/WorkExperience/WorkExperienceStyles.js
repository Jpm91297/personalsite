import styled from "styled-components";

export const WorkExperienceHeader = styled.h1`
  background: #0f1624;
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 4rem;
  font-weight: 900;
  color: white;
  padding: 2.5% 6% 6% 6%;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
  }
`;
export const WorkExperienceWrap = styled.div`
  background: #0f1624;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  z-index: 1;
  padding-bottom: 30px;

  .swiper-button-prev {
    color: white;
  }

  .swiper-button-next {
    color: white;
  }

  .swiper-container {
    height: auto;
    width: 85%;
    border: 2px dotted rgba(0, 255, 145, 0.8);
    box-shadow: 3px 3px 20px rgba(0, 255, 145, 0.8);
  }

  .swiper-slide {
    text-align: center;
  }

  .company {
    font-size: 2.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .logo {
    height: 5em;
  }

  .jobdescription {
    display: table;
    margin: 0 auto 20px auto;
    text-align: left;
  }
`;
