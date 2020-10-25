import { createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/globalReducer';
//import createSagaMiddleware from 'redux-saga';

//const sagaMiddleware=createSagaMiddleware();

//const store = createStore(rootReducer,applyMiddleware(sagaMiddleware)); 
const store = createStore(rootReducer); 

//sagaMiddleware.run();


export {store};
