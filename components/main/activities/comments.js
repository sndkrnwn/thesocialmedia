import { useState } from 'react'
import PropTypes from "prop-types"

import { Button } from 'react-bootstrap'
export const Comments = ({comments}) => {
    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const data = [
        {
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            comment: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            comment: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            comment: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },   
    ]
    return (
        <div className="comment-box">
            <h5>Comment</h5>
            <div className="post-comment">
                {
                    data.length > 0 && data.map((item, i)=>{
                        return (
                            <div className="list-comment" key={i}>
                                <div className="user">
                                    <p className="mb-0">{item.name}</p>
                                    <span>{item.email}</span>
                                </div>
                                <div className="comment">
                                    <input value={item.comment} onChange={onChange} />
                                </div>
                                <div className="action">
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
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
