import { Order, CartItem, CreateOrderDTO } from '../types';
import { RootState } from './store';
import { API_URL } from '../config';

/* selectors */
export const getLastOrder = (state: RootState): Order | null => state.orders;

/* actions */
const SET_ORDER = 'orders/SET_ORDER';

interface SetOrderAction {
  type: typeof SET_ORDER;
  payload: Order;
}

export type OrdersAction = SetOrderAction;

/* action creators */
export const setOrder = (payload: Order): SetOrderAction => ({ type: SET_ORDER, payload });

/* thunks */
export const createOrder =
  (data: CreateOrderDTO) =>
  async (dispatch: any, getState: any) => {

    const cart = getState().cart;
    const total = cart.reduce(
      (sum: number, item: CartItem) =>
        sum + item.product.price * item.quantity,
      0
    );

    const payload = {
      ...data,
      total,
    };

    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const responseData = await res.json();

    const order: Order = {
      id: responseData.orderId,
      ...data,
      total,
      createdAt: new Date().toISOString(),
    };

    dispatch(setOrder(order));
    return order;
};


/* reducer */
const ordersReducer = (state: Order | null = null, action: OrdersAction): Order | null => {
  switch (action.type) {
    case SET_ORDER:
      return action.payload;
    default:
      return state;
  }
};

export default ordersReducer;
