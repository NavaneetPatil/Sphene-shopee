import styled from "styled-components";

export const ColorSwitchWrapper= styled.div `

display:flex;
flex-direction:column;
float:left;
width:210px;
position: fixed;
color:${props=>props.theme.color.lightest}; 
z-index:10;
left: -210px;
top: 87px;
transition: all .5s;
transform: ${props => props.pull ? 'translateX(210px)' : null };
h2{
    font-family:${props=>props.theme.fontFamily.montserrat};
    margin-bottom:0;
    text-align:center;
    background:${props=>props.theme.lightBlack}; 
    color: ${props=>props.theme.color.lightest};
    font-weight: ${props=>props.theme.fontWeight.bold};
    font-size:${props=>props.theme.fontSize.medium};
    line-height: ${props=>props.theme.lineHeight.h2plus};
    letter-spacing:${props=>props.theme.letterSpacing.normal};
    margin-top: 0;
    margin-left: 25px;
    text-transform: uppercase;
}
@media (min-width: 250px) and (max-width: 768px) {
    top:195px;
  }
`
export const ShadesBox=styled.div `
display:flex;
padding:17px 20px;
flex-wrap:wrap;
box-sizing:border-box;
background-color:${props=>props.theme.backgroundColor.lightBlack};#282828;
`
export const Shade=styled.button `
    display: block;
    width: 17px;
    height: 17px;
    cursor:${props=>props.theme.cursor.pointer};
    border-radius: 3px;
    outline:none;
    border:none;
    margin:2px;
    background-color:${props=>props.color};
`
export const TittleWrapper=styled.div `
display:flex;
flex-direction:row;
align-items:center;
width:250px;
justify-content:space-between;
background-color:${props=>props.theme.backgroundColor.lightBlack};
i{
    margin: 14px;
    cursor:${props=>props.theme.cursor.pointer};
}
`
