import styled, {css} from "styled-components";

export const Carousel = styled.div`
position:relative;
width:100%;
display:flex;
align-items:center;
`
export const SliderFrame = styled.div`
width:100%;
margin: 20px 75px 20px 75px;
overflow:hidden;
@media (min-width: 250px) and (max-width: 425px) {
    margin: 20px 45px 20px 45px;
  }
`
export const Slider = styled.div`
display:flex;
transform: translateX(${props => props.transform});
height: 100%;
width: 1600px;
flex-shrink: 0;
transition:${props=>props.theme.transition.half};
`
export const VertBtnRight = styled.button`
position:absolute;
border-radius: 50px;
transform: translateY(-51%);
padding: 20px 12px;
background-color:${props=>props.theme.backgroundColor.buttonGrey};
transition: all 0.2s ease-in-out;
border:none;
right:0;
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
`
export const VertBtnLeft = styled(VertBtnRight)`
left:0;
right:auto;
&::after{
    content: "\f104";
 }
`


