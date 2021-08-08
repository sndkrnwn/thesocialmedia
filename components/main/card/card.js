import * as types from "../../../redux/types"
import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import Modal from 'react-modal';
import Slider from "react-slick";
import { connect } from 'react-redux'
// import { updateTest } from 'redux/actions/testAction';

import { Card } from 'react-bootstrap';

import Banner from "assets/img/bg/banner-card.jpg"

const CardProfile = ({userid, users, albums, photos, test, updateTest}) => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        users.map((item, i)=>{
            if(userid === item.id) {
               setUser(item)
            }
        })
    })

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

    return (
        <>
        <Card className="card-profile">
            <Card.Header
                style={{
                    background: `url(${Banner.src}) no-repeat center`,
                    // backgroundColor: "blue",
                    backgroundSize: "cover",
                    position: "relative",
                }}
            >
            {
                user !== null &&
                <>
                <h3>{user.name}</h3>
                <p className="mb-0">@{user.username}</p>
                <p>test{test.test}</p>
                <button onClick={handleClick}>test</button>
                </>
            }
            </Card.Header>
            <Card.Body>
                <h4>Bio</h4>
                {
                    user !== null &&
                    <div className="list-item">
                        <div className="item">
                            <a href={`mailto:${user.email}`} target="__blank">
                                <i className="fad fa-envelope"></i><p>{user.email}</p>
                            </a>
                        </div>
                        <div className="item">
                            <a href={`tel:${user.phone}`} target="__blank">
                                <i className="fad fa-phone"></i><p>{user.phone}</p>
                            </a>
                        </div>
                        <div className="item">
                            <a href={`https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`} target="__blank">
                                <i className="fad fa-address-card"></i><p>{user.address.street} {user.address.suite} {user.address.city}</p>
                            </a>
                        </div>
                        <div className="item">
                            <a href={` https://${user.website}`} target="__blank">
                                <i className="fad fa-browser"></i><p>{user.website}</p>
                            </a>
                        </div>
                    </div>
                }
            </Card.Body>
            <Card.Footer>
                <h4 className="p-3">Album</h4>
                <div className="list-item">
                    {
                        albums.length > 0 && albums.map((item, i)=>{
                            if(item.userId === userid) {
                                return (
                                    <div className="item" key={i} onClick={()=>openModal(item.id)}>
                                        <span>{item.title}</span>
                                    </div>
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
    test: state.test,
    userid: state.userid.userid,
    users: state.user.users,
    albums: state.album.albums,
    photos: state.photo.photos
});
  
const mapDispatchToProps = (dispatch) => {
    return {
    //    updateTest: () => {
    //       dispatch(updateTest())
    //    }
        updateTest: () => dispatch({
            type: types.UPDATE_TEST,
            value: 1
        })
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps)(CardProfile);
  