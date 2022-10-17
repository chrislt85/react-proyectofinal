import '../styles/Item.css';
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <>
            <Card className="itemCard">
                {/*<Card.Header>Featured</Card.Header>*/}
                <div className="itemImageContainer">
                    <Card.Img className="itemImage" variant="top" src={item.pictureUrl} />
                </div>
                <Card.Body>
                    <Card.Title className="itemPrice">$ {item.price}</Card.Title>
                    <Card.Text className="itemText">{item.title}</Card.Text>
                </Card.Body>
                {/*<Card.Footer className="text-muted">Sin stock disponible</Card.Footer>*/}
                <Card.Footer>
                    <Link to={`/items/${item.id}`}>
                        <Button variant="dark">Ver detalle</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Item