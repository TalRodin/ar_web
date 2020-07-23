import React from 'react'
import { Link} from 'react-scroll'
import styled from 'styled-components'
import { device } from '../device';

const Container =styled.ul`
    text-align:right;
    list-style:none;
    position: fixed;
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
    position:absolute;
    margin-left: 88%;
    margin-top: 20%;
    
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
    margin: 8px 0;
    cursor: pointer;
    color:#414141;
`
const A=styled.a`
    font-size: small;
    font-family: 'Lato', sans-serif;
    // font-family: 'Nothing You Could Do', cursive;
    padding:5px;
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
                            <div class="indicator"></div>
                            
                            <A>Home</A>
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
                            <div class="indicator"></div>
                            
                            <A>About</A>
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
                            <div class="indicator"></div>
                            
                            <A>Articles</A>
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
                            <div class="indicator"></div>
                            
                            <A>Open Source</A>
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
                            <div class="indicator"></div>
                            
                            <A>Contact</A>
                            {/* <Input class="state" type="radio" name="app" id="f" value="f"/> */}
                        </Link>
                        </Wrapper>
                </Container>
            </Body>
        ) 
    }
}
export default Navigation