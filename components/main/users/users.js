import PropTypes from "prop-types"

export const Users = ({users}) => {
    return (
        <div className="users">
            <h3 className="text-center">Users</h3>
            <div className="user-lists">
                {
                    users.length > 0 && users.map((item, i)=>{
                        return (
                            <div className="list" key={i}>
                                <img src="" alt="user-image" className="img-fluid" />
                                <div className="id">
                                    <p className="mb-0">{item.name}</p>
                                    <span>{item.email}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array
}

Users.defaultProps = {
    users: [
        {
            name: "jane",
            email: "jane@gmail.com"
        },
        {
            name: "john",
            email: "john@gmail.com"
        },
    ],
}