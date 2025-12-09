import { Product } from '../types';
import { API_URL } from '../config';
import { RootState } from './store';

/* selectors */
export const getAllProducts = (state: RootState): Product[] => state.products;
export const getProductById = (state: RootState, id: string) =>
  state.products.find(p => p.id === id);

/* actions */
const GET_PRODUCTS = 'products/GET_PRODUCTS';

interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}

export type ProductsAction = GetProductsAction;

/* action creators */
export const getProducts = (payload: Product[]): GetProductsAction => ({
  type: GET_PRODUCTS,
  payload,
});

/* thunks */
export const fetchProducts = () => async (dispatch: any) => {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();
  dispatch(getProducts(data));
};

/* reducer */
const productsReducer = (state: Product[] = [], action: ProductsAction): Product[] => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default productsReducer;
