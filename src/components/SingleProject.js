import React from 'react'
import styled from 'styled-components'
// import SeeSingleProject from './SeeSingleProject'
import {Link} from 'react-router-dom'
const SingleProject =(props)=>{
        return (
            <div>
              {props.project.title}
              <Link to={{
                  pathname: `/projects/${props.project.id}`
                  
                  }}>{props.project.title}</Link>
            </div>
        )
    }

export default SingleProject