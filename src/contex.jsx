import { createContext, useEffect, useState, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [carts, setCarts] = useState([])
    const [piece, setPiece] = useState(0);
    const [basket, setBasket] = useState(0)

    const fetchData = async () => {
        const result = await fetch('https://fakestoreapi.com/products?limit=6');
        const data = await result.json();
        console.log(data);
        setCarts(data)
    };

    /*   e.currentTarget.parentNode.children[1].innerText = piece; */

    const handleButtonP = (id) => {

        document.getElementById(id).childNodes[2].childNodes[1].innerText = piece
        //setPiece(prev => prev + 1)

        /*   e.currentTarget.parentNode.children[1].innerText = piece; */
    }
    const handleButtonM = (id) => {
        document.getElementById(id).childNodes[2].childNodes[1].innerText = piece


    }

    const addBasket = (id) => {
        const basketItem = carts.find(c => c.id === id)
    }



    useEffect(() => {
        fetchData();

    }, [])

    return (
        <AppContext.Provider value={{ carts, setCarts, piece, setPiece, handleButtonP, handleButtonM, basket, addBasket }}>{children}</AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default AppProvider;