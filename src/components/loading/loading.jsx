import React from 'react';
import { connect } from 'react-redux';
import {LoadingWrapper} from './styles';
import img from '../../assets/images/loading.gif'


let Loading = ({ loading }) => (
loading ?
<LoadingWrapper>
    <div><img src={img} alt='loading' /></div>
</LoadingWrapper>  :
 null
);
const mapStateToProps = (state) => ({loading: state.lr.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;