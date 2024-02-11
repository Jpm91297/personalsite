import React from "react";
import * as S from "./TechnologiesStyles";
import { FaReact, FaDatabase, FaLanguage, FaQuestion } from "react-icons/fa";

const Technologies = () => (
  <>
    <S.TechnologiesHeader id="tech">Technologies</S.TechnologiesHeader>
    <S.TechnologiesWrap>
      <div className="techContainer">
        <div className="tech">
          <FaReact size="3em" />
          <h1>Front-End</h1>
          <div className="techlist">
            <li>React.js</li>
            <li>Angular.js</li>
            <li>Styled Components</li>
            <li>Figma</li>
          </div>
        </div>
        <div className="tech">
          <FaDatabase size="3em" />
          <h1>Back-End</h1>
          <div className="techlist">
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>MSSQL</li>
            <li>Azure Function Apps</li>
          </div>
        </div>
        <div className="tech">
          <FaLanguage size="3em" />
          <h1>Languages</h1>
          <div className="techlist">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>C#</li>
          </div>
        </div>
        <div className="tech">
          <FaQuestion size="3em" />
          <h1>Misc.</h1>
          <div className="techlist">
            <li>Git</li>
            <li>Azure DevOps (CI/CD)</li>
            <li>Azure Virtual Machines</li>
            <li>Alteryx</li>
          </div>
        </div>
      </div>
    </S.TechnologiesWrap>
  </>
);

export default Technologies;
