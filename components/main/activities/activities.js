import { Button } from 'react-bootstrap'
import PropTypes from "prop-types"
import { Comments } from "./comments"

export const Activities = ({userid, posts, comments}) => {
    return (
        <div className="activities">
            <div className="pb-3">
                <h3 className="text-center">Activities</h3>
                <form className="form-post">
                    <div className="form-group">
                        <input className="form-control" placeholder="Comment here" />
                        <button className="btn btn-post">
                            <i className="fal fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="user-posts">
                {
                    posts.length > 0 && posts.map((item, i)=>{
                        if(item.userId === userid) {
                            return (
                                <div className="list-post" key={i}>
                                    <h4>{item.title}</h4>
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
                                            <Button><i className="far fa-trash-alt"></i></Button>
                                        </div>
                                    </div>
                                   
                                </div>
                            )
                        }
                    })
                }
            </div>
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
            title: "Title Post",
            body: "Description Post"
        },
        {
            title: "Title Post",
            body: "Description Post"
        },
    ],
}