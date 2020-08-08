import React from 'react'
import styled from 'styled-components'
// import SeeSingleProject from './SeeSingleProject'
import {Link} from 'react-router-dom'



const A=styled.a`
    font-size: 18px;
    padding:2%;
    color:#d1ddee;  
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
    @media screen and (max-width: 489px) {
        width: 80vw;
        height: 50vh;
        padding: 3vh 3vw;
              } 

    `
const P = styled.p`
color:#414141;
font-size: 16px;
font-family: 'Lato', sans-serif;
@media screen and (max-width: 489px) {
    font-size: 12px;
          } 
`
const I = styled.img`
filter: grayscale(80%);
@media screen and (max-width: 489px) {
    width: 200px;
    height: 200px;
          } 
`
const Icons = styled.div`
display:flex;
flex-direction: row;
justify-content:space-around;

`

const Box = styled.div`
    padding:10px;
`
const P1=styled.div`
   line-height: normal;
   font-size: 14px;
   color:#414141;
   width:60%;
   font-family: 'Lato', sans-serif;
   @media screen and (max-width: 489px) {
    font-size: 10px;
          } 
`

const SingleProjectOS =(props)=>{
        console.log(props)
        return (
            <Card>
                <I src={`${props.project.thumbnail}`} width='270px'  height='300px' border-radius='25px'/>
                <P>
                    {props.project.title}
                </P>
                <P1>
                {props.project.about}
                </P1>
                <Icons>
                    <Box>
                    <Link to={{pathname: `/os`}}>
                        <A cursor='pointer'><i class="fa fa-info" aria-hidden="true"></i></A>
                    </Link>
                    </Box>
                    <Box>
                        <A href={`${props.project.github}`} cursor='pointer' class="icon-link" title="Follow us on Github"><i class="fab  fa-github"></i></A>
                    </Box>
                    <Box>
                        <A href={`${props.project.readme}`} cursor='pointer' class="icon-link" title="Follow us on Github"><i class="fab fa-readme"></i></A>
                    </Box>
                </Icons>
            </Card>
          
        )
    }

export default SingleProjectOS