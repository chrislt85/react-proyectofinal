import '../styles/ItemDetail.css';

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import ItemCount from '../components/ItemCount';
import ItemStock from '../components/ItemStock';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import Contexts from '../context/Contexts';
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const context = useContext(Contexts.CartContext);
    const [finishpurchase, setFinishPurchase] = useState(false);

    const onAdd= (quantityToAdd)=> {
        // Agrego el pedido en el contexto
        context.addToCart(item, quantityToAdd);

        // Saco el componente "ItemCount", para que se reemplace por el boton de "Ir al carrito"
        setFinishPurchase(true);
    };

    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className="itemDetailImageContainer">
                        <img className="itemDetailImage" src={item.pictureUrl} alt={item.title} />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="itemTitle">{item.title}</Card.Title>
                            <Card.Text className="itemDescription">{item.description}</Card.Text>
                            <Card.Text className="itemPrice">$ {item.price}</Card.Text>
                        </Card.Body>
                        <Card.Body className="purchaseControls">
                            {
                                finishpurchase ?
                                        <>
                                            <ContinueShoppingButton styleClass="outline-dark" />
                                            <Button as={Link} to="/cart" variant="dark" className="btnIrAlCarrito">
                                                <BsCart className="cartIcon" /> Ir al carrito
                                            </Button>
                                        </>
                                    :
                                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                            }
                        </Card.Body>
                        <Card.Footer className="text-muted itemStock">
                            <ItemStock stock={item.stock} />
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;

