import React from 'react';
import styled, { keyframes } from 'styled-components'
import SVGPic from '/Users/alyonarodin/Desktop/ar_website/my-app/src/svg_girl.js'
import Typing from './Typing'
const Wrap=styled.div`
    height: 100vh;
`
const Box = styled.div`
      background: #f8f8f8;
      margin: 3%;
      height: 90%;
      border-radius:3px;
      justify-content: center;
`

const H6 =  styled.span`
  color:#364650;
  position: absolute;
  display: inline-block;
  width: 40%;
  margin-left:3%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom:5%;
  font-family: 'Nothing You Could Do', cursive;
  transform: rotate(-1.5deg);
  line-height: 2.5;
  letter-spacing: 2px;
  transform: rotate(1deg);
`

function About() {
  return (
    <div id = 'about'>
    <Wrap >
      <Box>
        <SVGPic/>
        <H6><Typing /></H6>
      </Box>
    </Wrap>
    </div>
  );
}

export default About;