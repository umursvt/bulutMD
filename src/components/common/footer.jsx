import React from 'react';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import { Container } from 'react-bootstrap';
function Footer() {
  return (
    <div className="bg-dark text-white py-3">
      <Container>
        <div className="d-flex justify-content-start">
          <span className="ms-lg-1">Anasayfa</span>
          <span className="ms-lg-1">|</span>
          <span className="ms-lg-1">Kullanıcı Sözleşmesi</span>
          <span className="ms-lg-1">|</span>
          <span className="ms-lg-1">Gizlilik Sözleşmesi</span>
        </div>
      </Container>
      <Container>
        <div className="">
          <div className=" mt-3 ">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" className=" ms-lg-4 ms-md-3   " />
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
}

export default Footer;
