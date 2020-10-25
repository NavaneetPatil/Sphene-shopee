import React from 'react';
import { Link } from 'react-router-dom';
import {CardBtn,CardWrapper,Img} from './styles';

function CategoryCard(props) {
  return (
    <CardWrapper onClick={props.clicked} >
      <Link to={props.to}>
        <Img src={props.url}></Img>
       <CardBtn>{props.category}</CardBtn>
       </Link>
    </CardWrapper>
  );
}

export default CategoryCard;
