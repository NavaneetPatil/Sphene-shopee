import * as actionTypes from './action';

const initialState = {
    categoryProducts:[],
    viewCollection: [],
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_VIEW_COLLECTION:
            return {
                ...state,
                viewCollection:action.arr
            }
        case actionTypes.UPDATE_CATEGORY_PRODUCTS:
             return {
                 ...state,
                 categoryProducts:action.arr
            }
    }
    return state;

};
export default reducer;