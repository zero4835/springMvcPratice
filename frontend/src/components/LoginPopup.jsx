import React,{useState, useEffect, useRef} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Modal, Button, Container } from 'react-bootstrap';

const LoginPopup=(props)=>{
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };


    return (
        <React.StrictMode>
            <Button className="ps-1 pe-1 pt-1 pb-1 ms-5 ml-auto" onClick={handleModalOpen}>Login</Button>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>標題</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal 內容</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        關閉
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        儲存
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.StrictMode>
    );
}

export default LoginPopup;