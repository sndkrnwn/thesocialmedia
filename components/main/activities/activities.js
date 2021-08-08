import { useState } from 'react'
import * as types from "../../../redux/types"
import { Button, Modal} from 'react-bootstrap'
import {default as UUID} from "node-uuid";
import PropTypes from "prop-types"
import Comments from "./comments"
import { connect } from 'react-redux'


const Activities = ({userid, posts, removePostUser, addPostUser, updatePostUser}) => {
    const [idPost, setIdPost] = useState(0);
    const [idPostUpdate, setIdPostUpdate] = useState(0);

    const [triggerRemove, setTriggerRemove] = useState(0)
    const [triggerPost, setTriggerPost] = useState(0);
    const [triggerUpdatePost, setTriggerUpdatePost] = useState(0);

    //Remove Popup
    const [showModalRemove, setShowModalRemove] = useState(false);
    const handleCloseModalRemove = () => setShowModalRemove(false);
    const handleShowModalRemove = (id) => {
        setShowModalRemove(true);
        setIdPost(id);
    }


    //Update Popup
    const [showModalUpdate, setModalUpdate] = useState(false);
    const handleCloseUpdate = () => {
        setModalUpdate(false)
    }
    const handleOpenUpdate = (id) => {
        setIdPostUpdate(id)
        setModalUpdate(true)
    }

    //ADD POST
    const [postTitle, setPostTitle] = useState("");
    const [postDesc, setPostDesc] = useState("");
    const changPostTitle = (e) => {
        setPostTitle(e.target.value)
    }
    const changPostDesc = (e) => {
        setPostDesc(e.target.value)
    }
    const submitPost = () => {
        const data = {
            userId: userid,
            id: UUID.v4(),
            title: postTitle,
            body: postDesc
        }
        addPostUser(data);
        setTriggerPost(triggerPost+1)
        setPostTitle("")
        setPostDesc("")
    }



    //UPDATE POST
    const [postTitleUpdate, setPostTitleUpdate] = useState("");
    const [postTextUpdate, setPostTextUpdate] = useState("");
    const submitUpdatePost = () => {
        const data = {
            userId: userid,
            id: idPostUpdate,
            title: postTitleUpdate,
            body: postTextUpdate
        }
        updatePostUser(data)
        setModalUpdate(false)
        setPostTitleUpdate("")
        setPostTextUpdate("")
    }
    const changePostTitleUpdate = (e) => {
        setPostTitleUpdate(e.target.value)
    }
    const changePostTextUpdate = (e) => {
        setPostTextUpdate(e.target.value)
    }


    //REMOVE POST
    const handleSubmitRemove = () => {
        setShowModalRemove(false);
        setTriggerRemove(triggerRemove+1)
        removePostUser(idPost)
    }

   
    return (
        <div className="activities">
            <div className="pb-3">
                <h3 className="text-center">Activities</h3>
                <form className="form-post">
                    <div className="form-group mb-3">
                        <input className="form-control" value={postTitle} onChange={changPostTitle} id="postTitle" placeholder="Add post here..." />
                    </div>
                    <div className="form-group mb-3">
                        <textarea className="form-control" value={postDesc} rows="3" onChange={changPostDesc} id="postDesc" placeholder="Add descriptions here"></textarea>
                    </div>
                    <div className="form-group">
                        <Button className="btn-primary" disabled={postTitle.length == 0 && postDesc.length == 0 && true} onClick={submitPost}><i className="fal fa-paper-plane"></i></Button>
                    </div>
                </form>
            </div>
            <div className="user-posts">
                {
                    posts.length > 0 && posts.map((item, i)=>{
                        if(item.userId === userid) {
                            return (
                                <div className="list-post" key={i}>
                                    <div className="post-wording">
                                        <h5>{item.title}</h5>
                                        <p>{item.body}</p>
                                    </div>
                                    <div className="action">
                                        <Comments 
                                            postId={item.id} 
                                            postTitle={item.title}
                                            postBody={item.body}
                                        />
                                        <div>
                                            <Button onClick={()=>handleOpenUpdate(item.id)}><i className="far fa-edit"></i></Button>
                                            {/* <Button onClick={() => { removePostUser(item.id); handleClick();}}><i className="far fa-trash-alt"></i></Button> */}
                                            <Button onClick={()=>handleShowModalRemove(item.id)}><i className="far fa-trash-alt"></i></Button>
                                        </div>
                                    </div>
                                   
                                </div>
                            )
                        }
                    })
                }
            </div>
            <Modal 
                show={showModalRemove} 
                onHide={handleCloseModalRemove} 
                className="modal-confirm"
                centered
            >
                <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-danger w-100" onClick={handleSubmitRemove}>
                            Delete
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary w-100" onClick={handleCloseModalRemove}>
                            Close
                        </button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
            <Modal 
                show={showModalUpdate} 
                onHide={handleCloseUpdate} 
                className="modal-confirm"
                centered
            >
                <Modal.Body>
                    <h3>Update Post</h3>
                    <div className="form-update">
                        <div className="form-group mb-3">
                            <input className="form-control" value={postTitleUpdate} onChange={changePostTitleUpdate} placeholder="update post here..." />
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control" rows="3" value={postTextUpdate} onChange={changePostTextUpdate} placeholder="update post here..."></textarea>
                        </div>
                        <div className="form-group w-100 mb-3">
                            <Button className="btn-primary w-100" onClick={() => { submitUpdatePost(); setTriggerUpdatePost(triggerUpdatePost+1);}}>Save & Post</Button> 
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
  
Activities.propTypes = {
    posts: PropTypes.array,
    comments: PropTypes.array

}

Activities.defaultProps = {
    posts: [
        {
            title: "Title possss",
            body: "Description Post"
        },
        {
            title: "Title Post",
            body: "Description Post"
        },
    ],
}

const mapStateToProps = state => ({
    userid: state.userid.userid,
    posts: state.post.posts,
    comments: state.comment.comments,
});

const mapDispatchToProps = (dispatch) => {
    return {
        removePostUser: (id) => dispatch({
            type: types.REMOVE_POST_USER,
            value: id
        }),
        addPostUser: (data) => dispatch({
            type: types.ADD_POST_USER,
            value: data
        }),
        updatePostUser: (data) => dispatch({
            type: types.UPDATE_POST_USER,
            value: data
        }),
    }
}



export default connect(
    mapStateToProps, mapDispatchToProps)(Activities);