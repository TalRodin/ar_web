import React from 'react';
import styled from 'styled-components'
import { device } from '../device';
import Tilt from 'react-parallax-tilt';
const Wrap=styled.div`
    height: 100vh;
    width:auto;
`
const H1=styled.h1`
z-index: 1;
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
top:160px;
left:400px;
width:30px;
height:30px;
position:absolute;
  `
const T1=styled.img`
top:40px;
left:750px;
width:10px;
height:10px;
position:absolute;
`
const T2=styled.img`
top:140px;
left:100px;
width:10px;
height:10px;
position:absolute;
`

const T3=styled.img`
top:150px;
left:1200px;
width:10px;
height:10px;
position:absolute;
`
const T5=styled.img`
top:200px;
left:1100px;
width:20px;
height:20px;
position:absolute;

`
const T6=styled.img`
      top:300px;
      left:150px;
      width:20px;
      height:20px;
      transform:rotate(180deg);
      position:absolute;
    `
const Duga=styled.img`
      top:250px;
      left:50px;
      width:20px;
      height:16px;
      position:absolute;
`
const Duga1=styled.img`
      top:10px;
      left:900px;
      width:20px;
      height:16px;
      transform:rotate(50deg);
      position:absolute;
`
const Duga2=styled.img`
      top:3px;
      left:300px;
      width:30px;
      height:26px;
      transform:rotate(100deg);
      position:absolute;
`
const W=styled.img`
      top:200px;
      left:650px;
      width:45px;
      height:40px;
      position:absolute;
`
const W1=styled.img`
      top:40px;
      left:70px;
      width:35px;
      height:20px;
      position:absolute;
`
const W2=styled.img`
      top:3px;
      left:600px;
      width:25px;
      height:20px;
      transform:rotate(30deg);
      position:absolute;
`
const Dot1 =styled.img`
      top:3px;
      left:10px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot2 =styled.img`
      top:30px;
      left:150px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot3 =styled.img`
      top:50px;
      left:500px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot4 =styled.img`
      top:5px;
      left:800px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot5 =styled.img`
      top:15px;
      left:1000px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot6 =styled.img`
      top:150px;
      left:200px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot7 =styled.img`
      top:150px;
      left:590px;
      width:30px;
      height:30px;
      position:absolute;
    `
const Dot8 =styled.img`
      top:150px;
      left:900px;
      width:30px;
      height:30px;
      position:absolute;
        `
const Dot9 =styled.img`
      top:120px;
      left:1300px;
      width:30px;
      height:30px;
      position:absolute;
            `
const Dot10 =styled.img`
      top:400px;
      left:1200px;
      width:30px;
      height:30px;
      position:absolute;
           `
const Dot11=styled.img`
      top:500px;
      left:400px;
      width:30px;
      height:30px;
      position:absolute;
               `
const Dot12=styled.img`
      top:450px;
      left:500px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot13=styled.img`
      top:600px;
      left:100px;
      width:30px;
      height:30px;
      position:absolute;
`
const Dot14 =styled.img`
      top:700px;
      left:800px;
      width:30px;
      height:30px;
      position:absolute;
`
const Duga3=styled.img`
      top:500px;
      left:900px;
      width:30px;
      height:26px;
      transform:rotate(100deg);
      position:absolute;
` 
const Tri=styled.img`
      top:600px;
      left:500px;
      width:20px;
      height:20px;
      transform:rotate(180deg);
      position:absolute;
    ` 
const Tri1=styled.img`
    top:550px;
    left:400px;
    width:10px;
    height:10px;
    transform:rotate(90deg);
    position:absolute;
  `
const X=styled.img`
  top:700px;
  left:400px;
  width:10px;
  height:10px;
  position:absolute;
    ` 
const X1=styled.img`
    top:600px;
    left:700px;
    width:10px;
    height:10px;
    position:absolute;
      ` 
const Tri2=styled.img`
      top:550px;
      left:1150px;
      width:20px;
      height:20px;
      transform:rotate(900deg);
      position:absolute;
    ` 
const Duga4=styled.img`
    top:500px;
    left:160px;
    width:30px;
    height:26px;
    transform:rotate(20deg);
    position:absolute;
`     
const W4=styled.img`
      top:350px;
      left:1350px;
      width:45px;
      height:40px;
      position:absolute;
      transform:rotate(80deg);
`  
const X5=styled.img`
    top:680px;
    left:1380px;
    width:10px;
    height:10px;
    position:absolute;
      `             
class Home extends React.Component {
  render(){
    return (
      <Wrap id='home'>
      <H1 >Alyona Rodina </H1>
      <Dot1 src='dot.png'/>
      <W1 src='wave.png'/>
      <Dot2 src='dot.png'/>
      <Duga2 src='duga.png'/>
      <W2 src='wave.png'/>
      <Dot3 src='dot.png'/>
      <T1  src='x.png'/>
      <Dot4 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot5 src='dot.png'/>
      <T2 src='x.png'/>
      <T4 src='triangle.png'/>
      <Dot6 src='dot.png'/>
      <W src='wave.png'/>
      <Dot7 src='dot.png'/>
      <Dot8 src='dot.png'/>
      <T5 src='triangle.png'/>
      <T3 src='x.png'/>
      <Dot9 src='dot.png'/>
      <Duga src='duga.png'/>
      <T6 src='triangle.png'/>
      <Dot10 src='dot.png'/>
      <Dot11 src='dot.png'/>
      <Dot12 src='dot.png'/>
      <Dot13 src='dot.png'/>
      <Dot13 src='dot.png'/>
      <Dot14 src='dot.png'/>
      <Duga3 src='duga.png'/>
      <Tri src='triangle.png'/>
      <Tri1 src='x.png'/>
      <X src='x.png'/>
      <X1 src='x.png'/>
      <Tri2 src='triangle.png'/>
      <Duga4 src='duga.png'/>
      <W4 src='wave.png'/>
      <X5 src='x.png'/>
      </Wrap>
    );
  }
  }


export default Home;