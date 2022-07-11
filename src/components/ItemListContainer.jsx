import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 2000)
    });

    useEffect(() => {
        promise
        .then((res) => {
            if(res){
                setItems([{
                    id: 1,
                    title: "Cookie de Vainilla",
                    description: 'Masa de Vainilla con Chips de Chocolate Negro',
                    price: 250,
                    pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/192/145/products/cookie-vainilla-con-chips1-b18166013da94d2e7715899028696575-1024-1024.jpg'
                },
                {
                    id: 2,
                    title: "Cookie de Chocolate",
                    description: 'Masa de Chocolate con Chips de Chocolate Negro',
                    price: 250,
                    pictureUrl: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/02/XXL-Double-Chocolate-Cookie.jpg'
                },
                {
                    id: 3,
                    title: "Cookie de Frambuesa",
                    description: 'Masa de Frambuesa con Chips de Chocolate Blanco',
                    price: 280,
                    pictureUrl: 'https://w7.pngwing.com/pngs/833/947/png-transparent-biscuits-chocolate-chip-cookie-white-chocolate-red-velvet-cake-chocolate-truffle-choco-chips-baked-goods-food-chocolate-chip-cookie-thumbnail.png'
                }])
            }
        })
        .catch((err) => {
            setItems([])
        })
    });

    return (
        <>
            <h2 style={{textAlign: 'center'}}>{props.greeting}</h2>
            <br/>
            <ItemCount stock="30" initial="1" onAdd />
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;