import styled from 'styled-components';

export const Container = styled.div`
margin-right: auto;
margin-left: auto;
@media (min-width: 250px) and (max-width: 768px) {
  width:95%;
}
@media (min-width: 769px) and (max-width: 1239px) {
    width:970px;
  }
@media (min-width: 1240px) {
    width:1210px;
  }
  `

  export const CategoryTittle = styled.h3`
  margin: 58px 0 48px 0;
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight:100;
  text-align:center;
  `
  export const AllProductsWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;
  margin:0 20px;
  width:100%;

  `

  export const BlackScreen = styled.div`
width:100%;
height:100%;
position:relative;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0,.2);
font-family: 'Montserrat';
font-weight:600;
z-index:1;
h2{
    z-index: 6;
    color: rgb(255, 255, 255);
    letter-spacing: -1px;
    font-weight: 700;
    transition: none 0s ease 0s;
    line-height: 66px;
    border-width: 0px;
    margin: 0px 0px 5px;
    padding: 0px;
    font-size: 66px;
}
@media (min-width: 250px) and (max-width: 768px) {
    h2{
     font-size: 40px;
    }
    
   }
`
export const ColHeading= styled.h3`
    font-family:'Montserrat',sans-serif;
    font-weight:100;
    border-bottom: 1px solid #e0e0e0;
    font-size: 22px;
    margin: 0 0 30px 0;
    padding-bottom: 30px;
    i{
      color:${props=>props.theme.themeColor};
      padding-right:15px;
    }

 ` 
export const WidgetCol= styled.div`
width:33.33%;
padding:35px 10px;
box-sizing:border-box;
@media (min-width: 250px) and (max-width: 768px) {
    width:100%;
  }
`

export const Wallpaper=styled.div `
display:flex;
justify-content:center;
align-items:center;
background-image: url(${(props)=>props.img});
background-position: 50% -200px;
position: relative;
background-size: 100%;
background-position: 50% 50%;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
height:350px;
width:100%;
margin-bottom:4.5em;
`
