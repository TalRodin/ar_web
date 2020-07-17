import React from 'react';
import styled from 'styled-components'
import Navigation from './Navigation'
import About from './About'
import Articles from './Articles'
import LinkToProjects from './LinkToProjects'
import OpenSource from './OpenSource'
import Contact from './Contact'
import Home from './Home'
import Logo from '/Users/alyonarodin/Desktop/ar_website/my-app/src/svg.js'

const Wrapper=styled.div`
  background-color: #fff;
`
const HomeStart=()=> {
  return (
    <Wrapper>
        <Logo />
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