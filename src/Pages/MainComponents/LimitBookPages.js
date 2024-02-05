import Axios from "axios";
import { createContext, useState } from "react";

export const LimitPageBooks = createContext(null)

export default function LimitPageBooksProvider(props) {

    const [limit, setLimit] = useState([{ id: 1 }, { id: 2 },
    { id: 3 }, { id: 4 }, { id: 5 },
    { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }]);

    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);

    function LimitPage(i1, i2) {
        Axios.get(`http://localhost:3001/card?_start=${i1}&_end=${i2}`).then((response) => {
            var data = response.data;
            return setLimit(data);
        });
    }


    const contextValue1 = { limit, setLimit, LimitPage, page1, setPage1, page2, setPage2, page3, setPage3 };
    return (
        <LimitPageBooks.Provider value={contextValue1}>
            {props.children}
        </LimitPageBooks.Provider>
    )

}