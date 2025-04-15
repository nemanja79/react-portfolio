import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-n3.png'
import LogoSubtitle from '../../assets/images/logo_sub_nemanja.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTelegram, faViber } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt='logo' />
            <img className="sub-logo" src={LogoSubtitle} alt='Nemanja' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link " to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link " to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/nt-5a6356124/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
                <a
                    target='_blank'
                    rel="noreferrer"
                    href="https://t.me/neca979"
                >
                    <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                </a>
                <a
                    target='_blank'
                    rel="noreferrer"
                    href="viber://chat?number=%2B38163555797"
                >
                    <FontAwesomeIcon icon={faViber} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar