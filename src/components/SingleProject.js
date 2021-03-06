import React from 'react'
import styled from 'styled-components'
// import SeeSingleProject from './SeeSingleProject'
import {Link} from 'react-router-dom'

const A=styled.a`
    padding-left:2%;
    padding-top:2%;
    margin:2%;
    color:#d1ddee;   
`

const Card = styled.div`
        margin-top:10%;
        display: grid;
        grid-template-columns: 1fr 1fr ;
        border:10px solid rgba(235,236,240,0.9);
        border-top:none;
        border-right:none;
        border-bottom:none;
        width: max-content;
        height: 30vh;
        padding: 5vh 5vw;
        overflow: hidden;
        background-color: #495a74;
        color: transparent;
        text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.8);
        -webkit-background-clip: text;
        transition: box-shadow 0.7s ease-in-out;
        border-radius: 10px;
        box-shadow: 8px 8px 8px #a3b1c6, -8px -8px 8px rgba(255, 255, 255, 0.5), inset 1px 1px 1px #fff, inset -1px -1px 1px #a3b1c6;
        marging-top:10px;
        @media screen and (max-width: 489px) {
            grid-template-columns: 1fr ;
            height: 50vh;
            width: 70vw;
            border:none;
            border-top:10px solid rgba(235,236,240,0.9);
            border-right:none;
            border-bottom:none;
                  } 
`
const P = styled.p`
    line-height: normal;
    margin-top:5%;
    width: 100%;
    padding-left:15px;
    color:#414141;
    font-size: 14px;
    text-shadow: 1px 1px #fff;
    @media screen and (max-width: 489px) {
        font-size: 12px;
              } 
`
const Size=styled.div`
    background-color:#fbfbfb;
    border-radius: 50px;
    margin:6%;
    height:4%;
    border: 0.5px solid #f2f3f6;
    box-shadow: inset 0.5px 0.5px 3.5px #BABECC, inset -3.5px -3.5px 8.5px #FFF;
    width:50%;
`
const D=styled.div`
    background:#6d5dfc;
    border-radius: 60px;
    height:5px;
    margin:2px;
`

const I = styled.img`
      width:200px;
      height:200px;
      filter: grayscale(80%);
      @media screen and (max-width: 489px) {
        width: 70vw;
        height: 30vh;
              }
`
const C =styled.div`
    //   width:201px;
    //   height:201px;
    //   border: 0.5px solid #f2f3f6;
    // @media screen and (max-width: 489px) {
    //     width: 0px;
    //     width: 0px;
    //           }
`
class SingleProject extends React.Component{
    constructor(){
        super()
    }
    render(){
        
        return(
            <Card>
               <C>
                    <I src={`${this.props.project.thumbnail}`} />
               </C>
               <div>
               <P>
              {this.props.project.title}</P>
              <P>
              <Link to={{
                  pathname: `/projects/${this.props.project.id}`
                  }}>
                   <A cursor='pointer'><i  class="fa fa-info" aria-hidden="true"></i></A>
              </Link>
              <A href={`${this.props.project.github}`} cursor='pointer' class="icon-link" ><i class="fab  fa-github"></i></A>
              {this.props.project.link && <A href={`${this.props.project.link}`} cursor='pointer'><i class="fa fa-link" aria-hidden="true"></i></A>}
              </P>
            <Size className="progress"> 
            <D  style={{width:`${(this.props.project.size/5)*100}%`}}></D>
            </Size>
           </div>
            </Card>
        )
    }
}

export default SingleProject