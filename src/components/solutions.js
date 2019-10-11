import React from 'react'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'

import dinning from '../assets/images/dinning.jpg'
import lounge from '../assets/images/lounge.jpg'
import full from '../assets/images/full.jpg'
import student from '../assets/images/student.jpg'
import hotel from '../assets/images/hotel.jpg'

const Solutions = (props) => (
    <Container>
        <div className="row">
          <Link to='/bedroom' className='col-sm productbox p-0 mr-2 mb-3'>
            <img src={dinning} alt="dinning"></img>
            <div className="content">
              <h5 className="title">Dinning Sets</h5>
            </div>
          </Link>

          <Link to='/lounge' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={lounge}  alt="lounge"></img>
            <div className="content">
              <h5 className="title">Lounge Sets</h5>
            </div>
          </Link>

          <Link to='/property' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={full} alt="full"></img>
            <div className="content">
              <h5 className="title">Full Property</h5>
            </div>
          </Link>

          <Link to='/student' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={student} alt="student"></img>
            <div className="content">
              <h5 className="title">Student Furniture</h5>
            </div>
          </Link>

          <Link to='/hotel' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={hotel} alt="hotel"></img>
            <div className="content">
              <h5 className="title">Hotels &amp; Hostels</h5>
            </div>
          </Link>

          <Link to='/property' className='col-sm productbox all p-0 ml-2 mb-3'>
            <div className="content">
              <h5 className="title">View All</h5>
            </div>
          </Link>
      </div>
  </Container>
)

export default Solutions