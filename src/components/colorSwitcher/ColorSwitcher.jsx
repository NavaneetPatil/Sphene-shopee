import React, { Component } from 'react';
import { ColorSwitchWrapper, Shade, ShadesBox ,TittleWrapper} from './styles';
import { connect } from 'react-redux';
import * as actionTypes from './action';
import {blue,green,orange,red,navy,yellow,mango,beige,purple,celadon,pink,brown,cyan,grey,olive, cherry} from '../../theme/theme';


class ColorSwitcher extends Component {
    state={
        shouldpull:false,
    };


    render() {
        const pullHandler=()=>{
            if(this.state.shouldpull){
                this.setState({shouldpull:false});
            }
            else{
                this.setState({shouldpull:true});
            }
            
        }
        return (
            <ColorSwitchWrapper pull={this.state.shouldpull}>
                <TittleWrapper><h2>Color Switcher</h2><i className='fa fa-gear' onClick={pullHandler}></i></TittleWrapper>
                <ShadesBox>
                    <Shade color={blue.themeColor} onClick={()=>this.props.changeTheme(blue)}></Shade>
                    <Shade color={green.themeColor} onClick={()=>this.props.changeTheme(green)}></Shade>
                    <Shade color={orange.themeColor} onClick={()=>this.props.changeTheme(orange)}></Shade>
                    <Shade color={red.themeColor} onClick={()=>this.props.changeTheme(red)}></Shade>
                    <Shade color={navy.themeColor} onClick={()=>this.props.changeTheme(navy)}></Shade>
                    <Shade color={yellow.themeColor} onClick={()=>this.props.changeTheme(yellow)}></Shade>
                    <Shade color={mango.themeColor} onClick={()=>this.props.changeTheme(mango)}></Shade>
                    <Shade color={beige.themeColor} onClick={()=>this.props.changeTheme(beige)}></Shade>
                    <Shade color={purple.themeColor} onClick={()=>this.props.changeTheme(purple)}></Shade>
                    <Shade color={celadon.themeColor} onClick={()=>this.props.changeTheme(celadon)}></Shade>
                    <Shade color={pink.themeColor} onClick={()=>this.props.changeTheme(pink)}></Shade>
                    <Shade color={cherry.themeColor} onClick={()=>this.props.changeTheme(cherry)}></Shade>
                    <Shade color={brown.themeColor} onClick={()=>this.props.changeTheme(brown)}></Shade>
                    <Shade color={cyan.themeColor} onClick={()=>this.props.changeTheme(cyan)}></Shade>
                    <Shade color={grey.themeColor} onClick={()=>this.props.changeTheme(grey)}></Shade>
                    <Shade color={olive.themeColor} onClick={()=>this.props.changeTheme(olive)}></Shade>
                </ShadesBox>
            </ColorSwitchWrapper>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        changeTheme:(color) => dispatch({type: actionTypes.THEMECHANGE,newColor:color})
    }
};


export default connect(null,mapDispatchToProps)(ColorSwitcher);  