import React from 'react'
import styled from 'styled-components'
import Navigation from '../src/components/Navigation'
import About from '../src/components/About'
import Articles from '../src/components/Articles'
import LinkToProjects from '../src/components/LinkToProjects'
import OpenSource from '../src/components/OpenSource'
import Contact from '../src/components/Contact'
import Home from '../src/components/Home'
import Logo from '/Users/alyonarodin/Desktop/ar_website/my-app/src/svg.js'
import NavToProject from '../src/components/NavToProject'
const Wrapper=styled.div`
  background-color: #fff;
`
const Layout = ({children}) =>(
     
    <>
       <Wrapper>
            <div>
                {children}
            </div>
      </Wrapper>
      
  </>
)
export default Layout
