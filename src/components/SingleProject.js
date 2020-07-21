import React from 'react'
import styled from 'styled-components'
// import SeeSingleProject from './SeeSingleProject'
import {Link} from 'react-router-dom'



const Card = styled.div`
        background-color: #fbfbfb;
        box-shadow: 0 0 6px 6px  #fbfbfb, 12px 12px 16px 8px rgba(136, 136, 136, 0.7), -12px -12px 16px 8px rgba(244, 244, 244, 0.7);
        padding: 25px;
        border-radius: 35px;
        width: max-content;
        display: grid;
        margin: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 1rem;
`
// const Span = styled.span`
//         width: 25%
// `
// const Meter =styled.div`
// height: 20px;  /* Can be anything */
// 	position: relative;
// 	background: #555;
// 	-moz-border-radius: 25px;
// 	-webkit-border-radius: 25px;
// 	border-radius: 25px;
// 	padding: 10px;
// 	box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
//`
const SingleProject =(props)=>{
        console.log(props)
        return (
            <Card>
               <img src={`${props.project.thumbnail}`} width='200px' height='200px'/>
              {props.project.title}
              <Link to={{
                  pathname: `/projects/${props.project.id}`
                  
                  }}>More Details
              </Link>
              <a href={`${props.project.github}`}>Github</a>
              <progress  className="progress-bar" value={`${props.project.size}`} max='5'></progress>
              {/* <div class="w3-border">
                <Bar class="w3-grey" ></Bar>
              </div> */}
              {/* <Meter>
                <Span ></Span>
              </Meter> */}


            </Card>
        )
    }

export default SingleProject