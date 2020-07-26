import React from 'react';
import styled, { keyframes } from 'styled-components'
import SVGPic from './svg_girl'
import Typing from './Typing'
import { device } from '../device';
const Wrap=styled.div`
    height: 60vh;
    width:auto;
    background-color:#f3f3f5;
    @media ${device.tablet} { 
      height: 60vh;
          }
`
const Box = styled.div`
      background: #f8f8f8;
      margin: 3%;
      height: 90%;
      border-radius:3px;
      justify-content: center;
`

const H6 =  styled.span`
  // color:#414141;
  background: #26282a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  // display: inline-block;
  width: 70%;
  margin-left: 10%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom:5%;
  font-family: 'Nothing You Could Do', cursive;
  transform: rotate(-1.5deg);
  line-height: 2.5;
  letter-spacing: 2px;
  font-size: medium;
  float:left;
  @media ${device.tablet} { 
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left:10%;
    margin-top: 10%;
        }
`

function About() {
  return (
    <div id = 'about'>
    <Wrap >
        <H6><Typing /></H6>
        <SVGPic/>
    </Wrap>
    </div>
  );
}

export default About;