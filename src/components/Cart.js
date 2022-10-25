import '../styles/Cart.css';

import React, { /*useEffect, */useState, useContext } from 'react'
import Contexts from '../context/Contexts';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { BsFillTrashFill } from "react-icons/bs";
import CheckoutForm from './CheckoutForm';
import CheckoutOrder from './CheckoutOrder';

const Cart = () => {
    
    // const [cartlist, setCart] = useState([]);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [showCheckoutOrder, setShowCheckoutOrder] = useState(false);
    const [validatedCheckoutForm, setValidatedCheckoutForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Este campo es obligatorio.");

    // const handleCloseCheckoutForm = () => setShowCheckoutForm(false);
    // const handleShowCheckoutForm = () => setShowCheckoutForm(true);

    // Se accede al contexto con el hook useContext
    const context = useContext(Contexts.CartContext);
    

    /*useEffect(()=>{
        setCart(context.cartList);
        console.log(context.cartList);
      },[context.cartList]);*/


    const handleSubmitCheckoutForm = (event) => {
        console.log("handleSubmitCheckoutForm");
        
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        // Se reinician los valores de mensaje de error del email de confirmacion
        setErrorMessage("Este campo es obligatorio.");
        event.currentTarget.emailconfirm.setCustomValidity("");

        if (!form.checkValidity() || (event.currentTarget.email.value !== event.currentTarget.emailconfirm.value))
        {
            console.log(`ERROR EN VALIDACION!!! - checkValidity: ${form.checkValidity()} - EMAILS: ${(event.currentTarget.email.value === event.currentTarget.emailconfirm.value)}`);
            if (event.currentTarget.email.value !== event.currentTarget.emailconfirm.value)
            {
                setErrorMessage("Los correos electrónicos no coinciden.");
                event.currentTarget.emailconfirm.setCustomValidity("Password Must be Matching.");
            }
            setValidatedCheckoutForm(true);
        }
        else
        {
            console.log("HACIENDO CHECKOUT...");
            let order = {
                date: new Date(),
                buyer: {
                    name: event.currentTarget.name.value,
                    phone: event.currentTarget.phone.value,
                    email: event.currentTarget.email.value
                },
                total: context.getTotalPriceInCart(),
                items: context.cartList.map((item) => {
                    return { id: item.id, name: item.name, quantity: item.quantity, price:item.price };
                })
            };
            console.log(order);

            //addSingleDoc(context.value)
            
            console.log(order);
            
            setValidatedCheckoutForm(false);
            console.log(">> setValidatedCheckoutForm");
            setShowCheckoutForm(false);
            console.log(">> setShowCheckoutForm");
            setShowCheckoutOrder(true);
            console.log(">> setShowCheckoutOrder");

            context.clearCart();
            console.log(">> clearCart");

        }
    };

    const handleCloseCheckoutForm = () => {
        setShowCheckoutForm(false);
        setValidatedCheckoutForm(false);
        setErrorMessage("Este campo es obligatorio.");
    };

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
                                        {context.cartList.map((item)=>{
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
                                    <Button variant="dark" style={{ marginRight: '20px' }} onClick={() => setShowCheckoutForm(true)}>Terminar mi compra</Button>
                                    <Button variant="outline-danger" onClick={() => context.clearCart()}>Vaciar carrito</Button>
                                </Col>
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
                    <CheckoutForm showCheckoutForm={showCheckoutForm} 
                                    validatedCheckoutForm={validatedCheckoutForm}
                                    errorMessage={errorMessage}
                                    handleSubmitCheckoutForm={handleSubmitCheckoutForm}
                                    handleCloseCheckoutForm={handleCloseCheckoutForm} 
                                />
                    <CheckoutOrder showCheckoutOrder={showCheckoutOrder} orderId={123456} />
                </div>
            </div>
        </>
    )
}

export default Cart