import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../layout/Footer'
import { StaticQuery, graphql, Link } from 'gatsby'

import SEO from '../../components/seo'
import MainLogo from '../../assets/images/logo.svg'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import '../../assets/styles/index.scss'

const TemplateWrapper = ({ children, data }) => {
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        <SEO />
        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className="container">
            <Link to='/' className='navbar-brand col-4 pl-0'>
              <img className="main-logo" src={MainLogo} alt={data.site.siteMetadata.title} />
            </Link>
            <ul className='nav navbar-nav main-menu col-md-8'>
              <li className='nav-item'>
                <Link to='/help' className='nav-link'>Need Help?</Link>
              </li>
              <li className='nav-item getstarted'>
                <Link to='/contact' className='cta px-4 py-2'>Enquiry</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar mainmenu">
        <div className="container">
          <ul className='nav navbar-nav second-menu col-12'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/bedroom' className='nav-link'>Bedroom Sets</Link>
            </li>
            <li className='nav-item'>
              <Link to='/lounge' className='nav-link'>Lounge Sets</Link>
            </li>
            <li className='nav-item'>
              <Link to='/property' className='nav-link'>Full Property</Link>
            </li>
            <li className='nav-item'>
              <Link to='/student' className='nav-link'>Student Accomodation</Link>
            </li>
            <li className='nav-item'>
              <Link to='/hotels' className='nav-link'>Hotels &amp; Hostels</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>Contact Us</Link>
            </li>
          </ul>
        </div>
        </div>
        {children}
        <Footer />
      </div>
    )} />
  )
}
//import PropTypes from 'prop-types'
/*
TemplateWrapper.propTypes = {
  children: PropTypes.func
}*/

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
