import React from 'react'
import Link from 'gatsby-link'

import MainLogo from '../../assets/images/logo.svg'

if (typeof window !== `undefined`) {
    console.log("%c Built & Managed     \n by GATSBOY          \n https://gatsboy.com ", "background: #062484; color: #fff; font-size: normal; padding: 10px;");
}

const Footer = (props) => (
    <footer id="footer">

        <div className="container pt-5 pb-2">
            <div className="row">
                <div className="col-md-3 logo">
                    <Link to='/'>
                        <img className="main-logo img-fluid" src={MainLogo} alt='Gatsboy' />
                    </Link>
                    <h3 className="pt-3">hello@gatsboy.com</h3>
                    <h3 className="pb-3">0800 011 9820</h3>
                </div>
                <div className="col-md-2">
                    <ul className="links">
                        <li><Link to='/about'>About Just Beds</Link></li>
                        <li><Link to='/mission'>Our Mission</Link></li>
                        <li><Link to='/price-promise'>Price Promise</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul className="links">
                        <li><Link to='/returns'>Returns</Link></li>
                        <li><Link to='/delivery'>Delivery</Link></li>
                    </ul>
                </div>
                <div className="col-md-5">
                    <h5>Contact us</h5>
                    <h2><strong>07754 855 635</strong></h2>
                    <p>Mon-Fri 08:00-19:00<br/>
                    Sat-Sun 08:30-17:00 GMT</p>
                </div>
            </div>

            <p className="creds">© Just Beds Ltd {new Date().getFullYear()}. Head Office: Address Street, Area Post Code. Registration: 123456</p>
        </div>
    </footer>
)

export default Footer
