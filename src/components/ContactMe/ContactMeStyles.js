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
    
   
    .contact-row {
        display: flex;
        width: 100%;
        margin-top: 5rem;
        font-size: 4rem;
        font-family: 'Space Grotesk', sans-serif;
        color: rgba(0, 255, 145, 0.8);
        justify-content: space-between;
    }

    .contact-element {
        display: inline-block;
        text-align: center;
        margin: auto;
    }

    .contact-element h2 {
        font-weight: 900;
    }

    .contact-element h3 {
        color: white;
    }



@media screen and (max-width: 1200px) {
    width: 75%;
    height: 66%;
    left: 12.5%;

    h1 {
        font-size: 2.5rem;
    }

    .btn {
        margin-left: 90%;
        margin-top: 3%;
    }

    .contact-row {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
        font-size: 2.5rem;
        font-family: 'Space Grotesk', sans-serif;
        color: rgba(0, 255, 145, 0.8);
        justify-content: space-between;
    }

    .contact-element h2 {
        font-size: 1rem;
    }

    .contact-element h3 {
        font-size: 1rem;
    }

}

`