import React from 'react';
import styled from 'styled-components'
import NavToProject from './NavToProject'
import style from 'styled-components'
import {db} from '../Firebase'
import SingleProject from './SingleProject'
import {NavLink} from 'react-router-dom';

const Wrap = style.div`
  background: #fbfbfb;
  height: 100vh;
  padding-bottom: 10px;
`
const L=styled.div`  
  cursor: pointer; 
  font-size: small;
  font-weight: 300;
  color:#26282a;
  font-family: 'Lato', sans-serif;
  margin:0%;

`
const Grid=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  justify-content: space-around;
  align-items: center;
`

class Projects extends React.Component{
  state={
      projects:null
  }
  componentDidMount(){
      console.log(db)
      db.collection('projects')
      .get()
      .then(snapshot=>{
        const projects=[]
        snapshot.forEach(doc=>{
          console.log(doc)
          const data=doc.data()
          if (data.os==='no'){
            projects.push(data)
          }
        })
      this.setState({projects:projects})
      }).catch(error => console.log(error))
  }
  render() {
    return (
       <Wrap>
            <NavLink style={{ float:'left', textDecoration: 'none', margin:'2%'}} to='/#projects'><L> Home </L></NavLink>
            <Grid>
              {this.state.projects && this.state.projects.map(project=>{
                return <SingleProject key={project.id} project={project} />
              })}
            </Grid>
       </Wrap>
    );
  }
}
export default Projects;