import React, {Component} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';

import logo from '../logo.svg';

class MyNavbar extends Component{
    constructor(props){
        super(props);
        this.state={
            collapes: true
        }
        this.toogleNavbar=this.toogleNavbar.bind(this);
    }

    toogleNavbar(){
        this.setState({
            collapes: !this.state.collapes
        });
    }

    render(){
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
                    {'Home'}
                </NavbarBrand>
                <NavbarToggler onClick={this.toogleNavbar} className="mr-2"/>
                <Collapse isOpen={!this.state.collapse} navbar>
                    <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="http://localhost:8080/api/login/index#">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/zero4835">GitHub</NavLink>
                            </NavItem>
                    </Nav>
                </Collapse>
            </Navbar >
        )
    }
}   

export default MyNavbar;