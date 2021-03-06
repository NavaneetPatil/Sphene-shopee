import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './action';
import {Link, Route} from 'react-router-dom';
import history from '../../history/history';
import {Form, ImageWrapper,PasswordShow,PasswordWrong, 
  LoginWrapper,LoginH3, BtnWrapper,GreyBtn,GreenBtn} from './styles';
import bagurl from '../../assets/images/shop-demo-category-01.jpg';
import axios from 'axios';


class Login extends Component { 
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          loginstatus:false,
          passwordShow:false,
          passowrdInvalid:false,
          wrongEmail:false,
          fillAllFields:false,
          wrongPassword:false
        };
      }
       handleSubmit =event => {
        this.setState({passowrdInvalid:false});


        const { email, password } = this.state;
        if ( email=='' || password=='') {
          this.setState({fillAllFields:true});
          //please fill all the fields
          return;
        }
        if (!email.includes('@')) {
          this.setState({wrongEmail:true});
          return;
        }
        if (password.length < 6) {
          this.setState({wrongPassword:true});
          return;
        }

               axios.post( 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc',
               {
                   email:email,
                   password:password
               } )
               .then((response)=>{
                this.props.logInHandler();
                this.setState({loginstatus:true});
                this.props.emailSetHandler(email);
                history.push("/home");
                //console.log(response.data);
               },(error)=>{
                this.setState({passowrdInvalid:true});
               })  
      };
      passwordShowHandler =()=>{
          var show= this.state.passwordShow;
          this.setState({passwordShow:!show});

      };
    

    
      handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        if(this.state.wrongEmail===true){
          this.setState({wrongEmail:false});
        }
        if(this.state.fillAllFields===true){
          this.setState({fillAllFields:false});
        }
        if(this.state.wrongPassword===true){
          this.setState({wrongPassword:false});
        }
      };

    render(){

      const  {email,password}=this.state;
        return(
            <LoginWrapper>
            <ImageWrapper><img src={bagurl} ></img></ImageWrapper>  
                <Form>

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
                    { this.state.passowrdInvalid ? <PasswordWrong>Invalid credimentals!!</PasswordWrong> : null}
                    { this.state.wrongEmail ? <PasswordWrong>Wrong email</PasswordWrong> : null}
                    { this.state.fillAllFields ? <PasswordWrong>Please fill all the fields</PasswordWrong> : null}
                    { this.state.wrongPassword ? <PasswordWrong>password should contain min 6 digits</PasswordWrong> : null}
  
                    <BtnWrapper>
                    <GreenBtn type='button' onClick={this.handleSubmit}>login</GreenBtn>
                    <Link to='signIn'><GreyBtn>Sign-up</GreyBtn></Link>
                    </BtnWrapper>
                </Form>
            </LoginWrapper>
          



        )
    }

}

const mapStateToProps = (state) => {
  return {
      loginstatus:state.lr.loginStatus, 
  }
};

const mapDispatchToProps = dispatch => {
    return {
        logInHandler:() => dispatch({type: actionTypes.LOGIN}),
        emailSetHandler:(email) => dispatch({type: actionTypes.EMAIL, val:email}),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);
