export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Filters {
  category: string;
  minPrice: number;
}

export interface ProductsResponse {
  products: Product[];
}
