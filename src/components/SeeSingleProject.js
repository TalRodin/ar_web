import React from 'react';
import styled from 'styled-components'
import {db} from '../Firebase'
import Video from './Video'
import Photos from './Photos'
import ItemToProject from './ItemToProject'

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

const Box = styled.div`
        
        
`
const B = styled.div`
     background: #f8f8f8;
     height: 100vh;
     width: auto;
`

const P = styled.p`
     width:40%;
     float:right;
     position:relative;
     margin-right:12%;
     margin-left: 0%;
     line-height: 20px;
     font-size:14px;
     @import url('https://fonts.googleapis.com/css?family=Lato');
     font-family: 'Lato', sans-serif;
     letter-spacing: 1px;
`

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
        <B>
                
            
            
         
            <L>Home</L>
            <ItemToProject link='/' >
                        <Arrow>
                            <svg  width='30' height='30' viewBox="0 0 91 91" fill='#1a1b1d'><style type="text/css">  
                            </style><g><path class="st0" d="M6.1,50.1c6.3,3.6,12.3,7.5,17.6,12.5c4.9,4.6,7.6,10.4,12,15.3c1.6,1.8,5.6,1.1,5.9-1.6   c1.3-9.7-6.1-18.4-14.7-25.3c18.5,0.4,37,1.4,55.4,2.4c8.4,0.4,8.3-12.6,0-13c-18.5-1-37.1-1.8-55.6-1.3c6.6-7,11.8-15.9,14.1-24.1   c1.1-3.7-3.7-5.1-5.8-2.4c-3.9,5.1-7.6,10.5-12,15.1c-5,5.3-10.8,9-16.9,12.9c-2.2,1.4-2.9,3.4-2.6,5.2C3.4,47.5,4.2,49.1,6.1,50.1   z"/></g></svg>
                        </Arrow>
            </ItemToProject>
                {this.state.projects && this.state.projects.map(p=>{
                    return (<Box key={p.id}>
                        <div>
                             <P>{p.about}</P>
                            <Video key={p.id} project={p.url} />
                        </div>
                        
                        <Photos key={p.id} project={p.images}/>
                        
                    </Box>)
                })}
        
        </B>
      );
    }
}   
    


export default SeeSingleProject