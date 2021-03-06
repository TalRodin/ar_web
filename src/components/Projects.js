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
  @media screen and (max-width: 489px) {
    display: flex;
  justify-content: center;
    padding-top:15px;
          } 

`
const L=styled.div`  
    font-size: small;
    font-weight: 300;
    color:#26282a;
    text-decoration: 'none';
    font-family: 'Lato', sans-serif;
    margin-left:2%;
    &:hover{
        color:#a8a7d1;
    }
      position:absolute;
      top:30px;
      @media screen and (max-width: 489px) {
        left: 50%;
        transform: translate(-50%, -50%);
              } 
`
const Grid=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 489px) {
    grid-template-columns: 1fr ;
    padding-top: 10px;
          } 
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