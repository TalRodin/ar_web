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
padding-top:1px;
padding-left:95px;
width:20px;
height:20px;
  `
const T1=styled.img`
padding-top:1px;
padding-left:5px;
width:10px;
height:10px;


`
const T2=styled.img`
padding-top:5px;
padding-left:80px;
width:10px;
height:10px;

`

const T3=styled.img`
padding-top:30px;
padding-left:30px;
width:10px;
height:10px; 
`
const T5=styled.img`
padding-top:3px;
padding-left:40px;
width:20px;
height:20px;

`
const T6=styled.img`
      padding-top:3px;
      padding-left:45px;
      width:20px;
      height:20px;
      transform:rotate(180deg);
    `
const Duga=styled.img`
      padding-top:3px;
      padding-left:65px;
      width:20px;
      height:16px;
`
const Duga1=styled.img`
      padding-top:8px;
      padding-left:70px;
      width:20px;
      height:16px;
      transform:rotate(50deg);
`
const Duga2=styled.img`
      padding-top:3px;
      padding-left:60px;
      width:20px;
      height:16px;
      transform:rotate(100deg);
`
const W=styled.img`
      padding-top:1px;
      padding-left:90px;
      width:25px;
      height:20px;
`
const W1=styled.img`
      padding-top:10px;
      padding-left:20px;
      width:25px;
      height:20px;
`
const W2=styled.img`
      padding-top:6px;
      padding-left:80px;
      width:25px;
      height:20px;
      transform:rotate(30deg);
`
const Dot1 =styled.img`
      padding-top:3px;
      padding-left:10px;
      width:30px;
      height:30px;
`
const Dot2 =styled.img`
      padding-top:5px;
      padding-left:20px;
      width:30px;
      height:30px;
`
const Dot3 =styled.img`
      padding-top:9px;
      padding-left:60px;
      width:30px;
      height:30px;
`
const Dot4 =styled.img`
      padding-top:5px;
      padding-left:20px;
      width:30px;
      height:30px;
`
const Dot5 =styled.img`
      padding-top:15px;
      padding-left:50px;
      width:30px;
      height:30px;
`
const Dot6 =styled.img`
      padding-top:15px;
      padding-left:60px;
      width:30px;
      height:30px;
`
const Dot7 =styled.img`
      padding-top:6px;
      padding-left:100px;
      width:30px;
      height:30px;
    `
const Dot8 =styled.img`
      padding-top:33px;
      padding-left:25px;
      width:30px;
      height:30px;
        `
const Dot9 =styled.img`
      padding-top:2px;
      padding-left:25px;
      width:30px;
      height:30px;
            `
const Dot10 =styled.img`
      padding-top:2px;
      padding-left:25px;
      width:30px;
      height:30px;
           `
const Dot11=styled.img`
      padding-top:2px;
      padding-left:15px;
      width:30px;
      height:30px;
               `
const Dot12=styled.img`
      padding-top:2px;
      padding-left:25px;
      width:30px;
      height:30px;
`
const Dot13=styled.img`
      padding-top:2px;
      padding-left:50px;
      width:30px;
      height:30px;
`
const Dot14 =styled.img`
      padding-top:2px;
      padding-left:5px;
      width:30px;
      height:30px;
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
      <Dot1 src='dot.png'/>
      <W1 src='wave.png'/>
      <Dot2 src='dot.png'/>
      <Duga2 src='duga.png'/>
      <Dot3 src='dot.png'/>
      <T1  src='x.png'/>
      <Dot4 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot5 src='dot.png'/>
      <T2 src='x.png'/>
      <Dot6 src='dot.png'/>
      <T4 src='triangle.png'/>
      <Dot7 src='dot.png'/>
     </Tilt>
     <Tilt>
      <T3 src='x.png'/>
      <Dot8 src='dot.png'/>
      <T5 src='triangle.png'/>
      <W2 src='wave.png'/>
      <Dot9 src='dot.png'/>
      <Duga src='duga.png'/>
      <Dot10 src='dot.png'/>
      <W2 src='wave.png'/>
      <Dot11 src='dot.png'/>
      <T6 src='triangle.png'/>
      <Dot12 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot13 src='dot.png'/>
      <W src='wave.png'/>
      <Dot14 src='dot.png'/>
    </Tilt>
    <Tilt>
      <Dot1 src='dot.png'/>
      <W1 src='wave.png'/>
      <Dot2 src='dot.png'/>
      <Duga2 src='duga.png'/>
      <Dot3 src='dot.png'/>
      <T1  src='x.png'/>
      <Dot4 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot5 src='dot.png'/>
      <T2 src='x.png'/>
      <Dot6 src='dot.png'/>
      <T4 src='triangle.png'/>
      <Dot7 src='dot.png'/>
     </Tilt>
     <Tilt>
      <T3 src='x.png'/>
      <Dot8 src='dot.png'/>
      <T5 src='triangle.png'/>
      <W2 src='wave.png'/>
      <Dot9 src='dot.png'/>
      <Duga src='duga.png'/>
      <Dot10 src='dot.png'/>
      <W2 src='wave.png'/>
      <Dot11 src='dot.png'/>
      <T6 src='triangle.png'/>
      <Dot12 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot13 src='dot.png'/>
      <W src='wave.png'/>
      <Dot14 src='dot.png'/>
    </Tilt>
    <Tilt>
      <Dot1 src='dot.png'/>
      <W1 src='wave.png'/>
      <Dot2 src='dot.png'/>
      <Duga2 src='duga.png'/>
      <Dot3 src='dot.png'/>
      <T1  src='x.png'/>
      <Dot4 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot5 src='dot.png'/>
      <T2 src='x.png'/>
      <Dot6 src='dot.png'/>
      <T4 src='triangle.png'/>
      <Dot7 src='dot.png'/>
     </Tilt>
     <Tilt>
      <T3 src='x.png'/>
      <Dot8 src='dot.png'/>
      <T5 src='triangle.png'/>
      <W2 src='wave.png'/>
      <Dot9 src='dot.png'/>
      <Duga src='duga.png'/>
      <Dot10 src='dot.png'/>
      <W2 src='wave.png'/>
      <Dot11 src='dot.png'/>
      <T6 src='triangle.png'/>
      <Dot12 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot13 src='dot.png'/>
      <W src='wave.png'/>
      <Dot14 src='dot.png'/>
    </Tilt>
    <Tilt>
      <Dot1 src='dot.png'/>
      <W1 src='wave.png'/>
      <Dot2 src='dot.png'/>
      <Duga2 src='duga.png'/>
      <Dot3 src='dot.png'/>
      <T1  src='x.png'/>
      <Dot4 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot5 src='dot.png'/>
      <T2 src='x.png'/>
      <Dot6 src='dot.png'/>
      <T4 src='triangle.png'/>
      <Dot7 src='dot.png'/>
     </Tilt>
     <Tilt>
      <T3 src='x.png'/>
      <Dot8 src='dot.png'/>
      <T5 src='triangle.png'/>
      <W2 src='wave.png'/>
      <Dot9 src='dot.png'/>
      <Duga src='duga.png'/>
      <Dot10 src='dot.png'/>
      <W2 src='wave.png'/>
      <Dot11 src='dot.png'/>
      <T6 src='triangle.png'/>
      <Dot12 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot13 src='dot.png'/>
      <W src='wave.png'/>
      <Dot14 src='dot.png'/>
    </Tilt>
    <Tilt>
      <Dot1 src='dot.png'/>
      <W1 src='wave.png'/>
      <Dot2 src='dot.png'/>
      <Duga2 src='duga.png'/>
      <Dot3 src='dot.png'/>
      <T1  src='x.png'/>
      <Dot4 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot5 src='dot.png'/>
      <T2 src='x.png'/>
      <Dot6 src='dot.png'/>
      <T4 src='triangle.png'/>
      <Dot7 src='dot.png'/>
     </Tilt>
      </Wrap>
    );
  }
  }


export default Home;