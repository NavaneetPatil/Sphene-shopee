import React, { Component } from 'react';
import {CarouselWrapper,CarouselBtn,CarouselTwinRoundBtn,CarouselLeftRoundBtn,CarouselRightRoundBtn,CarouselBtnLeft,CenterDiv,CarouselBtnRight} from './styles';
import {BlackScreen} from '../../commonComponents';
import wallpaper1 from "../../assets/images/wallpaper1.png";
import wallpaper2 from "../../assets/images/wallpaper2.png";
import {Link} from 'react-router-dom';

class Carousel extends Component {
    state={
        img:wallpaper1,
        women:true,
        man:false,
    };
    wallpaperToggleHandler=()=>{
        if(this.state.img===wallpaper1){
            this.setState({img:wallpaper2,women:false,man:true});
        }
        else{
            this.setState({img:wallpaper1,women:true,man:false});
        }
    };
    //var timer=setInterval( wallpaperToggleHandler(), 2000 );
    
    
    render(){
      return(      
      <div>
      <CarouselWrapper url={this.state.img}>
          <BlackScreen>
              <CenterDiv display={this.state.women}>
                  <div>
                    <h2>URBAN STYLING</h2>
                    <Link to='/shop'><CarouselBtn>SHOP THE COLLECTION</CarouselBtn></Link>
                  </div>
                  <h1>Every Cut And <br></br> Curve</h1>
              </CenterDiv>

              <CenterDiv display={this.state.man}>
                  <h1>New Pants And <br></br> T-Shirts</h1>
                  <h2>MEN'S CASUAL</h2>
                  <Link to='/shop'><CarouselBtn>SHOP THE COLLECTION</CarouselBtn></Link>
              </CenterDiv>
              <CarouselTwinRoundBtn>
                  <CarouselLeftRoundBtn color={this.state.women} onClick={this.wallpaperToggleHandler}></CarouselLeftRoundBtn>
                  <CarouselRightRoundBtn color={this.state.man} onClick={this.wallpaperToggleHandler}></CarouselRightRoundBtn>
               </CarouselTwinRoundBtn>
          </BlackScreen>
          <CarouselBtnLeft onClick={this.wallpaperToggleHandler} ></CarouselBtnLeft>
          <CarouselBtnRight onClick={this.wallpaperToggleHandler}  ></CarouselBtnRight>
      </CarouselWrapper>
      </div>
      );
    }


  }
  
  export default Carousel;