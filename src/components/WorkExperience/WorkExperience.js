import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './WorkExperienceStyles.js'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

const data = [
    {
        id: 1,
        company: 'Givaudan Flavors',
        image: 'images/givaudan.png',
        title: 'Data & System Specialist',
        time: '9/2020 - Current',
        description: {
            desc1: 'Automation & Process Improvement via JavaScript, VBA, Business Objects, etc.',
            desc2: 'Led extensive data cleansing projects in order to feed quality information to new AI tools',
            desc3: 'Created powerful dashboards to provide crystal clear view of data to executives & scientists '

        },
    },
    {
        id: 2,
        company: 'Tata Consultancy Services',
        image: 'images/TCS.png',
        title: 'Software Engineer',
        time: '5/2020 - 9/2020',
        description: {
            desc1: 'Back-end development team member for a web-based streaming MERN application',
            desc2: 'Created protected routes for user authentication via Facebook and Google strategies',
            desc3: 'Effectively modeled data for seamless integration with non-relational database applications'

        },
    },
    {
        id: 3,
        company: 'Bosch Automotive',
        image: 'images/bosch.png',
        title: 'Supply Chain Analyst',
        time: '12/2019 - 5/2020',
        description: {
            desc1: 'Implemented RPA to streamline various reports from SAP to reduce daily tasks for multiple departments using Automation Anywhere',
            desc2: 'Utilized Power BI to create effective dashboards for upper management',
            desc3: 'Negotiated with multiple domestic suppliers to implement a consignment inventory system, reducing average inventory by over $3m'

        },
    }


]

const WorkExperience = () => (
<>
<S.WorkExperienceHeader id="workexperience">
    Work Experience
</S.WorkExperienceHeader>
<S.WorkExperienceWrap>
<Swiper
    className="swiper-container"
    navigation
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
        { data.map( company => (
            <SwiperSlide className="swiper-slide" key={company.id}>
                <h1 className="company">
                    {company.company}
                </h1>
                <img className="logo"  src={company.image}/>
                <h1 className="title">
                    {company.title}
                </h1>
                <h3>
                    {company.time}
                </h3>
                <h1>
                    Duties
                </h1>
                <ul className="jobdescription">
                    <li>
                        {company.description.desc1}
                    </li>
                    <li>
                        {company.description.desc2}
                    </li>
                    <li>
                        {company.description.desc3}
                    </li>
                </ul>

            </SwiperSlide>
        ) )}

</Swiper>
</S.WorkExperienceWrap>
</>
)


export default WorkExperience;