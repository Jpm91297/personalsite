import styled from "styled-components";

export const TechnologiesHeader = styled.h1`
background: #0F1624;
margin: 0;
font-family: 'Space Grotesk', sans-serif;
font-size: 4rem;
font-weight: 900;
color: white;
padding: 6%;
text-align:center;

@media screen and (max-width: 1200px) {
    font-size: 3rem;
}
`;

export const TechnologiesWrap = styled.div`
    background: #0F1624;
    font-family: 'Space Grotesk', sans-serif;
    color: white;

    .techContainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1 fr;
        margin: 0 15%;


        @media screen and (max-width: 1200px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 2 fr;
            grid-gap:2em;
        }
    }

    .tech {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tech li {
        @media screen and (max-width: 1200px) {
            font-size: .9rem;
        }
    }

    .tech h1 {
        font-weight: 900;

        @media screen and (max-width: 1200px) {
            font-size: 1.5rem;
        }
    }

`;