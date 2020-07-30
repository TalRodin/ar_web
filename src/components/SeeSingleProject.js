import React from 'react';
import styled from 'styled-components'
import {db} from '../Firebase'
import Video from './Video'
import Photos from './Photos'
import ItemToProject from './ItemToProject'
import { device } from '../device';


const Arrow=styled.div`   
      margin-left: 2%;
`
const L=styled.div`  
    padding-right:2%;
    cursor: pointer; 
    font-size: small;
    font-weight: 300;
    color:#26282a;
    font-family: 'Lato', sans-serif;
    margin:0%;
    &:hover{
        color:#a8a7d1;
        font-weight: 600;
    }
`

const Box = styled.div`

display:flex;
justify-content:center;
flex-direction: column;
// align-items: center;
width: 80vw;
height: 80vh;
padding: 5vh 5vw;
overflow: hidden;
background-color: #495a74;
color: transparent;
text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.8);
-webkit-background-clip: text;
transition: box-shadow 0.7s ease-in-out;
border-radius: 2px;
box-shadow: 8px 8px 8px #a3b1c6, -8px -8px 8px rgba(255, 255, 255, 0.5), inset 1px 1px 1px #fff, inset -1px -1px 1px #a3b1c6;
z-index:1;
`
const B = styled.div`
height: 100vh;
width:auto;
background-color:#f8f8f8;
justify-content: center;
display: flex;


@media ${device.tablet} { 
  height: 60vh;
      }
`

const P = styled.p`
line-height: normal;
    margin-top:5%;
    width: 100%;
    word-spacing:9px;
    color:#414141;
    font-size: 14px;
    text-shadow: 1px 1px #fff;
     width:40%;
     margin:0;
    //  line-height: 20px;
    //  letter-spacing: 1px;
    //  word-spacing:9px;

`
const D=styled.div`
display:flex;
// justify-content:center;
flex-direction: row;
justify-content:space-around;
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
                
            
            
         
            
            <ItemToProject link='/' >
                     <L>Home</L>
            </ItemToProject>
            <ItemToProject link='/projects' >
                     <L>Projects</L>
            </ItemToProject>
                
        
         {this.state.projects && this.state.projects.map(p=>{
                    return (
                    <Box key={p.id}>
                        <D>
                            <P>{p.about}</P>
                            <Video key={p.id} project={p.url} />
                        </D>
                        
                        <Photos key={p.id} project={p.images}/>
                    </Box>)
                })}
        </B>
      );
    }
}   
    


export default SeeSingleProject