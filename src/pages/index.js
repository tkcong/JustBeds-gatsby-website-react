import React from 'react'
import { Container } from 'reactstrap'
import { Link } from "gatsby"

import Layout from '../components/layout'
import ContactForm from '../components/contactform'
import ThreeNav from '../components/threeBlocks'
import Solutions from '../components/solutions'
import Instagram from '../components/instagram'
import Testimonials from '../components/testimonials'

const Home = ({ data }) => {
  return ( 
    <Layout>
      <div className="hero">
        <Container>
          <div className="row">
            <div className="content">
              <div className='col-12'>
                <h1>Quality, cost effective furniture</h1>
                <Link to="/contact" className="cta tick p-4">Start Saving Here</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-4 maincontent">
        <div className="row">
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-4'>
            <h4>We are a friendly local business with over 15 years’ experience providing 
            quality, <a href="/property"><strong>cost effective furniture</strong></a> to customers in the South East of UK.</h4>

            <p>We provide packages of furnishing solutions for Housing Associations, Student Accomodation, 
            Short stay and HMO landlords, along with Hotels &amp; Hostels.</p>

            <p>Our ability to deliver in under 7 days means that we can be a reliable partner to your business 
            with a fast response to your urgent requirements. </p>

            <p>Get in touch for a no obligation quote, we will not be beaten on price for the quality we offer 
            and the service we provide.</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 oBox pullTop'>
            <ContactForm />
          </div>
        </div>
      </Container>

      <Container>
        <h4>Shop by collection</h4>
        <ThreeNav />
      </Container>

      <Container>
        <h4>Furnishing solutions</h4>
        <Solutions />
      </Container>

      <Container>
        <h4>Browse Instagram</h4>
        <Instagram />
      </Container>

      <Container className="mb-4" >
        <h4>Testimonials</h4>
        <Testimonials />
      </Container>


    </Layout>
  )
}


export default Home
