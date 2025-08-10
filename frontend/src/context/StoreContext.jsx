import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets"; 

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const updatedCount = (prev[itemId] || 0) - 1;
            if (updatedCount <= 0) {
                const updatedCart = { ...prev };
                delete updatedCart[itemId];
                return updatedCart;
            }
            return { ...prev, [itemId]: updatedCount };
        });
    };

    useEffect(() => {
        console.log("Cart updated:", cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};
