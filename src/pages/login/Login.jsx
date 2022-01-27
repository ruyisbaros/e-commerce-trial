import './login.scss';
import { useGlobalContext } from '../../contex';
import { Link } from 'react-router-dom';


const Login = () => {
    const { findLoginUser, activeUsername, setActiveUsername, password, setPassword, fail } = useGlobalContext()

    return (
        <div className="login">
            <div className="wrapper">
                <h1>SIGN IN</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input placeholder="username" value={activeUsername} onChange={(e) => setActiveUsername(e.target.value)} />

                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {fail && <h3>Wrong info has been typed</h3>}
                    <button onClick={() => findLoginUser(activeUsername)}>
                        {!fail ? <Link to="/login">LOGIN</Link> : <Link to="/">LOGIN</Link>}
                    </button>

                    {/*  */}

                    <a href="/register">DID YOU FORGET THE PASSWORD?</a>
                    <a href="/register">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
};

export default Login;
