import React from 'react';
import styled from 'styled-components'

const D = styled.div`
 float:right;
 padding-right:40%;
`
export default ({text}) => (
  <D>
    <h1>{text}</h1>
  </D>
);
