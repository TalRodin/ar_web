import React from 'react';
import styled from 'styled-components'

const Wrap=styled.div`
    height: 30vh;
    width:auto;
    background: #1a1b1d;
    vertical-align: top
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
const A=styled.div`
    float:left;
    padding-left:2%;
    padding-top:2%;
    color:#fbfbfb;
    
`
function Contact() {
  return (
    <Wrap id='contact'>
         
            <A  href="https://www.linkedin.com/in/alyonarodin/" class="icon-link" title="Linkedin"><i  class="fab  fa-linkedin-in"></i></A>
        
          
            <A href="https://twitter.com/alyona_r8" class="icon-link" title="Twitter"><i  class="fab  fa-twitter"></i></A>
        
          <Email>
          Email: alyona.rodin@gmail.com
          </Email>
     
    </Wrap>
  );
}

export default Contact;