import React from 'react';
import styled from 'styled-components'

const Wrap=styled.div`
    height: 100vh;
    
`
const Box = styled.div`
      // padding: 48px 64px;
      background: #171e22;
      margin: 3%;
      height: 90%;
      border-radius:3px;
`
function Articles() {
  return (
    <Wrap id='articles'>
      <Box>
      Articles
      </Box>
      
    </Wrap>
  );
}

export default Articles;