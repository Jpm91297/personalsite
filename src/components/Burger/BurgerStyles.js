import styled from "styled-components";

export const StyledBurger = styled.button`
  grid-area:social;
  z-index:3;
  top: 5%;
  left: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  background: transparent;
  transition: 0.3s ease;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 50x;
  &:hover {
    background-color: #212d45;
    transform: scale(1.3);
    cursor: pointer;
   
  }

  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background: ${({ open }) => open ? 'black' : 'white'};
  }

`