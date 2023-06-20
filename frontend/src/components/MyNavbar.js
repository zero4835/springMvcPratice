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
import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from 'react-router-dom';
import logo from '../logo.svg';

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
            <Navbar color="dark" dark>
                <NavbarBrand href="/" className="mr-auto">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Meteor'}
                </NavbarBrand>
                <NavbarToggler onClick={this.toogleNavbar} className="mr-2"/>
                <Collapse isOpen={!this.state.collapse} navbar>
                    <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">é¦????</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/members">?????¡ä¸­å¿?</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/certificates">è­???§è??è¨?</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/vendors">???è¾¦å?®ä??</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://ithelp.ithome.com.tw/users/20119510/articles">?????¼æ??</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/AidenYang12345">GitHub</NavLink>
                            </NavItem>
                    </Nav>
                </Collapse>
            </Navbar >
        );
    }
}

export default MyNavbar;
