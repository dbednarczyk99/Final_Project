import { API_URL } from "../config";
import { CreateOrderDTO } from "../types";

export const sendOrder = async (orderData: CreateOrderDTO) => {
  const response = await fetch(`${API_URL}/orders/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to create order');
  }
  return response.json();
};