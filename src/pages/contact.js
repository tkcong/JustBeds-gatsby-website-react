import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import Layout from '../components/layout'

import Contactform from '../components/contactform'
import ThreeBlocks from '../components/threeBlocks'

const ContactPage = () => {
  return (
    <Layout>
    <div  id="contact-page">
      <div className="contactform-back">
	      <Container>
	      	<Row>
	      		<Col md="5">
	      			<Contactform />
	      		</Col>
	      		<Col md="7" className="contact-form-right">
	      			<p><strong>Not sure what you need?</strong></p>
                    <p>Call our team and they can help!</p>
                    <p className="mobile-number"><strong>0800 000 111</strong></p>
                    <hr />
                    <p className="stay-connected"><strong>Stay connected</strong></p>
                    <FontAwesomeIcon icon={faFacebook} className="fontawesome-icon" />
                    <FontAwesomeIcon icon={faInstagram} className="fontawesome-icon" />
                    <FontAwesomeIcon icon={faTwitter} className="fontawesome-icon" />
	      		</Col>
	      	</Row>
	      </Container>
      </div>
      <div className="background-white">
	      <Container>
	      <div className="row text-area">
	      	<div className="col-md-7">
	      		<h5><strong>Need more? We provide a furniture sourcing service via our extensive range of suppliers. We can source specific items to cater for bespoke orders.</strong></h5>
				<p>Use our expert team to source furniture for your bespoke order. No order is too big or small.</p>
				<p>We can source any furniture from over 100 suppliers across the UK, catering for budget or 
				premium requirements. Student Accommodation through to unique Hotel items can be sourced
				quickly by our dedicated UK team.</p>
				<p>Our ability to deliver in under 7 days means that we can be a reliable partner to your business. Select the bespoke option on the form above to request a call and no obligation quote.</p>
	      	</div>
	      </div>
	      </Container>
	  </div>
	  <Container className="pt-4 pb-4">
	  	<h4>Shop by collection</h4>
	  	<ThreeBlocks />
	  </Container>
    </div>
    </Layout>
  )
}

export default ContactPage