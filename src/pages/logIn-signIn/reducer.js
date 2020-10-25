import * as actionTypes from './action';

const initialState = {
    loginStatus:undefined,// lock for our app, true measns its open, undefined- login is mandetory,false-its locked
    email:''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loginStatus:true
            }
        case actionTypes.LOGOUT:
            return {
             ...state,
              loginStatus:false
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