import React, { Component } from 'react';
import Collection from '../../components/Collection/Collection';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation.component';
import ColorSwitcher from '../../components/colorSwitcher/ColorSwitcher';
import BackToTop from '../../components/backtotop/backToTop';
import {Wallpaper} from '../../commonComponents';
import imgurl from '../../assets/images/shop-parallax-2.jpg';
import {BlackScreen,Container} from '../../commonComponents';



class ViewCollection extends Component { 


  componentDidMount=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //console.log('go top is called')
  }




 render(){
  return (
    <>
      <Navigation/>
      <Wallpaper img={imgurl}><BlackScreen><h2>our must have</h2></BlackScreen></Wallpaper>
      <ColorSwitcher/>
      <Container>
      <Collection 
       obj={this.props.Arr} 
       />
      </Container>

       <BackToTop/>
       <Footer/>
    </>
  );
 } 
}

const mapStateToProps = state => {
  return {
      Arr: state.hr.viewCollection, 
    }
};

export default connect(mapStateToProps,null)(ViewCollection);