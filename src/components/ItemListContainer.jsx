import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataList from '../data/itemListData.json';
import ItemList from './ItemList';
import Loading from './Loading';
const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(dataList), 2000);
    });

    useEffect(() => {
        setIsLoading(true);

        promise
        .then((res) => {
            if(id){
                setItems(res.filter((product) => product.category == id))
            }else {
                setItems(res)
            }
        })
        .catch((err) => {
            setItems([])
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [id]);

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