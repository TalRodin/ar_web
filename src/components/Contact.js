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
  text-shadow: 0.5px 0.5px 0.5px #000;
`

const A=styled.a`
    
    color:#fbfbfb;
   
`
const B = styled.div`
    width: 20px;
    height: 20px;
    margin:10px;
    cursor: pointer;
    float:left;
    padding:1%;
    border-radius: 50px;
    border: 0.05px solid #f2f3f6;
    
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