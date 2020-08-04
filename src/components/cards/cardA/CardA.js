import React from 'react';

import img from './cardA.png';


import styled from 'styled-components'
const backgroundImg = {
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: 356,
  width:650,
  position: 'relative',
  zIndex: 1
};
const D= styled.div` 
  // width:autp;
  // height: 100vh;

`
const A=styled.a`
    font-size: 18px;
    padding-right:5%;
    padding-top:45%;
    float:right;
    color:#d1ddee;  
`

export default (props) => (
  <D  style={backgroundImg}>
    <header >
    
    </header>
    <main >
      
    </main>
    <footer >
    <A href={`https://github.com/TalRodin/D3js-react/tree/master/src/components/LineBarChart`} cursor='pointer' class="icon-link" title="Follow us on Github"><i class="fab  fa-github"></i></A>
    </footer>
  </D>
);