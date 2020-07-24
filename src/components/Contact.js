import React from 'react';
import styled from 'styled-components'

const Wrap=styled.div`
    height: 30vh;
    width:auto;
    background: #26282a;
    vertical-align: top;
    padding-top:10px;
`
const Email = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  color:#f8f8f8;
  font-size: 14px;
  padding: 2%;
  float:right;
`

const A=styled.a`
    
    color:#fbfbfb;
    &:hover{
      color:#1DA1F2;
    }
    
`
const B = styled.div`
    width: 20px;
    height: 20px;
    margin:1%;
    cursor: pointer;
    float:left;
    padding:1%;
    border-radius: 50px;
    background-color: #26282a;
    box-shadow: 0 0 4px 4px #26282a, 10px 10px 16px 6px rgba(2, 2, 2, 0.7), -10px -10px 16px 6px rgba(27, 27, 27, 0.7);
    &:hover {
      box-shadow: -2px -2px 5px rgba(0,0,0,0.7), 2px 2px 5px rgba(255,255,255,0.1);
      
    }
    &:active {
      box-shadow: inset 5px 5px 10px rgba(0,0,0,0.7) , inset -5px -5px 10px rgba(255,255,255,0.1);
`
function Contact() {
  return (
    <Wrap id='contact'>
           
            <A  href="https://www.linkedin.com/in/alyonarodin/" class="icon-link" title="Linkedin"><B><i  class="fab  fa-linkedin-in"></i></B></A>
        
           
            <A href="https://twitter.com/alyona_r8" class="icon-link" title="Twitter"> <B><i  class="fab  fa-twitter"></i> </B></A>
           
          <Email>
          Email: alyona.rodin@gmail.com
          </Email>
     
    </Wrap>
  );
}

export default Contact;