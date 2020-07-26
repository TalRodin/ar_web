import React from 'react'
import styled from 'styled-components'

const S = styled.div`
    position:relative;
    margin-left:5%;
    margin-right: 10%;
    margin-top: -1%;
    // text-align:center;
    display: inline-block;
    transform: rotate(-4deg);
    float: right;
    // animation: pic 8s ease-out;
    @media only screen and (max-width: 530px) {
        margin-left:35%;
        margin-top: 10%;
        opacity: 0.5;
        }
    @keyframes pic {
        0% {
            opacity: 0;
            }
             
        100% {
              opacity: 1;
            } 
    }
    
`
const SVG = styled.svg`
      width:10.000000pt; 
      height:20.000000pt;
    //   @media only screen and (max-width: 530px) {
    //     width:120.000000pt; 
    //     height:170.000000pt;
    //     }
`
const Rectangle1 =styled.div`
    border-radius:30% 70% 57% 43% / 25% 79% 21% 75%;
    border: transparent 1px;
    top:45%;
    left:28%;
    opacity: 0.2;
    position:absolute;
    width: 50px;
    height: 40px;
    background: url(https://i.pinimg.com/564x/16/08/fb/1608fb8522e38739a137217efda7323b.jpg);
    
`
const Rectangle2 =styled.div`
    border-radius:73% 27% 57% 43% / 42% 18% 82% 58% ;
    border: transparent 1px;
    top:45%;
    left:60%;
    opacity: 0.2;
    position:absolute;
    width: 40px;
    height: 30px;
    background: url(https://i.pinimg.com/564x/16/08/fb/1608fb8522e38739a137217efda7323b.jpg);
    transform: rotate(-30deg);
`
const Rectangle3 =styled.div`
    border-radius:29% 71% 91% 9% / 21% 41% 59% 79%  ;
    border: transparent 1px;
    top:77%;
    left:12%;
    opacity: 1;
    position:absolute;
    width: 160px;
    height: 220px;
    background: url(https://i.pinimg.com/564x/16/08/fb/1608fb8522e38739a137217efda7323b.jpg);
    transform: rotate(-60deg);
    @media only screen and (max-width: 530px) {
        width: 50px;
        height: 60px;
        left:7%;
        }
`

function Picture() {
    return (
        <>
        <S>
        {/* <Rectangle1></Rectangle1>
        <Rectangle2></Rectangle2> */}
        {/* <Rectangle3></Rectangle3> */}
     
        </S>
        </>
    );
  }
  
  export default Picture;



