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
 
    export function getUserAuth(){
        return(dispatch)=>{
            auth.onAuthStateChanged(async(user)=>{
                if(user){
                    dispatch(setUser(user));
                }
            })
        }
    }
     let signOutAPI=()=>{
        return( dispatch)=>{
            console.log("Action triggered");
            auth.signOut().then(()=>{dispatch(setUser(null))}).
            catch((error)=>{
                console.log(error.message);
                            })
        }
    }

    export default {
        signInAPI,
        signOutAPI,
      }