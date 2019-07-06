export const initalState = {
    isLoggedIn: false,
    user: {},
}

const LOG_IN = 'LOG_IN' // 액션 이름
const LOG_OUT = 'LOG_OUT'

const LoginAction =  {
    type: LOG_IN,
    data: {
        nickname: '소미야밥먹자',
    },
}
const LogoutAction =  {
    type: LOG_OUT,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
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