import React, {Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components'

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
const photos=[1,2,3,4,5,6]
export default class Photos extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
      return (
        <div>
          <Container>
          <Slider {...settings}>
          
               {photos.map(p=>{
                   return (
                       <H>
                           {p}
                       </H>
                   )
               })}
          
          </Slider>
          </Container>
        </div>
      );
    }
  }