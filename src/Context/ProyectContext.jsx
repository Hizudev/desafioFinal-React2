import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProyectContext = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addToOrder = (pizzaObj) => {
    if (order.some((item) => item.id === pizzaObj.id)) {
      const index = order.map((item) => item.id).indexOf(pizzaObj.id);
      order[index].quantity = order[index].quantity + 1;
      setOrder([...order]);
      setTotalQuantity(totalQuantity + 1);
      setTotalAmount(totalAmount + pizzaObj.price);
    } else {
      order.push(pizzaObj);
      const index = order.map((item) => item.id).indexOf(pizzaObj.id);
      order[index].quantity = 1;
      setOrder([...order]);
      setTotalQuantity(totalQuantity + 1);
      setTotalAmount(totalAmount + pizzaObj.price);
    }
  };

  return (
    <ProyectContext.Provider
      value={{
        order,
        setOrder,
        addToOrder,
        totalAmount,
        setTotalAmount,
        totalQuantity,
        setTotalQuantity,
        navigate,
      }}
    >
      {children}
    </ProyectContext.Provider>
  );
};

export const useProyectContext = () => useContext(ProyectContext);
