import * as actionTypes from './action';

const initialState = {
    shopProducts:[],
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_SHOP_PRODUCTS:
             return {
                 ...state,
                 shopProducts:action.productsArr
            }
    }
    return state;

};
export default reducer;