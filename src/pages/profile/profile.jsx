import React, { Component } from 'react';
import { Container } from '../../commonComponents';
import { FieldDiv, WelcomeTittle, ProfileWrapper,SuggestionBox } from './styles';
import {MyContext} from '../../context/myContext';
import { connect } from 'react-redux';
import Moment from 'react-moment';




class Profile extends React.PureComponent {
        constructor(props) {
        super(props);
        }

        componentDidMount=()=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0; 
        }

    render() {
        
        return (
            <>
                <Container>
                    <ProfileWrapper>
                        <WelcomeTittle>welcome </WelcomeTittle>

                        <h3>Email</h3>
                        <FieldDiv>
                            <MyContext.Consumer>
                                {(context) => (
                                <React.Fragment>
                                {context.state.email}
                                </React.Fragment>
                                    )}
                            </MyContext.Consumer>
                        </FieldDiv>
                        <h3>Feedback</h3>
                        {this.props.messege.map((msg)=>{
                            return(
                                <SuggestionBox>
                                <div><h4>date :</h4><p><Moment/></p></div>
                            <div><h4>subject :</h4><p>{msg.subject}</p></div>
                            <div><h4>messege :</h4><p>{msg.messege}</p></div>
                                </SuggestionBox>
                            );
                        })
                        }


                    </ProfileWrapper>

                </Container>
            </>
        )
    }

}


const mapStateToProps = state => {
    return {
        messege:state.cr.messege,
      }
  };


export default connect(mapStateToProps,null)(Profile);  