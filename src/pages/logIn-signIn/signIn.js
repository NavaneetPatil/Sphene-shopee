import React, { Component } from 'react';
//import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, ImageWrapper,PasswordShow,PasswordWrong, LoginWrapper,LoginH3, BtnWrapper,GreyBtn,GreenBtn} from './styles';
import bagurl from '../../assets/images/shop-demo-category-01.jpg';
import axios from 'axios';
import history from '../../history/history';
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignIn extends Component { 
    constructor() {
        super();
    
        this.state = {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
          passwordShow:false,
          passwordMatch:false,
          WrongEmail:false
        };
      }
      passwordShowHandler =()=>{
        var show= this.state.passwordShow;
        this.setState({passwordShow:!show});
    };
    
      handleSubmit = async event => {
        event.preventDefault();
        this.setState({WrongEmail:false});
        this.setState({passowrdMatch:false});
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          this.setState({passowrdMatch:true});
          //alert("passwords don't match");
          return;
        }

            axios.post( 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc',
            {
                email:email,
                password:password,
                name: displayName
            } )
            .then((response)=>{
              history.push("/login");
             },(error)=>{
              this.setState({WrongEmail:true});
             })  
         
            }; 


      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <LoginWrapper>
            <ImageWrapper><img src={bagurl} ></img></ImageWrapper>  
                <Form onSubmit={this.handleSubmit}>

                   <LoginH3>Username</LoginH3>
                    <input type='text' 
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange} 
                    placeholder='username'></input>

                    <LoginH3>Email</LoginH3>
                    <input 
                    type='email' 
                    name='email'
                    value={email}
                    onChange={this.handleChange} 
                    placeholder='email'></input>

                    <LoginH3>Password</LoginH3>
                    <input 
                     type={this.state.passwordShow ? 'text' : 'password'} 
                      name='password'
                      value={password}
                     onChange={this.handleChange} 
                     placeholder='password'></input>
                     <PasswordShow onClick={this.passwordShowHandler}>{this.state.passwordShow ? 'Hide' : 'Show' }</PasswordShow>


                    <LoginH3>Confirm-Password</LoginH3>
                    <input 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                     onChange={this.handleChange}
                     placeholder='confirm-password'></input>
                     { this.state.WrongEmail ? <PasswordWrong>The email is already registered</PasswordWrong> : null}
                     { this.state.passowrdMatch ? <PasswordWrong>Password did not match</PasswordWrong> : null}


                     <BtnWrapper>
                    <GreenBtn type='button' onClick={this.handleSubmit}>Sign-up</GreenBtn>
                    <Link to='login'><GreyBtn>login</GreyBtn></Link>
                    </BtnWrapper>
                </Form>
            </LoginWrapper>
          



        )
    }

}

export default SignIn;