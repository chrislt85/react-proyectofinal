import '../styles/CartWidget.css';

import { /*useState,*/ useContext } from "react"
import { /*Nav, */Badge } from "react-bootstrap"
import { BsCart } from "react-icons/bs";
/*import { BsCartFill } from "react-icons/bs";*/
import Contexts from '../context/Contexts';

const CartWidget = () => {

    const context = useContext(Contexts.CartContext);

    return(
        <>
            {/*<Nav>*/}
                {/*<Nav.Link className="nav-cart" href="/cart">*/}
                <BsCart />
                    {
                        (context.getTotalItemsInCart() > 0) ? 
                            <Badge className="badgeCounter" pill bg="dark">{context.getTotalItemsInCart()}</Badge>
                        :
                            <></>
                    }
                {/*</Nav.Link>*/}
            {/*</Nav>*/}
        </>
    )
}

export default CartWidget