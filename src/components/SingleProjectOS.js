import React from 'react'
import styled from 'styled-components'
// import SeeSingleProject from './SeeSingleProject'
import {Link} from 'react-router-dom'



const A=styled.a`
    font-size: 25px;
    padding-left:2%;
    padding-right:6%;
    padding-top:2%;
    
    color:#fbfbfb;

`

const Card = styled.div`
width: 60vw;
height: 60vh;
padding: 5vh 5vw;
overflow: hidden;
background-color: #495a74;
color: transparent;
text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.8);
-webkit-background-clip: text;
transition: box-shadow 0.7s ease-in-out;
border-radius: 2px;
box-shadow: 8px 8px 8px #a3b1c6, -8px -8px 8px rgba(255, 255, 255, 0.5), inset 1px 1px 1px #fff, inset -1px -1px 1px #a3b1c6;
z-index:1;
`
const P = styled.p`
 margin-left:5%;
 color:#fbfbfb;
 font-size: 25px;
`
const I = styled.img`
     opacity:0.8;
`
const SingleProjectOS =(props)=>{
        console.log(props)
        return (
             
            <Card>
              
                        <I src={`${props.project.thumbnail}`} width='200px'  height='200px' border-radius='25px'/>
                        
                        <P>
                        {props.project.title}
                        
                        </P>
                        <P>
                        <Link to={{
                            pathname: `/os`
                            }}>
                            <A cursor='pointer'><i class="fa fa-info" aria-hidden="true"></i></A>
                        </Link>
                        
                        <A href={`${props.project.github}`} cursor='pointer' class="icon-link" title="Follow us on Github"><i class="fab  fa-github"></i></A>
                        </P>
                        
                       

              
            </Card>
          
        )
    }

export default SingleProjectOS