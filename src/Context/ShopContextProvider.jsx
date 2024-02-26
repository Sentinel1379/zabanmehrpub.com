import { Axios } from "axios";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {
  const { data: cardData } = useQuery(["card"], () => {
    return Axios.get("https://zabanmehrpub-com-a9z5-rfrub7m1z-sentinels-projects.vercel.app/api/Data").then((res) => res.data);
  });

  const cardBooks = cardData && cardData;

  const [cartItems, setCartItems] = useState();

  const [amountPrice, setAmountPrice] = useState(0);

  useEffect(() => {
    if (cartItems !== undefined) {
      localStorage.setItem("Cart_Items", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    const data = localStorage.getItem("Cart_Items");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : [])
  }, []);

  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item?.Item.id === itemId)) {
      setCartItems([
        ...cartItems,
        { Item: cardBooks[itemId - 1], count: 1 },
      ]);
      console.log(cartItems);
    } else {
      setCartItems(
        cartItems?.map((item) => {
          if (itemId === item?.Item.id) {
            return { ...item, count: item.count + 1 };
          } else return item;
        })
      );
    }
    setAmountPrice(() => {
      let x = 0;
      x = amountPrice;
      return x + parseInt(cardBooks[itemId - 1].Newprice);
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.Item.id === itemId) {
          return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
        } else return item;
      })
    );
    setAmountPrice(() => {
      let x = 0;
      x = amountPrice;
      return x - +cardBooks[itemId - 1].Newprice;
    });
  };

  const deleteFromCart = (itemId) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.Item.id === itemId) {
          return { ...item, count: 0 };
        } else return item;
      })
    );
    setAmountPrice(() => {
      let x = 0;
      x = amountPrice;
      return x - +cardBooks[itemId - 1].Newprice;
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const contextValue = {
    cardBooks,
    cartItems,
    amountPrice,
    show,
    handleClose,
    handleShow,
    deleteFromCart,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}


// const { data: cardData } = useQuery(["card"], () => {
//   return Axios.get("http://localhost:3001/card").then((res) => res.data);
// });
