import * as actionTypes from './action';
import {red} from '../../theme/theme';

const initialState = {
        theme:red,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.THEMECHANGE:
            return {
                ...state,
                theme : action.newColor
            }
    }
    return state;

};
export default reducer;