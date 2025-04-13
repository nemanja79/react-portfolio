
import { Link } from 'react-router-dom';
import LogotTitle from '../../assets/images/logo-n3.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import CopyrightLetters from '../CopyrigthLetters';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'm', 'a', 'n', 'j', 'a'];
    const jobArray = [' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogotTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <CopyrightLetters letterClass={letterClass}
                            companyName='Java'
                            idx={22} />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={28} />
                    </h1>
                    <h2> Java Developer / Computer Science BSc</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div >
            <Loader type="pacman" />
        </>
    );
}

export default Home;