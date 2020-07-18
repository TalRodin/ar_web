import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Wrap=styled.div`
    height: 100vh; 
    
`
const Box = styled.div`
      background: #171e22;
      margin:2%;
      height: 98%;
      border-radius:3px; 
      
`

const BoxWrapper=styled.div`
        font-family: 'Marquee Moon', arial;
        font-size: 70px;
        letter-spacing: 10px;
        position:absolute;
        color: #d8f8ff;
        left:30%;
        transform: rotate(1deg);
        text-align:center;
        width:20%;
        padding: 1rem 2.5rem 1rem 2.5rem;
        text-shadow: 
          .1vw 0vw .25vw #d8f8ff, .2vw 0vw .25vw #d8f8ff, .4vw 0vw .25vw #d8f8ff, 
          .1vw 0vw   0vw #5767f2, .2vw 0vw   0vw #5767f2, .4vw 0vw   0vw #5767f2,
          .1vw 0vw  .1vw #5767f2, .2vw 0vw  .1vw #5767f2, .4vw 0vw  .1vw #5767f2,
          .1vw 0vw   2vw #5767f2, .2vw 0vw   2vw #5767f2, .4vw 0vw   2vw #5767f2, 
          .1vw 0vw   1vw #120be5, .2vw 0vw   1vw #120be5, .4vw 0vw   5vw #120be5, 
          .1vw 0vw   5vw #120be5, .2vw 0vw  20vw #120be5, .4vw 0vw  10vw #120be5,
          .1vw 0vw  10vw #120be5, .2vw 0vw  30vw #120be5, .4vw 0vw  10vw #120be5;
        box-shadow:
          0 0 0.1vw  0.4vw #f7f9ff,   
          0 0 0.4vw  0.6vw #72a4e9, 
          0 0   4vw  0.4vw #120be5,
          inset 0 0 1.5vw  0.4vw #120be5,
          inset 0 0 0.4vw  0.2vw #72a4e9,
          inset 0 0 0.5vw  0.2vw #f7f9ff;
          border-radius: 1.5rem;
`
const Container = styled.div`
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
    width: 500px;
    top:30%;
    position:relative;
`
const H = styled.h3`
background: #171e22;
color: #fff;
font-size:8px;
line-height: 280px;
text-align: center; 
position:relative;
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
        <Box>
          <BoxWrapper>
            MEDIUM
          </BoxWrapper>
            <Container >
            <Slider {...settings} >
              {!data ? console.log(false) : data.map((d)=>{
                
                return (
                  <div>
                    <H>{d.title}</H>
                  </div>
                )
              })
              }
          
            </Slider>
            </Container>
        </Box>
      </Wrap>
    );
  }
}
export default Articles;