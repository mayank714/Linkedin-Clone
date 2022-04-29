import Click from './Click';
import { combineReducers } from 'redux';

 const AllReducers = combineReducers({
    userState:Click
});
export default AllReducers;