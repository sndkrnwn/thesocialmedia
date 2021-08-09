import PropTypes from "prop-types"
import * as types from "../../../redux/types"
import { connect } from 'react-redux'

const Users = ({setUserMobile, userMobile, users, userid, updateUserActive}) => {
    const handleClick = (id) => {
        updateUserActive(id);
    }
    return (
        <div className="users">
            <h3 className="text-center">Users</h3>
            <div className="user-lists">
                {
                    users.length > 0 && users.map((item, i)=>{
                        return (

                            <div className={`list ${item.id === userid.userid && 'active'}`} key={i} onClick={() => { handleClick(item.id); setUserMobile(!userMobile);}}>
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

// export default Users

const mapStateToProps = state => ({
    userid: state.userid,
    users: state.user.users
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserActive: (id) => dispatch({
            type: types.UPDATE_USER_ACTIVE,
            value: id
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Users);