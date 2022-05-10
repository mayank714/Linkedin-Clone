import SET_USER from '../actions/ActionType';
let INITIAL_STATE={
    user:null
};

 let controlClick=(state=INITIAL_STATE,action)=>{
    
        switch(action.type){
            case SET_USER:
                return{
                    ...state,user:action.user
                };
            default:
                return state;
        }

};
export default controlClick;