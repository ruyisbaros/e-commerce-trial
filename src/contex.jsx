import { createContext, useEffect, useState, useContext } from "react";
import { userList } from "./utils/users";


/* 
 const {name, password,username,lname,email}=loginUser;
            setOnlineUser(prev=>{
                return {...prev,...loginUser}
                
            })
*/

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [carts, setCarts] = useState([])
    const [piece, setPiece] = useState(0);
    const [basketItems, setBasketItems] = useState([])
    const [basket, setBasket] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [online, setOnline] = useState(false);
    const [activeUsername, setActiveUsername] = useState('');
    const [password, setPassword] = useState('');
    const [onlineUser, setOnlineUser] = useState('');
    const [fail, setFail] = useState(false);


    const fetchData = async () => {
        const result = await fetch('https://fakestoreapi.com/products?limit=6');
        const data = await result.json();
        console.log(data);
        setCarts(data)
    };
    /*  const fetchData = () => {
         fetch("https://fashion4.p.rapidapi.com/v1/results", {
             "method": "POST",
             "headers": {
                 "content-type": "application/x-www-form-urlencoded",
                 "x-rapidapi-key": "f972e385b7msh6e7210eb7ee17b9p116fd0jsnfa070c37faab",
                 "x-rapidapi-host": "fashion4.p.rapidapi.com"
             },
             "body": {
                 "url": "https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg"
             }
         })
             .then(response => {
                 console.log(response);
             })
             .catch(err => {
                 console.error(err);
             });
     } */

    /*   e.currentTarget.parentNode.children[1].innerText = piece; */

    const findLoginUser = (uname) => {

        const loginUser = userList.find(user => user.username === uname);
        //console.log(loginUser);
        if (loginUser.password === Number(password)) {
            setOnlineUser(loginUser);
            setOnline(true)

            setActiveUsername('');
            setPassword('');

        } else {
            setFail(true)
            setActiveUsername('');
            setPassword('');
        }

    }

    console.log(onlineUser);

    const addBasket = (id) => {
        const basketItem = carts.find(c => c.id === id)
        console.log(basketItem);
        console.log(carts.includes(basketItem));
        if (basketItems.includes(basketItem)) {
            return setQuantity(prev => prev + 1), setBasket(prev => prev);


        } else {
            setBasketItems(old => {
                return [...old, basketItem]
            })
            setQuantity(prev => prev + 1)
        }

    }

    const basketTotalPrice = () => {
        let total = 0;
        basketItems.forEach(item => {
            total += item.price
        })

        setTotalPrice(total);
    }

    const removeBasket = (id) => {
        const newBasket = basketItems.filter(b => b.id !== id);
        setBasketItems(newBasket);
        setBasket(prev => prev - 1)
    }



    useEffect(() => {
        fetchData();

    }, [])

    useEffect(() => {
        basketTotalPrice()
    }, [basketItems.length])

    return (
        <AppContext.Provider value={{
            carts,
            setCarts, piece, setPiece, basket,
            setBasket, addBasket, basketItems,
            removeBasket, quantity, setQuantity,
            totalPrice, findLoginUser, activeUsername, setActiveUsername, password, setPassword, fail,
            online, onlineUser, setOnline
        }}>{children}</AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default AppProvider;