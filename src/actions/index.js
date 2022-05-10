import {auth,provider} from '../firebase';

 function signInAPI(){
    return(dispatch)=>{
    auth.signInWithPopup(provider)
    .then((payload)=>{
        console.log(payload);
    })
    .catch((error)=>alert(error.message));
    };
    }
    export default signInAPI;