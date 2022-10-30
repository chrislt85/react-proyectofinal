import '../../styles/CheckoutOrder.css';

import { Modal, Container, Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import ContinueShoppingButton from './ContinueShoppingButton';

const CheckoutOrder = ({showCheckoutOrder, generatingOrder, orderId}) => {

    return(
        <>
            <Modal className="modalOrder" show={showCheckoutOrder} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                {
                    (generatingOrder) ? 
                        <></>
                    :
                        <Modal.Header>
                            <Modal.Title>Compra exitosa</Modal.Title>
                        </Modal.Header>
                }
                <Modal.Body>
                    <Container>
                        {
                            (generatingOrder) ?
                                <Col>
                                    <Row>
                                        <div className="spinnerGeneratingOrder">
                                            <Spinner animation="grow" variant="light" />
                                        </div>
                                        <p>Generando orden...</p>
                                    </Row>
                                </Col>
                            :
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
                        }
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CheckoutOrder