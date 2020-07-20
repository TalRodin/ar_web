import React from 'react';
import styled from 'styled-components'
import NavToProject from './NavToProject'
import ItemToProject from './ItemToProject'
import style from 'styled-components'
import {db} from '../Firebase'
import SingleProject from './SingleProject'

const Wrap = style.div`
  background: #171e22;
  height: 100vh;
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
    const projects=this.state
    console.log(projects)
    return (
      <div >
       <ItemToProject link='/'>Home</ItemToProject>
       <Wrap>
       {this.state.projects && this.state.projects.map(project=>{
         return <SingleProject key={project.id} project={project} />
       })}
       </Wrap>
      </div>
  
    );
  }
}
export default Projects;