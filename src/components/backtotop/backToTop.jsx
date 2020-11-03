import React from 'react';
import {RoundBtn} from './styles';


function BackToTop() {
    const goTopHandler=()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'     
    })
    }

  return (
    <>
    <RoundBtn onClick={goTopHandler}></RoundBtn>
    </>
  );
}

export default BackToTop;
