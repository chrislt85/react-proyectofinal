import '../styles/Cart.css';

import React, { useState, useContext } from 'react'
import Contexts from '../context/Contexts';
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import CheckoutForm from './CheckoutForm';
import CheckoutOrder from './CheckoutOrder';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import { addNewDocument, getServerTimestamp, filterCollection, updateItems } from '../utils/Firebase';

const Cart = () => {
    
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [showCheckoutOrder, setShowCheckoutOrder] = useState(false);
    const [validatedCheckoutForm, setValidatedCheckoutForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Este campo es obligatorio.");
    const [orderId, setOrderId] = useState("");

    // Se accede al contexto con el hook useContext
    const context = useContext(Contexts.CartContext);

    const handleSubmitCheckoutForm = (event) => {
        
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
            let order = {
                buyer: {
                    name: event.currentTarget.name.value,
                    phone: event.currentTarget.phone.value,
                    email: event.currentTarget.email.value
                },
                items: context.cartList.map((item) => {
                    return { id: item.id, title: item.title, quantity: item.quantity, price:item.price };
                }),
                total: context.getTotalPriceInCart(),
                date: getServerTimestamp()
            };

            // SE GUARDA LA ORDEN EN FIREBASE
            const response = addNewDocument(order);
            response.then((result)=>{

                setValidatedCheckoutForm(false);
                setShowCheckoutForm(false);
                
                setOrderId(result.id);
                setShowCheckoutOrder(true);
                
                // Aca actualizo los items de Firebase
                const response = filterCollection("items",["id","in", order.items.map((item) => item.id.toString())]);
                response.then((result)=>{
                    updateItems(result.docs, order.items);
                }).catch((err)=>{
                    console.log("Error al obtener items a actualizar",err);
                });
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{
                // Se limpia el carrito
                context.clearCart();
            });

            /*setValidatedCheckoutForm(false);
            setShowCheckoutForm(false);
            setOrderId("9876543210");
            setShowCheckoutOrder(true);*/
            //context.clearCart();
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
                                    <Button className="btnTerminarCompra" variant="dark" onClick={() => setShowCheckoutForm(true)}>Terminar mi compra</Button>
                                    <Button variant="outline-danger" onClick={() => context.clearCart()}>Vaciar carrito</Button>
                                </Col>
                            </Row>
                        </Container>
                    :
                        <>
                            <p>Tu carrito está vacío</p>
                            <ContinueShoppingButton styleClass="outline-dark" />
                        </>
                    }
                    <CheckoutForm showCheckoutForm={showCheckoutForm} 
                                    validatedCheckoutForm={validatedCheckoutForm}
                                    errorMessage={errorMessage}
                                    handleSubmitCheckoutForm={handleSubmitCheckoutForm}
                                    handleCloseCheckoutForm={handleCloseCheckoutForm} 
                                />
                    <CheckoutOrder showCheckoutOrder={showCheckoutOrder} orderId={orderId} />
                </div>
            </div>
        </>
    )
}

export default Cart