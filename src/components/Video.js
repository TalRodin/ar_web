import React from 'react'
import ReactPlayer from 'react-player'

function Video(props){
    console.log(props.project)
    return(
        <div>
            <ReactPlayer width='480px' height='240px' controls url={`${props.project}`}/>
        </div>
    )
}
export default Video