import './basket.scss';
import { useGlobalContext } from '../../contex'

const Basket = () => {
    const { basketItems, removeBasket, quantity, setQuantity, totalPrice } = useGlobalContext()

    if (basketItems.length === 0) {
        return (
            <div className="empty">
                <h1>Your Basket is empty</h1>
            </div>
        )
    }
    return (
        <div className="basket">
            <div className="main">
                {basketItems.map(item => {
                    const { id, category, description, image, price, title, rating: { rate, count } } = item;

                    return (
                        <div key={id} className="box">
                            <img src={image} alt={title} />
                            <div className="info-box">
                                <h4>{title}</h4>
                                <h6>{category}</h6>
                                <p>{description}</p>
                                <div className="sizes">
                                    <h3 onClick={() => setQuantity(prev => prev + 1)}>0</h3>
                                    <select name="size" id="size">
                                        <option select value="">S</option>
                                        <option value="">M</option>
                                        <option value="">L</option>
                                        <option value="">XL</option>
                                        <option value="">XXL</option>
                                    </select>

                                </div>
                                <div>
                                    <p>Rate: {rate}</p>
                                    <div className="rateB">
                                        <label htmlFor="rates">Give Your Rate</label>
                                        <select name="rates" id="rates">
                                            <option select value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>

                                <span>Available: {count}</span>
                            </div>
                            <div className="buttons">
                                <button className="buy">Buy</button>
                                <button onClick={() => removeBasket(id)} className="remove">Remove</button>
                            </div>
                            <h1>{price} <span>€</span></h1>

                        </div>
                    )
                })}
            </div>
            <div className="summary">
                <h3>Summary:</h3>
                <div className="sumbox">
                    <h5>Total Price: {totalPrice.toFixed(2)} €</h5>
                    <span>Credits: 00.0 €</span>
                    <p className="cargo">Cargo: 00.0 €</p>
                    <p>-------------------------</p>
                    <h4>Total: {totalPrice.toFixed(2)} €</h4>
                </div>
                <button className="confirm">Confirm</button>
            </div>

        </div>
    )
};

export default Basket;
