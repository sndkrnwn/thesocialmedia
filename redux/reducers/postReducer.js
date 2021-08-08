import * as types from "../types"
const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null
}
export const postReducer = ( state = initialState, action) => {
    const newState = { ...state }
    switch(action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }

        case types.ADD_POST_USER:
            state.posts.unshift(action.value)
            return {
                ...state,
                posts: state.posts
            }
            break;

        case types.UPDATE_POST_USER:
            let filterIndex = state.posts.findIndex((obj => obj.id == action.value.id));
            state.posts[filterIndex].title = action.value.title
            state.posts[filterIndex].body = action.value.body
            return {
                ...state
            }

        case types.REMOVE_POST_USER:
            let id = action.value
            let posts = state.posts
            let index = posts.map(x => {
                return x.id
            }).indexOf(id)
            posts.splice(index, 1)
            return {
                ...state,
                posts: posts
            }

        
        default:
            return state
    }
}