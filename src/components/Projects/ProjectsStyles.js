import styled from "styled-components";

export const ProjectHeader = styled.h1`
background: #0F1624;
margin: 0;
font-family: 'Space Grotesk', sans-serif;
font-size: 4rem;
font-weight: 900;
color: white;
padding: 6%;
text-align:center;
`

export const GridContainer = styled.div`
    display: grid;
    background: #0F1624;
    padding: 2em 15%;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1.5em;
    font-family: 'Space Grotesk', sans-serif;
    color:white;
    text-align: center;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ProjectCard = styled.div`
    height: auto;
    width: 100%;
    border-radius: 10px;
    border: 2px dotted rgba(0, 255, 145, 0.8);
    box-shadow: 3px 3px 20px rgba(0, 255, 145, 0.8);
    @media screen and (max-width: 1200px) {
        margin-top: 25px;
    }

`;

export const Img = styled.img`
    height: 256px;
    width: 256px;
`;

export const Visit = styled.button`
    height: 4rem;
    width: 18rem;
    border-radius: 1em;
    margin: 1em 0;
    background-color: #0F1624;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: rgba(0, 255, 145, 0.8);
    cursor: pointer;

    &:hover {
      background-color: white;
    }

    @media screen and (max-width: 1200px) {
        height: 2rem;
        width: 9rem;
    }
`;

