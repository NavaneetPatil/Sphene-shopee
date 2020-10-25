import React, {Component} from 'react';
import {WidgetWrapper,DetailsBox,StarsWrapper,Price} from './styles';

function WidgetCard(props) {


  var a=[];
  for(var i=0;i<props.stars;i++){
    a.push(i);
   }
    return (
      <>
      <WidgetWrapper>
      <img src={props.url}></img>
      <DetailsBox>
          <a>{props.name}</a>
          { props.offterprice ? <p>price</p> : <Price>${props.price}</Price>}
          {
             props.stars ?
            <StarsWrapper>
             {a.map((a)=>
             <i className='fa fa-star'></i>
             )}
            </StarsWrapper>
              : null 
          }
    
      </DetailsBox>
      </WidgetWrapper>
      </>
    );

}

export default WidgetCard;
