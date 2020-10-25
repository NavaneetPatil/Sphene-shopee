import React, { Component } from 'react';
import Collection from '../../components/Collection/Collection';
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation.component';
import ColorSwitcher from '../../components/colorSwitcher/ColorSwitcher';
import BackToTop from '../../components/backtotop/backToTop';
import {Wallpaper} from '../../commonComponents';
import imgurl from '../../assets/images/shop-parallax-2.jpg';
import {BlackScreen,Container,ColHeading} from '../../commonComponents';
import WidgetCard from '../../components/widget/widgetCard';
import axios from 'axios';
import { RightWrapper,CollectionWrapper,ProductCardBox } from './styles';



class Shop extends Component { 
  state = {
    products: [],
    search:'',
    filteredProducts:[],
    maxPrice:80
}
  componentDidMount () {
    axios.get( 'https://react-sphene-app-80aae.firebaseio.com/.json' )
        .then( response => {
            this.setState({products:response.data.ShopProducts});
            console.log(this.state.products);
        } );
  }
  searchChangeHandler=(event)=>{
    const { value,name } = event.target;
    this.setState({ [name]: value.trim() },this.searchHandler());
    
  }
  priceChangeHandler=(event)=>{
    const { value,name } = event.target;
    this.setState({ [name]: value },this.filterpriceHandler()); 
  }
  filterpriceHandler = () =>{
    var newArr= this.state.products.filter((a)=>a.price<=(this.state.maxPrice));
    this.setState({filteredProducts: newArr});
  }
  searchHandler = ()=>{
    var newArr= this.state.products.filter((a)=>a.name.toUpperCase().includes((this.state.search).toUpperCase()));
    this.setState({filteredProducts: newArr});
  }

 render(){
   if(this.state.search==='' && this.state.maxPrice==80 ){
     this.state.filteredProducts=this.state.products;
   }

  return (
    <>
      <Navigation/>
      <Wallpaper img={imgurl}><BlackScreen><h2>our must have</h2></BlackScreen></Wallpaper>
      <ColorSwitcher/>

      <Container>
        <CollectionWrapper>
           <ProductCardBox>
              <Collection 
                obj={this.state.filteredProducts} 
              /> 
           </ProductCardBox>
            <RightWrapper>
               <input name='search' placeholder='Search' onChange={this.searchChangeHandler}></input>
               <h2>Filter Price</h2>
               <span>$1 - ${this.state.maxPrice}</span>
               <input type='range' min='1' max='80'  name='maxPrice' value={this.state.maxPrice} onChange={this.priceChangeHandler}></input>
                            <ColHeading>Best Sellers</ColHeading>
                            {this.state.products.slice(0, 4).map((p) => {
                                return (
                                    <WidgetCard
                                        key={p.id}
                                        name={p.name}
                                        price={p.price}
                                        url={require('../../assets/images/'+p.url) }
                                        offerprice={p.offerprice}
                                    />
                                );
                            })}
            </RightWrapper>
        </CollectionWrapper>
      </Container>

       <BackToTop/>
       <Footer/>
    </>
  );
 } 
}

;

export default Shop;