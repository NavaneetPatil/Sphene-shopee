import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collection from '../../components/Collection/Collection';
import ColorSwitcher from '../../components/colorSwitcher/ColorSwitcher';
import { Wallpaper } from '../../commonComponents';
import imgurl from '../../assets/images/shop-parallax-2.jpg';
import { BlackScreen, Container, ColHeading } from '../../commonComponents';
import WidgetCard from '../../components/widget/widgetCard';
import { RightWrapper, CollectionWrapper, ProductCardBox } from './styles';
import * as actionTypes from './action';



class Shop extends Component {
  state = {
    search: '',
    filteredProducts: [],
    maxPrice: 80
  }
  componentDidMount() {
    this.props.getShopProducts();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  searchChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value.trim() }, this.searchHandler());
    this.searchHandler();

  }
  priceChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, this.filterpriceHandler());
  }
  filterpriceHandler = () => {
    var newArr = this.props.products.filter((a) => (a.offerprice ? a.offerprice : a.price) <= (this.state.maxPrice));
    this.setState({ filteredProducts: newArr });
  }
  searchHandler = () => {
    var newArr = this.props.products.filter((a) => a.name.toUpperCase().includes((this.state.search).toUpperCase()));
    this.setState({ filteredProducts: newArr });
  }

  render() {
    if (this.state.search === '' && this.state.maxPrice == 80) {
      this.state.filteredProducts = this.props.products;
    }

    return (
      <>
        <Wallpaper img={imgurl}><BlackScreen><h2>our must have</h2></BlackScreen></Wallpaper>
        <ColorSwitcher />

        <Container>
          <CollectionWrapper>
            <ProductCardBox>
              <Collection
                obj={this.state.filteredProducts}
              />
            </ProductCardBox>
            <RightWrapper>
              <input name='search' placeholder='Search items.....' onChange={this.searchChangeHandler}></input>
              <h2>Filter Price</h2>
              <span>$1 - ${this.state.maxPrice}</span>
              <input type='range' min='1' max='80' name='maxPrice' value={this.state.maxPrice} onChange={this.priceChangeHandler}></input>
              <ColHeading>Best Sellers</ColHeading>
              {this.props.products.slice(0, 4).map((p) => {
                return (
                  <WidgetCard
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    url={require('../../assets/images/' + p.url)}
                    offerprice={p.offerprice}
                  />
                );
              })}
            </RightWrapper>
          </CollectionWrapper>
        </Container>
      </>
    );
  }
};


const mapStateToProps = (state) => {
  return {
      products:state.sr.shopProducts, 
  }
};

const mapDispatchToProps = dispatch => {
    return {
        getShopProducts:() => dispatch({type: actionTypes.GET_SHOP_PRODUCTS}),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Shop);