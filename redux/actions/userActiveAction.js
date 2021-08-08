import * as types from "../types"
import axios from 'axios'

export const fetchuseractive  = () => async dispatch => {
    dispatch({
        type: types.GET_USER_ACTIVE,
        //dummy
        payload: 1
    })
}