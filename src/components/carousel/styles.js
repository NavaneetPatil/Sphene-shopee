import styled from 'styled-components';

export const CarouselWrapper = styled.div`
background-image: url( ${props => props.url});
width:${props=>props.theme.width.full};
background-position: center;
background-size:cover;
height: 606px;
transition:all .4s;
&:hover + button{
   display:none;
}
`

export const CarouselTwinRoundBtn = styled.div`
position: absolute;
bottom: 60px;
left: 50%;
transform: translateX(-50%);
`
export const CarouselLeftRoundBtn = styled.i`
background-color:${ (props)=>props.color ? (props)=>props.theme.themeColor: null};
 display:inline-block;
 height: 20px;
 width: 20px;
 margin:5px;
 border: 2px solid white;
 border-radius: 15px;
 cursor:pointer;
`
export const CarouselRightRoundBtn = styled(CarouselLeftRoundBtn)`
 background-color:${ (props)=>props.color ? (props)=>props.theme.themeColor: null};
 color:${props=>props.theme.color.lightest};
`


export const CarouselBtnLeft = styled.button`
color:${props=>props.theme.color.dark};
background-color: ${props=>props.theme.backgroundColor.lightest};
font-family: ${props=>props.theme.fontFamily.fontawesome};
font-size: ${props=>props.theme.fontSize.h4};
width: 55px;
height: 80px;
position:absolute;
top:50%;
left: 0;
display: block;
overflow:hidden;
cursor:pointer;
border:none;
border-radius:0 3px 3px 0;
outline:none;
transition: all 0.2s ease-in-out;
z-index: 2;
&::after{
    content: "\f104";
}
&:hover{
    background-color:${props=>props.theme.themeColor};
    color:${props=>props.theme.color.lightest};
}
@media (min-width: 250px) and (max-width: 768px) {
    top:75%;
`

export const CenterDiv= styled.div `
text-align:center;
transition:all .4s;
display:${(props)=>props.display ? 'block' : 'none'};
position:relative;
padding: 50px;
h1{
    font-size: 100px;
    font-family: ${props=>props.theme.fontFamily.lato};
    color: ${props=>props.theme.color.lightest};
    position: absolute;
    font-weight: ${props=>props.theme.fontWeight.light};
    opacity: 0.25;
    line-height: 112px;
    margin-top: -37px;
    margin-left: -35px;
    margin-bottom:0;
    top:0;
    z-index:-1;
}
@media (min-width: 250px) and (max-width: 768px) {
   h1{
    font-size: 50px;
    line-height: 75px;
   }
   
  }

`
export const CarouselBtn= styled.button `
transition: none 0s ease 0s;
line-height: 26px;
border-width: 0px;
margin: 36px 6px 0px 0px;
padding: 12px 27px;
letter-spacing: 0px;
font-weight:${props=>props.theme.fontWeight.bold};
font-size: ${props=>props.theme.fontSize.medium};
font-family: ${props=>props.theme.fontFamily.montserrat};
border-radius: 28px;
color: ${props=>props.theme.color.lightest};
background-color: ${props=>props.theme.themeColor};
cursor: ${props=>props.theme.cursor.pointer};
outline: none;
z-index:10;
transition: all .5s;
&:hover{
    color:${props=>props.theme.color.dark};
    background-color:${props=>props.theme.backgroundColor.lightest};
}
@media (min-width: 250px) and (max-width: 768px) {
    font-size: 10px;
    padding: 6px 13px;
   
  }
`


export const CarouselBtnRight = styled(CarouselBtnLeft)`
border-radius:3px 0 0 3px;
left:auto;
right:0;
&::after{
    content: "\f105";
}

`