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
    const [allUsers, setAllUsers] = useState(userList);
    const [newUser, setNewUser] = useState({
        fname: '',
        lname: '',
        username: '',
        email: '',
        password: ''
    });

    const [buyPrice, setBuyPrice] = useState(0);
    const [totalActive, setTotalActive] = useState(false)

    console.log(allUsers);

    const fetchData = async () => {
        const result = await fetch('https://fakestoreapi.com/products?limit=6');
        const data = await result.json();
        console.log(data);
        setCarts(data)
    };

    const createNewUser = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setNewUser({ ...newUser, [name]: value });
        value = ''
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllUsers([...allUsers, newUser])

    }

    const findLoginUser = (uname) => {

        const loginUser = allUsers.find(user => user.username === uname);
        console.log(loginUser);
        console.log(fail);
        if (loginUser) {
            setFail(false);

            if (loginUser.password === password) {
                setOnlineUser(loginUser);
                setOnline(true)
                setFail(false);
                setActiveUsername('');
                setPassword('');

            } else {
                setFail(true)
                setActiveUsername('');
                setPassword('');
            }
        } else {
            setFail(true)
            setActiveUsername('');
            setPassword('');
        }
    }

    console.log(onlineUser);

    const buySingleItem = (id) => {
        const buyItem = carts.find(c => c.id === id);
        setBuyPrice(buyItem.price)
    }

    const buyTotal = (ttal) => {
        setBuyPrice(ttal)
    }


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
            online, onlineUser, setOnline, createNewUser, newUser, handleSubmit, buySingleItem, buyPrice, buyTotal
        }}>{children}</AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default AppProvider;