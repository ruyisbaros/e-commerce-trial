import './register.scss';

const Register = () => {
    return (
        <div className="register">
            <div className="wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form className="form">
                    <input placeholder="name" />
                    <input placeholder="last name" />
                    <input placeholder="username" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                    <input placeholder="confirm password" />
                    <div className="agreementBox">
                        <input className="chk" type="checkbox" />
                        <div className="agreement">
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </div>
                    </div>
                    <button>CREATE</button>
                </form>
            </div>

        </div>
    )
};

export default Register;
