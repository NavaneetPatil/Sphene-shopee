import * as actionTypes from './action';

const initialState = {
    viewCollection: [],
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE:
            return {
                ...state,
                viewCollection:action.arr
            }
    }
    return state;

};
export default reducer;