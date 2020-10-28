import React, { Component } from 'react';
import '../../styles/customStyles.css';
import { withTheme } from 'styled-components';
import logo from "../../assets/images/logo-2.png";
import {
    MenuDropButton, NavButtonBlock, MobileMenuOption ,HambergClose, NavBox, FullNav
} from './styles';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../pages/logIn-signIn/action';


class Navigation extends Component {
    state = {
        hambergWidth: '0',
    };


    render() {
        var Style = {
            border:'2px solid ' + this.props.theme.themeColor,
        };
        const HanbergHandler = () => {
            if (this.state.hambergWidth === '0') {
                this.setState({ hambergWidth: '50%' });
            }
            else {
                this.setState({ hambergWidth: '0' });
            }

        }
        return (
            <FullNav>
                <NavBox>
                    <MobileMenuOption >
                     <i className='fa fa-bars' onClick={HanbergHandler} ></i> 
                    </MobileMenuOption>

                    <div><h2>SPHENE</h2></div>
                    
                    <NavButtonBlock width={this.state.hambergWidth}>
                        <HambergClose><i onClick={HanbergHandler} className='fa fa-close'></i></HambergClose>
                        <NavLink exact to='/home'><MenuDropButton>home</MenuDropButton></NavLink>
                        <MenuDropButton>PORTFOLIO</MenuDropButton>
                        <MenuDropButton>pages</MenuDropButton>
                        <NavLink exact to='/shop' ><MenuDropButton>Shop</MenuDropButton></NavLink>
                        <NavLink exact to='/profile' ><MenuDropButton>Profile</MenuDropButton></NavLink>
                        <NavLink exact to='/contact' ><MenuDropButton>CONTACT</MenuDropButton></NavLink>
                        <MenuDropButton onClick={this.props.logOutHandler}>Logout</MenuDropButton>
                        <MenuDropButton><i className="fas fa-search"></i></MenuDropButton>
                        <MenuDropButton><i className="fas fa-shopping-cart"></i></MenuDropButton>
                    </NavButtonBlock>

                </NavBox>
            </FullNav>
        )
    }

}

const mapStateToProps = state => {
    return {
        loginStatus: state.lr.loginStatus
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logOutHandler: () => dispatch({ type: actionTypes.LOGOUT })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Navigation));