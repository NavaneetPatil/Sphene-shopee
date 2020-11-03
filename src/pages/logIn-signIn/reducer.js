import * as actionTypes from './action';

const initialState = {
    loginStatus:undefined,// lock for our app, true measns its open, undefined- login is mandetory,false-its locked
    email:'',
    loading:false,
    invalidPassword:false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loginStatus:true,
                loading:false
            }
        case actionTypes.LOGIN_INITIATE:
            return {
                 ...state,
                 loading:true
            }    
        case actionTypes.LOGIN_FAIL:
            return {
                 ...state,
                 loading:false,
                 invalidPassword:true
            }
        case actionTypes.LOGOUT:
            return {
             ...state,
              loginStatus:false
            }
        case actionTypes.WRONG_PASS_ALERT_STOP:
                return {
                 ...state,
                 invalidPassword:false
            }
        case actionTypes.EMAIL:
            return {
                ...state,
                email:action.val
             }        
    }
    return state;

};
export default reducer;