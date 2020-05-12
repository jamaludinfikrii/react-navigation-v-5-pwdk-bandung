const INITIAL_STATE = {
    user : null
}

const userReducer = (state=INITIAL_STATE,action) => {
    if(action.type === 'LOGIN_SUCCESS'){
        return {user : action.payload} // username,id, role
    }else{
        return state
    }
}

export default userReducer;