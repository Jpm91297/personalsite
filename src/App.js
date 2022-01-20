import React, { useState } from 'react';
import Projects from './components/Projects/Projects';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Menu from "./components/Menu/Menu";
import ContactMe from './components/ContactMe/ContactMe';


const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
    <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    <ContactMe openContact={openContact} setOpenContact={setOpenContact} />
    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
    <Hero openContact={openContact} setOpenContact={setOpenContact} />
    <WorkExperience />
    <Projects />
    </>
  )
  }

export default App;
