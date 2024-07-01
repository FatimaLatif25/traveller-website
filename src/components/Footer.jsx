import React from 'react'
import logo from '../assets/images/logo.svg';

const Footer = () => {
    return (
        <>
            <section id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="foooter-brand">
                            <a href="#" className="logo">
                                <img src={logo} alt="Tourly logo" />
                            </a>
                            <p className="footer-text">Urna ratione ante harum provident,
                                eleifend,<br /> vulputate molestiae proin fringilla,<br />
                                praesentium magna conubia at perferendis,<br /> pretium,
                                aenean aut ultrices.</p>
                        </div>
                        <div className="footer-contact">
                            <h4 className="contact-title">
                                Contact Us
                            </h4>
                            <p className="contact-text">
                                Feel free to contact and <br />reach us !!
                            </p>
                            <ul className="contact-list">
                                <li className='contact-item'>
                                    <i className='fas fa-phone'></i>
                                    +01 (123) 4567 90
                                </li>
                                <li className='contact-item'>
                                    <i className='fas fa-envelope'></i>
                                    info.tourly.com
                                </li>
                                <li className='contact-item'>
                                    <i className='fas fa-map-marker-alt'></i>
                                    3146 Koontz, California
                                </li>
                            </ul>
                        </div>
                        <div className="footer-form">
                            <p className="form-text">
                            Subscribe our newsletter for more update & news !!
                            </p>
                            <input type="email" className="form-input" placeholder='Enter Your Email' required/>
                            <button className="btn btn-secondary">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">

                </div>
            </section>
        </>
    )
}
export default Footer