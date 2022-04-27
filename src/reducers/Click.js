let initialClick=1;

 let controlClick=(state=initialClick,action)=>{
    
        {
            if(action.type=="Clicked"){
                return  state+1;
            }
            return state;

        }

}
export default controlClick;