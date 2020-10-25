import styled, {css} from "styled-components";

export const DropDown = styled.div`
position: relative;
display: inline-block;
@media (min-width: 250px) and (max-width: 768px) {
    position:static;
  }
`

export const MenuDropDownOneContent = styled.div`
display:none;
flex-direction:row;
position: absolute;
background-color:${props=>props.theme.backgroundColor.lightBlack};
min-width: 160px;
z-index: 1;
transition: all 0.2s ease-in-out;
z-index:20;
&:hover{
  display:flex;
}
@media (min-width: 250px) and (max-width: 768px) {
    display:flex;
    position:static;
  }


}
`
export const MenuDropDownMultipleContent = styled(MenuDropDownOneContent)`
padding:30px 0px 20px 0px;
background-color:${props=>props.theme.backgroundColor.lightBlack};
transform:translateX(-40%);
z-index:10;
@media (min-width: 250px) and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    transform:translateX(0);
  }

`

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
export const MenuDropDownLink1 = styled.button`
display: block;
min-width: 200px;
color: ${props=>props.theme.color.lightGrey};
outline:none;
font-size:${props=>props.theme.fontSize.secondary};
line-height: 22px;
padding: 9px 22px;
-webkit-transition: all 0.15s ease-in-out;
transition: all 0.15s ease-in-out;
cursor:pointer;
border:none;
background-color:${props=>props.theme.backgroundColor.transparent};
text-align:left;
font-family:${props=>props.theme.fontFamily.montserrat};

&:hover{
    background-color: ${(props)=>props.theme.themeColor};
    color: ${props=>props.theme.color.lightest};
    text-decoration:none;
} 
`

export const MenuDropDownLink2 = styled(MenuDropDownLink1)`
min-width: 213px;
padding: 8px 22px 8px 34px;
border-right: 1px solid lightgrey;
&:first-child{
    font-weight: ${props=>props.theme.fontWeight.bold};
    color:${props=>props.theme.color.lightest};
}
@media (min-width: 250px) and (max-width: 768px) {
    border-right:none;
  }
`

export const MobileMenuOption = styled.div`
width:${(props)=>props.width};
border-radius:5px;
padding: 15px;
display:none;
margin:10px 0 26px 0;
transform: translateX(${(props)=>props.translate});
font-family: ${props=>props.theme.fontFamily.montserrat};
font-weight:  ${props=>props.theme.fontWeight.bold};
font-size: ${props=>props.theme.fontSize.secondary};
background-color:${(props)=>props.theme.themeColor};
color:${props=>props.theme.color.lightest};
transition: all .4s;
@media (min-width: 250px) and (max-width: 768px) {
  display:block;
 
}

`

