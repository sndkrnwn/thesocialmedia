import * as types from "../types"
const initialState = {
    comments: [],
    comment: {},
    loading: false,
    error: null
}
export const commentReducer = ( state = initialState, action) => {
    switch(action.type) {
        case types.GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false,
                error: null
            }

        case types.ADD_COMMENTS:
            state.comments.unshift(action.value)
            return {
                ...state,
                comments: state.comments
            }
            break;

        case types.UPDATE_COMMENT:
            let filterIndex = state.comments.findIndex((obj => obj.id == action.value.id));
            state.comments[filterIndex].body = action.value.body
            return {
                ...state
            }

        case types.REMOVE_COMMENT_POST:
            let id = action.value
            let comments = state.comments
            let index = comments.map(x => {
                return x.id
            }).indexOf(id)
            comments.splice(index, 1)
            return {
                ...state,
                comments: comments
            }
        
        default:
            return state
    }
}