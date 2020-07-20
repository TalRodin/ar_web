import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { device } from '../device';

const Wrap=styled.div`
    height: 100vh; 
    
`
const Box = styled.div`
      background: url(appletab.png);
      background-size: 100% 100%;
      width: 64%;
      height: 78%;
      border-radius:35px; 
      position:relative;
      left:20%;
      top: 10%;
      transform: rotate(-0.25deg);
      @media ${device.tablet} { 
        transform: rotate(90deg);
        background-size: 100% 100%;
        height: 64%;
        width: 78%;
            }
      
`
const Box2 = styled.div`
// linear-gradient( rgba(38,40,43, 0.9), rgba(38,40,43, 1)),
      position:relative;     
      background: url('break.png');
      height: 88.9%;
      object-fit: cover;
      top:31px;
      margin-left:10.7%;
      margin-right:10.7%;
      border: 1px solid black;
      @media ${device.tablet} { 
        transform: rotate(-90deg);
        height: 99%;
        width: 68%;
        top
        object-fit: cover;
        position:relative; 
        margin-left:10.7%;
        margin-right:10.7%; 
       
            }
`

const BoxWrapper=styled.div`       
        top:10%;     
        position:relative;
        color: #d8f8ff;
        left:30%;
        transform: rotate(2deg);
        text-align:center;
        width:40%;
        height: 25%;
        padding: 1rem 2.5rem 1rem 2.5rem;
        box-shadow:
          0 0 0.1vw  0.2vw #f7f9ff,   
          0 0 0.4vw  0.6vw #72a4e9, 
          0 0   4vw  0.4vw #120be5,
          inset 0 0 1.5vw  0.4vw #120be5,
          inset 0 0 0.4vw  0.2vw #72a4e9,
          inset 0 0 0.5vw  0.2vw #f7f9ff;
          border-radius: 1.5rem;
`
const H5=styled.h5`
        position: relative;
        font-weight:900;
        margin-top:0;
        font-size:35px;
        font-family:'Quicksand'; 
        letter-spacing: 10px;
        
        text-shadow: 0 0 20px #f7f9ff, 0 0 30px #f7f9ff, 0 0 40px #72a4e9, 0 0 70px #72a4e9, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
    }

`
const Container = styled.div`
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
    width: 300px;
    top:5%;
    position:relative;
    border-radius: 35px;
    // background-color: #26282B;
    background-color: transparent;
    box-shadow: 0 0 2px 2px #26282B, 12px 12px 16px 8px rgba(2, 2, 2, 0.7), -12px -12px 16px 8px rgba(27, 27, 27, 0.7);
`
const H = styled.h3`
    color: #fff;
    font-size:8px;
    line-height: 200px;
    text-align: center; 
    position:relative;
    
    background-color: transparent;
    
`



class Articles extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alyona.rodin')
      .then((res) => res.json())
      .then((data) => {
        const res = data.items 
        const posts = res.filter(item => item.categories.length > 0)
        this.setState({data: posts}) 
    })
  }
  render() {
    const { data} = this.state;
    console.log(data)
    const settings = {
      dots: true,
      className:"slides",
      slidesToShow: 1,
      slidesToScroll: 1, 
      infinite: true,    
      speed: 500,
      infinite: true,
    };
    
    return (
      <Wrap id='articles'>
          {/* <BoxWrapper>
            MEDIUM
          </BoxWrapper> */}
        <Box>
           <Box2>
           <BoxWrapper>
             <H5>MEDIUM</H5>
          </BoxWrapper>
            <Container  >
            <Slider {...settings} >
              {!data ? console.log(false) : data.map((d)=>{
                
                return (
                  
                    <H>{d.title}</H>
                 
                )
              })
              }
          
            </Slider>
            </Container >
          </Box2>
        </Box>
      </Wrap>
    );
  }
}
export default Articles;