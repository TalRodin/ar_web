import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const V = styled.div`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
`

const style = {
    top: '0',
    left: '0',
    right: '0',
    bottom:'0',
    // box-shadow:'0 5px 10px 0 rgba(0, 0, 0, 0.6)',
  };

function Video(props){
    console.log(props.project)
    return(
        // <V>
            <ReactPlayer width='480px' height='270px'  style={style} controls url={`${props.project}`}/>
        // </V>
    )
}
export default Video