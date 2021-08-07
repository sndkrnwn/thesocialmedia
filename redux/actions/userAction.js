import * as types from "../types"
import axios from 'axios'

export const fetchusers  = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: types.GET_USERS,
        //dummy
        // payload: ['John Doe', 'Jane Doe']
        //with API
        payload: res.data
    })
}

