import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <>
            <Card style={{ width: '18rem', color: 'black' }}>
                {/*<Card.Header>Featured</Card.Header>*/}
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Link to={`/items/${item.id}`}>
                        <Button variant="primary">Ver detalle</Button>
                    </Link>
                </Card.Body>
                {/*<Card.Footer className="text-muted">Sin stock disponible</Card.Footer>*/}
            </Card>
        </>
    )
}

export default Item