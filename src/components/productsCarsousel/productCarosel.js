import React, { Component } from 'react';
import Card from './card/Card';
import {CategoryTittle,Container} from '../../commonComponents';
import {VertBtnRight,VertBtnLeft,CarouselWrapper,CardWrapper} from './styles';
import Slider from "react-slick";



import shirtLink from '../../assets/images/shop-07.jpg';
import capLink from '../../assets/images/shop-03.jpg';
import watchLink from '../../assets/images/shop-04.jpg';
import shadesLink from '../../assets/images/shop-05.jpg';
import walletLink from '../../assets/images/shop-06.jpg';
import TshirtLink from '../../assets/images/shop-08.jpg';

var obj=[
    {name:'cap',price:20,url:capLink,id:35},
    {name:'watch',price:20,url:watchLink,id:36},
    {name:'shades',price:20,url:shadesLink,id:37},
    {name:'wallet',price:20,url:walletLink,id:38},
    {name:'Tshirt',price:20,url:TshirtLink,id:39},
    {name:'shirt',price:20,url:shirtLink,id:40},
]

function VertBtnRightt(props) {
  const { onClick } = props;
  return (
    <VertBtnRight
      onClick={onClick}
    />
  );
}
function VertBtnLeftt(props) {
  const { onClick } = props;
  return (
    <VertBtnLeft
      onClick={onClick}
    />
  );
}



class ProductsCarousel extends Component {
    state={
        shift:0,
        obj
    };
    render(){
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <VertBtnRightt></VertBtnRightt>,
      prevArrow:<VertBtnLeftt></VertBtnLeftt>,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
  
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
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
      return(      
      <div>
        <Container>
         <CategoryTittle>New Araivals</CategoryTittle>
         <CarouselWrapper>

             <Slider {...settings} className="slider">
                 {this.state.obj.map((product)=>{
                     return(
                         <CardWrapper>
                        <Card 
                        key={product.id}
                        url={product.url}
                        name={product.name} 
                        price='20'
                        />
                         </CardWrapper>
   
                     );
                 })}
                 </Slider>
                 </CarouselWrapper>       
         </Container> 
      </div>
      );
    }
  }
  export default ProductsCarousel;

  

//   if (this.state.direction === 1) {
//     slider.prepend(slider.lastElementChild);
//   } else {
//     slider.appendChild(slider.firstElementChild);
//   }
  
//   slider.style.transition = 'none';
//   slider.style.transform = 'translate(0)';
//   setTimeout(() => {
//     slider.style.transition = 'all 0.5s';
//   })