import React from 'react';
import Carousel from '../../components/carousel/carousel';
import FeaturedCategory from '../../components/featuredCategory/featuredCategory';
import ProductsCarousel from '../../components/productsCarsousel/productCarosel';
import ProductsChart from '../../components/productChart/productChart';

function Home() {
  return (
    <>
      <Carousel />
      <FeaturedCategory />
      <ProductsCarousel />
      <ProductsChart />
    </>
  );
}
export default Home;
