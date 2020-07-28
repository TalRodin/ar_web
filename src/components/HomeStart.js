import React from 'react';
import styled from 'styled-components'
import Navigation from './Navigation'
import About from './About'
import Articles from './Articles'
import LinkToProjects from './LinkToProjects'
import OpenSource from './OpenSource'
import Contact from './Contact'
import Home from './Home'
import Logo from './svg'

const Wrapper=styled.div`
  background-color: #f8f8f8;
`
const HomeStart=()=> {
  return (
    <Wrapper>
        <Navigation />
        <Home />
        <About />
        <Articles />
        <LinkToProjects />
        <OpenSource />
        <Contact />
    </Wrapper>
  );
}

export default HomeStart;