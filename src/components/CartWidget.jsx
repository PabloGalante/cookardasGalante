import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const BagLink = styled.a`
    text-decoration: none;
    color: inherit;
    margin: 10px;
`

const CartWidget = () => {
    return (
        <BagLink href="">
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
        </BagLink>
    )
}

export default CartWidget;