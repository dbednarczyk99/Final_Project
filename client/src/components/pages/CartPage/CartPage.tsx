import React from 'react';
import { Link } from 'react-router-dom';
import { getCart, removeFromCart, updateQuantity } from '../../../redux/cartRedux';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { CartItem } from '../../../types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import QtyInput from '../../common/QtyInput/QtyInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faTrash, faTruck } from '@fortawesome/free-solid-svg-icons';
import styles from './CartPage.module.scss';

function CartPage () {
  const cart: CartItem[] = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity(productId, quantity));
  };

  return (
    <Container className="mt-4 mb-4">
      <h2>Koszyk</h2>
      <hr/>
      {cart.length === 0 ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <>
          {cart.map(({ product, quantity }) => (
            <Row key={product.id} className="align-items-center mb-3">
              <Col lg={4} sm={8} order={1} >
                <h5>{product.name}</h5>
              </Col>
              <Col sm={{span: 4, order: 3}} lg={2} >Cena: {product.price} zł</Col>
              <Col sm={{span: 4, order: 4}} lg={2} className='d-flex align-items-center'>
                <p className='mb-0 me-2'>Ilość:</p>
                <QtyInput quantity={quantity} setQuantity={(qty) => handleQuantityChange(product.id, qty)} />
              </Col>
              <Col sm={{span: 4, order: 5}} lg={2}>Razem: {product.price * quantity} zł</Col>
              <Col lg={{span: 2, order: 5}} sm={{span: 4, order: 2}} className='d-flex justify-content-end' >
                <Button variant="danger" onClick={() => dispatch(removeFromCart(product.id))}>
                  <FontAwesomeIcon icon={ faTrash } /> Usuń
                </Button>
              </Col>
            </Row>
          ))}
          <hr />
          <h4 className='text-end'>Łączna kwota: {total} zł</h4>
          <div className='d-flex flex-column flex-md-row align-items-center justify-content-md-between mt-5'>
            <Link to="/">
              <button className={`mt-2 ${styles.btn} ${styles.back}`}>
                <FontAwesomeIcon icon={faStore} className="me-2" />
                Powrót do zakupów
              </button>
            </Link>
            <Link to="/order-summary">
              <button className={`mt-2 ${styles.btn} ${styles.forw}`}>
                <FontAwesomeIcon icon={faTruck} className="me-2" />
                Szczegóły dostawy
              </button>
            </Link>
          </div>
          
        </>
      )}
      
    </Container>
  );
};

export default CartPage;
