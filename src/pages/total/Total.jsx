import './total.scss';

const Total = ({ totalPrice }) => {
    return (
        <div className="checkout">
            <h1>Total Amount</h1>
            <div className="money">
                <h4>{totalPrice}
                    <p>EUR</p>
                </h4>
            </div>
            <button>Confirm</button>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, qui blanditiis, ea doloremque mollitia itaque commodi atque dignissimos eaque corrupti nostrum repellendus non. Rem, fugiat! Quaerat natus voluptatem maiores animi!
            </p>
            <div className="cargo">
                <div className="cargoAmount">
                    <p>Cargo</p>
                    <p className="freeShip">
                        cost free
                    </p>
                    <p className="shipCost">12 EUR</p>
                </div>
                <div className="orderTotal">
                    <p className="items">
                        Items
                    </p>
                    <p className="orderAmount">{totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Total;
