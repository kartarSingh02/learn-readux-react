// return (dispatch) => {...}: Inside the depositMoney function, it returns another function that takes dispatch as a parameter. This inner function is often used in Redux to dispatch actions asynchronously.
// dispatch({ type: 'deposit', payload: amount }): Within the inner function, it uses the dispatch function to send an action to the Redux store.

// An action is like a message that describes something that happened in your application

export const depositMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
    }
}