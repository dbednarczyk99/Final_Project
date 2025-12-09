import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className="text-center py-3 mt-2">
        <Row>
          <Col lg={4} md={6} xs={12} className={`d-flex flex-column ${styles.socials}`}>
          <h5>Social media</h5>
            <a href='https://www.facebook.pl'> <FontAwesomeIcon icon={faFacebook}/> Facebook</a>
            <a href='https://www.instagram.pl'> <FontAwesomeIcon icon={faInstagram}/> Instagram</a>
            <a href='https://www.tiktok.pl'> <FontAwesomeIcon icon={faTiktok}/> TikTok</a>
          </Col>
          <Col md={{span: 12, order: 3}} lg={{order: 2, span: 4}} xs={{order: 3}} className={`d-flex align-items-end justify-content-center mt-3`}>
            Copyright &copy; BagPack 2025
          </Col>
          <Col lg={{span: 4, order: 3}} md={{span: 6, order: 2}} xs={{order: 2, span: 12}} className={`d-flex flex-column ${styles.contact}`}>
            <h5>Kontakt</h5>
            <a href='mailto:kontakt@bagpack.pl'>kontakt@bagpack.pl</a>            
            <a href='tel:+48123456789'>+48 12 345 67 89</a>
            <p>BagPack Sp. z o.o.</p>
            <p>ul. Plecakowa 12</p>
            <p>00-123 Warszawa, Polska</p>
          </Col>
        </Row>
      </Container>      
    </div>
  );
};

export default Footer;
