
import { combineReducers } from 'redux';
import homeReducer from '../pages/home/reducer';
import viewReducer from '../pages/viewCollection/reducer';
import loginReducer from '../pages/logIn-signIn/reducer';
import themeReducer from '../components/colorSwitcher/reducer';


// 1st name is left to you. there can have only one reducer, so we combine many small ones into one
const rootReducer = combineReducers({ // it takes objects as argu, and combines it
    hr: homeReducer,   // this simply assigns counterReducer to ctr
    vr: viewReducer,
    lr:loginReducer,
    tr:themeReducer

});

export default rootReducer;