import React from 'react';
import Carousel from '../../components/carousel/carousel';
import FeaturedCategory from '../../components/featuredCategory/featuredCategory';
import ProductsCarousel from '../../components/productsCarsousel/productCarosel';
import ProductsChart from '../../components/productChart/productChart';
import Navigation from '../../components/navigation/navigation.component';
import Footer from '../../components/footer/footer';
import ColorSwitcher from '../../components/colorSwitcher/ColorSwitcher';
import BackToTop from '../../components/backtotop/backToTop';

function Home() {
  return (
    <>    
          <Navigation/>
          <ColorSwitcher/>
          <Carousel/>
          <FeaturedCategory/>
          <ProductsCarousel/>
          <ProductsChart/>
          <BackToTop/>
          <Footer/> 
    </>

  );
}
export default Home;
