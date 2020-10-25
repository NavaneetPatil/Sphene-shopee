import React from 'react';
import {CardWrapper,CardDescrip,Price,Offerprice} from './styles';

function Card(props) {
  return (
    <>
    <CardWrapper>
      <img src={props.url}></img>
       <CardDescrip>
         <h4>{props.name}</h4>
       
         {props.offerprice ?
           <div><Price strik={props.offerprice}>${props.price}</Price><Offerprice>{props.offerprice}</Offerprice></div> :
           <Price strik={props.offerprice}>${props.price}</Price>
        }
       
         </CardDescrip>
    </CardWrapper>
    </>

  );
}

export default Card;
