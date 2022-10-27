import '../styles/ItemNotFound.css';
import ContinueShoppingButton from '../components/ContinueShoppingButton';

const ItemNotFound = () => {

    return(
        <div className="messageContainer">
            <h1>El producto no existe!</h1>
            <h5>El producto que estabas buscando no pudo ser encontrado.</h5>
            <div className="messageFooter">
                <ContinueShoppingButton styleClass="outline-dark" />
            </div>
        </div>
    )
}

export default ItemNotFound