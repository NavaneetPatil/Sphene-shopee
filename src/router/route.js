import React,{Component} from 'react';
import { Router,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../pages/logIn-signIn/action';
import Profile from '../pages/profile/profile';  
import Home from '../pages/home/home';  
import ViewCollection from '../pages/viewCollection/viewCollection';
import Shop from '../pages/shop/shop';
import Login from '../pages/logIn-signIn/login';
import SignIn from '../pages/logIn-signIn/signIn';
import Contact from '../pages/contact/contact';
import history from '../history/history';




  
class Routes extends Component { 
    render(){

    
     return (
        <>
        <Router history={history}>
        <Route exact path="/home">
              { this.props.loginStatus ? <Home/>: <Redirect to="/login" />}
        </Route>
        <Route exact path="/profile">
            { this.props.loginStatus ? <Profile/>: <Redirect to="/login" />}
        </Route>    
        <Route exact path="/viewCollection">
            { this.props.loginStatus ? <ViewCollection/>: <Redirect to="/login" />}
        </Route>  
        <Route exact path="/shop">
            { this.props.loginStatus ? <Shop/>: <Redirect to="/login" />}
        </Route>  
        <Route exact path="/contact">
            { this.props.loginStatus ? <Contact/>: <Redirect to="/login" />}
        </Route>  
        <Route path="/login" component={Login} />
        <Route path="/signIn" component={SignIn} />
        </Router>
        </>
    
      );
    }

  }


const mapStateToProps = state => {
    return {
        loginStatus: state.lr.loginStatus,
    }
  };



export default connect(mapStateToProps,null)(Routes);  
  
