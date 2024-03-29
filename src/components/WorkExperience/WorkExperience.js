import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./WorkExperienceStyles.js";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const data = [
  {
    id: 1,
    company: "Melink Corporation",
    image: "images/MelinkLogo.png",
    title: "Full-Stack Developer",
    time: "6/2022 - Current",
    description: {
      desc1:
        "React & Node Developer for Web Portal serving internal & external customers",
      desc2:
        "Facilitated sprint planning meetings between dev team & key stakeholders from all BU's",
      desc3:
        "Developed frontend & backend components for the Melink Reporting Experience UI",
      desc4:
        "Fully digitized Intelli-Hood Energy Savings Report & modeled NoSQL database for future reporting",
      desc5:
        "Designed & Implemented core architecture for Node Function App supporting new mobile app",
      desc6:
        "Engineered versatile web-engine enabling engineers to build custom Testing & Balancing Reports",
      desc7:
        "Merges code & deploys React Application & Node Server weekly via Git & Azure",
    },
  },
  {
    id: 2,
    company: "Givaudan Flavors",
    image: "images/givaudan.png",
    title: "Data & System Specialist",
    time: "9/2020 - Current",
    description: {
      desc1:
        "Automation & Process Improvement via JavaScript, VBA, Business Objects, etc.",
      desc2:
        "Led extensive data cleansing projects in order to feed quality information to new AI tools",
      desc3:
        "Created powerful dashboards to provide crystal clear view of data to executives & scientists ",
      desc4:
        "Liaison between IT and management to communicate needs of project management software",
    },
  },
  {
    id: 3,
    company: "Tata Consultancy Services",
    image: "images/TCS.png",
    title: "Software Engineer",
    time: "5/2020 - 9/2020",
    description: {
      desc1:
        "Full-stack development team member for a web-based streaming MERN application",
      desc2:
        "Created protected routes for user authentication via Facebook and Google strategies",
      desc3:
        "Effectively modeled data for seamless integration with non-relational database applications",
      desc4:
        "Participated in daily Scrum meetings, clearly relaying team progress and potential blockers",
    },
  },
  {
    id: 4,
    company: "Bosch Automotive",
    image: "images/bosch.png",
    title: "Supply Chain Analyst",
    time: "12/2019 - 5/2020",
    description: {
      desc1:
        "Implemented RPA to streamline various reports from SAP to reduce daily tasks for multiple departments using Automation Anywhere",
      desc2:
        "Utilized Power BI to create effective dashboards for upper management",
      desc3:
        "Negotiated with multiple domestic suppliers to implement a consignment inventory system, reducing average inventory by over $3m",
      desc4:
        "Participated in daily meetings with upper management to initiate freight cost savings plans",
    },
  },
];

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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((company) => (
          <SwiperSlide className="swiper-slide" key={company.id}>
            <h1 className="company">{company.company}</h1>
            <img className="logo" src={company.image} />
            <h1 className="title">{company.title}</h1>
            <h3>{company.time}</h3>
            <h1>Duties</h1>
            <ul className="jobdescription">
              {Object.values(company.description).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.WorkExperienceWrap>
  </>
);

export default WorkExperience;
