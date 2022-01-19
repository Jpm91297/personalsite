import React from 'react';
import * as S from './HeaderStyles';
import { HiCode } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Burger from '../Burger/Burger';


/*
git add .
git commit -m "message"
git push origin main
*/

const Header = ({open, setOpen}) => (

    <S.headerWrap>
        <div className='logo'>
            <a href='/' style ={{display: "flex", alignItems: "center", color: 'white', textDecoration: "none", padding: '4px'}}>
                <HiCode  className='icon' size="3rem"  /> <span>jordanpmckinney.com </span>
            </a>
        </div>
        <div className='links'>
            <li>
                <a href="#workexperience" style ={{textDecoration:"none"}}>
                    Work Experience
                </a>
            </li>
            <li>
                <a href="#projects" style ={{textDecoration:"none"}}>
                    Projects
                </a>
            </li>
            <li>
                <a href="#tech" style ={{textDecoration:"none"}}>
                    Technologies
                </a>
            </li>
            <li>
                <a href="#about" style ={{textDecoration:"none"}}>
                    About Me
                </a>
            </li>
        </div>
        <div className='social'>
            <a href="https://github.com" target="_blank">
                <AiFillGithub size="3rem" />
            </a>
            <a href="https://linkedin.com/in/mckinneyjp" target="_blank">
                <AiFillLinkedin size="3rem" />
            </a>
            <Burger className='Burger' open={open} setOpen={setOpen} />
        </div>
    </S.headerWrap>
    
)
    


export default Header
