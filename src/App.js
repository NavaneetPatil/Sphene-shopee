import React, { Component} from 'react';
import './styles/App.css';
import Routes from './router/route';
import {ThemeProvider} from 'styled-components';
import { connect } from 'react-redux';


class App extends Component {
render(){

  return (
    <ThemeProvider theme={this.props.theme}>
         <Routes/>
    </ThemeProvider>
       
 );
}
}


const mapStateToProps = state => {
    return {
        theme: state.tr.theme,
    }
  };
export default connect(mapStateToProps,null)(App);  
