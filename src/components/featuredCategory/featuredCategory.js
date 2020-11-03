import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../styles/customStyles.css";
import { Container, CategoryTittle } from '../../commonComponents';
import CategoryCard from '../categoryCard/categoryCard';
import { FeaturedCategoryWrapper } from './styles';
import { Link } from 'react-router-dom';
import * as actionTypes from '../../pages/home/action';




class FeaturedCategory extends Component { 
  
  componentDidMount () {
    this.props.obtainCategoryProducts();
  }
  
  render(){
    return (
        <>
            <Container>
                <CategoryTittle>Featured Categories</CategoryTittle>
                <FeaturedCategoryWrapper>     
                               {this.props.products.slice(0,1).map((product)=>{
                                   return(
                                    <CategoryCard 
                                    key={product.id}
                                    component={Link} 
                                    to={'/viewCollection'}
                                    url={ require ('../../assets/images/'+product.url) }
                                    category={product.name}
                                    clicked={()=>this.props.updateViewArr(product.relatedProducts)}
                                   />
                                   )
                               })}
                         <div className="col-6">
                           <FeaturedCategoryWrapper>
                               {this.props.products.slice(1,5).map((product)=>{
                                   return(
                                    <CategoryCard 
                                    key={product.id}
                                    component={Link} 
                                    to={'/viewCollection'}
                                    url={ require ('../../assets/images/'+product.url) }
                                    category={product.name}
                                    clicked={()=>this.props.updateViewArr(product.relatedProducts)}
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
const mapStateToProps = state => {
    return {
        products:state.hr.categoryProducts,
      }
  };

const mapDispatchToProps = dispatch => {
    return {
        updateViewArr:(product) => dispatch({type: actionTypes.UPDATE_VIEW_COLLECTION,arr:product}),
        obtainCategoryProducts:() => dispatch({type: actionTypes.INITIATE_CATEGORY_PRODUCTS}),
        
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FeaturedCategory);  
  