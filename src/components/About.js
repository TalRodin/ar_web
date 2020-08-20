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
    @media screen and (max-width: 489px) {
      height: 80vh;
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
    @media screen and (max-width: 489px) {
      font-size: 11px;
      word-spacing:3px;
            }  
`
const H7 = styled.span`
color:#414141;
    text-shadow: 1px 2px 1px rgba(255,255,255,0.5);
    font-family: 'Lato', sans-serif;
    line-height: 2;
    letter-spacing: 1px;
    font-size: 16px;
    @media screen and (max-width: 489px) {
      font-size: 14px;
      word-spacing:6px;
            } 
`
const Hr = styled.hr`
    height: 1px;
    background-color: #6d5dfc;
    border: none;
`
const T1=styled.div`
      top:1000px;
      left:50px;
      position:absolute;
      width: 17.6px;
      height: 12px;
      background: #a8a7d1;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(50deg);
`
const Inner1 = styled.div`
      top:1000px;
      left:51.5px;
      position:absolute;
      width: 14.6px;
      height: 11.5px;
      background: #f8f8f8;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(50deg);
`
const T2=styled.div`
      top:1100px;
      left:1250px;
      position:absolute;
      width: 28px;
      height: 22px;
      background: #a8a7d1;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
   
`
const Inner2 = styled.div`
      top:1100px;
      left:1251.5px;
      position:absolute;
      width: 24px;
      height: 21px;
      background: #f8f8f8;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
    
`
function About() {
  return (
    <div id = 'about' >
    <Wrap >
      <T1 ></T1 >
      <Inner1></Inner1>
      <T2 ></T2 >
      <Inner2></Inner2>
      <Box>
        <H7>About</H7>
        <Hr/>
        <H6><Typing/></H6>
      </Box>
    </Wrap>
    </div>
  );
}

export default About;