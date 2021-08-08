import * as types from "../types"
const initialState = {
    test: true,
}
export const testReducer = ( state = initialState, action) => {
    switch(action.type) {
        case types.GET_TEST:
            return {
                ...state,
                test: action.payload,
            };

        case types.UPDATE_TEST:
            return {
                ...state,
                test: !state.test
            };

            // return {
            //     ...state,
            //     test: action.payload,
            // }
        
        default:
            return state
    }
}