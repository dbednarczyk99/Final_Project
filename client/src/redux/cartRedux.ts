import { CartItem } from '../types';
import { RootState } from './store';
import { saveCartToLocalStorage, loadCartFromLocalStorage, clearCartFromLocalStorage } from '../utils/localStorage';

/* selectors */
export const getCart = (state: RootState): CartItem[] => state.cart;

/* actions */
const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
const CLEAR_CART = 'cart/CLEAR_CART';
const UPDATE_QUANTITY = 'cart/UPDATE_QUANTITY';

interface AddToCartAction { type: typeof ADD_TO_CART; payload: CartItem; }
interface RemoveFromCartAction { type: typeof REMOVE_FROM_CART; payload: string; }
interface ClearCartAction { type: typeof CLEAR_CART; }
interface UpdateQuantityAction { type: typeof UPDATE_QUANTITY; payload: { productId: string; quantity: number }; }

export type CartAction = AddToCartAction | RemoveFromCartAction | ClearCartAction | UpdateQuantityAction;

/* action creators */
export const addToCart = (payload: CartItem): AddToCartAction => ({ type: ADD_TO_CART, payload });
export const removeFromCart = (payload: string): RemoveFromCartAction => ({ type: REMOVE_FROM_CART, payload });
export const clearCart = (): ClearCartAction => ({ type: CLEAR_CART });
export const updateQuantity = (productId: string, quantity: number): UpdateQuantityAction => ({ type: UPDATE_QUANTITY, payload: { productId, quantity }});

/* reducer */
const initialState: CartItem[] = loadCartFromLocalStorage();

const cartReducer = (state: CartItem[] = initialState, action: CartAction): CartItem[] => {
  let newState: CartItem[];
  switch (action.type) {
    case ADD_TO_CART: {
      const existing = state.find(item => item.product.id === action.payload.product.id);
      if (existing) {
        newState = state.map(item =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newState = [...state, action.payload];
      }
      saveCartToLocalStorage(newState);
      return newState;
    }
    case REMOVE_FROM_CART:
      newState = state.filter(item => item.product.id !== action.payload);
      saveCartToLocalStorage(newState);
      return newState;
    case CLEAR_CART:
      clearCartFromLocalStorage();
      return [];
    case UPDATE_QUANTITY:
      newState = state.map(item =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      saveCartToLocalStorage(newState);
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
