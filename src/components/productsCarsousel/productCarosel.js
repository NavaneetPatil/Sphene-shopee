import React, { Component } from 'react';
import Card from './card/Card';
import {CategoryTittle,Container} from '../../commonComponents';
import {Carousel,VertBtnRight,VertBtnLeft,SliderFrame,Slider} from './styles';

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


class ProductsCarousel extends Component {
    state={
        shift:0,
        obj
    };
    prevClickHandler=(event)=>{
        if(this.state.shift < 0){
        var shift=this.state.shift+265;
        this.setState({shift:shift});
        }
    }
    nextClickHandler=(event)=>{ 
        if(this.state.shift > -535){
            var shift=this.state.shift-265;
            this.setState({shift:shift});
        }

    }
    render(){
      return(      
      <div>
        <Container>
         <CategoryTittle>New Araivals</CategoryTittle>
         <Carousel>
             <SliderFrame>
             <Slider transform={this.state.shift+'px'}>
                 {this.state.obj.map((product)=>{
                     return(
                        <Card 
                        key={product.id}
                        url={product.url}
                        name={product.name} 
                        price='20'
                        />
                     );
                 })}
            </Slider>
             </SliderFrame>
             <VertBtnRight onClick={this.nextClickHandler}></VertBtnRight>
             <VertBtnLeft onClick={this.prevClickHandler}></VertBtnLeft>
         </Carousel>
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