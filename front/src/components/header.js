import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import {Link} from 'react-router-dom';

const Header = styled.header`
    min-height: 4em;
    background-color: #e2e2e2;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20);

    a {
        color: #000;
    }
`;


export default () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Header>
            <Navbar light expand="md">
                <NavbarBrand href="/">Nazwa_naszej_aplikacji</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/user">Profil</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/user">Wyzwania</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/user">Ranking</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Podejmij wyzwanie</NavbarText>
                </Collapse>
            </Navbar>
        </Header>
    );
}