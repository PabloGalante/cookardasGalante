import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({totalItems}) => {
    return (
        <>
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            <span style={{margin: '5px', alignSelf: 'center', fontWeight: 'bold'}}>{totalItems}</span>
        </>
    )
}

export default CartWidget;