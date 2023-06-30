import React, { Component } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../img/black-cat.png';
import LoginPopup from './LoginPopup';

class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: true
        };
        this.toogleNavbar = this.toogleNavbar.bind(this);
    }

    toogleNavbar() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <Navbar className="p-1 indigo"  dark>
                <NavbarBrand href="/" className="mt-auto">
                    <img
                        alt=""
                        src={logo}
                        width="45"
                        height="45"
                        className=""
                    />
                    {' Meteor'}
                </NavbarBrand>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <LoginPopup />
                    </NavItem>
                </Nav>
                <NavbarToggler onClick={this.toogleNavbar} className="mr-2 mb-1 mt-1 ms-3 btn btn-outline-info "/>
                <Collapse isOpen={!this.state.collapse} navbar>
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
                                <NavLink href="https://ithelp.ithome.com.tw/users/20119510/articles">IThelp</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/zero4835/springMvcPratice">GitHub</NavLink>
                            </NavItem>
                    </Nav>
                </Collapse>
            </Navbar >
        );
    }
}

export default MyNavbar;
