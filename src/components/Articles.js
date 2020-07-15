import React from 'react';
import styled from 'styled-components'

const Wrap=styled.div`
    height: 100vh;
    
`
const Box = styled.div`
      background: #171e22;
      margin: 3%;
      height: 90%;
      border-radius:3px; 
`
const BoxWrapper=styled.div`
        font-family: 'Marquee Moon', arial;
        font-size: 70px;
        letter-spacing: 10px;
        position:absolute;
        color: #d8f8ff;
        left:30%;
        transform: rotate(5deg);
        text-align:center;
        width:20%;
        padding: 1rem 2.5rem 1rem 2.5rem;
        text-shadow: 
          .1vw 0vw .25vw #d8f8ff, .2vw 0vw .25vw #d8f8ff, .4vw 0vw .25vw #d8f8ff, 
          .1vw 0vw   0vw #5767f2, .2vw 0vw   0vw #5767f2, .4vw 0vw   0vw #5767f2,
          .1vw 0vw  .1vw #5767f2, .2vw 0vw  .1vw #5767f2, .4vw 0vw  .1vw #5767f2,
          .1vw 0vw   2vw #5767f2, .2vw 0vw   2vw #5767f2, .4vw 0vw   2vw #5767f2, 
          .1vw 0vw   1vw #120be5, .2vw 0vw   1vw #120be5, .4vw 0vw   5vw #120be5, 
          .1vw 0vw   5vw #120be5, .2vw 0vw  20vw #120be5, .4vw 0vw  10vw #120be5,
          .1vw 0vw  10vw #120be5, .2vw 0vw  30vw #120be5, .4vw 0vw  10vw #120be5;

        box-shadow:
        0 0 0.1vw  0.4vw #f7f9ff,   
        0 0 0.4vw  0.6vw #72a4e9, 
        0 0   4vw  0.4vw #120be5,
        inset 0 0 1.5vw  0.4vw #120be5,
        inset 0 0 0.4vw  0.2vw #72a4e9,
        inset 0 0 0.5vw  0.2vw #f7f9ff;
        border-radius: 1.5rem;
`
function Articles() {
  return (
    <Wrap id='articles'>
      <Box>
        <BoxWrapper>
      MEDIUM
        </BoxWrapper>
      </Box>
      
    </Wrap>
  );
}

export default Articles;