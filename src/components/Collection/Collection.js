import React from 'react';
import Card from '../productsCarsousel/card/Card';
import {AllProductsWrapper} from '../../commonComponents';

function Collection(props) {
  return (
    <>
    <div>
           <AllProductsWrapper>
           {props.obj.map((p) => {
                                return (
                                    <Card
                                        key={p.id}
                                        name={p.name}
                                        price={p.price}
                                        url={require('../../assets/images/'+p.url) }
                                        offerprice={p.offerprice}
                                    />
                                );
                            })}
            </AllProductsWrapper>
    </div>

    </>
  );
}

export default Collection;