import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return(
            <Navbar inverse collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand" style={{color: 'gold'}}>LeagueBook</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Champions
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Ranked
                        </NavItem>
                    </Nav>
                    {/* <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav> */}
                </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default NavigationBar;