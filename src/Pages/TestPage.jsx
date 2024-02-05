import Axios from "axios";
import { useQuery } from "react-query";
import BookCard from "./MainComponents/BookCard/BookCard";
import "../Pages/MainComponents/BookCard/BookCard.css";

export default function Test() {

    const { data: cardData } = useQuery(["card"], () => {
        return Axios.get("http://localhost:3001/card").then((res) => res.data);
      });
    
    var x = cardData ;


    return (
        <>
            <h1 style={{textAlign : "center"}}>Test</h1>
            <div>{x?.map((item) => {
                return <BookCard key={item.id} data = {item}/>
            })}</div>
        </>
    )
}