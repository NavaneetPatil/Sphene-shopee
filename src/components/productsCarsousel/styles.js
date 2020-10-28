import styled, {css} from "styled-components";



export const VertBtnRight = styled.button`
position:absolute;
border-radius: 50px;
top:40%;
z-index:10;
right:-30px;
padding: 20px 12px;
background-color:${props=>props.theme.backgroundColor.buttonGrey};
transition: all 0.2s ease-in-out;
border:none;

outline:none;
cursor:${props=>props.theme.cursor.pointer};
font-family:fontawesome;
&::after{
   content: "\f105";
}
&:hover{
    background-color:${props=>props.theme.themeColor};
    color:${props=>props.theme.color.lightest};
}
@media (min-width: 768px) and (max-width: 1025px) {
    right:-20px;
 }
@media (min-width: 426px) and (max-width: 768px) {
    right:-10px;
 }
 @media (min-width: 250px) and (max-width: 425px) {
    right:0;
 }
`
export const VertBtnLeft = styled(VertBtnRight)`
left:-30px;
&::after{
    content: "\f104";
 }
 @media (min-width: 768px) and (max-width: 1025px) {
    left:-20px;
 }
 @media (min-width: 426px) and (max-width: 768px) {
    left:-10px;
 }
 @media (min-width: 250px) and (max-width: 425px) {
    left:0;
 }
`

export const CardWrapper = styled.div`
display:flex !important;
justify-content:center !important;
`

export const CarouselWrapper = styled.div`
display:block;
margin-bottom:70px;
`
