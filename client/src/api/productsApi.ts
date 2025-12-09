import { API_URL } from '../config';
import { Product } from '../types';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products/`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};