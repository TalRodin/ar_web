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
    top:50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 20px;
    font-weight: bolder;
    font-size: 2rem;
    line-height: 2.5rem;
    background: url(https://i.pinimg.com/564x/48/a2/81/48a281139593319f3b13c8bc7b0f6e3b.jpg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
   @media screen and (max-width: 1035px) {
      font-size: 1.5rem;
      letter-spacing: 10px;
            }
    @media screen and (max-width: 780px) {
            font-size: 0.9rem;
            letter-spacing: 10px;
                  }
    @media screen and (max-width: 489px) {
            font-size: 0.9rem;
            letter-spacing: 5px;        
          }
    animation: moveInUp 3s ease-in;
    @keyframes moveInUp {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
`

const T1=styled.div`
      top:40px;
      left:50px;
      position:absolute;
      width: 17.6px;
      height: 12px;
      background: #a8a7d1;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(50deg);
`
const Inner1 = styled.div`
      top:40.0px;
      left:51.5px;
      position:absolute;
      width: 14.6px;
      height: 11.5px;
      background: #f8f8f8;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(50deg);
`

const T2=styled.div`
      top:500px;
      left:410px;
      position:absolute;
      width: 28px;
      height: 22px;
      background: #a8a7d1;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(10deg);
`
const Inner2 = styled.div`
      top:500px;
      left:411.5px;
      position:absolute;
      width: 24px;
      height: 21px;
      background: #f8f8f8;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(10deg);
`

const T3=styled.div`
      top:200px;
      left:1110px;
      position:absolute;
      width: 28px;
      height: 22px;
      background: #a8a7d1;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(10deg);
`
const Inner3 = styled.div`
      top:200px;
      left:1111.5px;
      position:absolute;
      width: 24px;
      height: 21px;
      background: #f8f8f8;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transform:rotate(10deg);
`



const T4=styled.img`
      top:160px;
      left:900px;
      width:30px;
      height:30px;
      position:absolute;
      @media screen and (max-width: 489px) {
            left:50px;
            }
  `
const T5=styled.img`
      top:200px;
      left:1100px;
      width:20px;
      height:20px;
      position:absolute;
      @media screen and ${device.tablet} {
            left:470px;
       }
      @media screen and (max-width: 489px) {
            left:250px;
            }
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
      
      @media screen and ${device.tablet} {
            left:200px;
       }
       @media screen and (max-width: 489px) {
            left:160px;
            top:100px;
            }
`
const Duga2=styled.img`
      top:3px;
      left:300px;
      width:30px;
      height:26px;
      transform:rotate(100deg);
      position:absolute;
      @media screen and (max-width: 489px) {
            left:300px;
            top:280px;
            }
`
const W=styled.img`
      top:200px;
      left:650px;
      width:45px;
      height:40px;
      position:absolute;
    
      @media screen and ${device.tablet} {
            left:150px;
       }
     
`
const W1=styled.img`
      top:40px;
      left:70px;
      width:35px;
      height:20px;
      position:absolute;
      @media screen and (max-width: 489px) {
            left:30px;
            top:100px;
            }
     
`
const W2=styled.img`
      top:3px;
      left:600px;
      width:25px;
      height:20px;
      transform:rotate(30deg);
      position:absolute;
      
      @media screen and ${device.tablet} {
            left:400px;
       }
      @media screen and (max-width: 489px) {
            left:270px;
            top:50px;
            }
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
   
      @media screen and ${device.tablet} {
            left:420px;
       }
       @media screen and (max-width: 489px) {
            left:200px;
            }
`
const Dot4 =styled.img`
      top:5px;
      left:800px;
      width:30px;
      height:30px;
      position:absolute;
  
      @media screen and ${device.tablet} {
            left:350px;
       }
      
`
const Dot5 =styled.img`
      top:15px;
      left:1000px;
      width:30px;
      height:30px;
      position:absolute;
      @media screen and ${device.tablet} {
            left:250px;
       }
`
const Dot6 =styled.img`
      top:150px;
      left:200px;
      width:30px;
      height:30px;
      position:absolute;
      @media screen and (max-width: 489px) {
            left:300px;
            top:450px;
            }
`
const Dot7 =styled.img`
      top:150px;
      left:590px;
      width:30px;
      height:30px;
      position:absolute;

      @media screen and ${device.tablet} {
            left:300px;
       }
       @media screen and (max-width: 489px) {
            left:230px;
            top:270px;
            }
    `
const Dot8 =styled.img`
      top:150px;
      left:900px;
      width:30px;
      height:30px;
      position:absolute;

      @media screen and ${device.tablet} {
            left:280px;
       }
      
        `
const Dot9 =styled.img`
      top:120px;
      left:1300px;
      width:30px;
      height:30px;
      position:absolute;

      @media screen and ${device.tablet} {
            left:300px;
       }
      
            `
const Dot10 =styled.img`
      top:400px;
      left:1200px;
      width:30px;
      height:30px;
      position:absolute;

      @media screen and ${device.tablet} {
            left:20px;
       }
       
           `
const Dot11=styled.img`
      top:500px;
      left:400px;
      width:30px;
      height:30px;
      position:absolute;
      @media screen and (max-width: 489px) {
            left:50px;
            }
          
               `
const Dot12=styled.img`
      top:450px;
      left:500px;
      width:30px;
      height:30px;
      position:absolute;
      @media screen and ${device.tablet} {
            left:20px;
       }
      
`
const Dot13=styled.img`
      top:600px;
      left:100px;
      width:30px;
      height:30px;
      position:absolute;
      @media screen and (max-width: 489px) {
            left:10px;
            top:300px;
            }
`
const Dot14 =styled.img`
      top:600px;
      left:800px;
      width:30px;
      height:30px;
      position:absolute;
      @media screen and ${device.tablet} {
            left:100px;
       }
       @media screen and (max-width: 489px) {
            left:10px;
            top:300px;
            }  

`
const Duga3=styled.img`
      top:500px;
      left:900px;
      width:30px;
      height:26px;
      transform:rotate(100deg);
      position:absolute;
      @media screen and ${device.tablet} {
            left:300px;
       }
      
` 
const Tri=styled.img`
      top:600px;
      left:500px;
      width:20px;
      height:20px;
      transform:rotate(180deg);
      position:absolute;
      @media screen and ${device.tablet} {
            left:200px;
            top:370px;
       }
       
    ` 
const Tri1=styled.img`
      top:550px;
      left:400px;
      width:10px;
      height:10px;
      transform:rotate(90deg);
      position:absolute;
      @media screen and (max-width: 489px) {
            left:20px;
            }
  `
const X=styled.img`
      top:400px;
      left:100px;
      width:10px;
      height:10px;
      position:absolute;
    
    ` 
const X1=styled.img`
      top:350px;
      left:700px;
      width:10px;
      height:10px;
      position:absolute;
      @media screen and ${device.tablet} {
            left:100px;
       }

      
      ` 
const Tri2=styled.img`
      top:550px;
      left:1150px;
      width:20px;
      height:20px;
      transform:rotate(90deg);
      position:absolute;
      @media screen and ${device.tablet} {
            left:150px;
       }
      
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
      @media screen and ${device.tablet} {
            left:240px;
            top:500px;
       }
`  
const X5=styled.img`
      top:580px;
      left:1380px;
      width:10px;
      height:10px;
      position:absolute;
      @media screen and ${device.tablet} {
            left:380px;}
      @media screen and (max-width: 489px) {
                  left:40px;
                  }
` 
const Duga5=styled.img`
      top:300px;
      left:500px;
      width:30px;
      height:26px;
      transform:rotate(180deg);
      position:absolute;
      @media screen and ${device.tablet} {
            left:380px;
            top:400px;}
      @media screen and (max-width: 489px) {
                  left:290px;
                  }
` 
const Tri3=styled.img`
      top:500px;
      left:690px;
      width:30px;
      height:30px;
      transform:rotate(130deg);
      position:absolute;
      @media screen and ${device.tablet} {
            left:380px;
          }
      @media screen and (max-width: 489px) {
            left:250px;
            top:450px;
            }
      
    `            
class Home extends React.Component {
  render(){
    return (
      <Wrap id='home'>
      <H1 >Alyona Rodina </H1>
      {/* <Dot1 src='dot.png'/>
      <W1 src='wave.png'/>
      <Dot2 src='dot.png'/>
      <Duga2 src='duga.png'/>
      <W2 src='wave.png'/>
      <Dot3 src='dot.png'/> */}
      {/* <T1  src='x.png'/> */}
      <T1 ></T1 >
      <Inner1></Inner1>
      <T2 ></T2 >
      <Inner2></Inner2>
      <T3 ></T3>
      <Inner3></Inner3>
      {/* <Dot4 src='dot.png'/>
      <Duga1 src='duga.png'/>
      <Dot5 src='dot.png'/>
      <T2 src='x.png'/>
      <T4 src='triangle.png'/>
      <Dot6 src='dot.png'/>
      <W src='wave.png'/>
      <Dot7 src='dot.png'/>
      <Dot8 src='dot.png'/> */}
      {/* <T5 src='triangle.png'/>
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
      <Duga5 src='duga.png'/>
      <Tri3 src='triangle.png'/> */}
      </Wrap>
    );
  }
  }


export default Home;