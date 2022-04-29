import AllReducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';

 const store = createStore(AllReducers,
    applyMiddleware(thunkMiddleware ));
 export default store;