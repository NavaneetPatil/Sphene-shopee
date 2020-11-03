import * as actionTypes from './action';

const initialState = {
    messege:[{name:'navaneet',subject:'Order placing',messege:'Facing issue while ordering products, please make those corrections'},
],
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.MESSEGEPUSH:
            return {
                ...state,
                messege:state.messege.concat(action.msg)

            }
    }
    return state;

};
export default reducer;