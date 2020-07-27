import React from 'react';
import styled from 'styled-components'
import { device } from '../device';

const Wrap=styled.div`
    height: 100vh;
    width:auto;
`
const H1=styled.h1`

    font-family: 'Lato', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 20px;
    font-weight: bolder;
    font-size: 2rem;
    line-height: 2.5rem;
    @media only screen and (max-width: 870px) {
        font-size: 1.5rem; }
    @media only screen and (max-width: 785px) {
        font-size: 1rem; }
    @media only screen and (max-width: 660px) {
        font-size: 0.8rem; }
    @media only screen and (max-width: 600px) {
        font-size: 0.6rem; }
    @media only screen and (max-width: 560px) {
        font-size: 0.2rem; }
    @media only screen and (max-width: 530px) {
        font-size: 0.2rem; }
    background: url(https://i.pinimg.com/564x/48/a2/81/48a281139593319f3b13c8bc7b0f6e3b.jpg);
    
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    // color:#6d5dfc;
    animation: moveInUp 4s ease-out;
    // text-shadow: 3px 3px 3px #f2f3f6;
    @keyframes moveInUp {
      0% {
        opacity: 0;
        // transform: translateY(10rem); 
      }
       
      100% {
        opacity: 1;
        // transform: translateY(0) } 
      }
     
`
function Home() {
  return (
    <Wrap id='home'><H1>Alyona Rodina</H1></Wrap>
  );
}

export default Home;