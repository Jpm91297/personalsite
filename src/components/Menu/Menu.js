import React from "react";
import { bool } from 'prop-types';
import { StyledMenu } from "./MenuStyles";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Menu = ({ openMenu, setOpenMenu }) => {
    return (
      <StyledMenu openMenu={ openMenu }>
        <h1>
          Menu
        </h1>
        <div className='social'>
            <a href="https://github.com" target="_blank">
                <AiFillGithub size="5rem" />
            </a>
            <a href="https://linkedin.com/in/mckinneyjp" target="_blank">
                <AiFillLinkedin size="5rem" />
            </a>
        </div>
        <a href="#workexperience" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Experience"></span>
          Work Experience
        </a>
        <a href="#projects" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Projects"></span>
          Projects
          </a>
        <a href="#tech" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Technologies"></span>
          Technologies
          </a>
        <a href="#about" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="About Me"></span>
          About Me
          </a>
      </StyledMenu>
    )
  }
  Menu.propTypes = {
    openMenu: bool.isRequired,
  }
  export default Menu;