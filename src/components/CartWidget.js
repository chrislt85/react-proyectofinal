import { Nav } from "react-bootstrap"
import { BsCart } from "react-icons/bs";
//import { BsCartFill } from "react-icons/bs";

const CartWidget = () => {
    return(
        <>
            <Nav>
                <Nav.Link className="nav-cart" href="#">
                    <BsCart />
                </Nav.Link>
            </Nav>
        </>
    )
}

export default CartWidget