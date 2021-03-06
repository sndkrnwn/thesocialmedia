import { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux'

//Components
import Activities from "components/main/activities/activities"
import Users from "components/main/users/users"
import { Cover } from "components/main/cover/cover"
import CardProfile from  "components/main/card/card"

//REDUX
import { fetchposts } from 'redux/actions/postAction';
import { fetchusers } from 'redux/actions/userAction';
import { fetchcomments } from 'redux/actions/commentAction';
import { fetchalbums } from 'redux/actions/albumAction';
import { fetchphotos } from 'redux/actions/photoAction';
import { fetchuseractive } from 'redux/actions/userActiveAction';

import Loader from "assets/img/icon/loading.gif"

export default function Home (props) {
  const dispatch  = useDispatch();

  useEffect(()=>{
    //GET USERS
    dispatch(fetchusers());

    //GET POSTS
    dispatch(fetchposts());

    //GET COMMENTS
    dispatch(fetchcomments());

    //GET ALBUMS
    dispatch(fetchalbums());

    //GET PHOTOS
    dispatch(fetchphotos());

    //GET USER ACTIVE
    dispatch(fetchuseractive());
  }, [])

  const [loader, setLoader] = useState(true);
  const [userMobile, setUserMobile] = useState(false);
  return (
    <>
      <div className={`loader ${loader === false && "is-close"}`}>
        <img src={Loader.src} alt="loading-image" className="img-fluid"/>
        <button className="btn outline" onClick={()=>setLoader(false)}>
          <span>Start</span>
        </button>
      </div>
      <div className="toggle-users-mobile" onClick={()=>setUserMobile(!userMobile)}>
        {
          userMobile ? <i className="fad fa-times"></i> : <i class="fad fa-users"></i>
        }
      </div>
      <div className={`main-content ${loader === false && "loaded"}`}>
        <Cover
          title="The Social Media"
        />
        <Container fluid>
        <Row>
          <Col md="9" className="content-left">
            <Row>
              <Col md="4" className="sc-profile">
                  <CardProfile />
              </Col>
              <Col md="8" className="sc-activities">
                  <Activities userMobile={userMobile}/>
              </Col>
            </Row>
          </Col>
          <Col md="3" className={`content-right ${userMobile && "is-open"}`}>
            <Users userMobile={userMobile} setUserMobile={setUserMobile} userMobile={userMobile}/>
          </Col>
        </Row> 
        </Container>
      </div>
    </>
  )
}