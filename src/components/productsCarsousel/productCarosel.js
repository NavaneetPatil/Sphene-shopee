import React, { Component } from 'react';
import Card from './card/Card';
import { CategoryTittle, Container } from '../../commonComponents';
import { VertBtnRight, VertBtnLeft, CarouselWrapper, CardWrapper } from './styles';
import Slider from "react-slick";
import axios from 'axios';

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
  state = {
    shift: 0,
    carouseljson: []
  };
  componentDidMount = () => {
    axios.get('./myjson.json')
      .then(response => {
        this.setState({ carouseljson: response.data.carouseljson });
      });
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <VertBtnRightt></VertBtnRightt>,
      prevArrow: <VertBtnLeftt></VertBtnLeftt>,
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
    return (
      <div>
        <Container>
          <CategoryTittle>New Araivals</CategoryTittle>
          <CarouselWrapper>

            <Slider {...settings} className="slider">
              {this.state.carouseljson.map((product) => {
                return (
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