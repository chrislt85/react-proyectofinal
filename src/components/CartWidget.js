import '../styles/CartWidget.css';

import { useContext } from "react"
import { Badge } from "react-bootstrap"
import { BsCart } from "react-icons/bs";
import Contexts from '../context/Contexts';

const CartWidget = () => {

    const context = useContext(Contexts.CartContext);

    return(
        <>
            <BsCart />
            {
                (context.getTotalItemsInCart() > 0) ? 
                    <Badge className="badgeCounter" pill bg="dark">{context.getTotalItemsInCart()}</Badge>
                :
                    <></>
            }
        </>
    )
}

export default CartWidget