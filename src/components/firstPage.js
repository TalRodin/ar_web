import React from 'react';
import styled from 'styled-components'

const D = styled.div`
    float:right;
    padding-right:40%;
`
const H1 = styled.h1`
color:#414141;
text-shadow: 1px 1px #fff;
`
export default ({text}) => (
  <D>
    <H1>{text}</H1>
  </D>
);
