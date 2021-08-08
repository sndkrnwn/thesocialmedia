import * as types from "../types"
import axios from 'axios'

export const fetchtest  = () => async dispatch => {
    dispatch({
        type: types.GET_TEST,
        //dummy
        payload: 1
    })
}