import React from "react";
import * as S from "./HeroStyles";

const Hero = ({ openContact, setOpenContact }) => (
  <S.heroWrap>
    <h2 className="heroTitle">Welcome!</h2>
    <p className="heroText">
      My name is Jordan McKinney, a software engineer based in Cincinnati, Ohio.
      <br /> I built this site using React.js. I enjoy constantly learning new
      things and applying that knowledge to solve real-word problems.
    </p>
    <img src="images/headshot.jpg" />
    <button
      className="contactMe"
      openContact={openContact}
      onClick={() => setOpenContact(!openContact)}
    >
      Contact Me
    </button>
  </S.heroWrap>
);

export default Hero;
