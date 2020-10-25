import styled from 'styled-components'

export const CardWrapper=styled.div `
display:flex;
flex-direction:row;
display: flex;
align-items: center;
margin:10px 10px;
i{
    font-size:${props=>props.theme.fontSize.h3};
}
`

export const DetailsWrapper=styled.div `
display:flex;
flex-direction:column;
padding: 5px 10px 5px 26px;
a{
    text-decoration:none;
    color: ${props=>props.theme.themeColor};
}
`