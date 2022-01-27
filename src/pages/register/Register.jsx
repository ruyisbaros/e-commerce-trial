import { useGlobalContext } from '../../contex';
import './register.scss';

const Register = () => {

    const { createNewUser, newUser, handleSubmit } = useGlobalContext()

    return (
        <div className="register">
            <div className="wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form className="form" >
                    <input placeholder="name" name="fname" value={newUser.fname} onChange={createNewUser} />
                    <input placeholder="last name" name="lname" value={newUser.lname} onChange={createNewUser} />
                    <input placeholder="username" name="username" value={newUser.username} onChange={createNewUser} />
                    <input placeholder="email" name="email" value={newUser.email} onChange={createNewUser} />
                    <input placeholder="password" name="password" value={newUser.password} onChange={createNewUser} />
                    <input placeholder="confirm password" />
                    <div className="agreementBox">
                        <input className="chk" type="checkbox" />
                        <div className="agreement">
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit}>CREATE</button>
                </form>
            </div>

        </div>
    )
};

export default Register;
