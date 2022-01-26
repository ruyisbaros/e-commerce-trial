
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputIcon from '@mui/icons-material/Input';
/* import CategoryIcon from '@mui/icons-material/Category'; */
import './navbar.css';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../contex'

const Navbar = () => {
    const { basket } = useGlobalContext()
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="navLeft">
                    <Link to="/">
                        <h1 className="logo">Ahmet</h1>
                    </Link>
                </div>
                <div className="navCenter">
                    <input type="text" placeholder="Search..." />
                    <Search />
                </div>
                <div className="navRight">


                    <div className="menuItem">
                        <Link to="register">
                            <h2>Register</h2>
                        </Link>
                        <HowToRegIcon />
                    </div>
                    <div className="menuItem">
                        <Link to="/login" >
                            <h2>sign in</h2>
                        </Link>
                        <InputIcon />
                    </div>
                    <div className="menuItem">
                        <Badge badgeContent={basket} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Navbar;
