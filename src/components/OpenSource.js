import React from 'react';
import styled from 'styled-components'
import {db} from '../Firebase'
import SingleProjectOS from './SingleProjectOS'
import sample from './video.mp4';
import { device } from '../device';
const Wrap=styled.div`
    height: 100vh;
    width:auto;
    background-color:#f8f8f8;
    justify-content: center;
    display: flex;
    align-items: center;
    @media screen and (max-width: 489px) {
      height: 80vh;
            } 
`
const Box = styled.div`
      margin: 11%;
      height: 50%;
      
      border-radius:3px; 
      position:absolute;
`
const V = styled.div`
      position:relative;
      margin-top:10%;
`
const T1=styled.div`
      top:3000px;
      left:50px;
      position:absolute;
      width: 17.6px;
      height: 12px;
      background: #a8a7d1;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
    
`
const Inner1 = styled.div`
      top:3000px;
      left:51.5px;
      position:absolute;
      width: 14.6px;
      height: 11.5px;
      background: #f8f8f8;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      
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
        <T1 ></T1 >
      <Inner1></Inner1>
      {/* <V> <video  loop muted poster="http" autoPlay width='750' height='350'>
                                <source src={sample} type='video/mp4'/>
                            </video>
                   
      </V> */}
       {/* <Box> */}
       {this.state.projects && this.state.projects.map(project=>{
         return <SingleProjectOS key={project.id} project={project} />
       })}
      {/* </Box> */}

  
    </Wrap>
  );
}
}
export default OpenSource;

