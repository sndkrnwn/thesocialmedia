import * as types from "../types"
const initialState = {
    test: 1,
}
export const testReducer = ( state = initialState, action) => {
    const { newState } = { ...state }
    switch(action.type) {
        case types.GET_TEST:
            return {
                ...state,
                test: state.test,
            };

        case types.UPDATE_TEST:
            // console.log(action);
            return {
                ...state,
                test: state.test + action.value,
            };
            break;

            // return {
            //     ...state,
            //     test: action.payload,
            // }
        
        default:
            return state
    }
}