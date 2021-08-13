import * as types from "../../../redux/types"
import { useEffect, useState } from 'react'
import PropTypes from "prop-types"
import {default as UUID} from "node-uuid";
import { Modal } from 'react-bootstrap'

import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Comments = ({userid, users, postId, postTitle, postBody, comments, removeCommentPost, addComment, updateComment}) => {
    const [trigger, setTrigger] = useState(0);
    const [user, setUser] = useState(null)
    const [commmentId, setCommentId] = useState(0);

    useEffect(()=>{
        users.length > 0 && users.map((item, i)=>{
            if(userid === item.id) {
               setUser(item)
            }
        })
    })

    //ADD COMMENT
    const [comment, setComment] = useState("");
    const changeAddComment = (e) => {
        setComment(e.target.value)
    }
    const submitAddComment =  (postId) => {
        const data = {
            postId: postId,
            id: UUID.v4(),
            name: user.name,
            email: user.email,
            body: comment
        }
        addComment(data)
        setTrigger(trigger+1)
        setComment("")
    }

    //Modal Comment
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setShowUpdate(false)
    };
    const handleShow = () => { 
        setShow(true)
        setShowUpdate(false)
    };

    //Modal Update Comment
    const [commentTextUpdate, setTextUpdate] = useState("")
    const [showUpdate, setShowUpdate] = useState(false);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = (id) => {
        setShowUpdate(true);
        setShow(false)
        setCommentId(id)
    }
    const changeCommentTextUpdate = (e) => {
        setTextUpdate(e.target.value)
    }
    const submitUpdateComment = () => {
        const data = {
            postId: 1,
            id: commmentId,
            body: commentTextUpdate
        }
        updateComment(data)
        setShow(true)
        setTrigger(trigger+1)
        setTextUpdate("")
    }
    
    return (
        <>
            <div className="toggle-comment d-flex justify-content-between">
                <button onClick={handleShow} className="btn">Comment</button>
            </div>
            <Modal show={show} onHide={handleClose} className="modal-comment">
                <button onClick={handleClose} className="toggle-close"><i className="fal fa-times"></i></button>
                <Modal.Body>
                    <div className="user-post">
                        <h4>{postTitle}</h4>
                        <p>{postBody}</p>
                    </div>
                    <div className="user-comment">
                        <p className="font-weight-bold mb-0">Comment</p>
                        <div className="post-comment">
                            {
                                comments.length > 0 && comments.map((item, i)=>{
                                    if(item.postId === postId) {
                                        return (
                                            <div className="list-comment" key={i}>
                                                <div className="user">
                                                    <span>{item.email}</span>
                                                </div>
                                                <div className="comment">
                                                    <p className="mb-0">
                                                        {item.body}
                                                    </p>
                                                    <textarea readOnly className="form-control d-none" id="comment" rows="3" value={item.body}>{item.body}</textarea>
                                                </div>
                                                <div className="action">
                                                    <Button onClick={() => handleShowUpdate(item.id)}><i className="far fa-edit"></i></Button>
                                                    <Button onClick={() => { removeCommentPost(item.id); setTrigger(trigger+1);}}><i className="far fa-trash-alt"></i></Button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div> 
                        <div className="form-comment">
                            <div className="form-group">
                                <input className="form-control" value={comment} placeholder="Add comment here..." onChange={changeAddComment} />
                                <button className="btn btn-post" onClick={()=>submitAddComment(postId)}>
                                    <i className="fal fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showUpdate} onHide={handleCloseUpdate} className="modal-comment">
                <button onClick={handleCloseUpdate} className="toggle-close"><i className="fal fa-times"></i></button>
                <Modal.Body>
                    <h3>Update Comment</h3>
                    <div className="form-update">
                        <div className="form-group mb-3">
                            <textarea className="form-control" rows="3" value={commentTextUpdate} id="commentTextUpdate" onChange={changeCommentTextUpdate} placeholder="update comment here..."></textarea>
                        </div>
                        <div className="form-group w-100 mb-3">
                            <Button className="btn-primary w-100" onClick={() => { submitUpdateComment(); setTrigger(trigger+1);}}>Save & Update</Button> 
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.array,
    userid: PropTypes.string,
    users: PropTypes.array
}

Comments.defaultProps = {
    userid: 1,
    comments: [],
    users: [],
    posts: [
        {
            name: "Name",
            email: "Email User",
            body: "Comment"
        },
        {
            name: "Name",
            email: "Email User",
            body: "Comment"
        },
    ],
}

// export default Comments

const mapStateToProps = state => ({
    userid: state.userid.userid,
    users: state.user.users,
    comments: state.comment.comments,
});

const mapDispatchToProps = (dispatch) => {
    return {
        removeCommentPost: (id) => dispatch({
            type: types.REMOVE_COMMENT_POST,
            value: id
        }),
        addComment: (data) => dispatch({
            type: types.ADD_COMMENTS,
            value: data
        }),
        updateComment: (data) => dispatch({
            type: types.UPDATE_COMMENT,
            value: data
        }),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(Comments);