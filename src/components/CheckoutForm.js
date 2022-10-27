import '../styles/CheckoutForm.css';

/*import React, { useState } from 'react';*/
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const CheckoutForm = ({showCheckoutForm, validatedCheckoutForm, errorMessage, handleSubmitCheckoutForm, handleCloseCheckoutForm}) => {

    return(
        <>
            <Modal className="modalCheckout" show={showCheckoutForm} onHide={handleCloseCheckoutForm}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title>Orden de compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="mensajeIngreseDatos">Ingrese sus datos:</h6>
                    <Form noValidate validated={validatedCheckoutForm} onSubmit={handleSubmitCheckoutForm}>
                        <InputGroup className="mb-3" hasValidation>
                            <InputGroup.Text id="checkoutForm.ControlName"><BsFillPersonFill/></InputGroup.Text>
                            <Form.Control placeholder="Nombre y apellido" name="name" aria-label="name" aria-describedby="checkoutForm.ControlName" required autoFocus />
                            <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup className="mb-3" hasValidation>
                            <InputGroup.Text id="checkoutForm.ControlPhone"><BsTelephoneFill/></InputGroup.Text>
                            <Form.Control placeholder="Teléfono" name="phone" aria-label="phone" aria-describedby="checkoutForm.ControlPhone" required />
                            <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup className="mb-3" hasValidation>
                            <InputGroup.Text id="checkoutForm.ControlEmail"><MdEmail/></InputGroup.Text>
                            <Form.Control type="email" name="email" placeholder="Correo electrónico" aria-label="email" aria-describedby="checkoutForm.ControlEmail" required />
                            <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup className="mb-3" hasValidation>
                            <InputGroup.Text id="checkoutForm.ControlEmailConfirm"><MdEmail/></InputGroup.Text>
                            <Form.Control type="email" name="emailconfirm" placeholder="Repetir correo electrónico" aria-label="email" aria-describedby="checkoutForm.ControlEmailConfirm" required />
                            <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
                        </InputGroup>
                        
                        <div className="modal-footer formFooter">
                            <Button variant="primary" type="submit">Confirmar compra</Button>
                            <Button variant="secondary" onClick={handleCloseCheckoutForm}>Cancelar</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CheckoutForm