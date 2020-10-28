import styled from 'styled-components';

export const RoundBtn = styled.button`
text-decoration: none;
border: 0 none;
display: block;
width: 50px;
height: 50px;
background-color:${props=>props.theme.themeColor};
color:${props=>props.theme.color.lightest};
outline:none;
cursor:${props=>props.theme.cursor.pointer};
-webkit-transition: transform 0.3s;
transition: transform 0.3s ease-in-out;
border-radius: 50px;
text-align: center;
font-size: ${props=>props.theme.fontSize.h3small};
position:fixed;
bottom:25px;
right:30px;
z-index:50;
&::after{
    content: "\f106";
    font-family: ${props=>props.theme.fontFamily.fontawesome};
}
&:hover{
    transform: rotate(360deg);
}
`