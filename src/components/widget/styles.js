import styled from 'styled-components';

export const WidgetWrapper= styled.div`
display:flex;
flex-direction:row;
width:100%;
margin-top:30px;
a{
    color:${props=>props.theme.color.dark};
    font-size:${props=>props.theme.fontSize.primary}; 
    font-weight:${props=>props.theme.fontWeight.bold}; 
    font-family:${props=>props.theme.fontFamily.montserrat}; 
    cursor:${props=>props.theme.cursor.pointer};
    margin-botton:5px;
    &:hover{
        color:${props=>props.theme.color.blackScale8};
    }
}
img{
    height:95px;
    width:95px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    cursor:${props=>props.theme.cursor.pointer};
}

`

export const Price= styled.p`
    margin:0;
    color:${props=>props.theme.color.grey};
    font-size:${props=>props.theme.fontSize.primary}; 
`

export const DetailsBox= styled.div`
padding-left:22px;
display: flex;
flex-flow: column;
justify-content: center;
`
export const StarsWrapper= styled.div`
display: flex;
flex-flow: row;
margin-top: 5px;
color: ${props=>props.theme.color.gold};
letter-spacing: ${props=>props.theme.letterSpacing.medium};
`

