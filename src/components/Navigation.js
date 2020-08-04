import React from 'react'
import { Link} from 'react-scroll'
import styled from 'styled-components'
import { device } from '../device';

const Container =styled.ul`
    // text-align:right;
    list-style:none;
    position: fixed;
    display: flex;
    flex-direction:row;
    padding-right:10%;
    @media screen and (max-width: 1155px) {
        display: flex;
        flex-direction:row;
        justify-content:center;
        }
    // @media screen and (max-width: 780px) {
    //     display: flex;
    //     flex-direction:row;
    //     justify-content:center;
    //     }
    // @media screen and (max-width: 489px) {
    //     font-size: 0.9rem;
    //     letter-spacing: 5px;        
    //     }
`
const Body = styled.div`
    position:fixed;
    margin-left: 65%;
    margin-top: 5px;
    z-index: 1;
    @media screen and (max-width: 1035px) {
        position:absolute;
        margin-left: 30%;
        z-index: 1;
        }
    @media screen and (max-width: 780px) {
        position:absolute;
        margin-left: 25%;
        z-index: 1;
        }
    @media screen and (max-width: 415px) {
            position:absolute;
            margin-left: 15%;
            z-index: 1;
        }
     
`
const Wrapper=styled.li`
    margin:4px 4px;
    cursor: pointer;
    color:#414141;
    
`
const A=styled.h6`
    font-size: small;
    font-weight: 300;
    color:#26282a;
    font-family: 'Lato', sans-serif;
    margin:0%;
    &:hover{
        color:#a8a7d1;
    }
    @media screen and (max-width: 1035px) {
        font-size: 10px;
            }
    @media screen and (max-width: 489px) {
        font-size: 8px;
            }
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
                            offset={-30}
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
                            offset={-30}
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
                            offset={-30}
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