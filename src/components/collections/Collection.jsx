import './collection.css';
import { Link } from 'react-router-dom'

const Collection = () => {
    return (
        <div className="collection">
            <div className="foto1">
                <img src="https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=390&w=600" alt="" />
                <div className="info colInfo1">
                    <h1>women</h1>
                    <h3>collection</h3>
                    <Link to="/products">
                        <button className="view">view</button>
                    </Link>
                </div>
            </div>
            <div className="foto2">
                <img src="https://images.pexels.com/photos/2061902/pexels-photo-2061902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div className="info colInfo2">
                    <h1>men</h1>
                    <h3>collection</h3>

                    <Link to="/products">
                        <button className="view">view</button>
                    </Link>

                </div>
            </div>
            <div className="foto3">
                <img src="https://images.pexels.com/photos/5325599/pexels-photo-5325599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div className="info colInfo3">
                    <h1>kid</h1>
                    <h3>collection</h3>
                    <Link to="/products">
                        <button className="view">view</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Collection;


