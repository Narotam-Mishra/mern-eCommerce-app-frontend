/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);

//get default cart items
const getDefaultCart = () => {
    let cart = {};
    for(let i=0; i<all_product.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const[cartItems, setCartItems] = useState(getDefaultCart());
    
    // console.log(cartItems);

    // add to cart function
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    // function to remove items from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += (itemInfo.new_price * cartItems[item]);
            }
        }
        //console.log(totalAmount);
        return totalAmount;
    }

    // function to calculate total amount of cart items
    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    // using context value to share required functions and objects among components
    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;