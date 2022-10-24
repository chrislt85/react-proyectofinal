import '../styles/ItemDetail.css';

import { Container, Row, Col, Card/*, Button*/ } from "react-bootstrap";
import { useState, useContext } from "react";
import ItemCart from '../components/ItemCart';
import Contexts from '../context/Contexts';
import { BsCart } from "react-icons/bs";
import { Button } from "react-bootstrap";
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
                                            <Link to={`/`} style={{ marginRight: '20px' }}>
                                                <Button variant="dark">Seguir comprando</Button>
                                            </Link>
                                            <Link to={`/cart`}>
                                                <Button variant="dark"><BsCart style={{marginTop:'-4px'}}/> Ir al carrito</Button>
                                            </Link>
                                        </>
                                    :
                                    <ItemCart stock={item.stock} initial={1} onAdd={onAdd} />
                            }
                        </Card.Body>
                        <Card.Footer className="text-muted" style={{ fontSize: '15px' }}>
                            {
                                (item.stock === 0) 
                                ?
                                    <span>Sin stock disponible</span>
                                :
                                    (item.stock === 1) ?
                                        <span>¡Última unidad disponible!</span>
                                    :
                                        <span>Stock disponible: {item.stock} unidades</span>
                            }
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;

