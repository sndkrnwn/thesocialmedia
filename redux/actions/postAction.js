import * as types from "../types"
import axios from 'axios'

export const fetchposts  = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: types.GET_POSTS,
        //dummy
        // payload: ['1st post', '2nd post', '3rd post']
        //with API
        payload: res.data
    })
}