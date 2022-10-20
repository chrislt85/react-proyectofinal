import '../styles/ItemDetail.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap"


const ItemDetail = ({item}) => {
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
                            <Card.Title><h3>{item.title}</h3></Card.Title>
                            <Card.Text><h6>{item.description}</h6></Card.Text>
                            <Card.Text><h2>$ {item.price}</h2></Card.Text>
                        </Card.Body>
                        {/*<Card.Footer className="text-muted">Sin stock disponible</Card.Footer>*/}
                        <Card.Footer>
                            {/*<Link to={`/items/${item.id}`}>*/}
                                <Button variant="dark" size="lg">Agregar al carrito</Button>
                            {/*</Link>*/}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;

