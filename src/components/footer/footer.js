import React from 'react';
import '../../styles/customStyles.css';
import { FooterFluid, FooterBox, FooterCopyRights, FooterLink, FooterLinks, FacebookBtn } from './styles';



const Footer = () => {
  return (
    <>
      <FooterFluid>
        <FooterBox>
          <div className="col-5">
            <h3>ABOUT</h3>
        Morbi convallis bibendum urna ut viverra.
        Maecenas quis consequat libero, a feugiat
        eros. Nunc ut lacinia tortor morbi ultricies
         laoreet ullamcorper phasellus semper.
         <FacebookBtn><i className='fa fa-facebook-square'></i>LIKE US ON FACEBOOK</FacebookBtn>
          </div>
          <div className="col-4">
            <h3>HELPFUL LINKS</h3>
            <FooterLinks>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Press Releases</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Services</FooterLink>
              <FooterLink>Projects</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>In the News</FooterLink>
              <FooterLink>Our Blog</FooterLink>
              <FooterLink>Testimonials</FooterLink>
              <FooterLink>Contact</FooterLink>
            </FooterLinks>
          </div>
          <div className="col-3">
            <h3>CONTACT US</h3>
            <span>12345 Little Lonsdale St, Melbourne</span><br></br>
            Phone:<span>(123) 123-456</span><br></br>
            Fax:<span>(123) 123-456</span><br></br>
            E-Mail:<span>office@example.com</span>
          </div>
          <FooterCopyRights>
            © Copyright 2016 by <span>Sphene.</span> All Rights Reserved.
        </FooterCopyRights>
        </FooterBox>
      </FooterFluid>

    </>
  );
}
export default Footer
