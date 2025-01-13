import { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

// Create the provider component
export const OrderProvider = ({ children }) => {

  const [orderItems, setOrderItems] = useState([]); 
  //   { name: "Cheeseburger", quantity: 1, price: 5 },
  //   { name: "French Fries", quantity: 1, price: 3 },
  //   { name: "Coke zero",    quantity: 1, price: 2 } 
  // ]);

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        setOrderItems,

      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Hook to access the OrderContext
export const useOrderContext = () => useContext(OrderContext);
