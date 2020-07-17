import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Navigation from '../src/components/Navigation'
import About from '../src/components/About'
import Articles from '../src/components/Articles'
import LinkToProjects from '../src/components/LinkToProjects'
import OpenSource from '../src/components/OpenSource'
import Contact from '../src/components/Contact'
import Home from '../src/components/Home'
import Logo from '/Users/alyonarodin/Desktop/ar_website/my-app/src/svg.js'
import styled from 'styled-components'
import HomeStart from './components/HomeStart'
import Projects from './components/Projects'
import Layout from './layout'
const Wrapper=styled.div`
  background-color: #fff;
`


const App=()=> {
  return (
    <>
    <Layout>
        <Switch>
            <Route exact path='/' component={HomeStart}></Route>
            <Route exact path='/projects' component={Projects}></Route>  
        </Switch>
    </Layout> 
    </>
  );
}

export default App;
