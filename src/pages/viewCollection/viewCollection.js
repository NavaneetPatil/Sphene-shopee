import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import Collection from '../../components/Collection/Collection';
import { Wallpaper } from '../../commonComponents';
import imgurl from '../../assets/images/shop-parallax-2.jpg';
import { BlackScreen, Container } from '../../commonComponents';


function ViewCollection() {

  const viewCollection = useSelector(state => state.hr.viewCollection);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <Wallpaper img={imgurl}><BlackScreen><h2>our must have</h2></BlackScreen></Wallpaper>
      <Container>
        <Collection
          obj={viewCollection}
        />
      </Container>
    </>
  );
}

export default ViewCollection;