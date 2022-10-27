import Item from '../components/Item';
import { Container, Row, Col } from "react-bootstrap"
import NotFoundMessage from '../components/NotFoundMessage';

const ItemList = ({products}) => {

    // console.log('Productos', products);
    return(
        <Container>
            <Row>
                {
                    (products.length > 0) ?
                        products.map((product) => (
                            <Col>
                                <Item key={product.id} item={product} />
                            </Col>
                        ))
                    :
                        <Col>
                            <NotFoundMessage title="" message="No hay productos a mostrar." />
                        </Col>
                }
            </Row>
        </Container>
    )
}

export default ItemList