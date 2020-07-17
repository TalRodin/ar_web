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
const LinkToProjects=() =>{
  
  return (
    <>
    <Wrap id='projects' >LinkToProjects</Wrap>
    <ItemToProject link='projects'>Project</ItemToProject>
    </>
  );
}

export default LinkToProjects;