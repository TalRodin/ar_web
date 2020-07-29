import React from 'react'
import styled from 'styled-components'
// import SeeSingleProject from './SeeSingleProject'
import {Link} from 'react-router-dom'



const A=styled.a`
    font-size: 25px;
    padding:2%;
    // margin:2%;
    color:#6d5dfc;

`

const Card = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    
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
// margin-left:5%;
color: #1a1b1d;
//  font-size: 25px;
`
const I = styled.img`
filter: grayscale(80%);
`
const Icons = styled.div`
display:flex;
flex-direction: row;
// align-items:center;
justify-content:space-around;

`

const Box = styled.div`
    padding:10px;
`


const SingleProjectOS =(props)=>{
        console.log(props)
        return (
            <Card>
                <I src={`${props.project.thumbnail}`} width='300px'  height='200px' border-radius='25px'/>
                <P>
                    {props.project.title}
                </P>
                <Icons>
                    <Box>
                    <Link to={{pathname: `/os`}}>
                        
                        <A cursor='pointer' ><i class="fa fa-info" aria-hidden="true"></i></A>
                    </Link>
                    </Box>
                    <Box>
                    <A href={`${props.project.github}`} cursor='pointer' class="icon-link" title="Follow us on Github"><i class="fab  fa-github"></i></A>
                    </Box>
                </Icons>
            </Card>
          
        )
    }

export default SingleProjectOS