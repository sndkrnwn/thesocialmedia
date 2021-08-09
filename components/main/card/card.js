import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import { Modal } from 'react-bootstrap'
import Slider from "react-slick";
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap';

//Assets
import Banner from "assets/img/bg/banner-card.jpg"

const CardProfile = ({userid, users, albums, photos}) => {
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    const [albumPhoto, setAlbumPhoto] = useState([]);
    const handleOpen = (id) => {
        let newItems =  photos.filter(x => x.albumId === id);
        setAlbumPhoto(newItems)
        setShow(true)
    }

    const [user, setUser] = useState(null);
    useEffect(()=>{
        users.length > 0 && users.map((item, i)=>{
            if(userid === item.id) {
               setUser(item)
            }
        })
    })
    //Handle Slider Photo
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

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
                                    <div className="item" key={i} onClick={()=>handleOpen(item.id)}>
                                        <span>{item.title}</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </Card.Footer>
        </Card>
            <Modal show={show} onHide={handleClose} className="modal-comment">
                <button onClick={handleClose} className="toggle-close"><i className="fal fa-times"></i></button>
                <Modal.Body>
                    <h3>Photo</h3>
                     <Slider {...settings} className="w-arrow">
                        {
                            albumPhoto.length > 0 && albumPhoto.map((item, i)=>{
                                return (
                                    <div className="album-photo" key={i}>
                                        <img src={item.url} alt={item.title} className="img-fluid mb-3" />
                                        <h4 className="mb-0">{item.title}</h4>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </Modal.Body>
            </Modal>
        </>
    )
}

CardProfile.propTypes = {
    userid: PropTypes.number,
    users: PropTypes.array,
    albums: PropTypes.array,
    photos: PropTypes.array
}

CardProfile.defaultProps = {
    userid: 1,
    users: [],
    albums: [],
    photos: [],
  }

const mapStateToProps = state => ({
    userid: state.userid.userid,
    users: state.user.users,
    albums: state.album.albums,
    photos: state.photo.photos
});
  
export default connect(
    mapStateToProps)(CardProfile);
  