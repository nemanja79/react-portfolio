import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();


    const sendEmail = (e) => {
        e.preventDefault();



        emailjs
            .sendForm('service_13ax3az', 'template_c3idos8', refForm.current, {
                publicKey: 'aASkB7OxX1-_CQYTT',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send the message, please try again');
                },
            );



    };

    const stringContact = 'Contact me';
    const arrayContact = stringContact.split('');
    const position = [51.505, -0.09]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={arrayContact}
                            idx={15}
                            letterClass={letterClass} />
                    </h1>
                    <p>I am interested in java backend and architecture opportunities - especially
                        ambitious or large projects. However, if you have other request or question,
                        don't hesitate to contact me using form bellow either.</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Nemanja Todorovic,
                    <br />
                    Austria,
                    <br />
                    1010
                    <br />
                    Vienna
                    <br />
                    <span>nemanja.todorovic@hotmail.com</span>
                </div>
                <div className='map-wrap'>

                    <MapContainer center={[48.210033, 16.363449]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[48.210033, 16.363449]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>

                </div>
            </div>
            <Loader type='pacman' />
        </>
    )


}






export default Contact;

