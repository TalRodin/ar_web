import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { device } from '../device';


const Wrap=styled.div`
    height: 100vh;
    justify-content: center;
    display: flex;
    align-items: center;    
`
const Box = styled.div`
    width: 60vw;
    height: 60vh;
    padding: 5vh 5vw;
    overflow: hidden;
    background-color: #495a74;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.8);
    -webkit-background-clip: text;
    transition: box-shadow 0.7s ease-in-out;
    border-radius: 2px;
    box-shadow: 8px 8px 8px #a3b1c6, -8px -8px 8px rgba(255, 255, 255, 0.5), inset 1px 1px 1px #fff, inset -1px -1px 1px #a3b1c6;
    justify-content: center; 
    display:flex;
    @media screen and (max-width: 489px) {
      width: 80vw;
      height: 50vh;
      padding: 3vh 3vw;
            } 
`
const Container = styled.div`
    width: 480px;
    @media screen and (max-width: 489px) {
      width: 340px;
            }
`
const H = styled.h3`
    color:#414141;
    text-shadow: 1px 2px 1px rgba(255,255,255,0.5);
    font-family: 'Lato', sans-serif;
    line-height: 2;
    letter-spacing: 1px;
    font-size: 16px;
    text-align:center;
    @media screen and (max-width: 489px) {
      font-size:12px;
                }
`
const Keywords= styled.div`
    color:#414141;
    text-align: left;
    margin-left:25%;
    font-size:12px;
    text-shadow: 1px 1px #fff;
    animation: appearing 4s ease-out;
   
    @keyframes appearing {
      0% {
        opacity: 0;
         }
      100% {
        opacity: 1;
         }
    @media screen and (max-width: 489px) {
      font-size:8px;
                }
`
const S=styled.svg`
    color:#6d5dfc;
    margin-left:50%;
    transform: translate(-50%, -50%);
    margin-top:5%;
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
const Img = styled.img`
     width:20%;
     height:20%;
     filter: grayscale(80%);
     display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
     
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
            <Container  >
            <Slider {...settings} >
              {!data ? console.log(false) : data.map((d)=>{
                return (
                  <div>
                     <Img src={d.thumbnail}/>
                    <H>{d.title}</H>
                    <Keywords>
                      <p>{d.categories.map(c=>{
                          return(<div>{c}</div>)
                      })}</p>
                    </Keywords>
                      <a href={`${d.link}`}>
                        <S width='30' height='30'  fill='#6d5dfc' viewBox="0 0 64 64"><title/><path d="M60.72,16.32l0,0a1,1,0,0,0-.17-.13l-.05,0L44,7.9a3,3,0,0,0-3.86,1L29,26.17l-6.14-9.7a1,1,0,0,0-.13-.17h0l0,0h0a1,1,0,0,0-.27-.18L7.34,8.55A3,3,0,0,0,3,11.24V46.76a3,3,0,0,0,1.66,2.68l14,7A3,3,0,0,0,23,53.76V39.12L56.63,56.39A3,3,0,0,0,61,53.72V17A1,1,0,0,0,60.72,16.32ZM21,53.76a1,1,0,0,1-1.45.89l-14-7A1,1,0,0,1,5,46.76V11.24a1,1,0,0,1,.47-.85A1,1,0,0,1,6,10.23a1,1,0,0,1,.44.11L21,17.62Zm2-16.87V20.45L38.42,44.79ZM30.17,28,41.86,10a1,1,0,0,1,1.29-.35L58.56,17.4,41,45.13ZM59,53.72a1,1,0,0,1-1.46.89L42.31,46.79,59,20.45Z"/></S>
                      </a>
                  </div>
                )
              })
              }
            </Slider>
            </Container >
            </Box>
      </Wrap>
    );
  }
}
export default Articles;