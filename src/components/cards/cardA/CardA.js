import React from 'react';
import img from './cardA.jpeg';
import './cardA.css';
import styled from 'styled-components'


const headerImg = {
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: '0 -75px',
  backgroundRepeat: 'no-repeat',
  height: 100,
  width: '100%',
  opacity: '1',
  position: 'relative',
  zIndex: 500
};


const D=styled.div`
   
`

export default (props) => (
  <D className="cardA">
    <header className="cardA-header" style={headerImg}></header>
    <main className="cardA-body">
      
    </main>
    <footer className="cardA-footer">
      <i className="ico far fa-heart" title="add as favorite"></i>
     
    </footer>
  </D>
);