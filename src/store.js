import AllReducers from './reducers/index';
import{createStore} from 'redux';

 const store = createStore(AllReducers);
 export default store;