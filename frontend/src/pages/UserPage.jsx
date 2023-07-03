import React,{useState, useEffect, useRef} from 'react';
import {
    Container,
    Table
} from 'reactstrap';

const UserPage=({user, setUser})=>{

    const [token, setTokken] = useState(localStorage.getItem('jwt_token'));
    const [isLogin, setIsLogin] = useState(false);
    const [memberInfo, setMemberInfo] = useState([]);

    const mounted=useRef(false);

    const requestInfomation={
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // 在请求头中添加 Authorization 字段，并将 JWT token 添加到头部
            'Content-Type': 'application/json'
        }
    }

    useEffect(()=>{
        if(mounted.current===false){
            mounted.current=true;
            if (token !== null){
                fetch("/api/getIdbyToken", requestInfomation)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setMemberInfo(response);
                    setUser(response);
                    
                })
                .catch(error => {
                    console.error('Error fetching member infomation:', error);
                });
            }
        }else{
            if (token !== null){
                fetch("/api/getIdbyToken", requestInfomation)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setMemberInfo(response);

                })
                .catch(error => {
                    console.error('Error fetching member infomation:', error);
                });
            }
        }

    }, [token/*, requestInfomation*/]);

    let memberInfomation;
    memberInfomation =
            <tr >
                <td>{memberInfo.mid}</td>
                <td>{memberInfo.email}</td>
                <td>{memberInfo.password}</td>
                <td>{memberInfo.firstName}</td>
                <td>{memberInfo.lastName}</td>
            </tr>;
    
    return(
        
        <React.StrictMode>
            <Container fluid>
                    <h3>memberInfomation</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>firstName</th>
                            <th>lastName</th>
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
