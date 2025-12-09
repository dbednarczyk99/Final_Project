import React, { useState } from 'react';
import { getCart, clearCart } from '../../../redux/cartRedux';
import { createOrder } from '../../../redux/ordersRedux';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { CartItem } from '../../../types';
import { Container, Col, Row, Spinner, Modal } from 'react-bootstrap';
import OrderForm from '../../common/OrderForm/OrderForm';
import { useNavigate } from 'react-router-dom';
import { Order } from '../../../types';
import styles from './OrderSummaryPage.module.scss'

function OrderSummaryPage () {
  const cart: CartItem[] = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);


  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusModalContent, setStatusModalContent] = useState<{
    type: 'success' | 'error' | 'loading';
    title: string;
    message: string;
    orderId?: string;
  } | null>(null);
  const [pendingOrderForm, setPendingOrderForm] = useState<{ name: string; address: string; email: string; phone: string } | null>(null);

  const handleOrderSubmit = (form: { name: string; address: string; email: string; phone: string }) => {
    if (cart.length === 0) {
      setStatusModalContent({
        type: 'error',
        title: 'Koszyk pusty',
        message: 'Twój koszyk jest pusty!'
      });
      setShowStatusModal(true);
      return;
    }

    setPendingOrderForm(form);
    setShowConfirmModal(true);
  };

  const confirmOrder = async () => {
  if (!pendingOrderForm) return;
  setShowConfirmModal(false);

  setStatusModalContent({
    type: 'loading',
    title: 'Trwa przetwarzanie',
    message: 'Twoje zamówienie jest przetwarzane...'
  });
  setShowStatusModal(true);

  try {
    const order = await (dispatch(
      createOrder({
        customerName: pendingOrderForm.name,
        customerPhone: pendingOrderForm.phone,
        customerEmail: pendingOrderForm.email,
        customerAddress: pendingOrderForm.address,
        orderItems: cart.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      })
    ) as Promise<Order>);

    dispatch(clearCart());
    console.log("order:", order);
    setStatusModalContent({
      type: 'success',
      title: 'Sukces!',
      message: `Zamówienie zostało złożone pomyślnie! Szczegóły zostały wysłane na podany adres email.`,
      orderId: order.id,
    });
  } catch (err) {
    console.error(err);
    setStatusModalContent({
      type: 'error',
      title: 'Błąd',
      message: 'Wystąpił problem z serwerem. Spróbuj ponownie.'
    });
  }

};


  const closeStatusModal = () => {
    setShowStatusModal(false);
    if (statusModalContent?.type === 'success') {
      navigate('/');
    }
  };

  return (
    <>
      <Container className="mt-4 mb-4">
        <h2>Podsumowanie zamówienia</h2>

        {cart.length === 0 ? (
          <p>Twój koszyk jest pusty.</p>
        ) : (
          <>
            {cart.map(({ product, quantity }) => (
              <Row key={product.id} className="align-items-center mb-3">
                <Col md={4}><h5>{product.name}</h5></Col>
                <Col md={3}>Cena: {product.price} zł</Col>
                <Col md={2}>Ilość: {quantity}</Col>
                <Col md={3}>Razem: {product.price * quantity} zł</Col>
              </Row>
            ))}

            <h4 className="text-end">Łączna kwota: {total} zł</h4>
            <hr />

            <h2>Dane do wysyłki</h2>
            <OrderForm
              onSubmit={handleOrderSubmit}
              onBack={() => window.history.back()}
            />
          </>
        )}
      </Container>

      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Potwierdź zamówienie</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.confirmation}>
          <h5>Produkty:</h5>
          {cart.map(item => (
            <p key={item.product.id}>{item.product.name} x {item.quantity} = {item.product.price * item.quantity} zł</p>
          ))}
          <p><strong>Łączna kwota: {total} zł</strong></p>
          <hr/>
          <h5>Dane do wysyłki:</h5>
          <p>Imię i nazwisko: {pendingOrderForm?.name}</p>
          <p>Adres: {pendingOrderForm?.address}</p>
          <p>Email: {pendingOrderForm?.email}</p>
          <p>Telefon: {pendingOrderForm?.phone}</p>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <button className={`mt-2 ${styles.btn} ${styles.back}`} onClick={() => setShowConfirmModal(false)}>Wróć do podsumowania</button>
          <button className={`mt-2 ${styles.btn} ${styles.forw}`} onClick={confirmOrder}>Potwierdź</button>
        </Modal.Footer>
      </Modal>

      <Modal show={showStatusModal} onHide={closeStatusModal} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{statusModalContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {statusModalContent?.type === 'loading' && <Spinner animation="border" role="status" className="mb-3" />}
          <p>{statusModalContent?.message}</p>
          {statusModalContent?.type === 'success' && statusModalContent?.orderId && (
            <p><strong>Numer ID zamówienia: {statusModalContent.orderId}</strong></p>
          )}
        </Modal.Body>
        {statusModalContent?.type !== 'loading' && (
          <Modal.Footer className='d-flex justify-content-center'>
            <button className={`mt-2 ${styles.btn} ${styles.forw}`} onClick={closeStatusModal}>
              Powrót na stronę główną
            </button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default OrderSummaryPage;
