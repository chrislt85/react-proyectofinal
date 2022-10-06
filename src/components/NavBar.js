import '../styles/NavBar.css';

import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavLink className="navbar-brand" to={`/`}> 
                        <img alt="Noah Iluminacion" src="/logo.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        Noah Iluminación
                    </NavLink>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to={`/category/lamparas`}>Lámparas</NavLink>
                            <NavLink className="nav-link" to={`/category/apliques`}>Apliques</NavLink>
                            <NavLink className="nav-link" to={`/category/colgantes`}>Colgantes</NavLink>
                            <NavLink className="nav-link" to={`/category/cartelesled`}>Carteles LED</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar