import React,{ Component} from 'react';
import contactimg from '../../assets/images/contact.png';
import Navigation from '../../components/navigation/navigation.component';
import Footer from '../../components/footer/footer';
import BackToTop from '../../components/backtotop/backToTop';
import { Container } from '../../commonComponents';
import {ColWrapper} from '../../components/productChart/styles';
import ContactCard from '../../components/contactCard/contactCard';
import {ContactWelcomeWrapper,FormBtn,Textarea,ContactForm,MapDiv,OfficeAddressWrapper,OurDetailsWrapper} from './styles';
import ColorSwitcher from '../../components/colorSwitcher/ColorSwitcher';
import {BlackScreen} from '../../commonComponents';
//import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      messege: '',
      formSubmitted:false
    };
  }


  handleChange=(event)=>{
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  submitHandler=()=>{
    this.setState({name:'',email:'',subject:'',messege:'',formSubmitted:true});

  }
  // formSubmitHandler=(event)=>{
  //   axios.post( 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc',
  //   {
  //       email:'a2b@gmail.com',
  //       password:'23a4556'
  //   } )
  //   .then( response => {
  //       console.log( response );
  //   } );
  //  }

  render(){
    const { name,subject,email,messege} = this.state;
    return (
      <>
      <Navigation/>
      <ColorSwitcher/>
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
            <FormBtn onClick={this.submitHandler}>SUBMIT MESSEGE</FormBtn>
            <h4>{this.state.formSubmitted ? 'Submitted!!' : null}</h4>
            </ContactForm>
            
          </ColWrapper>
        </Container>
 
      <BackToTop/>
      <Footer/>
      </>

  );

  }
  
}

export default Contact;
