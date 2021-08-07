import * as types from "../types"
const initialState = {
    photos: [],
    photo: {},
    loading: false,
    error: null
}
export const photoReducer = ( state = initialState, action) => {
    switch(action.type) {
        case types.GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                loading: false,
                error: null
            }
        
        default:
            return state
    }
}