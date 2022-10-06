import '../styles/NavBar.css';

import { Navbar, Nav, Container } from "react-bootstrap"
import {/*Link, */NavLink} from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavLink className="navbar-brand" to={`/`}> 
                    {/*<Navbar.Brand href="#">*/}
                        <img alt="Noah Iluminacion" src="/logo.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        Noah Iluminación
                    {/*</Navbar.Brand>*/}
                    </NavLink>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link href="#">Lámparas</Nav.Link>*/}
                            <NavLink className="nav-link" to={`/category/lamparas`}>Lámparas</NavLink>
                            {/*<Nav.Link href="#">Apliques</Nav.Link>*/}
                            <NavLink className="nav-link" to={`/category/apliques`}>Apliques</NavLink>
                            {/*<Nav.Link href="#">Colgantes</Nav.Link>*/}
                            <NavLink className="nav-link" to={`/category/colgantes`}>Colgantes</NavLink>
                            {/*<Nav.Link href="#">Carteles LED</Nav.Link>*/}
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