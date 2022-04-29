import AllReducers from './reducers/index';
import { ThunkMiddleware } from 'redux-thunk';
import{applyMiddleware, createStore} from 'redux';

 const store = createStore(AllReducers,
    applyMiddleware(ThunkMiddleware));
 export default store;