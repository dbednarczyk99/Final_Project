import React, { useState } from 'react';
import { Product } from '../../../types';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../redux/hooks';
import { addToCart } from '../../../redux/cartRedux';
import styles from './ProductCard.module.scss';
import QtyInput from '../QtyInput/QtyInput';

function ProductCard (product: Product) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <Col md={6} lg={4} className="mb-4">
      <Card>

        <Link to={`/product/${product.id}`}>
          <Card.Img
            variant="top"
            src={product.mainImageUrl}
            alt={product.name}
            className={styles.productImage}
          />
        </Link>

        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardFont}>{product.name}</Card.Title>
          <Card.Text className={styles.cardFont}>Cena: {product.price} zł</Card.Text>

          <div className="mb-3 d-flex flex-row align-items-center justify-content-between">
            <Link to={`/product/${product.id}`}>
              <button className={styles.btn}>Zobacz produkt</button>
            </Link>

            <div className="d-flex align-items-center">
              <button onClick={handleAddToCart} className={styles.addCartBtn}>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </button>

              <QtyInput quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}


export default ProductCard;