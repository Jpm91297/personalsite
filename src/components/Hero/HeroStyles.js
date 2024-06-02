import styled from "styled-components";

export const heroWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background: #0f1624;
  margin: 0 auto;
  padding: 80px 80px 0px 80px;

  .heroTitle {
    padding-top: 2.5%;
    margin: 0px;
    text-align: center;
    font-weight: 900;
    font-size: 4rem;
    line-height: 60px;
    font-family: "Space Grotesk", sans-serif;
    background: linear-gradient(100deg, white, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .heroText {
    grid-area: 2 / 1 / 2 / 1;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 800;
    color: white;
  }
  .contactMe {
    grid-area: 3 / 1 / 3 / 1;
    height: 4rem;
    width: 18rem;
    border-radius: 1em;
    margin: auto;
    background-color: #0f1624;
    font-family: "Space Grotesk", sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: rgba(0, 255, 145, 0.8);
    cursor: pointer;

    &:hover {
      background-color: white;
    }
  }

  img {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    margin: auto;
  }

  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 40px;

    .heroTitle {
      font-size: 2.5rem;
      text-align: left;
    }

    .contactMe {
      font-size: 1.75rem;
      margin: 1rem;
    }

    .img {
    }
  }
`;
