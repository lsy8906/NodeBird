const dummyUser = {
    nickName: '소미야밥먹자',
    Post: [],
    Followings: [],
    Followers: [],
    signUpData: [],
}

export const initalState = {
    isLoggedIn: false,
    user: null,
}

export const SIGN_UP = 'SIGN_UP'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const signUpAction= () => {
    return {
        type: SIGN_UP,
        data: data,
    }
}
export const loginAction =  {
    type: LOG_IN,
}
export const logoutAction =  {
    type: LOG_OUT,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.data,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer