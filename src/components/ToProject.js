import React from 'react';
import styled from 'styled-components'
import ItemToProject from './ItemToProject'
//navitems
function ToProject() {
  return (
        <nav>
            <ItemToProject link='/'>Home</ItemToProject>
            <ItemToProject link='projects'>Project</ItemToProject>
        </nav>
  );
}

export default ToProject;