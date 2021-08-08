import { useEffect } from 'react'

import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector, connect } from 'react-redux'

//Components
import { Activities } from "components/main/activities/activities"
import { Users } from "components/main/users/users"
import { Cover } from "components/main/cover/cover"
import CardProfile from  "components/main/card/card"

//REDUX
import { fetchposts } from 'redux/actions/postAction';
import { fetchusers } from 'redux/actions/userAction';
import { fetchcomments } from 'redux/actions/commentAction';
import { fetchalbums } from 'redux/actions/albumAction';
import { fetchphotos } from 'redux/actions/photoAction';
import { fetchuseractive } from 'redux/actions/userActiveAction';

import { fetchtest } from 'redux/actions/testAction';



export default function Home (props) {
  const dispatch  = useDispatch();
  const { posts } = useSelector(state=>state.post);
  const { users } = useSelector(state=>state.user);
  const { comments } = useSelector(state=>state.comment);
  const { albums } = useSelector(state=>state.album);
  const { photos } = useSelector(state=>state.photo);
  const { userid } = useSelector(state=>state.userid);

  const { test } = useSelector(state=>state.test);


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

    //Testing Store, Update
    dispatch(fetchtest());
  }, [])
  return (
    <>
      <Cover
        title="The Social Media"
      />
      <Row>
        <Col md="9" className="content-left">
          <Row>
            <Col md="4" className="sc-profile">
                <CardProfile 
                  userid={userid}
                  users={users}
                  albums={albums}
                  photos={photos}
                  test={test}
                />
            </Col>
            <Col md="8" className="sc-activities">
                <Activities 
                  userid={userid}
                  posts={posts}
                  comments={comments}
                />
            </Col>
          </Row>
        </Col>
        <Col md="3" className="content-right">
          <Users 
            userid={userid}
            users={users}
          />
        </Col>
      </Row>
    </>
  )
}