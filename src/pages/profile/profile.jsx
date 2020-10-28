import React, { Component } from 'react';
import { Container } from '../../commonComponents';
import Navigation from '../../components/navigation/navigation.component';
import Footer from '../../components/footer/footer';
import ColorSwitcher from '../../components/colorSwitcher/ColorSwitcher';
import { FieldDiv, WelcomeTittle, ProfileWrapper,SuggestionBox } from './styles';
import { connect } from 'react-redux';

class Profile extends Component {
    //     constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       name: 'John veles',
    //       changeName:false
    //     };
    //   }
    // handleChange = event => {
    //     const { value, name } = event.target;
    //     this.setState({ [name]: value });
    //   };
    //   nameResetHandler = () => {
    //       var val =  this.state.changeName ? false : true ;
    //       this.setState({changeName: val });
    //   }

    render() {
        return (
            <>
                <Navigation />
                <ColorSwitcher/>
                <Container>
                    <ProfileWrapper>
                        <WelcomeTittle>welcome </WelcomeTittle>
                        {/* <h3>Username</h3>
                        <FieldDiv>
                        <input 
                        name='name'
                        value={this.state.name}
                        onChange = {this.state.changeName ? this.handleChange  :  null } ></input>
                        <button onClick={this.nameResetHandler}>{this.state.changeName ? 'Save' : 'Click to change' }</button>
                        </FieldDiv> */}

                        <h3>Email</h3>
                        <FieldDiv>{this.props.email}</FieldDiv>
                        <h3>Feedback</h3>
                        <SuggestionBox>
                            <div><h4>date :</h4><p>15-10-2018</p></div>
                            <div><h4>subject :</h4><p>Regarding registration</p></div>
                            <div><h4>messege :</h4><p>Facing issue while changing the email and the phone number registered.</p></div>
                       </SuggestionBox>

                    </ProfileWrapper>

                </Container>
                <Footer />
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        email:state.lr.email 
    }
  };

export default connect(mapStateToProps,null)(Profile);  