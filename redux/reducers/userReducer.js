import * as types from "../types"
const initialState = {
    users: [],
    user: {},
    loading: false,
    error: null
}
export const userReducer = ( state = initialState, action) => {
    switch(action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            }
        
        default:
            return state
    }
}