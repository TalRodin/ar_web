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
  @media screen and (max-width: 489px) {
    font-size: 12px;
          } 
`

const A=styled.a`
    color:#fbfbfb;
`
const B = styled.div`
    align-items:center;
    width: 20px;
    height: 20px;
    margin:6px;
    cursor: pointer;
    float:left;
    padding:10px;
    border-radius: 50px;
    border: 0.05px solid #f2f3f6;
    @media screen and (max-width: 489px) {
      padding:5px;
            } 
`



function Contact() {
  return (
    <Wrap id='contact'>
            <A  href="https://www.linkedin.com/in/alyonarodin/" class="icon-link" title="Linkedin"><B><i  style={{padding:'3px'}} class="fab  fa-linkedin-in"></i></B></A>
            <A href="https://twitter.com/alyona_r8" class="icon-link" title="Twitter"> <B><i style={{padding:'3px'}} class="fab  fa-twitter "></i> </B></A>
            <Email>
              Email: alyona.rodin@gmail.com
            </Email>
    </Wrap>
  );
}

export default Contact;