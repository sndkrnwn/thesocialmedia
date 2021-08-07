import { useEffect } from 'react'

import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

//Components
import { Activities } from "components/main/activities/activities"
import { Users } from "components/main/users/users"
import { Cover } from "components/main/cover/cover"
import { CardProfile } from  "components/main/card/card"
import { fetchposts } from 'redux/actions/postAction';
import { fetchusers } from 'redux/actions/userAction';
import { fetchcomments } from 'redux/actions/commentAction';
import { fetchalbums } from 'redux/actions/albumAction';
import { fetchphotos } from 'redux/actions/photoAction';

export default function Home() {

  const dispatch  = useDispatch();
  const { posts } = useSelector(state=>state.post);
  const { users } = useSelector(state=>state.user);
  const { comments } = useSelector(state=>state.comment);
  const { albums } = useSelector(state=>state.album);
  const { photos } = useSelector(state=>state.photo);

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

  }, [])

  return (
    <>
      <Cover
        title="The Social Media"
      />
      <Row>
        <Col md="9" className="content-left">
          <Row>
            <Col md="4">
                <CardProfile 
                  users={users}
                  albums={albums}
                  photos={photos}
                />
            </Col>
            <Col md="8">
                <Activities 
                  posts={posts}
                  comments={comments}
                />
            </Col>
          </Row>
        </Col>
        <Col md="3" className="content-right">
          <Users 
            users={users}
          />
        </Col>
      </Row>
    </>
  )
}
