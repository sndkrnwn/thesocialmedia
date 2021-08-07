import * as types from "../types"
import axios from 'axios'

export const fetchphotos  = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    dispatch({
        type: types.GET_PHOTOS,
        //dummy
        // payload: ['1st photo', '2nd photo', '3rd photo']
        //with API
        payload: res.data
    })
}