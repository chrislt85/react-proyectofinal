import { Container, Row, Col } from "react-bootstrap"
import '../styles/Item.css';

const ItemDetail = ({item}) => {


    return (
        <Container>
            <Row>
                <Col>
                    <img className="itemImage" src={item.pictureUrl} alt={item.description} />
                </Col>
                <Col>
                    <h3>{item.title}</h3>
                    <h5>{item.description}</h5>
                    <h4>${item.price}</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;

