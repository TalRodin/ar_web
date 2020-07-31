import React from 'react';
import Codepen from "react-codepen-embed";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Cod = styled.div`
    width:1000px;
    margin-left:10%;
    padding:4%;
`
const Wrap = styled.div`
    background-color: #f8f8f8;
    height: 100vh;  
`
const H6=styled.h6`
    cursor: pointer; 
    font-size: small;
    font-weight: 300;
    color:#26282a;
    font-family: 'Lato', sans-serif;
    margin:0;
    &:hover{
        color:#a8a7d1;
        font-weight: 600;
    }
`
class OSsingleProjectSee extends React.Component{
    render(){
        return(
            <Wrap>
                <NavLink style={{ float:'left', textDecoration: 'none', margin:'2%'}} to='/#opensource'><H6>Home</H6></NavLink>
                <Cod>
                    <Codepen hash="KKpBvyo" height='600' user="talrodin" />
                </Cod>
            </Wrap>
        )
    }
}
export default OSsingleProjectSee