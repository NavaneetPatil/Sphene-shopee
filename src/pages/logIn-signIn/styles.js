import styled from 'styled-components';
import { CardBtn } from '../../components/categoryCard/styles';



export const GreyBtn = styled(CardBtn)`
  font-size:${props=>props.theme.fontSize.tabFont};
  padding: 0px 50px;
  height:50px;  
  position:static;
  background-color:${props=>props.theme.backgroundColor.greyScale5};
  margin:10px;
  transform:none;
`
export const GreenBtn = styled(GreyBtn)`
background-color:${props=>props.theme.backgroundColor.btnGreen};
color:${props=>props.theme.color.lightest};

`

export const LoginWrapper = styled.div`
display:flex;
`
export const ImageWrapper = styled.div`
width:60%;
img{
    max-width:100%;
}
@media (min-width: 250px) and (max-width: 768px) {
  display:none;
}
`
export const BtnWrapper = styled.div`
display:flex;
justify-content: space-evenly;
margin:35px 0;
`

export const Form = styled.form`
width:40%;
padding:15px;
display:flex;
flex-direction:column;
input{
    width:100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid rgb(160, 160, 160);
    outline: none;
    padding: 10px;
    line-height:${props=>props.theme.lineHeight.primary};
    font-size:${props=>props.theme.fontSize.primary}; 
    box-sizing: border-box;
}
@media (min-width: 250px) and (max-width: 768px) {
  width:100%;
}
`
export const PasswordShow = styled.span`
    display: flex;
    align-self: flex-end;
    padding: -5px;
    margin: -36px 0px 0 0px;
    font-family:${props=>props.theme.fontFamily.montserrat}; 
    color:${props=>props.theme.color.green};
    cursor:${props=>props.theme.cursor.pointer};

    `
    
export const  PasswordWrong  = styled.h4`
color:${props=>props.theme.color.alert};
font-size:${props=>props.theme.fontSize.primary};
`

export const LoginH3 = styled.div`
font-family:${props=>props.theme.fontFamily.montserrat};
padding: 15px 0px 15px 2px;
color:${props=>props.theme.color.fontGrey};
font-size:${props=>props.theme.fontSize.primaryPlus};
line-height:${props=>props.theme.lineHeight.tertiaryPlus};
font-weight:${props=>props.theme.fontWeight.bold}; 
`
