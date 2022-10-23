import '../styles/ItemDetail.css';
import { Container, Row, Col, Card/*, Button*/ } from "react-bootstrap"
import { useState } from "react"
import ItemCart from '../components/ItemCart';

import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {

    const [finishpurchase, setFinishPurchase] = useState(false)

    const onAdd= (quantityToAdd)=> {
        // Simulo que agrego el pedido en el contexto
        console.log(`Se agregaron ${quantityToAdd} productos al carrito del producto "${item.title}"`);

        // Saco el componente "ItemCart", para que se reemplace por el boton de "Finalizar compra"
        setFinishPurchase(true);
    };

    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className="itemDetailImageContainer">
                        <img className="itemDetailImage" src={item.pictureUrl} alt={item.description} />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        {/*<Card.Header>Featured</Card.Header>*/}
                        <Card.Body>
                            <Card.Title><div className="itemTitle">{item.title}</div></Card.Title>
                            <Card.Text><div className="itemDescription">{item.description}</div></Card.Text>
                            <Card.Text><div className="itemPrice">$ {item.price}</div></Card.Text>
                        </Card.Body>
                        <Card.Body class="purchaseControls">
                            {
                                finishpurchase ?
                                    <Link to={`/cart`}>
                                        <Button variant="dark">Terminar compra</Button>
                                    </Link>
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

