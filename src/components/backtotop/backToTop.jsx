import React from 'react';
import {RoundBtn} from './styles';


function BackToTop() {
    const goTopHandler=()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //window.onscroll = console.log("its scrolling");
  return (
    <>
    <RoundBtn onClick={goTopHandler}></RoundBtn>

    </>
  );
}

export default BackToTop;
