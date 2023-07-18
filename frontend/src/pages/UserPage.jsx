import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Table
} from 'reactstrap';

const UserPage = ({ user, setUser, islogin, setIslogin }) => {

  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  const [memberInfo, setMemberInfo] = useState([]);

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

  useEffect(()=>{
    if (token !== null){
        fetch("/api/signature", requestInfomation)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (user === null)
                setUser(response);
        })
        .catch(error => {
            console.error('Error fetching member infomation:', error);
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

    <React.StrictMode>
      <Container fluid>
        <h3>member Infomation</h3>
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
      </Container>
    </React.StrictMode>
  )
}

export default UserPage;