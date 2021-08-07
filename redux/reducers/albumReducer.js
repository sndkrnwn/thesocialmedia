import * as types from "../types"
const initialState = {
    albums: [],
    album: {},
    loading: false,
    error: null
}
export const albumReducer = ( state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false,
                error: null
            }
        
        default:
            return state
    }
}