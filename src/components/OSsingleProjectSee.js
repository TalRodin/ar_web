import React from 'react';
import Codepen from "react-codepen-embed";
import styled from 'styled-components'

const Cod = styled.div`
    width:1000px;
    margin:5%;
`

class OSsingleProjectSee extends React.Component{
    render(){
        return (
            <Cod>
                <Codepen hash="KKpBvyo" height='600' user="talrodin" />
            </Cod>
        )
    }
}
export default OSsingleProjectSee