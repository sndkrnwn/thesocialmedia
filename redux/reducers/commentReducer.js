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
        
        default:
            return state
    }
}