export const LOGIN_USER="LOGIN_USER"
export const LOGOUT_USER="LOGOUT_USER"
export const IS_AUTHENTICATE="IS_AUTHENTICATE"

export function loginUser(user){
    return{
        type:LOGIN_USER,
        payload:user
    }
}
