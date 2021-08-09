import { combineReducers } from 'redux'
import { postReducer } from "./postReducer"
import { userReducer } from "./userReducer"
import { commentReducer } from "./commentReducer"
import { albumReducer } from "./albumReducer"
import { photoReducer } from "./photoReducer"
import { userActiveReducer } from "./userActiveReducer"

export default combineReducers({
    post: postReducer,
    user: userReducer,
    comment: commentReducer,
    album: albumReducer,
    photo: photoReducer,
    userid: userActiveReducer,
});