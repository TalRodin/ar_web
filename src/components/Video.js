import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const V = styled.div`
    margin-left: 9%;
    padding:-3%;
`

const style = {
    position: 'relative',
    top: '0',
    left: '0',
    right: '0'
    
  };

function Video(props){
    console.log(props.project)
    return(
        <V>
            <ReactPlayer width='480px' height='270px' style={style} controls url={`${props.project}`}/>
        </V>
    )
}
export default Video