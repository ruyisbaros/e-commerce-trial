import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="wrapper">
                <h1>SIGN IN</h1>
                <form>
                    <input placeholder="username" />

                    <input placeholder="password" />

                    <button>LOGIN</button>
                    <a href="/register">DID YOU FORGET THE PASSWORD?</a>
                    <a href="/register">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
};

export default Login;
