import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Select from 'react-select';

import  tickmark from '../assets/images/tick.svg';

const options = [
  { value: 'bedroom', label: 'Bedroom Sets' },
  { value: 'lounge', label: 'Lounge Sets' },
  { value: 'property', label: 'Full Property' },
  { value: 'student', label: 'Student Accomodation' },
  { value: 'hotel', label: 'Hotels & Hostels' }
];

class Contactform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
        };
    }
    
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render () {
        return(
        <Container>
            <form name="Quote" id="form" action="/thanks" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="Quote"></input>
                <div className="row">
                    <div className="col-12">
                        <p><strong>Need fast, cost-effective furniture?</strong></p>
                        <p>You’ve come to the right place. </p>
                        <input type="text" name="name" id="name" placeholder="Full Name"></input>
                        <input type="text" name="email" id="email" placeholder="Email Address"></input>
                        <input type="text" name="phone" id="phone" placeholder="Phone Number"></input>
                        {/*<input type="text" name="type" id="type" placeholder="Furniture Type?"></input>*/}
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            placeholder="FURNITURE TYPE"
                            className="input-select"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-6 col-6">
                        <button type="submit" className="enquiry-btn">
                            Send Enquiry <img src={tickmark} alt="tick mark for send enquiry button" className="img-fluid"/>
                        </button>
                    </div>
                </div>
            </form>
        </Container>
        )
    }
}

export default Contactform