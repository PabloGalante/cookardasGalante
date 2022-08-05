import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [fetchedItem, setFetchedItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    let param = useParams();

    useEffect(() => {
        setIsLoading(true);

        const db = getFirestore();

        const docRef = doc(db, "cookies", param.id);

        getDoc(docRef)
            .then((snapshot) => setFetchedItem({id: snapshot.id, ...snapshot.data()}))
            .finally(() => setIsLoading(false));

    }, [param.id])
    
    return (
        isLoading ? <Loading/> : <ItemDetail item={fetchedItem} fetched={{fetchedItem: fetchedItem, setFetchedItem: setFetchedItem}} />
    )
}

export default ItemDetailContainer;