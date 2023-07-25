import React, { useEffect, useState } from 'react';
import { Card, CardGroup, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postList = posts.map((post, index) => (
    <Card className='d-flex justify-content-center align-items-center' key={index}>
      <CardBody>
        <CardTitle>title: {post.title}</CardTitle>
        <CardSubtitle>user: {post.user.firstName}</CardSubtitle>
        <CardText>content: {post.content}</CardText>
        <Button color="outline-primary">learn more</Button>
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
