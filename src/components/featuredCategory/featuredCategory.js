import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../styles/customStyles.css";
import { Container, CategoryTittle } from '../../commonComponents';
import CategoryCard from '../categoryCard/categoryCard';
import { FeaturedCategoryWrapper } from './styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as actionTypes from '../../pages/home/action';




class FeaturedCategory extends Component { 
    state = {
      products: [],
  }
  
  componentDidMount () {
    axios.get( 'https://react-sphene-app-80aae.firebaseio.com/.json' )
        .then( response => {
           // const arr = response.data.slice(0, 8);
            this.setState({products:response.data.HomeProducts});
            //console.log( this.state.products );
        } );
  }
  
  render(){
    return (
        <>
            <Container>
                <CategoryTittle>Featured Categories</CategoryTittle>
                <FeaturedCategoryWrapper>     
                               {this.state.products.slice(0,1).map((product)=>{
                                   return(
                                    <CategoryCard 
                                    key={product.id}
                                    component={Link} 
                                    to={'/viewCollection'}
                                    url={ require ('../../assets/images/'+product.url) }
                                    category={product.name}
                                    clicked={()=>this.props.updateArr(product.relatedProducts)}
                                   />
                                   )
                               })}
                         <div className="col-6">
                           <FeaturedCategoryWrapper>
                               {this.state.products.slice(1,5).map((product)=>{
                                   return(
                                    <CategoryCard 
                                    key={product.id}
                                    component={Link} 
                                    to={'/viewCollection'}
                                    url={ require ('../../assets/images/'+product.url) }
                                    category={product.name}
                                    clicked={()=>this.props.updateArr(product.relatedProducts)}
                                   />
                                   )
                               })}
                               </FeaturedCategoryWrapper>    
                         </div>
                </FeaturedCategoryWrapper>
            </Container>
        </>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        updateArr:(product) => dispatch({type: actionTypes.UPDATE,arr:product})
    }
};


export default connect(null,mapDispatchToProps)(FeaturedCategory);  
  