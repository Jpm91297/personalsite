import React from "react";
import * as S from './ContactMeStyles';

const ContactMe = ({openContact, setOpenContact}) => (
    <S.contactMe openContact ={ openContact }>
        Hello World
        <button onClick={() => setOpenContact(!openContact)}>Close</button>
    </S.contactMe>

)


export default ContactMe;