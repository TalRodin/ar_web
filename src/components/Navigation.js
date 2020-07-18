import React from 'react'
import { Link} from 'react-scroll'
import styled from 'styled-components'
import '/Users/alyonarodin/Desktop/ar_website/my-app/src/App.css'

const Container =styled.ul`
    text-align:right;
    list-style:none;
    position: fixed;
    
`
const Body = styled.div`
    position:absolute;
    margin-left: 88%;
    margin-top: 20%;
    display: block;
`
const Wrapper=styled.li`
    margin: 8px 0;
    cursor: pointer;
`
const A=styled.a`
    font-size: small;
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
                            <Input class="state" type="radio" name="app" id="a" value="a"/>
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
                            <Input class="state" type="radio" name="app" id="b" value="b"/>
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
                            <Input class="state" type="radio" name="app" id="c" value="c"/>
                        </Link>
                        </Wrapper>
                        <Wrapper>
                        
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-120}
                            duration={400}
                            delay={1000}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}
                        >
                            <div class="indicator"></div>
                            
                            <A>Projects</A>
                            <Input class="state" type="radio" name="app" id="d" value="d"/>
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
                            <div class="indicator"></div>
                            
                            <A>Open Source</A>
                            <Input class="state" type="radio" name="app" id="e" value="e"/>
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
                            <Input class="state" type="radio" name="app" id="f" value="f"/>
                        </Link>
                        </Wrapper>
                </Container>
            </Body>
        ) 
    }
}
export default Navigation