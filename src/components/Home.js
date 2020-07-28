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
const T4=styled.img`
padding-top:1%;
padding-left:95%;
width:10px;
height:10px;
opacity:0.8;

  `
const T1=styled.img`
padding-top:1%;
padding-left:5%;
width:10px;
height:10px;
opacity:0.8;

`
const T2=styled.img`
padding-top:1%;
padding-left:60%;
width:10px;
height:10px;
opacity:0.8;
`

const T3=styled.img`
padding-top:3%;
padding-left:80%;
width:10px;
height:10px; 
opacity:0.8; 
`
const T5=styled.img`
padding-top:3%;
padding-left:90%;
width:10px;
height:10px;
opacity:0.8;
`
const T6=styled.img`
  padding-top:3%;
  padding-left:45%;
  width:10px;
  height:10px;
  opacity:0.8;
    `
const Duga=styled.img`
padding-top:3%;
padding-left:65%;
width:10px;
height:10px;
opacity:0.8;
`
const Duga1=styled.img`
padding-top:3%;
padding-left:30%;
width:10px;
height:10px;
opacity:0.8;
`
const Duga2=styled.img`
padding-top:3%;
padding-left:40%;
width:10px;
height:10px;
opacity:0.8;
`
const W=styled.img`
padding-top:1%;
padding-left:90%;
width:20px;
height:5px;
opacity:0.8;
`
const W1=styled.img`
padding-top:6%;
padding-left:10%;
width:20px;
height:5px;
opacity:0.8;
`
const W2=styled.img`
padding-top:6%;
padding-left:20%;
width:20px;
height:5px;
opacity:0.8;
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
   <Tilt>

      <T1  src='x.png'/>
      </Tilt>

      <Tilt>
       <Duga1 src='duga.png'/>
      </Tilt>

      <Tilt>
      <T2 src='x.png'/>
      </Tilt>

      <Tilt>
      <T4 src='triangle.png'/>
      </Tilt>

      <Tilt>
      <T3 src='x.png'/>
      </Tilt>

      <Tilt>
       <W1 src='wave.png'/>
      </Tilt>

      <Tilt>
       <Duga2 src='duga.png'/>
      </Tilt>

      <Tilt>
      <T5 src='triangle.png'/>
      </Tilt>

      <Tilt>
       <W2 src='wave.png'/>
      </Tilt>

      <Tilt>
      <T6 src='triangle.png'/>
      </Tilt>

      <Tilt>
       <Duga src='duga.png'/>
      </Tilt>

      <Tilt>
       <W src='wave.png'/>
      </Tilt>
      
      
      </Wrap>
    );
  }
  }


export default Home;