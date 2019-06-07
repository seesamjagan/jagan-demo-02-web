export const SIGN_IN_SUCCESS = "signInSuccess";
export const signInSuccesAction = (user) => ({payload: user, type: SIGN_IN_SUCCESS});

export const AUTH_STATE_CHANGE = "authStateChange";
export const authStateChangeAction = (user) => ({payload: user, type: AUTH_STATE_CHANGE});

export const authReducer = (state=null, {payload, type}) => {
    if(type === SIGN_IN_SUCCESS) {
        return payload;
    } else if(type === AUTH_STATE_CHANGE) {
        return payload;
    }
    return state;
}