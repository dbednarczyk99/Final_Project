import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './QtyInput.module.scss';

type QtyInputProps = {
  quantity: number;
  setQuantity: (qty: number) => void;
};



function QtyInput ({ quantity, setQuantity }: QtyInputProps) {
  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  if (value === '') {
    setQuantity(1);
    return;
  }

  const number = Number(value);
  if (isNaN(number)) return;
  else if (number < 1) {
    setQuantity(1);
    return;
  }
  else if (number > 99) {
    setQuantity(99);
    return;
  }
  else setQuantity(number);
};
  return (
    <Form.Group className={styles.qty_input}>
      <Form.Control
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={handleChange}
      />
    </Form.Group>
  )
};

export default QtyInput;