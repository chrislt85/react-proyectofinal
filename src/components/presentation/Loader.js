import '../../styles/Loader.css';

import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loader = ({loadingText, detail}) => {
    const [containerclass, setContainerClass] = useState("loadingContainer");

    useEffect(() => {
        if (detail)
            setContainerClass("loadingContainer detail");
        else
            setContainerClass("loadingContainer products");
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className={containerclass}>
            <Spinner animation="border" role="status" className="spinner">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <span className="loadingText">{loadingText}</span>
        </div>
    )
}

export default Loader