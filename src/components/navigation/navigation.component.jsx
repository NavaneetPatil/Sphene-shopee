import React, { useState } from 'react';
import '../../styles/customStyles.css';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import * as actionTypes from '../../pages/logIn-signIn/action';
import {
    MenuDropButton, NavButtonBlock, MobileMenuOption ,HambergClose, NavBox, FullNav
} from './styles';



function Navigation() {    
    const [hambergWidth, setHambergWidth] = useState('0');
    const dispatch = useDispatch();

        const hanbergHandler = () => {
            if (hambergWidth === '0') {
                 setHambergWidth('50%') ;
            }
            else {
                setHambergWidth('0') ;
            }
        }
        const logOutHandler = () =>{
            dispatch({ type: actionTypes.LOGOUT });
        }
        return (
            <FullNav>
                <NavBox>
                    <MobileMenuOption >
                     <i className='fa fa-bars' onClick={hanbergHandler} ></i> 
                    </MobileMenuOption>

                    <div><h2>SPHENE</h2></div>
                    
                    <NavButtonBlock width={hambergWidth}>
                        <HambergClose><i onClick={hanbergHandler} className='fa fa-close'></i></HambergClose>
                        <NavLink exact to='/home'><MenuDropButton>home</MenuDropButton></NavLink>
                        <NavLink exact to='/shop' ><MenuDropButton>Shop</MenuDropButton></NavLink>
                        <NavLink exact to='/profile' ><MenuDropButton>Profile</MenuDropButton></NavLink>
                        <NavLink exact to='/contact' ><MenuDropButton>CONTACT</MenuDropButton></NavLink>
                        <MenuDropButton onClick={logOutHandler}>Logout</MenuDropButton>
                    </NavButtonBlock>

                </NavBox>
            </FullNav>
        )

}
 
export default Navigation;