import styled from 'styled-components';

export const ContactWelcomeWrapper = styled.div`
display:flex;
height:350px;
flex-direction:row;
margin-bottom:3em;

`
export const MapDiv = styled.div`
width:75%;
background-image:url(${(props)=>props.url});
background-position: center;
background-size: cover;
@media (min-width: 250px) and (max-width: 768px) {
    display:none;
  }
`
export const BlackScreen = styled.div`
width:100%;
height:100%;
position:relative;
background-color:${props=>props.theme.backgroundColor.BlackScreen};
}
`
export const OfficeAddressWrapper = styled.div`
font-family:${props=>props.theme.fontFamily.quicksand};
width:25%;
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
padding:25px 0 50px 0px;
box-sizing:border-box;
background-color:rgb(0,0,0,.7);
color:${props=>props.theme.color.lightest};
h2{
    font-size: 28px;
    font-weight:${props=>props.theme.fontWeight.bold}; 
    margin: 10px 0 ;
    &::after{
        content: "";
        height: 2px;
        width: 50px;
        position: relative;
        display: block;
        background-color: ${props=>props.theme.themeColor};
        margin: 20px auto;
    }
}

p{
    text-align:center;
    font-size: 18px;
    line-height: 30px;
    margin:0;
}
@media (min-width: 250px) and (max-width: 768px) {
    width:100%;
  }

`

export const OurDetailsWrapper = styled.div`
width:33%;
padding:0 10px;
box-sizing: border-box;
h2{
    font-size:28px;
    font-family: ${props=>props.theme.fontFamily.montserrat};
    font-weight: ${props=>props.theme.fontWeight.light};
}
@media (min-width: 250px) and (max-width: 768px) {
    width:100%;
  }
`
export const ContactForm = styled.div`
width:66%;
box-sizing: border-box;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
h2{
    width:100%; 
    font-size:${props=>props.theme.fontSize.h3small};
    font-family: ${props=>props.theme.fontFamily.montserrat};
    font-weight: ${props=>props.theme.fontWeight.light};
}
input{
    font-family:Arial;
    padding: 12px 18px;
    outline: none;
    font-size: ${props=>props.theme.fontSize.tabFont};
    color:${props=>props.theme.color.ContactForm}; 
    margin: 0 0 20px 0;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
    font-weight:${props=>props.theme.fontWeight.bold};
    border: 1px solid #e0e0e0;
    opacity: 1;
    min-height: 53px;
    border-radius: 3px;
    background-color:${props=>props.theme.backgroundColor.lightest}; 
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.03);
    &:nth-child(-n+3) {
        width:48%;
    }
}
@media (min-width: 250px) and (max-width: 768px) {
    width:100%;
    input{
        width:100%;
        &:nth-child(-n+3) {
            width:100%;
        }
    }
  }
`
export const Textarea = styled.textarea`
font-family:Arial;
font-weight:${props=>props.theme.fontWeight.light}; 
height:200px;
font-size: ${props=>props.theme.fontSize.tabFont};
padding: 12px 18px;
outline: none;
margin: 0 0 25px 0;
border: 1px solid #e0e0e0;
box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.03);
width:100%;
`




export const FormBtn = styled.button`
text-transform: uppercase;
font-family:Montserrat;
font-size:${props=>props.theme.fontSize.medium};
line-height: 20px;
letter-spacing: 0px;
padding: 10px 26px;
font-weight:${props=>props.theme.fontWeight.bold};
transition: all 0.2s ease-in-out;
cursor: pointer;
margin-bottom:20px;
border-radius: 50px;
background-color:${props=>props.theme.backgroundColor.lightest};
outline:none;
color:${(props)=>props.theme.themeColor};
border:2px solid ${(props)=>props.theme.themeColor};
&:hover{
    background-color:${(props)=>props.theme.themeColor};
    color:${props=>props.theme.color.lightest};
}

`
