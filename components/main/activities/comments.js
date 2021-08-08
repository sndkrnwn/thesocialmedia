import { useState } from 'react'
import PropTypes from "prop-types"
// import Modal from 'react-modal';
import { Modal } from 'react-bootstrap'

import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Comments = ({postId, comments, postTitle, postBody}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value)
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
                                                    <textarea readOnly className="form-control d-none" id="exampleFormControlTextarea1" onChange={onChange} rows="3" value={item.body}>{item.body}</textarea>
                                                </div>
                                                <div className="action">
                                                    <Button><i className="far fa-edit"></i></Button>
                                                    <Button><i className="far fa-trash-alt"></i></Button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div> 
                        <form className="form-comment">
                            <div className="form-group">
                                <input className="form-control" placeholder="Add comment here..." />
                                <button className="btn btn-post">
                                    <i className="fal fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.array
}

Comments.defaultProps = {
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

export default Comments