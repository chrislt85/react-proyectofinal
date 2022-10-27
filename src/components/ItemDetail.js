import '../styles/ItemDetail.css';

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import ItemCart from '../components/ItemCart';
import ItemStock from '../components/ItemStock';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import Contexts from '../context/Contexts';
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const context = useContext(Contexts.CartContext);
    const [finishpurchase, setFinishPurchase] = useState(false);

    const onAdd= (quantityToAdd)=> {
        // Simulo que agrego el pedido en el contexto
        // console.log(`Se agregaron ${quantityToAdd} productos al carrito del producto "${item.title}"`);
        // Agrego el pedido en el contexto
        context.addToCart(item, quantityToAdd);
        // console.log("Carrito inicial:");
        // console.log(context.cartList);

        // context.setCartList([...context.cartList, {title: item.title, quantity: quantityToAdd}]);

        // console.log("Carrito actual:");
        // console.log(context.cartList);
        // Saco el componente "ItemCart", para que se reemplace por el boton de "Finalizar compra"
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
                        {/*<Card.Header>Featured</Card.Header>*/}
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
                                    <ItemCart stock={item.stock} initial={1} onAdd={onAdd} />
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

