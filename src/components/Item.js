import { Card, Button/*, Container, Row, Col*/} from "react-bootstrap"
import {Link/*NavLink*/} from "react-router-dom"

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
                    {/*<NavLink className="nav-link" to={`/category/1`}>Lámparas</NavLink>*/}
                </Card.Body>
                        {/*<Card.Footer className="text-muted">Sin stock disponible</Card.Footer>*/}
            </Card>  
            {/*<p>
                {item.id} - {item.title} (${item.price}) - {item.description}
            </p>
    <img src={item.pictureUrl} key={item.id} alt={item.title}></img>*/}
            
            
        </>
    )
}

export default Item