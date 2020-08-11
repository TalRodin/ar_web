import React from 'react';
import styled from 'styled-components'

const D = styled.div`
    float:right;
    padding-right:80%;
`
const H1 = styled.h1`
color:#414141;
text-shadow: 1px 1px #fff;
@media screen and (max-width: 489px) {
  font-size: 12px;
        } 
`

const I = styled.img`
  filter: grayscale(50%);
  opacity: 0.5;
`

export default ({text}) => (
  <D>
    <H1>{text}</H1>
    <I src='circle.png' width='250px'  height='320px' border-radius='25px'/>
  </D>
);
