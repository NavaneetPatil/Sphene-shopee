import styled from 'styled-components';

export const CardBtn = styled.button`
    padding: 12px 30px;
    display: inline-block;
    margin: auto;
    opacity: 1;
    font-size:${props=>props.theme.fontSize.primaryPlus};
    font-family: ${props=>props.theme.fontFamily.montserrat};
    font-weight:${props=>props.theme.fontWeight.bold};
    color:${props=>props.theme.color.cardBtn};
    top: initial;
    bottom:40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props=>props.theme.backgroundColor.lightest};
    transition: all 0.3s;
    box-shadow: 1px 1px 3px rgba(136,136,136,.19);
    border-radius: 50px;
    backface-visibility: hidden;
    border:none;
    position:absolute;
    outline:none;
    cursor:${props=>props.theme.cursor.pointer};
    &:hover{
        background-color: ${props=>props.theme.backgroundColor.dark};
        color:${props=>props.theme.color.lightest};


    }

`

export const CardWrapper = styled.div`
 padding:5px;
 box-sizing:border-box;
 position:relative;
 height:fit-content;
 width:50%;
 overflow:hidden;
 @media (min-width: 250px) and (max-width: 768px) {
    width:100%;
  }
`
export const Img = styled.img`
max-width:100%;
transition: all .3s;
&:hover{
  transform:scale(1.1);
}
@media (min-width: 250px) and (max-width: 768px) {
  width:100%;
}
`
