import {auth,provider} from '../firebase';

export default signInAPI=()=>{
return(dispatch)=>{
auth.signInWtithPopup(provider)
.then((payload)=>{
    console.log(payload);
})
.catch((error)=>alert(error.message));
};
};