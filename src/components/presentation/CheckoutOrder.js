import '../../styles/CheckoutOrder.css';

import { Modal, Container, Col, Row } from 'react-bootstrap';
import ContinueShoppingButton from './ContinueShoppingButton';

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
            </Modal>
        </>
    )
}

export default CheckoutOrder