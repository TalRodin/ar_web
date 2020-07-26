import React from 'react'
import { Link} from 'react-scroll'
import styled from 'styled-components'
import { device } from '../device';

const Container =styled.ul`
    text-align:right;
    list-style:none;
    position: fixed;
    display: flex;
    flex-direction:column;
    @media ${device.tablet} { 
        display: flex;
        flex-direction:row;
        text-align:center;
        }
    @media only screen and (max-width: 1040px) {
            display: flex;
            flex-direction:row;
            text-align:center;
            }
`
const Body = styled.div`
    position:fixed;
    margin-left: 88%;
    margin-top: 18%;
    
    @media ${device.tablet} { 
        margin-left: 27%;
        margin-top:0%;
        position:relative;
            }
    @media only screen and (max-width: 1040px) {
        margin-left: 27%;
        margin-top:0%;
        position:relative;
                }
    @media only screen and (max-width: 785px) {
        margin-left: 27%;
        margin-top:0%;
        position:relative; }
    @media only screen and (max-width: 740px) {
            margin-left: 20%;
            margin-top:0%;
            position:relative; }
    @media only screen and (max-width: 700px) {
        margin-left: 23%;
        margin-top:0%;
        position:relative; }
    @media only screen and (max-width: 660px) {
        margin-left: 20%;
        margin-top:0%;
        position:relative; }
    @media only screen and (max-width: 600px) {
        margin-left: 18%;
        margin-top:0%;
        position:relative; }
    @media only screen and (max-width: 560px) {
        margin-left: 16%;
        margin-top:0%;
        position:relative; }
    @media only screen and (max-width: 530px) {
        margin-left: 15%;
        margin-top:0%;
        position:relative; }
`
const Wrapper=styled.li`
    margin:4px 4px;
    cursor: pointer;
    color:#414141;
    padding:2%;
    float:right;
`
const A=styled.h6`
    font-size: small;
    font-weight: 300;
    color:#26282a;
    font-family: 'Lato', sans-serif;
    margin:0%;
    &:hover{
        color:#5c404b;
        font-weight: 600;
    }
    
    @media only screen and (max-width: 700px) {
        font-size: 10px;}
    @media only screen and (max-width: 660px) {
        font-size: 10px;}
    @media only screen and (max-width: 600px) {
        font-size: 10px;}
    @media only screen and (max-width: 560px) {
        font-size: 10px;}
    @media only screen and (max-width: 530px) {
        font-size: 10px;}
`
const Input=styled.input`
    height:6px; 
    width:6px;   
`
const B=styled.div`
width: 6px;
height: 6px;
border-radius:50%;
border: solid 1px #ad8781;
cursor: pointer;
float:right;
// box-shadow: 0 0 6px 6px #fbfbfb, 12px 12px 16px 8px rgba(136, 136, 136, 0.7), -12px -12px 16px 8px rgba(244, 244, 244, 0.7);
// &:hover {
//   box-shadow: -2px -2px 5px rgba(0,0,0,0.7), 2px 2px 5px rgba(255,255,255,0.1);
  
// }
// &:active {
//   box-shadow: inset 5px 5px 10px rgba(0,0,0,0.7) , inset -5px -5px 10px rgba(255,255,255,0.1);
`

class Navigation extends React.Component{
    render(){
        return (
            <Body >
                <Container>
                        <Wrapper>
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={0}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        >
                            
                            
                            <A>Home</A>
                            {/* <B></B> */}
                            {/* <Input class="state" type="radio" name="app" id="a" value="a"/> */}
                        </Link>
                        </Wrapper>
                        <Wrapper>
                        
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-10}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        >
                             
                            
                            <A>About</A>
                            {/* <B></B> */}
                            {/* <Input class="state" type="radio" name="app" id="b" value="b"/> */}
                        </Link>
                        </Wrapper>
                        <Wrapper>
                        
                        <Link activeClass="active"
                            to="articles"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-30}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        >
                             
                            
                            <A>Articles</A>
                            {/* <B></B> */}
                            {/* <Input class="state" type="radio" name="app" id="c" value="c"/> */}
                        </Link>
                        </Wrapper>
                        <Wrapper>
                        
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-150}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        >
                            <div class="indicator"></div>
                            
                            <A>Projects</A>
                            {/* <B></B> */}
                            {/* <Input class="state" type="radio" name="app" id="d" value="d"/> */}
                        </Link>
                        </Wrapper>
                        <Wrapper>
                        
                        <Link activeClass="active"
                            to="opensource"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        >
                            <A>OpenSource</A>
                            {/* <B></B> */}
                            {/* <Input class="state" type="radio" name="app" id="e" value="e"/> */}
                        </Link>
                        </Wrapper>
                        <Wrapper>
                        
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={0}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        >
                            <A>Contact</A>
                            {/* <B></B> */}
                            {/* <Input class="state" type="radio" name="app" id="f" value="f"/> */}
                        </Link>
                        </Wrapper>
                </Container>
            </Body>
        ) 
    }
}
export default Navigation