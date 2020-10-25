import React,{Component} from 'react';
import { Container } from '../../commonComponents';
import WidgetCard from '../widget/widgetCard';
import { ChartWrapper, ColWrapper } from './styles';
import {WidgetCol, ColHeading} from '../../commonComponents';
import axios from 'axios';
//import { render } from 'node-sass';




class ProductChart extends Component {
    state = {
        bestSeller:[],
        onSale:[],
        topRated:[]
    }
    
    componentDidMount () {
        axios.get( './myjson.json')
            .then( response => {
                this.setState({bestSeller:response.data.bestSeller});
                this.setState({onSale:response.data.onSale}) ;
                this.setState({topRated:response.data.topRated}) ;
            } );
      }

    render(){
    return (
        <>
            <ChartWrapper>
                <Container>
                    <ColWrapper>
                        <WidgetCol>
                            <ColHeading><i className='fa fa-shopping-bag'></i>Best Sellers</ColHeading>
                            {this.state.bestSeller.map((p) => {
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
                            {this.state.topRated.map((p) => {
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
                            {this.state.onSale.map((p) => {
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
}

export default ProductChart;


