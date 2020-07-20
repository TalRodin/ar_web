import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
//navitem
function ItemToProject({link, children}) {
  console.log(children)
  return (
        <NavLink to={link}>{children}</NavLink>
  );
}

export default ItemToProject;