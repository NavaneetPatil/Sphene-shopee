import React, { Component } from 'react';
import contactimg from '../../assets/images/contact.png';
import { Container } from '../../commonComponents';
import { ColWrapper } from '../../components/productChart/styles';
import ContactCard from '../../components/contactCard/contactCard';
import { ContactWelcomeWrapper, MessegeWrapper, SuccessMsg, FailMsg, FormBtn, Textarea, ContactForm, MapDiv, OfficeAddressWrapper, OurDetailsWrapper } from './styles';
import { BlackScreen } from '../../commonComponents';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from './action'

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      messege: '',
      formSubmitted: false,
      validateForm: false,
      wrongEmail: false
    };
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    if (this.state.validateForm === true) {
      this.setState({ validateForm: false });
    }
    if (this.state.wrongEmail === true) {
      this.setState({ wrongEmail: false });
    }

  }

  formSubmitHandler = (event) => {
    if (this.state.name == '' || this.state.email == '' || this.state.messege == '' || this.state.messege == '') {
      this.setState({ validateForm: true });
      return;
    }
    if (!this.state.email.includes('@')) {
      this.setState({ wrongEmail: true });
      return;
    }
    axios.post('https://foodrecipejson.firebaseio.com/.json',
      {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        messege: this.state.messege,
      })
      .then(response => {
        let messegeObject = { name: this.state.name, subject: this.state.subject, messege: this.state.messege };
        this.props.pushMessege(messegeObject);
        this.setState({ name: '', email: '', subject: '', messege: '', formSubmitted: true });
      });
  }
  componentDidMount = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { name, subject, email, messege } = this.state;
    return (
      <>
        <ContactWelcomeWrapper>
          <MapDiv url={contactimg} >
            <BlackScreen></BlackScreen>
          </MapDiv>
          <OfficeAddressWrapper>
            <h2>Our office</h2>
            <p>45 Park Avenue, Apt. 303<br></br>
             New York, NY 10016<br></br>
              Phone (123) 123-456</p>
          </OfficeAddressWrapper>
        </ContactWelcomeWrapper>
        <Container>
          <ColWrapper>
            <OurDetailsWrapper>
              <h2>Find Us There</h2>
              <p>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services</p>
              <ContactCard
                logo='fa fa-phone'
                tittle='Phone:'
                phoneNo='(123) 123-456'
              />
              <ContactCard
                logo='fa fa-fax'
                tittle='Fax:'
                phoneNo='(123) 123-456'
              />
              <ContactCard
                logo='fa fa-adjust'
                tittle='Web:'
                website='www.example.com'
              />
              <ContactCard
                logo='fa fa-envelope'
                tittle='E-Mail:'
                website='office@example.com'
              />
            </OurDetailsWrapper>


            <ContactForm>
              <h2>Contact Form</h2>
              <input
                type='text'
                name='name'
                value={name}
                onChange={this.handleChange}
                placeholder="Your Name">
              </input>
              <input
                type='text'
                name='email'
                value={email}
                placeholder="Email Address"
                onChange={this.handleChange}  >
              </input>
              <input
                type='text'
                name='subject'
                value={subject}
                placeholder="Subject"
                onChange={this.handleChange} >
              </input>
              <Textarea
                type='text'
                name='messege'
                value={messege}
                placeholder="Messege"
                onChange={this.handleChange} >
              </Textarea>
              <FormBtn onClick={this.formSubmitHandler}>SUBMIT MESSEGE</FormBtn>

              <MessegeWrapper>
                <SuccessMsg>{this.state.formSubmitted ? 'Submitted successfully!!' : null}</SuccessMsg>
                <FailMsg>{this.state.validateForm ? 'Please fill all fields' : null}</FailMsg>
                <FailMsg>{this.state.wrongEmail ? 'invalid email' : null}</FailMsg>
              </MessegeWrapper>
            </ContactForm>
          </ColWrapper>
        </Container>
      </>

    );

  }

}


const mapDispatchToProps = dispatch => {
  return {
    pushMessege: (messege) => dispatch({ type: actionTypes.MESSEGEPUSH, msg: messege }),
  }
};

export default connect(null, mapDispatchToProps)(Contact);  
