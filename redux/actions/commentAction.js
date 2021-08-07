import * as types from "../types"
import axios from 'axios'

export const fetchcomments  = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    dispatch({
        type: types.GET_COMMENTS,
        //dummy
        // payload: ['1st comment', '2nd comment', '3rd comment']
        //with API
        payload: res.data
    })
}