import { useState } from 'react'
import * as types from "../../../redux/types"
import { Button, Modal} from 'react-bootstrap'
import PropTypes from "prop-types"
import Comments from "./comments"
import { connect } from 'react-redux'


const Activities = ({userid, posts, comments, removePostUser}) => {
    const [idPost, setIdPost] = useState(0);
    const [show, setShow] = useState(false);
    const [triggerRemove, setTriggerRemove] = useState(0)
    const handleSubmitRemove = () => {
        setShow(false);
        setTriggerRemove(triggerRemove+1)
        removePostUser(idPost)
    }

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setIdPost(id)
    }
    return (
        <div className="activities">
            <div className="pb-3">
                <h3 className="text-center">Activitiessss</h3>
                <form className="form-post">
                    <div className="form-group mb-3">
                        <input className="form-control" placeholder="Add post here..." />
                    </div>
                    <div className="form-group mb-3">
                        <textarea className="form-control" rows="3" placeholder="Add descriptions here"></textarea>
                    </div>
                    <div className="form-group">
                        <Button className="btn-primary"><i className="fal fa-paper-plane"></i></Button>
                    </div>
                </form>
            </div>
            <div className="user-posts">
                {
                    posts.length > 0 && posts.map((item, i)=>{
                        if(item.userId === userid) {
                            return (
                                <div className="list-post" key={i}>
                                    <h5>{item.title}</h5>
                                    <p>{item.body}</p>
                                    <div className="action">
                                        <Comments 
                                            postId={item.id} 
                                            postTitle={item.title}
                                            postBody={item.body}
                                            comments={comments} 
                                        />
                                        <div>
                                            <Button><i className="far fa-edit"></i></Button>
                                            {/* <Button onClick={() => { removePostUser(item.id); handleClick();}}><i className="far fa-trash-alt"></i></Button> */}
                                            <Button onClick={()=>handleShow(item.id)}><i className="far fa-trash-alt"></i></Button>
                                        </div>
                                    </div>
                                   
                                </div>
                            )
                        }
                    })
                }
            </div>
            <Modal 
                show={show} 
                onHide={handleClose} 
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
                        <button className="btn btn-primary w-100" onClick={handleClose}>
                            Close
                        </button>
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
            title: "Title pos",
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
        })
    }
}



export default connect(
    mapStateToProps, mapDispatchToProps)(Activities);