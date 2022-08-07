import React from 'react';
import { addDoc, collection, getFirestore, updateDoc, doc } from 'firebase/firestore';

export const CartContext = React.createContext();

const CartProvider = ( props ) => {

    const [cartItems, setCartItems] = React.useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setCartItems(cartItems.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCartItems([...cartItems, {...item, quantity}])
        }
    }

    const removeItem = (id) => setCartItems(cartItems.filter(item => item.id !== id ));

    const clear = () => setCartItems([]);

    const isInCart = (id) => cartItems.find(item => item.id === id) ? true : false;

    const totalPrice = () => {
        return cartItems.reduce((previous, current) => {
            return previous + current.quantity * current.price
        }, 0)
    };

    const totalItems = () => {
        return cartItems.reduce((previous, current) => {
            return previous + current.quantity;
        }, 0)
    };

    const sendOrder = (total, buyerData) => {
        const timestamp = Date.now(); 
        const fecha = new Date(timestamp);

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        const order = {
            buyerData,
            items: cartItems,
            fecha,
            total
        };

        addDoc(orderCollection, order)
            .then((res) => alert(`Su compra fue realizada con exito. Su numero de orden es ${res.id}`))
            .catch((err) => console.log(err));
        
        updateStock(order);
        clear();
    };

    const updateStock = (order) => {
        const db = getFirestore();

        order.items.forEach((item) => {
            const orderQuantity = item.quantity;
            console.log(orderQuantity);
            const itemStock = parseInt(item.stock);
            console.log(itemStock);
            const docRef = doc(db, "cookies", item.id);
            updateDoc(docRef, {stock: itemStock - orderQuantity});
        });
    }

    return (
        <CartContext.Provider value={{ 
                                        cartItems, 
                                        setCartItems,
                                        addItem,
                                        removeItem,
                                        clear,
                                        isInCart,
                                        totalItems,
                                        totalPrice,
                                        sendOrder
                                    }}>
            { props.children }
        </CartContext.Provider>
    )
}

export default CartProvider;