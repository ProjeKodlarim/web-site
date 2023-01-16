import { IS_AUTHENTICATE, LOGIN_USER, LOGOUT_USER } from './../actions/userActions';

const initialState = {
    user: [],
    isAuthenticateRedux:false
}

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            
            return{
                ...state,
                user:[...state.user,{user:payload}]
            }
        case LOGOUT_USER:
            return{
                state,
                user:[]
            }
        case IS_AUTHENTICATE:
            return{
                state,
                isAuthenticateRedux:payload
            }
        
        default:
            return state
    }
}