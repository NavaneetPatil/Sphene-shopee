import styled from 'styled-components';

export const WelcomeTittle = styled.h1 `
text-align:center;
color:${props=>props.theme.color.dark};
`
export const FieldDiv = styled.div `
margin: 20px 0px;
color:${props=>props.theme.color.grey}; 
border-bottom: 1px solid ${props=>props.theme.color.grey}; 
padding-bottom: 10px;
position: relative;
font-size:${props=>props.theme.fontSize.primary}; 
font-family: cursive;
input{
    border:none;
    outline:none;
    font-size: ${props=>props.theme.fontSize.primary}; 
    font-family: cursive;
    color: ${props=>props.theme.color.grey}; 
    width: 80%;
}
button{
    position: absolute;
    right: 0;
    border: none;
    background: none;
    color:${props=>props.theme.color.green};
    font-size: ${props=>props.theme.fontSize.primary}; 
    cursor: ${props=>props.theme.cursor.pointer}; 
    outline:none;
}

`
export const ProfileWrapper = styled.div `
width:50%;
h3{
    margin: 25px 0px;
    color:${props=>props.theme.color.dark};
    font-weight:${props=>props.theme.fontWeight.bold};
    font-family:${props=>props.theme.fontFamily.montserrat}; 
    }
    @media (min-width: 250px) and (max-width: 768px) {
        width:100%;
      }    

`
export const SuggestionBox = styled.div `
margin: 1.7em 0 1.7em 0;
h4{
    display:inline-block;
    color: ${props=>props.theme.color.grey}; 
    font-weight: ${props=>props.theme.fontFamily.montserrat};
    font-family: ${props=>props.theme.fontFamily.montserrat};
    margin-right: 10px;
    margin-top: 4px;
    margin-bottom: 4px;
}
p{
    display:inline-block;
    margin-top: 4px;
    margin-bottom: 4px;
}

`