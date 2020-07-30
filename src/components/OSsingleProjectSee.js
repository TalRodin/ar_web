import React from 'react';
import Codepen from "react-codepen-embed";
import styled from 'styled-components'
import ItemToProject from './ItemToProject'


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
    margin: 0px;
    text-decoration: none !important;
    cursor: pointer;  
`
class OSsingleProjectSee extends React.Component{
    render(){
        return (
         
            <Wrap>
                <ItemToProject link='/#opensource'>
                <H6> Home </H6>
                </ItemToProject>
                <Cod>
                    <Codepen hash="KKpBvyo" height='600' user="talrodin" />
                </Cod>
            
            </Wrap>
          
        )
    }
}
export default OSsingleProjectSee