import styled from 'styled-components';

export const FooterFluid = styled.div`
background-color:${props=>props.theme.backgroundColor.footer};
padding: 65px 0 0 0;
color: ${props=>props.theme.color.footer};
`
export const FooterBox = styled.div`
width:${props=>props.theme.width.lessThanFull };
flex-wrap:wrap;
display:flex;
margin:auto;
h3{ 
    font-family:${props=>props.theme.fontFamily.montserrat};
    text-transform: uppercase;
    letter-spacing:${props=>props.theme.letterSpacing.normal};
    color: ${props=>props.theme.color.lightest};
    font-size:${props=>props.theme.fontSize.secondary};
    margin-bottom: 20px;
    font-weight:${props=>props.theme.fontWeight.bold};
}
span{
    	
    color:${props=>props.theme.color.lightest};
    font-weight: ${props=>props.theme.fontWeight.bold};
    font-family:${props=>props.theme.fontFamily.lato};Lato;
}
`
export const FacebookBtn = styled.button` 
padding: 15px 30px;
position: relative;
background-color:${props=>props.theme.backgroundColor.facebookBlue};
top: 4px;
display:block;
color:${props=>props.theme.color.lightest};
    text-transform: uppercase;
    position: relative;
    font-size:${props=>props.theme.fontSize.tertiary}; 
    font-weight: ${props=>props.theme.fontWeight.bold};
    transition: all 0.2s ease-in-out;
    cursor:${props=>props.theme.cursor.pointer};
    border-radius: 50px;
    letter-spacing: 1px;
    margin-right: 6px;
    margin-bottom:20px;
    margin-top: 30px;
    outline: none;
    border: none;
    font-family:${props=>props.theme.fontFamily.montserrat} ;
    display: flex;
    align-items: center;
    i{
        font-size:${props=>props.theme.fontSize.primary};
        padding-right:8px;
    }
    &:hover{
        color:${props=>props.theme.color.dark};
        background-color:${props=>props.theme.backgroundColor.lightest};

    }

`


export const FooterCopyRights = styled.div`
    color: ${props=>props.theme.color.lightGrey};
    border-top: 1px solid #333;
    margin-top: 65px;
    text-align: center;
    padding: 40px 0;
    display: inline-block;
    width: 100%;
`
export const FooterLink = styled.li`
list-style:none;
margin: 0 0 9px 16px;
line-height: 21px;
cursor:${props=>props.theme.cursor.pointer};

&::before{
    font-family:${props=>props.theme.fontFamily.fontawesome}; 
    content: "\f105";
    font-size:${props=>props.theme.fontSize.primaryPlusPlus}; 
    padding: 0 7px 0 0;
}
&:hover{
    color:${props=>props.theme.color.lightest};
}
`

export const FooterLinks = styled.div`
    margin: 0 0 15px 0;
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    float: left;
`