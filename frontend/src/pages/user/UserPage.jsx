import React, { useState, useEffect } from 'react';
import AddSignature from '../../components/user/AddSignature';
import { Container, Table } from 'reactstrap';
import { useParams } from 'react-router';

const UserPage = ({ user, setUser, islogin, setIslogin, isSelf }) => {
  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  const [signature, setSignature] = useState({ id: "", signature: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [postUser, setPostUser] = useState([]);
  const { postUserId } = useParams();

  const requestInfomation = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  const fetchUserInformation = async () => {
    try {
      const response = await fetch(`/api/member/${postUserId}`);
      if (!response.ok) throw new Error("fetch postuser data false.")
      else {
        const userData = await response.json();
        setPostUser(userData);
        setIsLoading(false);
        console.log(userData);
      }
    }
    catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("PostUserId:", postUserId);
    if (isSelf) {
      if (token !== null) {
        fetch("/api/signature", requestInfomation)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(response => {
            console.log(response);
            if (user === null)
              setUser(response);
            return response;
          })
          .then(response => {
            fetch(`/api/signature/${user.mid}`, requestInfomation)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                if (response !== null)
                  return response.json();
              })
              .then(response => {
                if (response && response.signature && response.id !== undefined) {
                  setSignature({ id: response.id, signature: response.signature });
                  console.log(signature);
                }
                setIsLoading(false);
              })
              .catch(error => {
                console.error('Error fetching user signature:', error);
                setIsLoading(false);
              });
          })
          .catch(error => {
            console.error('Error fetching member information:', error);
            setIsLoading(false);
          });
      } else {
        fetchUserInformation();
      }
    } else {
      fetchUserInformation();
    }
  }, [token, isSelf, user, requestInfomation, postUserId]);

  let memberInfomation;
  if (isSelf) {
    memberInfomation = (
      <tr>
        <td>{user.mid}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.imgUrl}</td>
      </tr>
    );
  } else {
    memberInfomation = (
      <tr>
        <td>{postUser.mid}</td>
        <td>{postUser.email}</td>
        <td>{postUser.firstName}</td>
        <td>{postUser.lastName}</td>
        <td>{postUser.imgUrl}</td>
      </tr>
    );
  }

  return (
    <>
      {isLoading ? <div style={{ height: "100vh", fontSize: "90px" }} className='d-flex justify-content-center align-items-center'>Loading</div> : (
        <Container fluid className='d-flex justify-content-center flex-column  align-items-center'>
          <h3 className='d-flex  '>member Infomation</h3>
          <Table className="mt-4">
            <thead>
              {isSelf ? (
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>password</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>ImgUrl</th>
                </tr>) : (
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>ImgUrl</th>
                </tr>)}
            </thead>
            <tbody>
              {memberInfomation}
            </tbody>
          </Table>
          <img
            alt='Not found'
            src={isSelf ? `/images/${user.imgUrl}` : postUser.imgUrl}
            className="d-flex justify-content-center"
            width="90"
            height="90"
            style={{ borderRadius: "30%" }}
          />
          {(
            <div className="mt-3">
              <AddSignature signature={signature} setSignature={setSignature} token={token} user={user} isSelf={isSelf} postUserId={postUserId} />
            </div>
          )}
        </Container>
      )}
    </>
  )
}

export default UserPage;
