import React from 'react';
import styled from 'styled-components'
import SVGPic from '/Users/alyonarodin/Desktop/ar_website/my-app/src/svg_girl.js'
const Wrap=styled.div`
    height: 100vh;
`
const Box = styled.div`
      // padding: 48px 64px;
      background: #f8f8f8;
      margin: 3%;
      height: 90%;
      border-radius:3px;
`

function About() {
  return (
    <div id = 'about'>
      
    <Wrap >
    
    <Box>
      <SVGPic/>
      {/* <h5>Hello, my name is Alyona. I am Software Engineer.</h5> */}
      
    </Box>
    </Wrap>
    </div>
  );
}

export default About;