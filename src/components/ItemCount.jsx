import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
const ItemCount = ({stock, initial, onAdd}) => {

    const [iValue, setiValue] = useState(Number(initial));

    function clickHandler(event){
        if( event === "-" && iValue > 0){
            return () => setiValue( iValue - 1)
        }else if( event === "+" && iValue < stock){
            return () => setiValue( iValue + 1)
        }
    }

    return (
        <>
            <button onClick={clickHandler("-")}>-</button>
                <Input type="number" value={iValue} readOnly />
            <button onClick={clickHandler("+")}>+</button>
        </>
    )
}

export default ItemCount;