import styled, {css} from "styled-components";



export const FullNav = styled.div`
position:sticky;
background-color:${props=>props.theme.backgroundColor.lightest};
top:0;
z-index:100;
@media (min-width: 250px) and (max-width: 768px) {
  position:static;
}
`
export const NavButtonBlock = styled.div`
@media (min-width: 250px) and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    left:0;
    top:0px;
    background-color:${props=>props.theme.backgroundColor.lightest};
    overflow-x: hidden;
    transition: 0.5s;
    width:${(props)=>props.width};
    height: 100%;
    position: fixed;
    z-index:20;

  }

`

export const NavBox = styled.div`
display: flex;
background-color:${props=>props.theme.backgroundColor.lightest};
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: auto;
width:85%;
h2{
    font-family: ${props=>props.theme.fontFamily.montserrat};
    font-weight: ${props=>props.theme.fontWeight.bold};
    font-size:  ${props=>props.theme.fontSize.h3small};
    color:${(props)=>props.theme.themeColor};
}
@media (min-width: 250px) and (max-width: 768px) {
  flex-direction:column;
justify-content:center;
}
`


export const MenuDropButton = styled.button` 
display: inline-block;
text-transform: uppercase;
letter-spacing: 1px;
border-bottom: none;
margin-right: 5px;
padding: 30px 10px;
color: ${props=>props.theme.color.dark};
font-family: ${props=>props.theme.fontFamily.montserrat};
font-size:${props=>props.theme.fontSize.medium};
font-weight: ${props=>props.theme.fontWeight.bold};
border:none;
outline:none;
background-color: ${props=>props.theme.backgroundColor.transparent};
cursor:pointer;
border-bottom: 2px solid transparent;
transition: all 0.2s ease-in-out;
&:hover{
    border-bottom: 2px solid ${(props)=>props.theme.themeColor};
}
&:hover + div{
    display:flex;
}
@media (min-width: 250px) and (max-width: 768px) {
  text-align:start;
  padding-left:25px;
}
`


export const HambergClose = styled(MenuDropButton)`
display:none ;
@media (min-width: 250px) and (max-width: 768px) {
  display:block; 
}
`


export const MobileMenuOption = styled.div`
position: absolute;
left: 0;
top: 0;
margin: 24px;
display:none;
font-weight:  ${props=>props.theme.fontWeight.bold};
font-size: ${props=>props.theme.fontSize.h4};
color:${props=>props.theme.themeColor};
transition: all .4s;
@media (min-width: 250px) and (max-width: 768px) {
  display:block;
 
}

`

