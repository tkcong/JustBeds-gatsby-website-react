import React from 'react'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'

import img01 from '../assets/images/instagram/bed01.png'
import img02 from '../assets/images/instagram/bed02.png'
import img03 from '../assets/images/instagram/bed03.png'
import img04 from '../assets/images/instagram/cos.png'
import img05 from '../assets/images/instagram/sofa.png'
import img06 from '../assets/images/instagram/table.png'

const Instagram = (props) => (
    <Container>
        <div className="row">
          <Link to='/dinning' className='col-sm productbox p-0 mr-2 mb-3'>
            <img src={img01} alt="alt"></img>
          </Link>

          <Link to='/lounge' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={img02} alt="alt"></img>
          </Link>

          <Link to='/property' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={img03} alt="alt"></img>
          </Link>

          <Link to='/student' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={img04} alt="alt"></img>
          </Link>

          <Link to='/hotels' className='col-sm productbox p-0 mx-2 mb-3'>
            <img src={img05} alt="alt"></img>
          </Link>

          <Link to='/hotels' className='col-sm productbox p-0 ml-2 mb-3'>
            <img src={img06} alt="alt"></img>
          </Link>
      </div>
  </Container>
)

export default Instagram