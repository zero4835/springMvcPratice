import React,{useState, useEffect, useRef} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Modal, Button, Container } from 'react-bootstrap';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const LoginPopup=(props)=>{
    // in react-route-dom v6 useHistory replace useNavigate
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const requestInfomation={
        method : 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body : JSON.stringify({ email: email, password :password})
    };

    const handleModalOpen = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        await fetch('/api/login', requestInfomation)
            .then(async response => {
                if (response.status === 200) {
                    // 在此必須要在這是才能做異步的動作並且保證jwt token以String的形態被使用
                    response = await response.text(); // 獲取回應內容
                    alert("Success");
                    setShowModal(false);
                    console.log(response); // 檢查回應資料
                    localStorage.setItem('jwt_token', response); // 存儲 JWT 令牌
                    navigate('/');
                } else {
                    alert("error " + response.status);
                    navigate('/skilltree');
                    setShowModal(false);
                }
            })
            .catch(e => console.log(e));
    }


    const handleRegister=async(event)=>{
        setShowModal(false);
        navigate('/members/new');
    }


    return (
        <React.StrictMode>
            <Button className="ps-1 pe-1 pt-1 pb-1 ms-5 ml-auto" onClick={handleModalOpen}>Login</Button>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>登入</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center">

                    <form className="justify-content-center" onSubmit={handleSubmit}>
                        <label className="ms-auto">帳號</label>
                        <input  type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="ms-3"
                        />
                        <br/><br/>
                        <label className="ms-auto">密碼</label>
                        
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}

                            onChange={(e) => setPassword(e.target.value)}
                            className="ms-3"
                            id="password"
                        />
                        {showPassword ? (
                        <EyeIcon
                            className="h-1 w-1 cursor-pointer ms-2"
                            style={{height: '20px', width: '20px'}}
                            onClick={() => setShowPassword(false)}
                        />
                        ) : (
                        <EyeSlashIcon
                            className="h-1 w-1 cursor-pointer ms-2"
                            style={{height: '20px', width: '20px'}}
                            onClick={() => setShowPassword(true)}
                        />
                        )}

                        <Modal.Footer className="d-flex justify-content-center m-3">
                            <Button className="primary m-auto" type="submit">
                                登入 
                            </Button>
                            <Button className="primary m-auto" onClick={handleRegister}>
                                註冊
                            </Button>
                        </Modal.Footer>
                    </form>


                </Modal.Body>
            </Modal>
        </React.StrictMode>
    );
}

export default LoginPopup;