import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <>
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            <span style={{margin: '5px', alignSelf: 'center', fontWeight: 'bold'}}>{cartItems.length}</span>
        </>
    )
}

export default CartWidget;