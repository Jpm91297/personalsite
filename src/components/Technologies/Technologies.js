import React from "react";
import * as S from './TechnologiesStyles';
import { FaReact, FaDatabase, FaLanguage, FaQuestion } from 'react-icons/fa'

const Technologies = () => (
    <>
        <S.TechnologiesHeader id="tech">
            Technologies
        </S.TechnologiesHeader>
        <S.TechnologiesWrap>
          <div className="techContainer">
                <div className="tech">
                    <FaReact size='3em' />
                    <h1>
                        Front-End
                    </h1>
                    <div className="techlist">
                        <li>
                            React.js
                        </li>
                        <li>
                            React Native
                        </li>
                        <li>
                            Tailwind CSS
                        </li>
                        <li>
                            Styled Components
                        </li>
                    </div>
                </div>
                <div className="tech">
                    <FaDatabase size='3em' />
                    <h1>
                        Back-End
                    </h1>
                    <div className="techlist">
                        <li>
                            MongoDB
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Oracle DB 19c
                    </li>
                    </div>
                </div>
                <div className="tech">
                    <FaLanguage size='3em' />
                    <h1>
                        Languages
                    </h1>
                    <div className="techlist">
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            C#
                        </li>
                    </div>
                </div>
                <div className="tech">
                    <FaQuestion size='3em' />
                        <h1>
                            Misc.
                        </h1>
                        <div className="techlist">
                            <li>
                                SAP Analysis  
                            </li>
                            <li>
                                RPA
                            </li>
                            <li>
                                Alteryx
                            </li>
                            <li>
                                Tableau
                            </li>
                        </div>
                </div>
          </div>
        </S.TechnologiesWrap>
    </>
);

export default Technologies;