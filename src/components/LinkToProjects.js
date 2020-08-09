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
    @media screen and (max-width: 489px) {
      height: 80vh;
            } 
`
const L=styled.span`  
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        color:#414141;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        text-shadow: 1px 1px #fff;
        @media screen and (max-width: 489px) {
          font-size: 12px;
                } 
`
const Arrow=styled.div`
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
    word-spacing:3px;
    color:#414141;
    font-size: 14px;
    text-shadow: 1px 1px #fff;
    @media screen and (max-width: 489px) {
      font-size: 10px;
      word-spacing:6px;
            }
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
    @media screen and (max-width: 489px) {
      width: 80vw;
      height: 50vh;
      padding: 3vh 3vw;
            } 
    `
const I=styled.img`
    width:50px;
    height:90px;
    float:right;
    padding-top:10%;
    // top: 10%;
    @media screen and (max-width: 489px) {
      width:30px;
      height:60px;
      padding-top:3%;
            }
`
const Hr = styled.hr`
    height: 1px;
    background-color: #6d5dfc;
    border: none;
`
const H6 =styled.h6`
    font-size:1px;
    opacity:0.3;
`
const B = styled.div`
  display:flex;
  list-style-type: none;
  flex-direction: row;
  color:#414141;
    font-size: 12px;
    text-shadow: 1px 1px #fff;
    justify-content: space-between;
  @media screen and (max-width: 489px) {
    font-size: 8px;
    justify-content: space-around;
            }
`
const Item= styled.div`
  display:flex;
  flex-direction: column;
  margin: 1%;
  @media screen and (max-width: 489px) {
    margin: 0.5%;
  }
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
    <B >
        <Item>
          <li>AWS</li> 
          <li>AGILE Methodology</li>
          <li>AWS DynomoDB</li>
          <li>AWS lambda</li>
          <li>Anaconda</li>
          <li>Bootstrap</li>
          <li>Building predictive models</li>
          <li>Babel</li>
          <li>CSS</li>
          <li>Chai</li>
          <li>C++</li>
          <li>Data Modeling and Evaluation</li>
        </Item>
        <Item>
          <li>D3js</li>
          <li>Data Structures and Algorithms</li>
          <li>Express</li>
          <li>Flask</li>
          <li>Firebase</li>
          <li>Firebase Authentification</li>
          <li>Fireabase Database</li>
          <li>Firebase Storage</li>
          <li>Firebase Hosting</li>
          <li>Github</li>
          <li>Git</li>
          <li>Google OAuth</li>
        </Item>
        <Item>
          <li>Heroku</li>
          <li>JavaScript</li>
          <li>Jest</li>
          <li>Lucid-Chart</li>
          <li>Material ui</li>
          <li>Machine Learning</li>
          <li>MATLAB</li>
          <li>Mocha</li>
          <li>npm</li>
          <li>NLP</li>
          <li>Normalization</li>
          <li>Nodejs</li>
        </Item>
        <Item>
          <li>Netlify</li>
          <li>Nextjs</li>
          <li>Python</li>
          <li>Plotly</li>
          <li>PostgreSQL (data analyses)</li>
          <li>Postman</li>
          <li>PHP</li>
          <li>R</li>
          <li>Relational Model</li>
          <li>Redux</li>
          <li>REST API</li>
          <li>React</li>
        </Item>
        <Item>
          <li>Route53</li>
          <li>SVG</li>
          <li>S3</li>
          <li>styled-components</li>
          <li>SPSS</li>
          <li>Sequelize</li>
          <li>SCSS</li>
          <li>System Design</li>
          <li>Tableau</li>
          <li>Webpack</li>
          <li>VSCode</li>
        </Item>
      </B>
        <I src='lavander.png'/>
      </Box>
    </Wrap>
  );
}

export default LinkToProjects;