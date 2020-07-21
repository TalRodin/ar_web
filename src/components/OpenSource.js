import React from 'react';
import styled from 'styled-components'
import {db} from '../Firebase'
import SingleProject from './SingleProject'
const Wrap=styled.div`
    height: 100vh;
`
const Box = styled.div`
      // padding: 48px 64px;
      background: #fbfbfb;
      margin: 3%;
      height: 90%;
      border-radius:3px;
`
class OpenSource extends React.Component{
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
        if (data.os==='yes'){
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
    <Wrap id='opensource'>
       <Box>
       {this.state.projects && this.state.projects.map(project=>{
         return <SingleProject key={project.id} project={project} />
       })}
      </Box>
    </Wrap>
  );
}
}
export default OpenSource;

