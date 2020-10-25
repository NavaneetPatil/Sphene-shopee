import styled from 'styled-components';

export const RightWrapper=styled.div `
width:25%;
height:1000px;
input{
    width: 100%;
    padding: 20px 0px;
    border: 1px solid rgb(248, 248, 248);
    margin: 20px 0 50px 0px;
    border-radius: 3px;
    text-align: center;
    font-family: ${props=>props.theme.fontFamily.montserrat};
    font-size: ${props=>props.theme.fontSize.primary};
    color: ${props=>props.theme.color.grey};
}
h2{
    font-family:${props=>props.theme.fontFamily.montserrat};
    font-weight:${props=>props.theme.fontWeight.light};
}
@media (min-width: 250px) and (max-width: 768px) {
    width:100%;
   }
`
export const ProductCardBox=styled.div `
width:75%;
@media (min-width: 250px) and (max-width: 768px) {
 width:100%;
}
`

export const CollectionWrapper=styled.div `
display:flex;
flex-direction:row;
@media (min-width: 250px) and (max-width: 768px) {
    flex-direction:column;
   }
`
