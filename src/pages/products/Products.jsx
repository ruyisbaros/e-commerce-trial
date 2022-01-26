import Item from '../../components/item/Item';
import Total from '../total/Total'
import { useGlobalContext } from '../../contex';
import './product.scss'

const Carts = () => {
    const { carts } = useGlobalContext()

    return (
        <div className="container">

            <div className="main">
                <div className="itemList">
                    {carts.map(cart => (
                        <Item key={cart.id} {...cart} />
                    ))}
                </div>
                <div>
                    <Total />
                </div>

            </div>
        </div>
    )
};

export default Carts;
