import * as types from "../types"
const initialState = {
    userid: 5,
}
export const userActiveReducer = ( state = initialState, action) => {
    switch(action.type) {
        case types.GET_USER_ACTIVE:
            return {
                ...state,
                userid: action.payload,
            };

        case types.UPDATE_USER_ACTIE:
            return {
                ...state,
                userid: 2
            };

            // return {
            //     ...state,
            //     test: action.payload,
            // }
        
        default:
            return state
    }
}