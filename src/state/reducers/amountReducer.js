// A reducer is like a function that listens to these actions and decides what to do when it receives one. It takes the current state of your application and the action as input and returns a new state

const reducer = (state=0, action) =>{
    if(action.type === 'deposit'){
        return state + action.payload
    }
    else if(action.type === 'withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }

}

export default reducer;