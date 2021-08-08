import * as types from "../types"
import axios from 'axios'

export const fetchtest  = () => async dispatch => {
    dispatch({
        type: types.GET_TEST,
        //dummy
        payload: true
    })
}


export const updateTest = () => ({ type: types.UPDATE_TEST }) 