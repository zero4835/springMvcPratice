import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

const MyNavbar = ({ user, setUser, islogin, setIslogin }) => {

  const navigate = useNavigate();

  const [collapse, setCollapse] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  //const [islogin, setIslogin] = useState(false)

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };

  const handleLogout = (e) => {
    setUser(null);
    setIslogin(false);
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

  }, [islogin, token/*, user*/]);

  // useEffect(()=>{
  //     if (token === null || user === null) {
  //         fetchUserInfo();
  //         const imageElement = document.getElementById('userImage');
  //         if (imageElement) {
  //             imageElement.src = `./images/${user.imgUrl}?${Date.now()}`;
  //         }
  //     }
  // },[])

  return (
    <Navbar className="p-1 indigo" dark>
      <NavbarBrand href="/" className="mt-auto">
        {/* src not not use ./ , should be use */}
        <img alt="" src="/images/black-cat.png" width="45" height="45" className="" />
        {' Meteor'}
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        {user && token !== null ? (
          < NavItem className="d-flex flex-row">
            <Link to={`/userpage/${user.firstName}`}>
              {user && (
                <img
                  id="userImage"
                  className="me-2 mt-1 mb-auto"
                  width="35"
                  height="35"
                  src={`/images/${user.imgUrl}`}
                  alt="notfind 404"
                  style={{"border-radius":"100%"}}
                />)
              }
            </Link>
            <NavLink tag={Link} to={`/userpage/${user.firstName}`} className="text-white mt-auto">{user.firstName}</NavLink>
            <span className="text-white mt-auto mb-auto display-6 pt-auto">&nbsp;/&nbsp;</span>
            <div className="text-white mt-auto mb-auto pt-1" type="Button" onClick={handleLogout}>logout</div>
          </NavItem>
        ) : (
          <NavItem>
            <LoginPopup user={user} setUser={setUser} islogin={islogin} setIslogin={setIslogin} />
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