import React, { useEffect, useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '......'; // 若超過最大長度，截斷文本
    }
    return text;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postList = posts.map((post) => (
    <Col key={post.id} className="my-3 p-3" md={6}>
      <Card outline color="info" body style={{ position: 'relative' }}>
        <Link to={`/board/${post.board.id}`}>
          <img
            className="mb-3"
            alt="Card img"
            src={post.board.iconUrl}
            height="30px"
            width="30px"
            style={{ position: 'absolute', top: '5px', right: '5px' }}
          />
        </Link>
        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
          <CardTitle className="fs-5 mt-3 pt-3" style={{ marginBottom: '10px' }}>
            {post.title}
          </CardTitle>
        </Link>
        <CardSubtitle
          style={{ display: 'flex', alignItems: 'center', gap: '5px', position: 'absolute', top: '10px', left: '10px' }}
        >
          <img
            className="me-2"
            alt=""
            src={post.user.imgUrl}
            height="30px" width="30px"
            style={{ borderRadius: '100%', }} />
          {post.user.firstName}
        </CardSubtitle>
        <CardBody className="pt-1 ps-1 pb-3">
          <CardText>{truncateText(post.content, 100)}</CardText>
        </CardBody>
        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', position: 'absolute', bottom: '10px', right: '10px' }}>
          <Button color="outline-primary" className="p-1">See more</Button>
        </Link>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row className="d-flex justify-content-center">{postList}</Row>
    </Container>
  );
};

export default PostList;
