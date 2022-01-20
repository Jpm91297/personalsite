import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import * as S from './ContactMeStyles';

const ContactMe = ({openContact, setOpenContact}) => (
    <S.contactMe openContact ={ openContact }>
        <CloseButton className="btn" variant="white"  onClick={() => setOpenContact(!openContact)}/>
        <h1>
            Contact Me
            
        </h1>
        
    </S.contactMe>
)


export default ContactMe;