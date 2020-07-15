import React from 'react';
import styled from 'styled-components'

const Wrap=styled.div`
    height: 100vh;
    text-align: center;
    position:
`
const H1=styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 15px;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.5rem;
    // background: linear-gradient(to bottom right,#E0AA3E, #F9F295,#E0AA3E,#B88A44);
    background:#f1555a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
function Home() {
  return (
    <Wrap id='home'><H1>Alyona Rodina</H1></Wrap>
  );
}

export default Home;