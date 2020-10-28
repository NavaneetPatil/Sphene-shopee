import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, ImageWrapper,Success,PasswordShow,PasswordWrong, LoginWrapper,LoginH3, BtnWrapper,GreyBtn,GreenBtn} from './styles';
import bagurl from '../../assets/images/shop-demo-category-01.jpg';
import axios from 'axios';
//import history from '../../history/history';


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
          wrongEmail:false,
          fillAllFields:false,
          invalid:false,
          wrongPassword:false,
          success:false
        };
      }
      passwordShowHandler =()=>{
        var show= this.state.passwordShow;
        this.setState({passwordShow:!show});
    };
    
      handleSubmit = async event => {
        event.preventDefault();

    
        const {  displayName, invalid, wrongPassword, email, password, confirmPassword } = this.state;
        if (displayName=='' || email=='' || password=='' || confirmPassword=='') {
          this.setState({fillAllFields:true});
          return;
        }
        if (!email.includes('@')) {
          this.setState({wrongEmail:true});
          return;
        }

        if (password !== confirmPassword) {
          this.setState({passwordMatch:true});
          //alert("passwords don't match");
          return;
        }
        if (password.length < 6) {
          this.setState({wrongPassword:true});

          return;
        }


            axios.post( 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc',
            {
                email:email,
                password:password,
                name: displayName
            } )
            .then((response)=>{
              this.setState({success:true});
              this.setState({displayName:'',email:'',password:'',confirmPassword:''})
             },(error)=>{
              this.setState({invalid:true});
             })  
         
            }; 


      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

        if(this.state.wrongEmail===true){
          this.setState({wrongEmail:false});
        }
        if(this.state.fillAllFields===true){
          this.setState({fillAllFields:false});
        }
        if(this.state.passwordMatch===true){
          this.setState({passwordMatch:false});
        }
        if(this.state.wrongPassword===true){
          this.setState({wrongPassword:false});
        }
        if(this.state.invalid===true){
          this.setState({invalid:false});
        }


        

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
                     { this.state.invalid ? <PasswordWrong>Invalid Email</PasswordWrong> : null}
                     { this.state.passwordMatch ? <PasswordWrong>Password did not match</PasswordWrong> : null}
                     { this.state.fillAllFields ? <PasswordWrong>Please fill all the fields</PasswordWrong> : null}
                     { this.state.wrongEmail ? <PasswordWrong>Wrong email</PasswordWrong> : null}
                     { this.state.wrongPassword ? <PasswordWrong>password should contain min 6 digits</PasswordWrong> : null}
                     { this.state.success ? <Success>SignUp successful please login!!!</Success> : null}

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