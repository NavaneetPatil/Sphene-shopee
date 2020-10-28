import styled from 'styled-components';

export const CardWrapper=styled.div`
margin-left:15px;
margin-right:15px;
margin-bottom:30px;
display: flex;
flex-wrap:wrap;
background-color: #fff;
width: 240.25px;
position: relative;
min-height: 1px;
float: left;
cursor:pointer;
img{
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    width:100%;
    height:256px;
}
&:hover{

}
`

export const CardDescrip=styled.div`
    background-color: ${props=>props.theme.backgroundColor.lightest};
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.06);
    border-radius: 0 0 2px 2px;
    border-top: none;
    padding: 30px;
    position: relative;
    z-index: 11;
    display: block;
    text-align:center;
    width:100%;
    h4{
        margin:0;
    }
    p{
        margin-top:5px;
    }
 ` 
 export const Price=styled.p`
    text-decoration: ${ (props)=>props.strik ? 'line-through' : 'none'};
    display:inline-block;
 `
 export const Offerprice=styled.p`
 display:inline-block;
 display: inline-block;
 margin-left: 15px;
 background-color:${props=>props.theme.backgroundColor.offerPrice}; 
 &:before{
     content:'$';
 }
`


