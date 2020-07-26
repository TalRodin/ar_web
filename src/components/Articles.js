import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { device } from '../device';


const Wrap=styled.div`
    height: 100vh;    
`
const Container = styled.div`
    margin: 0 auto;
    // padding: 0px 40px 40px 40px;
    width: 500px;
    height: 290px;
    top:20%;
    position:relative;
    border-radius: 35px;
    background-color: #fbfbfb;
    // background-color: transparent;
    box-shadow: 0 0 6px 6px #fbfbfb, 12px 12px 16px 8px rgba(136, 136, 136, 0.7), -12px -12px 16px 8px rgba(244, 244, 244, 0.7);
    animation: moveInBottom 9s ease-out;
    @media ${device.tablet} {
      width: 280px;
      height: 250px;
    }
    @keyframes moveInBottom {
      0% {
        opacity: 0;
        transform: translateY(4rem); }
      100% {
        opacity: 1;
        transform: translate(0); } }
    `
const H = styled.h3`
    color: #1a1b1d;
    font-size:24px;
    line-height: 28px;
    text-align: center;
    font-weight: normal;
    // position:relative;
    font-family: 'Lato', sans-serif;
    @media ${device.tablet} {
      font-size:20px;
    }
    animation: appearing 4s ease-out;
    @keyframes appearing {
      0% {
        opacity: 0;
         }
      100% {
        opacity: 1;
         }
`
const Keywords= styled.div`
    color:#1a1b1d;
    text-align: left;
    margin-left:20%;
    font-size:20px;
    animation: appearing 4s ease-out;
    @media ${device.tablet} {
      font-size:14px;
    }
    @keyframes appearing {
      0% {
        opacity: 0;
         }
      100% {
        opacity: 1;
         }
    
`
const S=styled.svg`
     &:hover{
      fill:#4b230b;   
 }
    margin-left:50%;
    transform: translate(-50%, -50%);
    margin-top:5%;
    @media ${device.tablet} {
      width:30pt;
      height:30pt;
      margin-top:8%;
    }
    animation: appearing 4s ease-out;
    @keyframes appearing {
      0% {
        opacity: 0;
         }
      100% {
        opacity: 1;
         }
`
const I = styled.img`
    margin-top:5%;
    position:absolute;
    left:40%;
    opacity:1;
    border-radius:30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: rotate(50deg);
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
     
            <Container  >
            <Slider {...settings} >
              {!data ? console.log(false) : data.map((d)=>{
                return (
                  <div>
                     <div>{console.log(d)}</div>
                    <H>{d.title}</H>
                    <Keywords>
                      <p>{d.categories.map(c=>{
                          return(<div>{c}</div>)
                      })}</p>
                    </Keywords>
                      <a href={`${d.link}`}>
                        <S width='60' height='60'  fill='#5c404b' viewBox="0 0 64 64"><title/><path d="M60.72,16.32l0,0a1,1,0,0,0-.17-.13l-.05,0L44,7.9a3,3,0,0,0-3.86,1L29,26.17l-6.14-9.7a1,1,0,0,0-.13-.17h0l0,0h0a1,1,0,0,0-.27-.18L7.34,8.55A3,3,0,0,0,3,11.24V46.76a3,3,0,0,0,1.66,2.68l14,7A3,3,0,0,0,23,53.76V39.12L56.63,56.39A3,3,0,0,0,61,53.72V17A1,1,0,0,0,60.72,16.32ZM21,53.76a1,1,0,0,1-1.45.89l-14-7A1,1,0,0,1,5,46.76V11.24a1,1,0,0,1,.47-.85A1,1,0,0,1,6,10.23a1,1,0,0,1,.44.11L21,17.62Zm2-16.87V20.45L38.42,44.79ZM30.17,28,41.86,10a1,1,0,0,1,1.29-.35L58.56,17.4,41,45.13ZM59,53.72a1,1,0,0,1-1.46.89L42.31,46.79,59,20.45Z"/></S>
                      </a>
                  </div>
                )
              })
              }
            </Slider>
            </Container >
      </Wrap>
    );
  }
}
export default Articles;