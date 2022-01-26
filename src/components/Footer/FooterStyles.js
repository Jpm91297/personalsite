import styled from "styled-components";

export const FooterStyles = styled.div`
    background: #0F1624; 
    overflow: hidden;
    font-family: 'Space Grotesk', sans-serif;
    color: white;

    .divider {
        margin: 0 auto;
        height: 25px;
        width: 75%;
        border-top: .5px solid rgba(0, 255, 145, 0.8);
    }

    h3 {
        margin: 0;
        font-size: 1.5em;
        padding-bottom: 25px;
        text-align: center;

        @media screen and (max-width: 1200px) {
            font-size: 1em;
        }
    }
`;

