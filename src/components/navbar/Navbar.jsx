
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputIcon from '@mui/icons-material/Input';
import LogoutIcon from '@mui/icons-material/Logout';
import './navbar.scss';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../contex'

const Navbar = () => {
    const { basket, online, onlineUser, setOnline } = useGlobalContext()
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
                        {online ? <h2 className="welcome">Welcomeback <span>{onlineUser.fname}</span></h2> :
                            <>
                                <Link to="register">
                                    <h2>Register</h2>
                                </Link>
                                <HowToRegIcon style={{ color: 'blue' }} />
                            </>
                        }

                    </div>
                    <div className="menuItem">
                        {online ? <>
                            <Link to="/login" >
                                <h2 onClick={() => setOnline(false)}>Log out</h2>
                            </Link>
                            <LogoutIcon style={{ color: 'red' }} /></> :
                            <>
                                <Link to="/login" >
                                    <h2>sign in</h2>
                                </Link>
                                <InputIcon style={{ color: 'blue' }} />
                            </>
                        }
                    </div>
                    <div className="menuItem">
                        <Badge badgeContent={basket} color="primary">
                            <Link to="/basket">
                                <ShoppingCartOutlined style={{ color: 'blue', fontSize: '30px' }} />
                            </Link>
                        </Badge>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Navbar;
