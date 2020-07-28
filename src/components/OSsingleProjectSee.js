import React from 'react';
import Codepen from "react-codepen-embed";
import styled from 'styled-components'

const Cod = styled.div`
    width:1000px;
    margin-left:10%;
    
    padding:4%;
 
`
const Wrap = styled.div`

height: 100vh;    
`

class OSsingleProjectSee extends React.Component{
    render(){
        return (
            <Wrap>
            <Cod>
                <Codepen hash="KKpBvyo" height='600' user="talrodin" />
            </Cod>
            </Wrap>
        )
    }
}
export default OSsingleProjectSee