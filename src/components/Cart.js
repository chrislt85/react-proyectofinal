import '../styles/Cart.css';

import React, { useEffect, useState, useContext } from 'react'
import Contexts from '../context/Contexts';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { BsFillTrashFill } from "react-icons/bs";
import Checkout from './Checkout';

const Cart = () => {
    
    const [cartlist, setCart] = useState([]);

    // Se accede al contexto con el hook useContext
    const context = useContext(Contexts.CartContext);
    

    useEffect(()=>{
        setCart(context.cartList);
        console.log(context.cartList);
      },[context.cartList]);


    const handleCheckout = ()=>{
        //addSingleDoc(context.value)
        console.log("HICE CHECKOUT!!!");
    }

    return(
        <>
            <div className="App">
                <div className="cart-detail">

                    {(context.getTotalItemsInCart() > 0) ?
                        <Container>
                            <Row>
                                <Table striped className="cartDetail">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Producto</th>
                                            <th>Precio por unidad</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartlist.map((item)=>{
                                            return (
                                                <tr>
                                                    <td><img className="itemPreview" src={item.pictureUrl} alt={item.title} /></td>
                                                    <td>{item.title}</td>
                                                    <td>$ {item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>$ {item.price*item.quantity}</td>
                                                    <td><span className="btnRemove" onClick={() => context.removeFromCart(item.id)} title="Eliminar producto del carrito"><BsFillTrashFill /></span></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>

                                <Card className="totalPrice">
                                    <Card.Header>
                                        <Card.Text>Total</Card.Text>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>$ {context.getTotalPriceInCart()}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="dark" style={{ marginRight: '20px' }} onClick={handleCheckout}>Terminar mi compra</Button>
                                    <Button variant="outline-danger" onClick={() => context.clearCart()}>Vaciar carrito</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Checkout showModal={true} />
                            </Row>
                        </Container>
                    :
                        <>
                            <p>Tu carrito está vacío</p>
                            <Button as={Link} to="/" variant="dark">
                                Seguir comprando
                            </Button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart