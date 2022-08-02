import React from 'react';

export const CartContext = React.createContext();

const CartProvider = ( props ) => {

    const [cartItems, setCartItems] = React.useState([]);

    console.log(cartItems);

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

    return (
        <CartContext.Provider value={{ 
                                        cartItems, 
                                        setCartItems,
                                        addItem,
                                        removeItem,
                                        clear,
                                        isInCart,
                                        totalItems,
                                        totalPrice
                                    }}>
            { props.children }
        </CartContext.Provider>
    )
}

export default CartProvider;