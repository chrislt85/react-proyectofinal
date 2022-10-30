import React, { useState } from 'react';
import Contexts from '../../context/Contexts';

export default function CartContext({children}) {
  
    const [cartList, setCartList] = useState([]);


    // Funcion para agregar cierta cantidad de un item al carrito
    const addToCart = (item, quantity) => {
        
        const itemIndex = cartList.findIndex((currItem) => currItem.id === item.id);
        if (itemIndex === -1)
        {// agrego el nuevo item en la lista (que NO existia aun)
            setCartList([...cartList, {...item, quantity}]);
        }
        else
        {// modifico el item existente en la lista
            let quantityInCart = cartList[itemIndex].quantity;
            // Se elimina el elemento de la lista
            cartList.splice(itemIndex, 1);
            
            // Se recalcula la nueva cantidad (verificando que nunca supere el stock para mantener la consistencia)
            quantityInCart = (((quantityInCart + quantity) > item.stock) ? (item.stock) : (quantityInCart + quantity));

            // Se vuelve a agregar el item con la nueva cantidad
            setCartList([...cartList, {...item, quantity: quantityInCart}]);
        }
    }

    // Funcion para remover un item del carrito
    const removeFromCart = (itemId) => {
        setCartList(cartList.filter((item) => item.id !== itemId))
    }

    // Funcion para remover todos los items del carrito
    const clearCart = () => {
        setCartList([]);
    }

    // Funcion para sumar la cantidad de items que tiene el carrito en total
	const getTotalItemsInCart = () => {
		return cartList.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0);
	}

    // Funcion para calcular el precio total acumulado en el carrito
	const getTotalPriceInCart = () => {
		return cartList.reduce((total, item) => total + item.quantity * item.price, 0);
	}

    return (
        <Contexts.CartContext.Provider value={{cartList, addToCart, removeFromCart, clearCart, getTotalItemsInCart, getTotalPriceInCart, setCartList}}>
            {children}
        </Contexts.CartContext.Provider>
    )
};
