import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loading from './Loading';
const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 2000)
    });

    useEffect(() => {
        setIsLoading(true);

        promise
        .then((res) => {
            if(res){
                setItems([{
                    id: 1,
                    title: "Cookie de Vainilla",
                    description: 'Masa de Vainilla con Chips de Chocolate Negro',
                    price: 250,
                    pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/192/145/products/cookie-vainilla-con-chips1-b18166013da94d2e7715899028696575-1024-1024.jpg',
                    stock: 30
                },
                {
                    id: 2,
                    title: "Cookie de Chocolate",
                    description: 'Masa de Chocolate con Chips de Chocolate Negro',
                    price: 250,
                    pictureUrl: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/02/XXL-Double-Chocolate-Cookie.jpg',
                    stock: 15
                },
                {
                    id: 3,
                    title: "Cookie de Frambuesa",
                    description: 'Masa de Frambuesa con Chips de Chocolate Blanco',
                    price: 280,
                    pictureUrl: 'https://w7.pngwing.com/pngs/833/947/png-transparent-biscuits-chocolate-chip-cookie-white-chocolate-red-velvet-cake-chocolate-truffle-choco-chips-baked-goods-food-chocolate-chip-cookie-thumbnail.png',
                    stock: 25
                },
            ])
            }
        })
        .catch((err) => {
            setItems([])
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <Loading/>;
    return (
        <>
            <h2 style={{textAlign: 'center', marginTop: '40px', fontSize: "2rem"}}>{props.greeting}</h2>
            <br/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;