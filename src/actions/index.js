import {auth,provider} from '../firebase';
import SET_USER from './ActionType';

export const setUser=(payload)=>({
type:SET_USER,
user:payload,
});

 function signInAPI(){
    return(dispatch)=>{
    auth.signInWithPopup(provider)
    .then((payload)=>{
        // console.log(payload);
        dispatch(setUser(payload.user));
    })
    .catch((error)=>alert(error.message));
    };
    }
    export default signInAPI;