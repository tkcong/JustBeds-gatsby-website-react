import React from 'react'
import { Container } from 'reactstrap'

import Icon6 from '../assets/images/icon6.svg'
import Icon7 from '../assets/images/icon7.svg'
import Icon8 from '../assets/images/icon8.svg'
import Icon9 from '../assets/images/icon9.svg'

import LineRight from '../assets/images/line-right.svg'
import LineLeft from '../assets/images/line-left.svg'
import Dot from '../assets/images/dot.svg'


const Proccess = (props) => (
  <Container className="py-3">

  <div className="row">
    <div className='col-12'>
      <h4 className="my-4">Our process</h4>
    </div>
  </div>

  <div className="row nogutter mobile">
    <div className='col-6 box p-3 mb-3'>
      <img className="boxicon" src={Icon6} alt="Book a kick-off call"  />
      <h5 className="title">Book a kick-off call</h5>
      <p className="time mb-3">1 minute</p>
      <p>Visit our Get Started form and complete a few details to arrange your kick-off call with Gatsboy.</p>
    </div>
    <div className='col-6 connect'>
      <img className="dot1 pulse" src={Dot} alt=""/>
      <img className="line left one img-fluid" src={LineRight} alt=""/>
    </div>
  </div>
  <div className="row nogutter mobile">
    <div className='col-6 connect'>
      <img className="dot2 pulse" src={Dot} alt=""/>
      <img className="line right two img-fluid" src={LineLeft} alt=""/>
    </div>
    <div className='col-6 box p-3 mb-3'>
      <img className="boxicon" src={Icon7} alt="Friendly call with Gatsboy"  />
      <h5 className="title">App Commissioned</h5>
      <p className="time mb-3">20-30 minutes</p>
      <p>Pay the set-up fee after a quick chat with our team to complete a short design brief over the phone.</p>
    </div>
  </div>
  <div className="row nogutter mobile">
    <div className='col-6 box p-3 mb-3'>
      <img className="boxicon" src={Icon8} alt="See your website"  />
      <h5 className="title">Design Process</h5>
      <p className="time mb-3">72 hours</p>
      <p>Our designers will review the brief to create the visuals for your app. You will receive an email to view and approve the designs, or you can request changes.</p>
    </div>
    <div className='col-6 connect'>
      <img className="dot3 pulse" src={Dot} alt=""/>
      <img className="line left three img-fluid" src={LineRight} alt=""/>
    </div>
  </div>
  <div className="row nogutter mobile">
    <div className='col-6 connect'>
      
    </div>
    <div className='col-6 box p-3 mb-3'>
      <img className="boxicon" src={Icon9} alt="Website Changes"  />
      <h5 className="title">Submission &amp; Go Live</h5>
      <p className="time mb-3">up-to 7 days</p>
      <p>Once you approve the app, we’ll submit it to the app stores. Once accepted by Apple &amp; Google, you will be able to promote your app.</p>
    </div>
  </div>

</Container>
)

export default Proccess