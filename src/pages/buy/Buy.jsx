import './buy.scss';
import { useGlobalContext } from '../../contex'

const Buy = () => {

    const { buyPrice } = useGlobalContext();

    return (
        <div className="buy">
            <div className="buy-left">
                <h1>Checkout</h1>
                <p>Billing Adress:</p>
                <input type="text" placeholder="Country" />
                <div className="credit">
                    <span>Credit Card</span>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </div>
                <div className="card-info">
                    <input type="text" placeholder="Name on Card" />
                    <input type="text" placeholder="Card Number" />
                </div>
                <div className="card-date">
                    <input type="text" placeholder="MM" />
                    <input type="text" placeholder="YYYY" />
                    <input type="text" placeholder="Security Code" />
                </div>
            </div>
            <div className="buy-right">
                <h2>Summary</h2>
                <p>Total Price: <span>{buyPrice} €</span></p>
                <p>Discount: <span>0.00 €</span></p>
                <hr />
                <h3>Total: <span>{buyPrice} €</span></h3>
                <button>Complete Payment</button>
            </div>

        </div>
    )
}

export default Buy
