import React, {Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components'

const Container = styled.div`
margin: 0 auto;
// padding: 0px 20px 20px 20px;
width: 860px;
// height: 100px;
// top:20%;
margin-top:3%;
// position:relative;
// border-radius: 35px;
`

const Border = styled.div`
  padding-left:5%
`
export default class Photos extends Component {
    render() {
      console.log(this.props.project)
      var settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div>
          <Container>
          <Slider {...settings}>
          
               {this.props.project.map(p=>{
                   return (
                         <Border >
                         <img src={`${p}`} width='220px' height='160px'  />
                         </Border>
                   )
               })}
          </Slider>
          </Container>
        </div>
      );
    }
  }