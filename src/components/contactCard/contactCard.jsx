import React from 'react';
import { CardWrapper, DetailsWrapper } from './styles';

function ContactCard(props) {
    return (
        <>
            <CardWrapper>
                <div><i className={props.logo} ></i></div>
                <DetailsWrapper>
                    <strong>{props.tittle}</strong>
                    <span>{props.phoneNo}</span>
                    <a href='#'>{props.website}</a>
                </DetailsWrapper>
            </CardWrapper>

        </>
    )
}

export default ContactCard;