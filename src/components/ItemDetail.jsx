import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

const ItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 50%;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
    background: #ffe9d1;
`

const ItemDetailImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`

const ItemDetailTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem;
    letter-spacing: 0.2rem;
`

const ItemDetailText = styled.p`
    margin: 0.4rem;
    font-size: 1.2rem;
`

const ItemDetail = ({ item }) => {
    const [amount, setAmount] = useState(0);
    const [remainingStock, setRemainingStock] = useState(item.stock);

    const onAdd = (amount) => {
        setAmount(amount);
    };

    return (
        <>
            <ItemDiv>
                <ItemDetailImg src={item.pictureUrl} alt={item.title} />
                <ItemDetailTitle>{item.title}</ItemDetailTitle>

                <ItemDetailText>{item.description}</ItemDetailText>
                <ItemDetailText>Quedan {remainingStock} cookies!</ItemDetailText>
                <ItemDetailText>$: {item.price}</ItemDetailText>

                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} id={item.id} />

                <ItemDetailText>Carrito: {amount}</ItemDetailText>
            </ItemDiv>
        </>
    )
}

export default ItemDetail;