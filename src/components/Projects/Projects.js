import React from "react";
import * as S from './ProjectsStyles';
import { projectList } from './projectList';

const Projects = () => (
    <>
    <S.ProjectHeader id="projects">
        Projects
    </S.ProjectHeader>
    <S.GridContainer>
        {projectList.map(( {id, image, title, description, visit}) => (
        <S.ProjectCard key={id}>
            <h1>{title}</h1>
            <S.Img src={image} />
            <p>{description}</p>
            <a href={visit} target="_blank">
                <S.Visit >Visit</S.Visit>
            </a>
        </S.ProjectCard>
            ))}
        
       
    </S.GridContainer>
    </>
  );


export default Projects;

