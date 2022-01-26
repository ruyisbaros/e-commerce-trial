import './footer.scss';
import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <h1 className="logo">Ahmet</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique consequatur rerum sequi expedita dolorem at ut non, soluta modi ad consectetur tempora provident atque enim quo, aliquam ipsum odio? Doloribus blanditiis nam atque error aperiam totam. Incidunt, ipsum a.</p>
                <div className="social-container">
                    <div className="social-icon">
                        <Facebook className='fc' />
                    </div>
                    <div className="social-icon">
                        <Twitter className="tw" />
                    </div>
                    <div className="social-icon">
                        <Instagram className="in" />
                    </div>
                    <div className="social-icon">
                        <Pinterest className="pi" />
                    </div>
                </div>
            </div>
            <div className="center">
                <ul className="list">
                    <li className="links">About</li>
                    <li className="links">Collection</li>
                    <li className="links">Gallery</li>
                    <li className="links">carrier</li>
                </ul>
            </div>
            <div className="right">
                <h3>Contact</h3>
                <div>

                    <Room />
                    Finkenweg 5 Empfingen
                </div>
                <div>

                    <Phone />
                    +49 567 3456
                </div>
                <div>
                    <Mail />
                    ahmet.erdonmez77@gmail.com
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </div>
    )
};

export default Footer;
