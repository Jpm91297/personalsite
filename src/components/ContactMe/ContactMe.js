import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import * as S from './ContactMeStyles';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { RiMailSendLine }from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';

const ContactMe = ({openContact, setOpenContact}) => (
    <S.contactMe openContact ={ openContact }>
        <CloseButton className="btn" variant="white"  onClick={() => setOpenContact(!openContact)}/>
        <h1>
            Contact Me
        </h1>
            <div className="contact-row">
                <div className="contact-element">
                    <BsFillTelephoneForwardFill className="icon" color="white" />
                    <h2>
                        Phone
                    </h2>
                    <h3>
                        <a href="tel:5672423183" style={{color: "white"}}>
                            (567) 242-3183
                        </a>
                        
                    </h3>
                </div>
                <div className="contact-element">
                    <RiMailSendLine className="icon" color="white" />
                    <h2>
                        Email
                    </h2>
                    <h3>
                        jpmckinney3183@gmail.com
                    </h3>

                </div>
                <div className="contact-element">
                    <AiFillLinkedin className="icon" color="white" />
                    <h2>
                        LinkedIn
                    </h2>
                    <h3>
                        <a href="https://linkedin.com/in/mckinneyjp" target="_blank" style={{color: "white"}}>
                            Connect
                        </a>
                    </h3>
                </div>
                
            </div>
    </S.contactMe>
)


export default ContactMe;