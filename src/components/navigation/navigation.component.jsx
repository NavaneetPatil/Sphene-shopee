import React, { Component } from 'react';
import '../../styles/customStyles.css';
import logo from "../../assets/images/logo-2.png";
import {MenuDropButton,NavButtonBlock,MobileMenuOption, MenuDropDownOneContent,MenuDropDownLink1,MenuDropDownLink2
    ,DropDown,MenuDropDownMultipleContent,NavBox,FullNav } from './styles';
import { Route, Link } from 'react-router-dom';  
import { connect } from 'react-redux';
import * as actionTypes from '../../pages/logIn-signIn/action';

const menu={  
    home:['Main Demo','Agency Demo','Classic Demo','Corporate Demo','Resume/CV Demo',
    'Shop Demo','Photography Demo','Magzine/Blog Demo'],
    pages1:['PAGES','About Us','About Me','Services Classic','Services Creative','Contact Classic','Contact Creative'],
    portfolio1:[ 'FULL-WIDTH','Portfolio Style 1','Portfolio Style 2','Portfolio Style 3','Portfolio Style 4','Photo Gallery'],
    portfolio2:['CONTAINED','Portfolio Style 1','Portfolio Style 2','Portfolio Style 3','Portfolio Style 4','AJAX Portfolio'],
    portfolio3:['SINGLE PROJECT','Creative Style1','Creative Style1','Classic-Content Right','Classic-Content Left','Classic-Content Bottom'],
};



class Navigation extends Component { 
    state={
        hambergWidth:'0',
        MenuTranslate:'0',
        width:'80%',
        menuIcon:true
    };


    render(){
        const HanbergHandler = () =>{
            if(this.state.hambergWidth==='0'){
                this.setState({hambergWidth:'50%'});
                this.setState({MenuTranslate:'83%'});
                this.setState({width:'25%'});
                this.setState({menuIcon:false});
            }
            else{
                this.setState({hambergWidth:'0'});
                this.setState({MenuTranslate:'0'});
                this.setState({width:'80%'});
                this.setState({menuIcon:true});
            }
            
         }
        return(
            <FullNav>
            <NavBox>
                <div><h2>SPHENE</h2></div>
        <MobileMenuOption width={this.state.width} translate={this.state.MenuTranslate} >
            { this.state.menuIcon ? <i className='fa fa-bars' onClick={HanbergHandler} ></i> : <i className='fa fa-close' onClick={HanbergHandler} ></i>}
            {' '}MENU</MobileMenuOption>
                <NavButtonBlock width={this.state.hambergWidth}>
                <DropDown>
                    <MenuDropButton>home</MenuDropButton>
                        <MenuDropDownOneContent > 
                         <div>
                          { menu.home.map( (t)=>
                            <Link to="/home" style={{ textDecoration: 'none' }}><MenuDropDownLink1>{t}</MenuDropDownLink1></Link>)}  
                          </div>     
                        </MenuDropDownOneContent>
                  </DropDown>
  
                  <DropDown>
                          <MenuDropButton>PORTFOLIO</MenuDropButton>
                          <MenuDropDownMultipleContent >
                          <div>   
                          { menu.portfolio1.map( (t)=>
                          <MenuDropDownLink2>{t}</MenuDropDownLink2>)}  
                          </div>
                          <div>     
                          { menu.portfolio2.map( (t)=>
                          <MenuDropDownLink2>{t}</MenuDropDownLink2>)}  
                          </div>
                          <div>
                          { menu.portfolio3.map( (t)=>
                          <MenuDropDownLink2>{t}</MenuDropDownLink2>)}  
                          </div>
                          </MenuDropDownMultipleContent>
                  </DropDown>
                  
                  <DropDown>
                          <MenuDropButton>pages</MenuDropButton>
                          <MenuDropDownMultipleContent >
                          <div>   
                          { menu.pages1.map( (t)=>
                          <MenuDropDownLink2>{t}</MenuDropDownLink2>)}  
                          </div>
                          <div>   
                          { menu.pages1.map( (t)=>
                          <MenuDropDownLink2>{t}</MenuDropDownLink2>)}  
                          </div>
                          </MenuDropDownMultipleContent>
                  </DropDown>
                  <Link to='/shop'><MenuDropButton>Shop</MenuDropButton></Link>
                  <Link to='/profile'><MenuDropButton>Profile</MenuDropButton></Link> 
                  <Link to='contact'><MenuDropButton>CONTACT</MenuDropButton></Link>
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
        loginStatus:state.lr.loginStatus
      }
  };

const mapDispatchToProps = dispatch => {
    return {
        logOutHandler:() => dispatch({type: actionTypes.LOGOUT})
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Navigation);