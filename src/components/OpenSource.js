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
function OpenSource() {
  return (
    <Wrap id='opensource'>
       <Box>
       OpenSource
      </Box>
    </Wrap>
  );
}

export default OpenSource;