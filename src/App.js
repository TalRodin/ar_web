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
import SeeSingleProject from './components/SeeSingleProject'
const Wrapper=styled.div`
  color: #7a7a8c;
  background-color: #1d1e22;
  background: radial-gradient(#4c4f5a 6%, transparent 6%), #18191c;
`
const App=()=> {
  console.log(this)
  return (
    <Layout>
        <Switch>
            <Route exact path='/' component={HomeStart}></Route>
            <Route exact path='/projects' component={Projects}></Route>  
            <Route path='/projects/:id(\d+)' component={SeeSingleProject}
            ></Route> 
        </Switch>
    </Layout> 
  );
}

export default App;
