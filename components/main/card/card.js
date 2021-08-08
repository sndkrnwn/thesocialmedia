import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import Modal from 'react-modal';
import Slider from "react-slick";
import { connect } from 'react-redux'
import { updateTest } from 'redux/actions/testAction';

import { Card } from 'react-bootstrap';

const CardProfile = ({userid, users, albums, photos, test, updateTest}) => {

    //GET USER PROFILE
    const [user, setUser] = useState(null);
    useEffect(()=>{
        users.map((item, i)=>{
            if(userid === item.id) {
               setUser(item)
            }
        })
    }, [users])

    //MODAL PHOTO
    const [albumId, setAlbumId] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = (id) => {
        setIsOpen(true)
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };

    //Handle Slider Photo
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const handleClick = () => {
        updateTest();
    }
    const data = ["Sincere@april.biz", "1-770-736-8031", "Kulas Light, Apt. 556, Gwenborough", "Romaguera-Crona", "hildegard.org"]
    return (
        <>
        <Card className="card-profile">
            <Card.Header className="text-center">
            {
                user !== null &&
                <>
                <p className="mb-0">@{user.username}</p>
                <h3>{user.name}</h3>
                {/* <p>{test &&  "test 123"}</p>
                <button onClick={handleClick}>test</button> */}
                </>
            }
            

            </Card.Header>
            <Card.Body>
                <h4>Bio</h4>
                {
                    user !== null &&
                    <div className="list-item">
                        <div className="item">
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Address: {user.address.street} {user.address.suite} {user.address.city}</p>
                            <p>Website: {user.website}</p>
                        </div>
                    </div>
                }
            </Card.Body>
            <Card.Footer>
                <h4>Album</h4>
                <div className="list-item">
                    {
                        albums.length > 0 && albums.map((item, i)=>{
                            if(item.userId === userid) {
                                return (
                                    <p key={i} onClick={()=>openModal(item.id)}>{item.title}</p>
                                )
                            }
                        })
                    }
                </div>
            </Card.Footer>
        </Card>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                ariaHideApp={false}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-photo">
                    <button onClick={closeModal} className="toggle-close"><i className="fal fa-times"></i></button>
                    {/* <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider> */}
                </div>
            </Modal>
        </>
    )
}

CardProfile.propTypes = {
    users: PropTypes.array,
    albums: PropTypes.array,
    photos: PropTypes.array
}

const mapStateToProps = state => ({
    test: state.test
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
       updateTest: () => {
          dispatch(updateTest())
       }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps)(CardProfile);
  