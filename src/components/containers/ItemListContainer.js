import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemList from './ItemList';
import Loader from '../presentation/Loader';
import { filterCollection, getCollection } from '../../utils/Firebase';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [itemsnotfound, setItemsNotFound] = useState(false);
    const { id } = useParams();

    useEffect(() => {
            
            // se carga el loader nuevamente (para evitar que NO se muestre si paso de una sección a otra)
            setLoading(true);
            
            // se cargan los productos de Firebase
            const response = ((id !== undefined) ? filterCollection("items",["category","==", id]) : getCollection('items'));
            response.then((result)=>{
                
                if (result.size > 0)
                    setProductos(result.docs.map((item)=>item.data()));
                
                setItemsNotFound(result.size === 0);
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{
                setLoading(false);
            });

    }, [id]);

    return(
        <>
            <div className="App">
                {
                    (!isloading && itemsnotfound) ? 
                        <>
                        </>
                    :
                        <header className="App-header">
                            <h5>
                                {greeting}
                            </h5>
                        </header>
                }
                <section className="App-body">
                    {isloading ? 
                        <Loader loadingText="Cargando productos..." detail={false} />
                        :
                        <ItemList key="itemlist" products={productos} />
                    }
                </section>
            </div>
        </>
    )
}

export default ItemListContainer