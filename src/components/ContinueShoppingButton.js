import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContinueShoppingButton = ({styleClass}) => {

    return (
        <>
             <Button as={Link} to="/" variant={styleClass}>
                Seguir comprando
            </Button>
        </>
    );
}
    
export default ContinueShoppingButton;