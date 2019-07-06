export const initalState = {
    mainPosts: [],
}

const ADD_POST = 'ADD_POST'
const ADD_DUMMY = 'ADD_DUMMY'

const addPost = {
    type: ADD_POST
}

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'hello',
        UserId: 1,
        User: {
            nickname: '소미야밥먹자',
        },
    },
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            }
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
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