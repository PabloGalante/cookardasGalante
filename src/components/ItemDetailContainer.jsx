import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({item, setIsOpen}) => {
    const [fetchedItem, setFetchedItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(true), 2000);
    });

    useEffect(() => {
        setIsLoading(true);

        promise
            .then((res) => {
                res && setFetchedItem(item);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Loading/>;
    return (
        <ItemDetail item={fetchedItem} setIsOpen={setIsOpen} />
    )
}

export default ItemDetailContainer;