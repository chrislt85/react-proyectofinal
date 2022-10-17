import '../styles/ItemDetail.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap"


const ItemDetail = ({item}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <img className="itemImage" src={item.pictureUrl} alt={item.description} />
                </Col>
                <Col>
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

