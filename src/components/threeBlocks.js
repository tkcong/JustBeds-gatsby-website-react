import React from 'react'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'

const threeBlocks = (props) => (
    <Container className="m-0 pr-1">
        <div className="row">
          <Link to='/property' className='col-sm one boxes p-4 pb-1 mx-0 mb-3'>
            <div className="border">
              <h5 className="title">Full Property</h5>
              <p>Packages</p>
            </div>
          </Link>

          <Link to='/student' className='col-sm two boxes p-4 pb-1 mx-0 mb-3'>
            <div className="border">
              <h5 className="title">Student Accomodation</h5>
              <p>Packages</p>
            </div>
          </Link>

          <Link to='/hotels' className='col-sm three boxes p-4 pb-1 mx-0 mb-3'>
            <div className="border">
              <h5 className="title">Hotels &amp; Hostels</h5>
              <p>Packages</p>
            </div>
          </Link>
      </div>
  </Container>
)

export default threeBlocks