import styled from "styled-components";

export const WorkExperienceWrap = styled.div`
    background: #0F1624; 
    color: white;
    font-family: 'Space Grotesk', sans-serif;
    z-index: 1;

    .swiper-button-prev {
        color: white; 
    }
    
    .swiper-button-next {
        color: white; 
    }


    .swiper-container {
        height: auto;
        width: 75%;
        border: 2px dotted rgba(0, 255, 145, 0.8);
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
        width: 15em;
    }

    .jobdescription {
        display: table; 
        margin: 0 auto 20px auto;
        text-align: left;
    }


`
