import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export default function FilterContextProvider(props) {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const contextValue2 = {show1, setShow1 , handleClose1 , handleShow1};

  return (
    <FilterContext.Provider value={contextValue2}>
        {props.children}
    </FilterContext.Provider>
  )
}
