import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
//navitem
function ItemToProject({link, children}) {
  console.log(children)
  return (
        <NavLink style={{ textDecoration: 'none' ,padding:'2px',marginBottom:'0px' }} to={link}>{children}</NavLink>
  );
}

export default ItemToProject;