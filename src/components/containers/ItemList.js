import Item from './Item';
import { Container, Row, Col } from "react-bootstrap"
import NotFoundMessage from '../presentation/NotFoundMessage';

const ItemList = ({products}) => {

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