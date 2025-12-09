import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Carousel interval={3000} fade>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.image}`}
            src="/images/header/header_1.jpg"
            alt="header 1"
          />
          <Carousel.Caption className={styles.caption}>
            <h2>Najlepsze plecaki</h2>
            <p>Do pracy, podróży i codziennych wyzwań</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.image}`}
            src="/images/header/header_2.jpg"
            alt="header 2"
          />
          <Carousel.Caption className={styles.caption}>
            <h2>Wyrusz w drogę</h2>
            <p>Plecaki stworzone do podróży</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.image}`}
            src="/images/header/header_3.jpg"
            alt="header 3"
          />
          <Carousel.Caption className={styles.caption}>
            <h2>Styl i funkcjonalność</h2>
            <p>Minimalistyczny design</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Header;
