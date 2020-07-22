import React from 'react';
import styled from 'styled-components'
import NavToProject from './NavToProject'
import ItemToProject from './ItemToProject'
import style from 'styled-components'
import {db} from '../Firebase'
import SingleProject from './SingleProject'

const Wrap = style.div`
  background: #fbfbfb;
  height: 100vh;
  padding-bottom: 10px;
`
const Arrow=styled.div`   
      margin-left: 2%;
`
const L=styled.h6`  
        color:#1a1b1d;
        font-family: 'Nothing You Could Do', cursive;
        font-size: medium;
        margin-bottom:0%;
        margin-left:2%;
        margin-top:0%;
        padding-top:10px;
`
const Grid=styled.div`
display: grid;
grid-template-columns: 1fr 1fr ;
justify-items: center;
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
    const projects=this.state
    console.log(projects)
    return (
      <div >
       
       <Wrap>
       <L>Home</L>
       <ItemToProject link='/'>
       <Arrow>
            <svg  width='30' height='30' viewBox="0 0 91 91" fill='#1a1b1d'><style type="text/css">  
            </style><g><path class="st0" d="M6.1,50.1c6.3,3.6,12.3,7.5,17.6,12.5c4.9,4.6,7.6,10.4,12,15.3c1.6,1.8,5.6,1.1,5.9-1.6   c1.3-9.7-6.1-18.4-14.7-25.3c18.5,0.4,37,1.4,55.4,2.4c8.4,0.4,8.3-12.6,0-13c-18.5-1-37.1-1.8-55.6-1.3c6.6-7,11.8-15.9,14.1-24.1   c1.1-3.7-3.7-5.1-5.8-2.4c-3.9,5.1-7.6,10.5-12,15.1c-5,5.3-10.8,9-16.9,12.9c-2.2,1.4-2.9,3.4-2.6,5.2C3.4,47.5,4.2,49.1,6.1,50.1   z"/></g></svg>
        </Arrow>
       </ItemToProject>
            <Grid>
              {this.state.projects && this.state.projects.map(project=>{
                return <SingleProject key={project.id} project={project} />
              })}
            </Grid>
       </Wrap>
      </div>
  
    );
  }
}
export default Projects;