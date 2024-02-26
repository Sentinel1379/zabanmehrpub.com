import Axios from "axios";
import { createContext, useState } from "react";
import { DATA } from "../../Data/cardData";

export const LimitPageBooks = createContext(null)

export default function LimitPageBooksProvider(props) {

    const cardData1 = DATA.map((Item) => {
        return Item
    })

    const [limit, setLimit] = useState([cardData1[0], cardData1[1], cardData1[2], cardData1[3]
        , cardData1[4], cardData1[5], cardData1[6]
    ]);


    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);

    function LimitPage(i1) {
        setLimit([cardData1[i1], cardData1[i1 + 1], cardData1[i1 + 2], cardData1[i1 + 3]
            , cardData1[i1 + 4], cardData1[i1 + 5], cardData1[i1 + 6]]
        )
    }


    const contextValue1 = { limit, setLimit, LimitPage, page1, setPage1, page2, setPage2, page3, setPage3 };
    return (
        <LimitPageBooks.Provider value={contextValue1}>
            {props.children}
        </LimitPageBooks.Provider>
    )

}