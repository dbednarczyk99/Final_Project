import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Product } from '../../../types';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductPage.module.scss';
import QtyInput from '../../common/QtyInput/QtyInput';

function ProductPage () {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const product: Product | undefined = useAppSelector(state => getProductById(state, id!));
  console.log(product);

  if (!product) return <Container className="mt-4"><h2>Ładowanie...</h2></Container>;

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col md={6}>
          <Carousel className={styles.carousel} interval={null}>
            {product.additionalImagesUrl?.map((img, index) => (
              <Carousel.Item key={img.id}>
                <img
                  className={`d-block ${styles.image}`}
                  src={img.url}
                  alt={`${product.name} ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col md={6} className='mt-3 mt-md-0'>
          <h2>{product.name}</h2>
          <p>{product.shortDescription}</p>
          

          <Row className="d-flex align-items-center justify-content-between">
            <Col sm={12} lg={5}>
              <h4>Cena: {product.price} zł</h4>
            </Col>
            
            <Col sm={12} lg={7} className="d-flex mt-3 mt-lg-0 justify-content-center justify-content-lg-end">
              <button className={styles.addCartBtn} onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartArrowDown} /> Dodaj do koszyka
              </button>
              <QtyInput quantity={quantity} setQuantity={setQuantity} />
            </Col>
          </Row>

          <hr/>

          <h3>Opis produktu</h3>
          <p>{product.longDescription}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
