import React from 'react';
import './App.css';
import Navigation from '../src/components/Navigation'
import About from '../src/components/About'
import Articles from '../src/components/Articles'
import LinkToProjects from '../src/components/LinkToProjects'
import OpenSource from '../src/components/OpenSource'
import Contact from '../src/components/Contact'
import Home from '../src/components/Home'
import styled from 'styled-components'
import Logo from '/Users/alyonarodin/Desktop/ar_website/my-app/src/svg.js'

const Wrapper=styled.div`
  background-color: #fff;
`


function App() {
  return (
    <>
    {/* <div className="App"> */}
    <Wrapper>
      <Logo />
      <Navigation />
      <Home />
      <About />
      <Articles />
      <LinkToProjects />
      <OpenSource />
      <Contact />
      
    {/* </div> */}
    </Wrapper>
    
    </>
  );
}

export default App;
