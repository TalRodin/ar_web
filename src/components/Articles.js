import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { device } from '../device';
const Wrap=styled.div`
    height: 100vh; 
    
`
// const Box = styled.div`
//       // background: url(appletab.png);
//       background-size: 100% 100%;
//       width: 72%;
//       height: 90%;
//       border-radius:35px; 
//       position:relative;
//       left:10%;
//       top: 3%;
//       transform: rotate(-0.25deg);
//       @media ${device.tablet} { 
//         transform: rotate(90deg);
//         // background-size: 100% 100%;
//         height: 64%;
//         width: 85%;
//             }
      
// `
// const Box2 = styled.div`
// // linear-gradient( rgba(38,40,43, 0.9), rgba(38,40,43, 1)),
//       position:relative;     
//       background: url('n2.png');
//       height: 88.9%;
//       object-fit: cover;
//       top:31px;
//       margin-left:10.7%;
//       margin-right:10.7%;
//       border: 1px solid black;
//       @media ${device.tablet} { 
//         transform: rotate(-90deg);
//         position:relative;     
//         background: url('n2.png');
//         height: 108%;
//         width:64%;
//         object-fit: cover;
      
     
//       // margin-left:18%;
//       // margin-right:10.7%;
//       margin-bottom:20%;
//       margin-top:10%;
//       // border: 1px solid black;
     
       
//             }
// `

// const BoxWrapper=styled.div`       
//         top:10%;     
//         position:relative;
//         color: #d8f8ff;
//         left:30%;
//         transform: rotate(2deg);
//         text-align:center;
//         width:30%;
//         height: 15%;
//         padding: 1rem 2.5rem 1rem 2.5rem;
//         box-shadow:
//           0 0 0.1vw  0.2vw #f7f9ff,   
//           0 0 0.4vw  0.6vw #72a4e9, 
//           0 0   4vw  0.4vw #120be5,
//           inset 0 0 1.5vw  0.4vw #120be5,
//           inset 0 0 0.4vw  0.2vw #72a4e9,
//           inset 0 0 0.5vw  0.2vw #f7f9ff;
//           border-radius: 1.5rem;
         
// `
// const H5=styled.h5`
//         position: relative;
//         font-weight:700;
//         margin-top:8%;
//         font-size:40px;
//         font-family:'Quicksand'; 
//         letter-spacing: 10px; 
             
//         text-shadow: 0 0 20px #f7f9ff, 0 0 30px #f7f9ff, 0 0 40px #72a4e9, 0 0 70px #72a4e9, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
//         @media ${device.tablet} { 
//           font-size:20px;
//         }
    
//       }

// `
const Container = styled.div`
    margin: 0 auto;
    // padding: 0px 40px 40px 40px;
    width: 500px;
    height: 290px;
    top:20%;
    position:relative;
    border-radius: 35px;
    // background-color: #26282B;
    background-color: transparent;
    
    box-shadow: 0 0 6px 6px #fbfbfb, 12px 12px 16px 8px rgba(136, 136, 136, 0.7), -12px -12px 16px 8px rgba(244, 244, 244, 0.7);
    @media ${device.tablet} {
      width: 350px;
    }

    `
const H = styled.h3`
    color: #1a1b1d;
    font-size:28px;
    line-height: 40px;
    text-align: center;
    font-weight: normal;
    @import url('https://fonts.googleapis.com/css?family=Lato');
    position:relative;
    font-family: 'Lato', sans-serif;
    background-color: transparent;
    @media ${device.tablet} {
      font-size:20px;
    }
`
const Keywords= styled.div`
    color:#1a1b1d;
    text-align: center;
    font-size:20px;
`

const A=styled.a`
     margin-left:45%;
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
        {/* <Box> */}
           {/* <Box2> */}
           {/* <BoxWrapper>
             <H5>MEDIUM</H5>
          </BoxWrapper> */}
            <Container  >
            <Slider {...settings} >
              {!data ? console.log(false) : data.map((d)=>{
                
                return (
                  <div>
                     <div>{console.log(d)}</div>
                     
                    <H>{d.title}
                    
                    </H>
                    <Keywords>
                    <p>{d.categories.map(c=>{
                  return(
                  <div>{c}</div>
                  )
                })}</p>
                </Keywords>
                <A href={`${d.link}`}>
                 
                 <svg width='60' height='60'  fill='#1a1b1d' viewBox="0 0 64 64"><title/><path d="M60.72,16.32l0,0a1,1,0,0,0-.17-.13l-.05,0L44,7.9a3,3,0,0,0-3.86,1L29,26.17l-6.14-9.7a1,1,0,0,0-.13-.17h0l0,0h0a1,1,0,0,0-.27-.18L7.34,8.55A3,3,0,0,0,3,11.24V46.76a3,3,0,0,0,1.66,2.68l14,7A3,3,0,0,0,23,53.76V39.12L56.63,56.39A3,3,0,0,0,61,53.72V17A1,1,0,0,0,60.72,16.32ZM21,53.76a1,1,0,0,1-1.45.89l-14-7A1,1,0,0,1,5,46.76V11.24a1,1,0,0,1,.47-.85A1,1,0,0,1,6,10.23a1,1,0,0,1,.44.11L21,17.62Zm2-16.87V20.45L38.42,44.79ZM30.17,28,41.86,10a1,1,0,0,1,1.29-.35L58.56,17.4,41,45.13ZM59,53.72a1,1,0,0,1-1.46.89L42.31,46.79,59,20.45Z"/></svg>
                  </A>
                  </div>
                )
              })
              }
          
            </Slider>
            </Container >
          {/* </Box2> */}
        {/* </Box> */}
      </Wrap>
    );
  }
}
export default Articles;