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
    @media screen and (max-width: 489px) {
      width: 80vw;
      height: 50vh;
      padding: 3vh 3vw;
            } 


    `

const H6 =  styled.span`
    line-height: normal;
    margin-top:5%;
    width: 100%;
    word-spacing:9px;
    color:#414141;
    font-size: 14px;
    text-shadow: 1px 1px #fff;
    @media ${device.tablet} { 
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-left:10%;
      margin-top: 10%;
      font-size: 12px;
          } 
    @media screen and (max-width: 489px) {
      font-size: 10px;
      word-spacing:6px;
            }  
`
const H7 = styled.span`
color:#414141;
    text-shadow: 1px 2px 1px rgba(255,255,255,0.5);
    font-family: 'Lato', sans-serif;
    line-height: 2;
    letter-spacing: 1px;
    font-size: 12px;
`
const Hr = styled.hr`
    height: 1px;
    background-color: #6d5dfc;
    border: none;
`

function About() {
  return (
    <div id = 'about' >
    <Wrap >
      <Box>
        
  <H7 >About</H7>
        <Hr/>
         <H6><Typing /></H6>
      </Box>
    </Wrap>
    </div>
  );
}

export default About;