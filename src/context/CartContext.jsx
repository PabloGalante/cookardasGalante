import React from 'react';

export const CartContext = React.createContext();

const CartProvider = ( props ) => {

    const [cartItems, setCartItems] = React.useState([]);

    const addItem = (item, quantity) => {
        const newItem = {...item, quantity: quantity};
        
        for(const obj in cartItems){
            if(obj.id == item.id){
                setCartItems((prevState) => [...prevState, newItem]);
            }else{
                alert('No se puede agregar duplicado')
            }
        }
    }

    const removeItem = (itemId) => {
        const array = cartItems;

        array.filter((item) => item.id != itemId );

        return setCartItems(array);
    };

    const clear = () => {
        setCartItems([]);
    }

    const isInCart = (id) => {
        const index = cartItems.findIndex((item) => item.id == id); 
        if(index == -1){
            return false
        }else {
            return true;
        }
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addItem, removeItem, clear, isInCart }}>
            { props.children }
        </CartContext.Provider>
    )
}

export default CartProvider;