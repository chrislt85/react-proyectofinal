import '../../styles/NotFoundMessage.css';

import ContinueShoppingButton from './ContinueShoppingButton';

const NotFoundMessage = ({title, message}) => {

    return(
        <div className="messageContainer">
            <h1>{title}</h1>
            <h5>{message}</h5>
            <div className="messageFooter">
                <ContinueShoppingButton styleClass="outline-dark" />
            </div>
        </div>
    )
}

export default NotFoundMessage