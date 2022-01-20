import styled from "styled-components";

export const contactMe = styled.div`
    display: ${({ openContact }) => openContact ? '' : 'none'};
    background: #223252;
    position: fixed;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    z-index:4;
    border-radius: 1em;
    box-shadow: 3px 3px 15px rgba(0, 255, 145, 0.8);

    h1 {
        text-align: center;
        color: white;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 3.5rem;
        font-weight: 900;
        margin-top: 5px;
    }

    .btn {
        font-size: 20px;
        width:5%;
        margin-left 92%;
        margin-top: 2%
    }
    


@media screen and (max-width: 1200px) {
    width: 75%;
    left: 12.5%;

    .btn {
        margin-left: 90%;
        margin-top: 3%;
    }
}

`