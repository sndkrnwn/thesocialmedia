import * as types from "../types"
import axios from 'axios'

export const fetchalbums  = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
    dispatch({
        type: types.GET_ALBUMS,
        //dummy
        // payload: ['1st album', '2nd album', '3rd album']
        //with API
        payload: res.data
    })
}