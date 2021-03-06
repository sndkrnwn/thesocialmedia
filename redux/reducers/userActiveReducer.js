import * as types from "../types"
const initialState = {
    userid: 1
}
export const userActiveReducer = ( state = initialState, action) => {
    switch(action.type) {
        case types.GET_USER_ACTIVE:
            return {
                ...state,
                userid: action.payload,
            };

        case types.UPDATE_USER_ACTIVE:
            return {
                ...state,
                userid: action.value
            };
        
        default:
            return state
    }
}