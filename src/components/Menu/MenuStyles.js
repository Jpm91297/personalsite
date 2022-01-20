import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #223252;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: 'translateX(100%)';
  display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
  z-index: 2;
  
  h1 {
    text-align: center;
    color: white;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    padding-bottom: 4px;
    border-bottom: 2px dotted rgba(0, 255, 145, 0.8);
  }

  .social {
    text-align: center;
  }
  
  .social a {
    color: white;
    &:hover {
      color: rgba(0, 255, 145, 0.8);
    }
    padding: 0 20px 0 20px;

    

  }

  a {
    font-size: 2rem;
    font-family: 'Space Grotesk', sans-serif;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: rgba(0, 255, 145, 0.8);
    text-decoration: none;
    transition: color 0.3s linear;
    

    &:hover {
      color: white;
    }
  }
`;

