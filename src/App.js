import React, { useState } from 'react';

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Menu from "./components/Menu/Menu";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Menu open={open} setOpen={setOpen} />
    <Header open={open} setOpen={setOpen} />
    <Hero />
    <WorkExperience />
    </>
  )
  }

export default App;
