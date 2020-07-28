import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Projects from './Projects'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavToProject from './NavToProject'
import Layout from '../layout'
import ItemToProject from './ItemToProject'
const Wrap=styled.div`
    height: 100vh;
    width:auto;
    justify-content: center;
    display: flex;
    align-items: center;
    color:#414141;
    
`
const L=styled.h6`  
        color:#414141;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        // text-align:right;
        // float:right;
        // top:20%;
        // left:50%;
        // transform: translate(-50%,50%);
        // margin-bottom:0%;
        // position:relative;
`
const Arrow=styled.div`
    text-align:left;
    // position: absolute;
    // right: 50%;
    // top: -1%;
    // width:4%;
    // height:4%;
    color:#414141;
    cursor: pointer;
    &:hover{
      color:#6d5dfc;
    }
`
const P=styled.p`  
  margin-top:5%;
  width: 90%;
  // margin-left:2%;
  word-spacing:5px;
  color:#414141;
  font-size: 14px;
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
z-index:1;
`

const LinkToProjects=() =>{
  
  return (

    <Wrap id='projects' >
     <Box>
     <L>
      Projects
      <ItemToProject link='projects' >
      <Arrow>
      <i class="fa fa-arrow-circle-right"  aria-hidden="true"></i>
      </Arrow>
    </ItemToProject>
    </L>
    <hr />
    <P>
        Python
        JavaScript
        React
        Firebase
        Nodejs
        CSS
        HTML
        styled-components
        D3js
        AWS
      </P>
      </Box>
    </Wrap>
  
  );
}

export default LinkToProjects;