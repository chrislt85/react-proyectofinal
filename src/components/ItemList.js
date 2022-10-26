import Item from '../components/Item';
import { Container, Row, Col } from "react-bootstrap"

const ItemList = ({products}) => {

    // console.log('Productos', products);
    return(
        <Container>
            <Row>
                {products.map((product) => (
                    <Col>
                        <Item key={product.id} item={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ItemList