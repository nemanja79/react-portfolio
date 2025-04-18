import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-n3.png'
import LogoSubtitle from '../../assets/images/logo_sub_nemanja.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTelegram, faViber } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src={LogoS} alt='logo' />
                <img className="sub-logo" src={LogoSubtitle} alt='Nemanja' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link " to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link " to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon'
                />
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
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />
        </div >
    )
}

export default Sidebar