import { CartItem } from '../types';

const CART_KEY = 'cart';

export const saveCartToLocalStorage = (cart: CartItem[]) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (err) {
    console.error('Błąd zapisu koszyka do localStorage', err);
  }
};

export const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Błąd odczytu koszyka z localStorage', err);
    return [];
  }
};

export const clearCartFromLocalStorage = () => {
  try {
    localStorage.removeItem(CART_KEY);
  } catch (err) {
    console.error('Błąd usuwania koszyka z localStorage', err);
  }
};
