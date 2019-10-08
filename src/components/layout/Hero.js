import React from 'react'
import Link from 'gatsby-link'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import MainLogo from '../../assets/images/logo.svg'
import UK from '../../assets/images/uk.svg'
import PlusPink from '../../assets/images/plus-pink.svg'

if (typeof window !== `undefined`) {
    console.log("%c Built & Managed     \n by GATSBOY          \n https://gatsboy.com ", "background: #062484; color: #fff; font-size: normal; padding: 10px;");
}
class FooterDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <ButtonDropdown id=":nomnom:" className="please-sir-add-a-class-here" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                <img className="flag pr-2" src={UK} alt='UK' /> United Kingdom
            </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><img className="flag pr-2" src={UK} alt='GR' /> Greece</DropdownItem>
                    <DropdownItem><img className="flag pr-2" src={UK} alt='US' /> United States</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

const Footer = (props) => (
    <footer id="footer">

        <FooterDropDown />

        <div className="container pt-4 pb-2">
            <div className="row">
                <div className="col-md-3">
                    <Link to='/'>
                        <img className="main-logo" src={MainLogo} alt='Gatsboy' />
                    </Link>
                    <h3 className="pt-3">hello@gatsboy.com</h3>
                    <h3 className="pb-3">0800 011 9820</h3>
                </div>
                <div className="col-md-2">
                    <ul className="links">
                        <li><a href="">Franchise</a></li>
                        <li><a href="">Reseller</a></li>
                        <li><a href="">Roadmap</a></li>
                        <li><a href="">Our Journey</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><a href="">How it works</a></li>
                        <li><a href="">Benefits</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Get started</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><a href="">The Hub</a></li>
                        <li><a href="">Sectors</a></li>
                        <li><a href="">Business Apps</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="dropdown">
                        <button className="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="flag pr-2" src={UK} alt='UK' /> United Kingdom
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#"><img className="flag pr-2" src={UK} alt='GR' /> Greece</a>
                            <a className="dropdown-item" href="#"><img className="flag pr-2" src={UK} alt='US' /> United States</a>
                        </div>
                    </div>
                    <a href className="dashboard px-3 py-2 mt-2" role="button" href="#"><img className="plus pr-2" src={PlusPink} alt='Dashboard' />Dashboard</a>
                </div>
            </div>

            <p>© Gatsboy {new Date().getFullYear()}. Gatsboy is a trading name of Nuttifox Limited. Registered in England &amp; Wales. Company Registration Number 10482945.</p>
        </div>
    </footer>
)

export default Footer
