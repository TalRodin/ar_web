import React from 'react';
import styled from 'styled-components'
import {db} from '../Firebase'
import Video from './Video'
import Photos from './Photos'

class SeeSingleProject extends React.Component{
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
            
            const data=doc.data()
     
            if (data.id==parseInt(this.props.match.params.id)){
                projects.push(data)
            }
            
          })
        this.setState({projects:projects})
        }).catch(error => console.log(error))
    }
    render(){
   
        const projects=this.state
        console.log(projects)
        return (
            <div>
                {this.state.projects && this.state.projects.map(p=>{
                    return (<div key={p.id}>
                    {p.url}
                    <Video key={p.id} project={p.url} />
                    <Photos key={p.id} />
                    </div>)
                })}
            
            </div>
      );
    }
}   
    


export default SeeSingleProject