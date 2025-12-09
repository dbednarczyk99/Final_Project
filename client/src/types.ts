// products
export type Product = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  mainImageUrl: string;
  additionalImagesUrl?: { id: string; url: string }[];
  price: number;
};

// cart
export type CartItem = {
  product: Product;
  quantity: number;
  note?: string;
};

// order
export type CreateOrderItemDTO = {
  productId: string;
  quantity: number;
};

export type CreateOrderDTO = {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  orderItems: CreateOrderItemDTO[];
};

export type OrderItem = {
  productId: string;
  quantity: number;
};

export type Order = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  orderItems: OrderItem[];
  total: number;
  createdAt: string;
};
