import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Projects from './Projects'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavToProject from './NavToProject'
import Layout from '../layout'
import ItemToProject from './ItemToProject'
const Wrap=styled.div`
    height: 50vh;
    
`
const L=styled.h6`  
        color:#414141;
        font-family: 'Nothing You Could Do', cursive;
        font-size: medium;
        text-align:right;
        margin-right: 20%;
        margin-bottom:0%;

`
const Arrow=styled.div`
      text-align:right;
      margin-right: 20%;
`

const LinkToProjects=() =>{
  
  return (
    <>
    <Wrap id='projects' >
    <L>Projects</L>
    <ItemToProject link='projects' >
      <Arrow>
       <svg fill='#414141' width='30' height='30' xmlns="http://www.w3.org/2000/svg"  id="Layer_1"  version="1.1" viewBox="0 0 91 91" >
       <g>
       <path class="st0" d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"/>
       </g>
       </svg>
      </Arrow>
    </ItemToProject>
    </Wrap>
    </>
  );
}

export default LinkToProjects;