import styled from "styled-components";


export const headerWrap = styled.div`
  display: grid;
  grid-template-columns: 25% 60% 15%;
  grid-template-rows: 1fr;
  grid-template-areas:
    "logo links social";
	font-family: 'Space Grotesk', sans-serif;
  background: #0F1624; 
  border-bottom: 2px dotted rgba(0, 255, 145, 0.8);

  .logo {
    grid-area: logo;
    display: grid;
    align-items: center;
    font-size: 2rem;
    font-weight: 900;
    padding-left: 15px;
    
  }

  .logo span {
    padding-left: 15px;
  }

  .links {
    grid-area: links;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 800;
    list-style-type: '';
    font-size: 1rem;
    line-height: 90px;
  }
  .links a {
    color: rgba(0, 255, 145, 0.8);
  }

  .social {
    grid-area: social;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .social a {
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  }

  @media screen and (max-width: 1650px) {
    .logo {
      font-size: 1.5rem
    }
  }

  @media screen and (max-width: 1300px) {

    .links {
      display: none;
    }
    .social {
      grid-area: links;
    }

    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    


  }

  @media screen and (max-width: 850px) {
    grid-template-columns: 75% 25%;
    grid-template-rows: 1fr;

    .logo {
      font-size: 110%;
    }

    .social a {
      display: none;
    }

    

  }



`;