// app/providers.jsx
"use client";

import { createContext, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";

export const CartContext = createContext()

export function Providers({ children }) {
const [cartItems, setCartItems] = useState([])


  return (
  <ChakraProvider>
    <CartContext.Provider value={{cartItems, setCartItems}}>
    {children}
</CartContext.Provider>
    </ChakraProvider>

  );
}
