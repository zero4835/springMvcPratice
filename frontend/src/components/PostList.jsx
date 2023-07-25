import React, { useEffect, useState } from 'react';
import { Card, CardGroup, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/post/');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
        console.log(data); // 看到更新後的數據
      } else {
        console.log('獲取資料失敗');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postList = posts.map((post, index) => (
    <Card className='d-flex justify-content-center align-items-center' key={index}>
      <CardBody>
        <img
          className="mb-3"
          alt="Card img"
          src={post.board.iconUrl}
          width="100%"
        />
        <CardSubtitle>
          <img
            className="me-2"
            alt=""
            src={post.user.imgUrl}
            height="30px"
            width="30px"
            style={{ borderRadius: "100%" }}
          />
          {post.user.firstName}
        </CardSubtitle>
        <CardTitle>title: {post.title}</CardTitle>

        <CardText>content: {post.content}</CardText>
        <Link to={`/post/${post.id}`}>
          <Button color="outline-primary">See more</Button>
        </Link>
      </CardBody>
    </Card>
  ));

  return (
    <CardGroup>
      {postList}
    </CardGroup>
  );
};

export default PostList;
