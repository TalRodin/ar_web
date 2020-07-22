import React from 'react';
import styled from 'styled-components'
import {db} from '../Firebase'
import SingleProjectOS from './SingleProjectOS'
import sample from './video.mp4';
const Wrap=styled.div`
    height: 100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    // align-items:center;
`
const Box = styled.div`
      margin: 3%;
      height: 90%;
      border-radius:3px; 
      position:absolute;
`
const V = styled.div`
      position:relative;

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
      <V> <video  loop muted poster="http" autoPlay width='900' height='400'>
                                <source src={sample} type='video/mp4'/>
                            </video>
      </V>
       <Box>
       {this.state.projects && this.state.projects.map(project=>{
         return <SingleProjectOS key={project.id} project={project} />
       })}
      </Box>
    </Wrap>
  );
}
}
export default OpenSource;

