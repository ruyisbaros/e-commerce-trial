import './item.scss'
import { useGlobalContext } from '../../contex';
import { Link } from 'react-router-dom'

const Item = ({ id, category, description, image, price, title }) => {

    const { setBasket, addBasket, buySingleItem } = useGlobalContext()

    return <div id={id} className="cartItem">
        <img src={image} alt={title} />
        <div className="details">
            <h4>{title}</h4>
            <h6>{category}</h6>
            <span>
                <h5>{price} </h5>
                <span>€</span>
            </span>

        </div>
        <div className="shop">
            <button onClick={() => {
                setBasket(prev => prev + 1);
                addBasket(id)
            }} className="add_basket">Add Basket</button>

            <Link to="/buy">
                <button onClick={() => buySingleItem(id)} className="buy_it">Buy</button>
            </Link>

        </div>
    </div>;
};

export default Item;
