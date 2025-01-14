import { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

// Create the provider component
export const OrderProvider = ({ children }) => {

  const [orderItems, setOrderItems] = useState([]); 
  const [burgerOrder, setBurgerOrder ] = useState({orderItems:[]})

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        setOrderItems,
        burgerOrder,
        setBurgerOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Hook to access the OrderContext
export const useOrderContext = () => useContext(OrderContext);
