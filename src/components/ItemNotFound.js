import '../styles/ItemNotFound.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const ItemNotFound = () => {

    return(
        <div className="messageContainer">
            <h1>El producto no existe!</h1>
            <h5>El producto que estabas buscando no pudo ser encontrado.</h5>
            <div className="messageFooter">
                <Button as={Link} to="/" variant="outline-dark">
                    Seguir comprando
                </Button>
            </div>
        </div>
    )
}

export default ItemNotFound