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
const L=styled.span`  
display:flex;
flex-direction: row;
// align-items:center;
justify-content:space-between;

        color:#414141;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        text-shadow: 1px 1px #fff;
        // text-align:right;
        // float:right;
        // top:20%;
        // left:50%;
        // transform: translate(-50%,50%);
        // margin-bottom:0%;
        // position:relative;
`
const Arrow=styled.div`
    // text-align:left;
    // position: absolute;
    // right: 50%;
    // top: -1%;
    // width:4%;
    // height:4%;
    padding:0;
    color:#414141;
    cursor: pointer;
    &:hover{
      color:#6d5dfc;
    }
`
const P=styled.p`  
  margin-top:5%;
  width: 100%;
  // margin-left:2%;
  word-spacing:9px;
  color:#414141;
  font-size: 14px;
  text-shadow: 1px 1px #fff;
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
`
const I=styled.img`
 width:50px;
 height:90px;
 float:right;

 padding-top:10%;
 top: 10%;
`
const Hr = styled.hr`
height: 1px;
background-color: #6d5dfc;
border: none;
`

const LinkToProjects=() =>{
  
  return (

    <Wrap id='projects' >
     <Box>
     <L>
      Projects
    <ItemToProject link='projects' >
      <Arrow>
      <i padding-left='5%' color='#6d5dfc' text-decoration='none' cursor='pointer' class="fa fa-arrow-circle-right"  aria-hidden="true"></i>
      </Arrow>
    </ItemToProject>
    </L>
    <Hr />
    <P>
        Python ∙
        JavaScript ∙
        React ∙
        Firebase ∙
        Nodejs ∙
        CSS ∙
        HTML ∙
        styled-components ∙
        D3js ∙
        AWS ∙
        React ∙
        Redux ∙
        Nodejs ∙
        Express ∙
        PostgreSQL (data analyses) ∙
        Sequelize ∙
        Relational Model ∙
        Normalization ∙
        Heroku ∙
        CSS ∙
        HTML5 ∙
        Bootstrap ∙
        Material UI ∙
        SVG ∙
        Webpack ∙
        npm ∙
        VSCode ∙
        Anaconda ∙
        Git ∙
        Github ∙
        Lucid-Chart ∙
        Postman ∙
        Mocha ∙
        Chai ∙
        Jest ∙
        Tableau ∙
        Plotly ∙
        R ∙
        C++ ∙
        PHP ∙
        MATLAB ∙
        SPSS ∙
        AGILE Methodology ∙
        REST API ∙
        Flask ∙
        Machine Learning ∙
        NLP ∙
        Data Modeling and Evaluation ∙
        Building predictive models ∙
        Google OAuth ∙
        Babel ∙
        Data Structures and Algorithms ∙
        System Design ∙
        AWS lambda ∙
        AWS DynomoDB ∙
        S3 ∙
        Route53 ∙
        Netlify ∙
        Nextjs
      </P>
      <I src='lavander.png'/>
      </Box>
      
    </Wrap>
  
  );
}

export default LinkToProjects;