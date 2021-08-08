import PropTypes from "prop-types"
import { Comments } from "./comments"

export const Activities = ({userid, posts, comments}) => {
    return (
        <div className="activities">
            <h3 className="text-center">Activities</h3>
            <div className="user-posts">
                {
                    posts.length > 0 && posts.map((item, i)=>{
                        if(item.userId === userid) {
                            return (
                                <div className="list-post" key={i}>
                                    <h4>{item.title}</h4>
                                    <p>{item.body}</p>
                                    <Comments 
                                        postId={item.id} 
                                        postTitle={item.title}
                                        postBody={item.body}
                                        comments={comments} 
                                    />
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