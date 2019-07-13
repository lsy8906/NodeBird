export const initalState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: '소미야밥먹자',
        },
        content: '첫번째 게시글',
        img: 'http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/skinfull/irelia_splash_6.jpg?v=20190617a'
    }],
    imagePaths: [],
}

export const ADD_POST = 'ADD_POST'
export const ADD_DUMMY = 'ADD_DUMMY'

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