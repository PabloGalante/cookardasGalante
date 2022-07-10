import ItemCount from './ItemCount';
const ItemListContainer = (props) => {

    return (
        <>
            <h2>{props.greeting}</h2>
            <br/>
            <ItemCount stock="30" initial="1" onAdd />
        </>
    )
}

export default ItemListContainer;