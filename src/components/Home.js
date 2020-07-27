import React from 'react';
import styled from 'styled-components'
import { device } from '../device';
import Tilt from 'react-parallax-tilt';
const Wrap=styled.div`
    height: 100vh;
    width:auto;
`
const H1=styled.h1`

    font-family: 'Lato', sans-serif;
    position: absolute;
    top:50%;
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
const T1=styled.div`
    margin:0%;
    margin-top:30%;
    margin-left:40%;
    
`
const T2=styled.div`
    margin:0%;
    margin-top:10%;
    margin-left:20%;

    
`

const T3=styled.div`
    margin:0%;
    padding-top:20%;
    padding-left:30%;
    
`
class Home extends React.Component {
  render(){
    return (
      <Wrap id='home'>
{/*         
       <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 20, width: 20, perspective:'100px'}}>
         < T1 className="Tilt-inner">X</T1>
       </Tilt>
       <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 20, width: 20}}>
         <div >X</div>
       </Tilt>
       <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 20, width: 20}}>
         <div >X</div>
       </Tilt> */}
   <H1 >Alyona Rodina </H1>
   {/* <Tilt>
   <T2 >
X
      </T2>
      <T1 >
      X
      </T1>
    <T3 >
      X
      </T3>
      </Tilt> */}
      </Wrap>
    );
  }
  }


export default Home;