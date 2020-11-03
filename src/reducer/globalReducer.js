
import { combineReducers } from 'redux';
import homeReducer from '../pages/home/reducer';
import loginReducer from '../pages/logIn-signIn/reducer';
import themeReducer from '../components/colorSwitcher/reducer';
import contactReducer from '../pages/contact/reducer'
import shopReducer from '../pages/shop/reducer'


const rootReducer = combineReducers({ 
    hr: homeReducer,   
    lr:loginReducer,
    tr:themeReducer,
    cr:contactReducer,
    sr:shopReducer,


});

export default rootReducer;