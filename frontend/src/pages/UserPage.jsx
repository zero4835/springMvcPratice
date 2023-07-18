import React, { useState, useEffect, useRef } from 'react';
import AddSignature from '../components/AddSignature';
import {
  Container,
  Table
} from 'reactstrap';

const UserPage = ({ user, setUser, islogin, setIslogin }) => {

  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  const [memberInfo, setMemberInfo] = useState([]);
  const [signature, setSignature] = useState("");

  const requestInfomation = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  // useEffect(()=>{
  //         if (token !== null){
  //             fetch("/api/getIdbyToken", requestInfomation)
  //             .then(response => response.json())
  //             .then(response => {
  //                 console.log(response)
  //                 if (user === null)
  //                     setUser(response);
  //             })
  //             .catch(error => {
  //                 console.error('Error fetching member infomation:', error);
  //             });
  //         }
  // }, [token/*, user, requestInfomation*/]);

  useEffect(() => {
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
              return response.json();
            })
            .then(response => {
              if (response && response.signature !== undefined) {
                setSignature(response.signature);
                console.log(signature);
              }
            })
            .catch(error => {
              console.error('Error fetching user signature:', error);
            });
        })
        .catch(error => {
          console.error('Error fetching member information:', error);
        });

    }
  }, [token/*, user, requestInfomation*/]);

  let memberInfomation;
  if (user) {
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
        <td colSpan="6">Loading...</td>
      </tr>
    );
  }

  return (

    <>
      <Container fluid className='d-flex justify-content-center flex-column  align-items-center'>
        <h3 className='d-flex  '>member Infomation</h3>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>password</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>ImgUrl</th>
            </tr>
          </thead>
          <tbody>
            {memberInfomation}
          </tbody>
        </Table>
        <img
          alt='Not found'
          src={`/images/${user.imgUrl}`}
          className="d-flex justify-content-center"
          width="90"
          height="90"
        />
        <div className="mt-3">
            <AddSignature signature={signature} setSignature={setSignature} />
        </div>
      </Container>
    </>
  )
}

export default UserPage;