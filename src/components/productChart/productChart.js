import React, { useState, useEffect  } from 'react';
import { Container } from '../../commonComponents';
import WidgetCard from '../widget/widgetCard';
import { ChartWrapper, ColWrapper } from './styles';
import {WidgetCol, ColHeading} from '../../commonComponents';
import axios from 'axios';



function ProductChart() {

const [bestSeller, setBestSeller] = useState([]);
const [onSale, setOnSale] = useState([]);
const [topRated, setTopRated] = useState([]);

useEffect(() => {
    axios.get( './myjson.json')
    .then( response => {
            setBestSeller(response.data.bestSeller);
            setOnSale(response.data.onSale);
            setTopRated(response.data.topRated);
    } );     
  },[]);


    return (
        <>
            <ChartWrapper>
                <Container>
                    <ColWrapper>
                        <WidgetCol>
                            <ColHeading><i className='fa fa-shopping-bag'></i>Best Sellers</ColHeading>
                            { bestSeller.map((p) => {
                                return (
                                    <WidgetCard
                                        key={p.id}
                                        name={p.name}
                                        price={p.price}
                                        url={p.url}
                                    />
                                );
                            })}
                        </WidgetCol>
                        <WidgetCol>
                            <ColHeading><i className='fa fa-star'></i>Top Rated</ColHeading>
                            {topRated.map((p) => {
                                return (
                                    <WidgetCard
                                        key={p.id}
                                        name={p.name}
                                        price={p.price}
                                        url={p.url}
                                        stars={p.stars}
                                    />
                                );
                            })}
                        </WidgetCol>
                        <WidgetCol>
                            <ColHeading><i className='fa fa-tag'></i>On Sale</ColHeading>
                            {onSale.map((p) => {
                                return (
                                    <WidgetCard
                                        key={p.id}
                                        name={p.name}
                                        price={p.price}
                                        url={p.url}
                                    />
                                );
                            })}

                        </WidgetCol>
                    </ColWrapper>

                </Container>
            </ChartWrapper>
        </>
    );
 }


export default ProductChart;


