import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Projects from './Projects'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavToProject from './NavToProject'
import Layout from '../layout'
import ItemToProject from './ItemToProject'
const Wrap=styled.div`
    height: 60vh;
    background-color:#f3f3f5;
`
const L=styled.h6`  
        color:#414141;
        font-family: 'Lato', sans-serif;
        font-size: medium;
        text-align:center;
        
        top:10%;
        left:50%;
        transform: translate(-50%,50%);
        margin-bottom:0%;
        position:relative;
`
const Arrow=styled.div`
    text-align:right;
    position: absolute;
    right: 45%;
    top: -1%;
    width:4%;
    height:4%;
    color:#414141;
    cursor: pointer;
    &:hover{
      color:#fff;
    }
`
const P=styled.p`  
  margin-top:5%;
  width: 80%;
  margin-left:2%;
  word-spacing:5px;
  color:#414141;
  font-size: 14px;
`
const LinkToProjects=() =>{
  
  return (
    <>
    <Wrap id='projects' >
    <L>Projects<ItemToProject link='projects' >
      <Arrow>
      <i class="fa fa-arrow-circle-right"  aria-hidden="true"></i>
      </Arrow>
    </ItemToProject>
    </L>
    
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

      </P>
    </Wrap>
    </>
  );
}

export default LinkToProjects;