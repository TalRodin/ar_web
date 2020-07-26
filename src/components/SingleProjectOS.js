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
        background: transparent;
        box-shadow: 0 0 3px 3px  #fbfbfb, 12px 12px 16px 8px rgba(136, 136, 136, 0.5), -12px -12px 16px 8px rgba(244, 244, 244, 0.5);
        padding: 25px;
        border-radius: 35px;
        width:max-content;
        
        // height:
        display: grid;
        grid-template-columns: 1fr 1fr ;
        
 
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