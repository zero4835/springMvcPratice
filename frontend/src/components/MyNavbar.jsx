import React, { useState, useEffect} from 'react';
import { useNavigate, Link} from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';
import LoginPopup from './LoginPopup';

const MyNavbar = ({user, setUser}) => {

    const navigate = useNavigate();
    
    const [collapse, setCollapse] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('jwt_token'));

    const toggleNavbar = () => {
        setCollapse(!collapse);
    };

    const handleLogout = (e) => {
        setUser(null);
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user');
        setToken(localStorage.getItem('jwt_token'));
        navigate('/');
    };

    const fetchUserInfo = async () => {
        try {
            const response = await fetch("/api/getIdbyToken", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const userData = await response.json();
                const absolutePath = userData.imgUrl;
                const filename = absolutePath.substring(absolutePath.lastIndexOf('/') + 1);
                const relativePath = `${filename}`;
                setUser((prevUser) => ({ ...prevUser, imgUrl: relativePath }));
                localStorage.setItem('user', JSON.stringify({ ...userData, imgUrl: relativePath }));
                
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Error fetching user information:', error);
            setUser(null);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('jwt_token');
        setToken(storedToken);
        
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (token === null || user === null) {
            fetchUserInfo();
        }
        /*const imageElement = document.getElementById('userImage');
        if (imageElement) {
            imageElement.src = `./images/${user.imgUrl}?${Date.now()}`;
        }*/
    }, [token, user]);

    /*useEffect(()=>{
        if (token === null || user === null) {
            fetchUserInfo();
        }
    },[])*/
    
    return (    
    <Navbar className="p-1 indigo" dark>
        <NavbarBrand href="/" className="mt-auto">
            <img alt="" src="./images/black-cat.png" width="45" height="45" className="" />
            {' Meteor'}
        </NavbarBrand>
        <Nav className="ms-auto" navbar>
        {user &&  token !== null ? (
            < NavItem className="d-flex flex-row">
                <Link to={`/userpage/${user.firstName}`}>
                    <img 
                        id="userImage"
                        className="me-1 mt-auto mb-auto" 
                        width="35" 
                        height="35"
                        src={`./images/${user.imgUrl}?${Date.now()}`} alt="notfind 404 "
                    />
                </Link>
                <NavLink  tag={Link} to={`/userpage/${user.firstName}`} className="text-white mt-auto">{user.firstName}</NavLink>
                <h className="text-white mt-auto mb-auto display-6 pt-auto">&nbsp;/&nbsp;</h>
                <div className="text-white mt-auto mb-auto pt-1" type="Button" onClick={handleLogout}>logout</div>
            </NavItem>
        ) : (
            <NavItem>
                <LoginPopup/>
            </NavItem>
        )}
        </Nav>
        <NavbarToggler
            onClick={toggleNavbar}
            className="mr-2 mb-1 mt-1 ms-3 btn btn-outline-info "
        />
        <Collapse isOpen={!collapse} navbar>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/members">Members</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/skilltree">SkillTree</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/certificates">Certificates</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/vendors">Vendors</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://ithelp.ithome.com.tw/users/20119510/articles">
                IThelp
            </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/zero4835/springMvcPratice">
                GitHub
            </NavLink>
            </NavItem>
        </Nav>
        </Collapse>
    </Navbar>
    );
};

export default MyNavbar;