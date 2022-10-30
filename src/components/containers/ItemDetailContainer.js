import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../containers/ItemDetail";
import Loader from '../presentation/Loader';
import NotFoundMessage from '../presentation/NotFoundMessage';
import { filterCollection } from '../../utils/Firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [isloading, setLoading] = useState(true);
    const [itemnotfound, setItemNotFound] = useState(false);

    useEffect(() => {

            setItemNotFound(false);

            // Se carga el detalle del producto desde Firebase           
            const response = filterCollection("items",["id","==", id]);
            response.then((result)=>{
                if (result.size > 0)
                    setProducto(result.docs.map((item)=>item.data())[0]);
                else
                    setItemNotFound(true);
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{
                setLoading(false);
            });

    }, [id]);
    

    return(
        <>
            <div className="App">
                {isloading ? 
                    <Loader loadingText="Cargando detalle..." detail={true} /> 
                    : 
                        itemnotfound ? 
                            <NotFoundMessage title="El producto no existe!" message="El producto que estabas buscando no pudo ser encontrado." />
                        :
                            <section className="App-detail">
                                <ItemDetail item={producto} />
                            </section>
                }
            </div>
        </>
    )
}

export default ItemDetailContainer