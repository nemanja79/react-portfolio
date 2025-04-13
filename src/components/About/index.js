import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15} />

                    </h1>
                    <p>I'm an experienced Java specialist with a strong track record across diverse industries. My technical skill set includes Java (J2EE), Spring, Spring Boot, REST web services, SOAP, SQL, PL/SQL, JSP, Databases, HTML, CSS and React.</p>
                    <p> I hold a degree in engineering from the University of Novi Sad and bring a mix of analytical thinking and creative problem-solving to every project. </p>
                    <p>I'm highly motivated, able to make sound decisions under pressure, and always focused on delivering quality and customer satisfaction. As a collaborative team player, I thrive in multicultural environments and enjoy working with people from all backgrounds.</p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cube-spinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faDatabase} color="#5ED4f4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faReact} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About