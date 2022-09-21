import { Navbar, Nav, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#">
                        <img alt="Noah Iluminacion" src="/logo.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        Noah Iluminación
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Lámparas</Nav.Link>
                            <Nav.Link href="#">Apliques</Nav.Link>
                            <Nav.Link href="#">Colgantes</Nav.Link>
                            <Nav.Link href="#">Carteles LED</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar