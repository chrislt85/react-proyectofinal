const ItemStock = ({stock}) => {

    return (
        <>
            {
                (stock === 0) ?
                    <span>Sin stock disponible</span>
                :
                    (stock === 1) ?
                        <span>¡Última unidad disponible!</span>
                    :
                        <span>Stock disponible: {stock} unidades</span>
            }
        </>
    );
}
    
export default ItemStock;