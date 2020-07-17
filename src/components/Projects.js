import React from 'react';
import styled from 'styled-components'
import NavToProject from './NavToProject'
import ItemToProject from './ItemToProject'
import style from 'styled-components'

const Wrap = style.div`
  background: #171e22;
  height: 100vh;
`

class Projects extends React.Component{
  render() {
    
    return (
      <div >
       <ItemToProject link='/'>Home</ItemToProject>
       <Wrap>Hello</Wrap>
      </div>
  
    );
  }
}
export default Projects;