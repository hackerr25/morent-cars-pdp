import React from 'react'
import morent from "../../assets/morent.png"
import { NavLink } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='mt-3'>
            <div className="container footer-section d-flex justify-content-between align-items-start py-2 px-2">
                {/* Left side: Logo and Text */}
                <div className="footer-left d-flex flex-column align-items-start">
                    <NavLink className="footer-logo d-flex flex-column align-items-start">
                        <img src={morent} alt="logo" style={{ width: "100px" }} />
                        <p className='footer-text mt-2' style={{ textDecoration: "none" }}>Our vision is to provide convenience <br /> and help increase your sales business.</p>
                    </NavLink>
                </div>

                {/* Right side: Footer Links (About, Community, Socials) */}
                <div className="footer-right d-flex justify-content-between gap-5" style={{ marginRight: '20px' }}>
                    <div className="footer-links">
                        <h5 className='footer-list-h3'>About</h5>
                        <ul className='footer-list'>
                            <li className='footer-list-text'><a href="#works">How it Works</a></li>
                            <li className='footer-list-text'><a href="#clients">Featured</a></li>
                            <li className='footer-list-text'><a href="#partners">Partnership</a></li>
                            <li className='footer-list-text'><a href="#users">Business Relation</a></li>
                        </ul>
                    </div>
                    <div className="footer-community">
                        <h5 className='footer-list-h3'>Community</h5>
                        <ul className='footer-list'>
                            <li className='footer-list-text'><a href="#about">Events</a></li>
                            <li className='footer-list-text'><a href="#blog">Blog</a></li>
                            <li className='footer-list-text'><a href="#podcasts">Podcast</a></li>
                            <li className='footer-list-text'><a href="#invitation">Invite a friend</a></li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <h5 className='footer-list-h3'>Socials</h5>
                        <ul className='footer-list'>
                            <li className='footer-list-text'><a href='#discord'>Discord</a></li>
                            <li className='footer-list-text'><a href='#insta'>Instagram</a></li>
                            <li className='footer-list-text'><a href='#twitter'>Twitter</a></li>
                            <li className='footer-list-text'><a href='#fa'>Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{ maxWidth: "1300px", margin: "0 auto" }} />
            <div className="container footer-bottom justify-content-between d-flex">
                <h5 className='footer-text'><a href="#f">2022 MORENT. All rights reserved</a></h5>
                <div className="footer-bottom-right d-flex gap-3">
                    <h5 className='footer-text'><a href="#privacy"> Privacy & Policy</a></h5>
                    <h5 className='footer-text'><a href="#terms">Terms & Condition</a></h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer
