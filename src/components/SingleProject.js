import React from 'react'
import styled from 'styled-components'
// import SeeSingleProject from './SeeSingleProject'
import {Link} from 'react-router-dom'

const A=styled.a`
    
    padding-left:2%;
    padding-top:2%;
    margin:2%;
    color:#1a1b1d;

`

const Card = styled.div`
        background-color: #fbfbfb;
        box-shadow: 0 0 6px 6px  #fbfbfb, 12px 12px 16px 8px rgba(136, 136, 136, 0.7), -12px -12px 16px 8px rgba(244, 244, 244, 0.7);
        padding: 25px;
        border-radius: 35px;
        width: max-content;
        display: grid;
        grid-template-columns: 1fr 1fr ;
 
`
const P = styled.p`
 margin-left:5%;
 
`

const SingleProject =(props)=>{
        console.log(props)
        return (
            <Card>
              
               <img src={`${props.project.thumbnail}`} width='200px' height='200px' border-radius='25px'/>
               <div>
               <P>
              {props.project.title}</P>
              <P>
              <Link to={{
                  pathname: `/projects/${props.project.id}`
                  }}>
                   <A cursor='pointer'><i class="fa fa-info" aria-hidden="true"></i></A>
              </Link>
             
              <A href={`${props.project.github}`} cursor='pointer' class="icon-link" title="Follow us on Github"><i class="fab  fa-github"></i></A>
              </P>
              <P>
              <progress  className="progress-bar" value={`${props.project.size}`} max='5'></progress>
              </P>
              </div>

              
            </Card>
        )
    }

export default SingleProject