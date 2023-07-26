import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const Member = () => {
  const [members, setMembers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/members');
      if (!response.ok) throw new Error('網路回應錯誤' + response.status);
      const data = await response.json();
      setMembers(data);
      console.log(members);
    }
    catch (e) { console.error(e) }
  };

  useEffect(() => {
    fetchData();
  }, []); // 空陣列表示僅執行一次

  const memberList = members && members.map(member => {
    return (
      <tr key={member.mid}>
        <td>{member.mid}</td>
        <td>{member.email}</td>
        <td>{member.password}</td>
        <td>{member.firstName}</td>
        <td>{member.lastName}</td>
        <td>{member.imgUrl}</td>
      </tr>
    );
  });

  return (
    <div>
      <Container fluid>
        <div className="d-flex mt-3 mb-2 justify-content-center ">
          <Button color="success" tag={Link} to="/user/new">Add Member</Button>
        </div>
        <h3>Member</h3>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Mid</th>
              <th>Email</th>
              <th>Password</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>ImgUrl</th>
            </tr>
          </thead>
          <tbody>
            {memberList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Member;
