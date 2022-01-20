import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './BurgerStyles';

const Burger = ({ openMenu, setOpenMenu }) => {
  return (
    <StyledBurger openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
Burger.propTypes = {
    openMenu: bool.isRequired,
    setOpenMenu: func.isRequired,
  };

export default Burger;