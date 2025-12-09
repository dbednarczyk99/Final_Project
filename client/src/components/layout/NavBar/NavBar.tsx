import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './NavBar.module.scss';
import { useAppSelector } from '../../../redux/hooks';
import { getCart } from '../../../redux/cartRedux';


function NavBar() {
  const cart = useAppSelector(getCart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>

        <Navbar.Brand as={NavLink} to="/">
          <img
            src={`/images/logo/BackPack_logo.png`}
            className={styles.logo}
            alt='logo'
          />
        </Navbar.Brand>
        
        <Nav.Link as={NavLink} to="/cart" className={styles.cartWrapper}>
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Koszyk
          </button>

          {cartCount > 0 && (
            <span className={styles.cartBadge}>
              {cartCount}
            </span>
          )}
        </Nav.Link>

      </Container>
    </Navbar>
  );
};

export default NavBar;
