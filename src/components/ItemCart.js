import '../styles/ItemCart.css';
import { useState } from "react"
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap"


const ItemCart = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const handleAddCount = () => {
        setCount(count + 1);
    };

    const handleSubCount = () => {
        setCount(count - 1);
    };

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <ButtonGroup className="counterCointainer">
                            <Button className="btnCount" variant="outline-primary" onClick={handleSubCount} disabled={count <= initial}>-</Button>
                            <label className="lblCounter">{count}</label>
                            <Button className="btnCount" variant="outline-primary" onClick={handleAddCount} disabled={count >= stock}>+</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btnAddToCart" variant="outline-primary" onClick={() => { onAdd(count) }} disabled={stock <= 0}>Agregar al carrito</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemCart