import React, { Fragment, Component } from "react";
import Codepen from "react-codepen-embed";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import FirstPage from './firstPage';
import * as Cards from './cards';


const Cod = styled.div`
    top:10%;
    left:4%;
    display:flex;
    // justify-content:center;
    // align-items:center;
    flex-direction: column;
    width: 70vw;
    height: 70vh;
    padding: 5vh 5vw;
    background-color: #495a74;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.8);
    -webkit-background-clip: text;
    transition: box-shadow 0.7s ease-in-out;
    border-radius: 2px;
    box-shadow: 8px 8px 8px #a3b1c6, -8px -8px 8px rgba(255, 255, 255, 0.5), inset 1px 1px 1px #fff, inset -1px -1px 1px #a3b1c6;
    position:relative
`
const Wrap = styled.div`
    background-color: #f8f8f8;
    height: 100vh;  
`
const H6=styled.h6`
    cursor: pointer; 
    font-size: small;
    font-weight: 300;
    color:#26282a;
    font-family: 'Lato', sans-serif;
    margin:0;
    &:hover{
        color:#a8a7d1;
        font-weight: 600;
    }
`
const RC=styled.div`
    float:right;
`

class OSsingleProjectSee extends React.Component{
    state = {
        selectedCardType: ''
      };
    
    
    render(){
        return(
            <Wrap>
                <NavLink style={{ float:'left', textDecoration: 'none', margin:'2%'}} to='/#opensource'><H6>Home</H6></NavLink>
                <Cod>
                    {/* <Codepen hash="KKpBvyo" height='600' user="talrodin" /> */}
                    <Fragment>
                        <section> 
                        <RC >
                            {this.renderSelectedCard(this.state.selectedCardType)}
                        </RC >  
                            {this.renderCardSelector()}
                        </section>
                    </Fragment>
                </Cod>
            </Wrap>
        )
    }

    renderCardSelector() {
        return (
            <div style={{}}>
            {/* <label style={{textAlign: 'center',width: '100%'}}></label> */}
            <select style={{padding:'3px', outline:'0px', transform: 'translateZ(0)', filter:'drop-shadow(0px 10px 5px black)', fontSize: '16px',borderRadius: '16px',cursor: 'pointer',color:'#26282a',border:' 2px dotted black',width: '10rem',appearance: 'none',backgroundColor: 'transparent'}}
              onChange={(e) => this.setState({ selectedCardType: e.target.value })}>
              <option ></option>
              <option>LineBarA</option>
              <option>LineBarB</option>
            </select>
          </div>
        );
      }
    renderSelectedCard(selectedCardType) {
        if (!selectedCardType)
          return <FirstPage text="Select" />;
        const Card = Cards[selectedCardType];
        return <Card />;
        
       }
}


export default OSsingleProjectSee