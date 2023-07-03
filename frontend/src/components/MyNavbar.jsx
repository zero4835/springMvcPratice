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
import logo from '../img/black-cat.png';
import LoginPopup from './LoginPopup';

const MyNavbar = ({user, setUser}) => {

    const navigate = useNavigate();

    const [collapse, setCollapse] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('jwt_token'));

    const toggleNavbar = () => {
        setCollapse(!collapse);
    };

    const handleLogout = (e) => {
        localStorage.removeItem('jwt_token');
        setToken(localStorage.getItem('jwt_token'));
        setUser(null);
        navigate('/');
    };
    
    console.log("myNabar "+user);

    useEffect(() =>{
        const storedToken = localStorage.getItem('jwt_token');
        setToken(storedToken);
    }, [token, user]);

    return (    
    <Navbar className="p-1 indigo" dark>
        <NavbarBrand href="/" className="mt-auto">
            <img alt="" src={logo} width="45" height="45" className="" />
            {' Meteor'}
        </NavbarBrand>
        <Nav className="ms-auto" navbar>
        {user && token !== null ? (
            < NavItem className="d-flex flex-row">
                <NavLink  tag={Link} to="/userpage" className="text-white">{user.firstName}</NavLink>
                <h className="text-white mt-auto mb-auto display-6">&nbsp;/&nbsp;</h>
                <div className="text-white mt-auto mb-auto" type="Button" onClick={handleLogout}>logout</div>
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
