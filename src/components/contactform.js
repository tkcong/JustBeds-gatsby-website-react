import React from 'react'
import { Container } from 'reactstrap'

const Contactform = (props) => (
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
                    <input type="text" name="type" id="type" placeholder="Furniture Type?"></input>
                </div>
            </div>
            <div className="row">
                <div className="offset-6 col-6">
                    <input type="submit" className="dashboard" value="Send Enguiry ✔" />
                </div>
            </div>
        </form>
    </Container>
)

export default Contactform