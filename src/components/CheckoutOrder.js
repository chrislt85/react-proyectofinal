import '../styles/CheckoutOrder.css';

/*import React, { useState } from 'react';*/
import Modal from 'react-bootstrap/Modal';
/*import Form from 'react-bootstrap/Form';*/
/*import Button from 'react-bootstrap/Button';*/
/*import { Link } from "react-router-dom";*/
/*import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";*/

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContinueShoppingButton from '../components/ContinueShoppingButton';


const CheckoutOrder = ({showCheckoutOrder, orderId}) => {

    return(
        <>
            <Modal className="modalOrder" show={showCheckoutOrder} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Compra exitosa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Col>
                            <Row>
                                <h4>Su orden ha sido registrada.</h4>
                                <p>Muchas gracias por su compra!</p>
                                <p className="orderId">Su número de orden es #{orderId}.</p>
                            </Row>
                            <Row>
                                <div className="modal-footer orderFooter">
                                    <ContinueShoppingButton styleClass="outline-light" />
                                </div>
                            </Row>
                        </Col>
                    </Container>
                </Modal.Body>
                {/*<Modal.Footer>
                    <Col>
                        <Row>
                            
                        </Row>
                    </Col>
                </Modal.Footer>*/}
            </Modal>
        </>
    )
}

export default CheckoutOrder