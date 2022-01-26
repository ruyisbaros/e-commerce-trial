import './item.css'
import { useGlobalContext } from '../../contex'

const Item = ({ id, category, description, image, price, title, rating: { rate, count } }) => {

    const { piece, setPiece, handleButtonP, handleButtonM } = useGlobalContext()

    return <div id={id} className="cartItem">
        <img src={image} alt={title} />
        <div className="details">
            <h4>{title}</h4>
            <h6>{category}</h6>
            <h5>{price} </h5>
            <span>EUR</span>
            <h2>{price}</h2>
            <button className="delete">delete</button>
        </div>
        <div className="quantity">
            <button onClick={() => {
                handleButtonP(id);
                setPiece(piece + 1)
            }} className="plus">
                +
            </button>
            <p className="amountp">0</p>
            <button onClick={() => {
                handleButtonM(id);
                setPiece(piece - 1)
            }} className="minus">
                -
            </button>
            <p className="amountm">0</p>
        </div>
    </div>;
};

export default Item;
