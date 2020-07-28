import React from 'react';
import styled, { keyframes } from 'styled-components'
import SVGPic from './svg_girl'
import Typing from './Typing'
import { device } from '../device';
const Wrap=styled.div`
    height: 100vh;
    width:auto;
    background-color:#f8f8f8;
    justify-content: center;
    display: flex;
    align-items: center;
    @media ${device.tablet} { 
      height: 60vh;
          }
`
const Box = styled.div`
width: 60vw;
height: 60vh;
padding: 5vh 5vw;
overflow: hidden;
background-color: #495a74;
color: transparent;
text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.8);
-webkit-background-clip: text;
transition: box-shadow 0.7s ease-in-out;
border-radius: 2px;
box-shadow: 8px 8px 8px #a3b1c6, -8px -8px 8px rgba(255, 255, 255, 0.5), inset 1px 1px 1px #fff, inset -1px -1px 1px #a3b1c6;
z-index:1;
`

const H6 =  styled.span`
  position: absolute;
  // display: inline-block;
  width: 70%;
  margin-left: 10%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom:5%;
  font-family: 'Lato', sans-serif;
  line-height: 2.5;
  letter-spacing: 1px;
  font-size: 14px;
  float:left;
  @media ${device.tablet} { 
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left:10%;
    margin-top: 10%;
        }
     
`
const Hr = styled.hr`
     
     
     
`
function About() {
  return (
    <div id = 'about'>
    <Wrap >
      <Box>
        
        About
        <Hr />
        <Typing />
         {/* <H6></H6>  */}
      </Box>
    </Wrap>
    </div>
  );
}

export default About;