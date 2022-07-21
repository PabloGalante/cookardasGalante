import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataList from '../data/itemListData.json';
import Loading from './Loading';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({item}) => {
    const [fetchedItem, setFetchedItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const param = useParams();

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(dataList), 2000);
    });

    useEffect(() => {
        setIsLoading(true);

        promise
            .then((res) => {
                const items = res.filter((item) => item.id == param.id);
                setFetchedItem(items[0]);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    if (isLoading) return <Loading/>;
    
    return (
        <ItemDetail item={fetchedItem} />
    )
}

export default ItemDetailContainer;