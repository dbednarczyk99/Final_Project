import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './OrderForm.module.scss';

type OrderFormProps = {
  onSubmit: (formData: {
    name: string;
    address: string;
    email: string;
    phone: string;
  }) => void;
  onBack: () => void;
};

function OrderForm({ onSubmit, onBack }: OrderFormProps) {
  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value) return 'To pole jest wymagane';
        if (value.length < 5) return 'To pole musi zawierać minimum 5 znaków';
        return '';
      case 'address':
        if (!value) return 'To pole jest wymagane';
        if (value.length < 5) return 'To pole musi zawierać minimum 5 znaków';
        return '';
      case 'email':
        if (!value) return 'To pole jest wymagane';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Niepoprawny email';
        return '';
      case 'phone':
        if (!value) return 'To pole jest wymagane';
        const phoneRegex = /^\d{9}$/;
        if (!phoneRegex.test(value)) return 'Numer telefonu musi mieć 9 cyfr';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setForm({ ...form, phone: digitsOnly });
      setErrors({ ...errors, phone: validateField(name, digitsOnly) });
      return;
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentErrors = {
      name: validateField('name', form.name),
      address: validateField('address', form.address),
      email: validateField('email', form.email),
      phone: validateField('phone', form.phone),
    };
    setErrors(currentErrors);

    if (Object.values(currentErrors).some(err => err !== '')) return;

    onSubmit(form);
  };

  return (
    <Form className="mb-4 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <Form.Group className={`mb-3 ${styles.formInput}`} controlId="formName">
        <Form.Label>Imię i nazwisko</Form.Label>
        <Form.Control
          name="name"
          value={form.name}
          type="text"
          onChange={handleChange}
          placeholder="Wpisz swoje imię i nazwisko"
        />
        {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
      </Form.Group>

      <Form.Group className={`mb-3 ${styles.formInput}`} controlId="formAddress">
        <Form.Label>Adres</Form.Label>
        <Form.Control
          name="address"
          value={form.address}
          type="text"
          onChange={handleChange}
          placeholder="Wpisz swój adres"
        />
        {errors.address && <Form.Text className="text-danger">{errors.address}</Form.Text>}
      </Form.Group>

      <Form.Group className={`mb-3 ${styles.formInput}`} controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          value={form.email}
          type="email"
          onChange={handleChange}
          placeholder="Wpisz swój email"
        />
        {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
      </Form.Group>

      <Form.Group className={`mb-3 ${styles.formInput}`} controlId="formPhone">
        <Form.Label>Telefon</Form.Label>
        <Form.Control
          name="phone"
          value={form.phone}
          type="tel"
          onChange={handleChange}
          placeholder="Wpisz swój numer telefonu"
        />
        {errors.phone && <Form.Text className="text-danger">{errors.phone}</Form.Text>}
      </Form.Group>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between mt-5 w-100">
        <button className={`mt-2 ${styles.btn} ${styles.back}`} type="button" onClick={onBack}>
          <FontAwesomeIcon icon={faCartShopping} className="me-2" />
          Powrót do koszyka
        </button>

        <button className={`mt-2 ${styles.btn} ${styles.forw}`} type="submit">
          <FontAwesomeIcon icon={faWallet} className="me-2" />
          Złóż zamówienie
        </button>
      </div>
    </Form>
  );
};

export default OrderForm;
